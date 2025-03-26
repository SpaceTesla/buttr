// src/app/api/seed-blog/route.ts
import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { blogPosts as blogPostsTable } from '@/schema/blog';
import { blogPosts } from '@/data/blog-data';
import { sql } from 'drizzle-orm';

export async function POST(request: Request) {
  try {
    // Check for admin authentication
    // This is a basic implementation. In production, use proper authentication checks
    const { searchParams } = new URL(request.url);
    const key = searchParams.get('key');

    if (key !== process.env.ADMIN_API_KEY) {
      return NextResponse.json(
        { status: 'error', message: 'Unauthorized' },
        { status: 401 },
      );
    }

    const db = getDb();
    const body = await request.json();
    const mode = body.mode || 'upsert'; // 'clean', 'append', 'upsert'

    if (mode === 'clean') {
      // Delete all existing posts first
      await db.delete(blogPostsTable);
    }

    // Determine which posts to insert
    const postsToInsert = body.posts || blogPosts;

    // Insert posts
    for (const post of postsToInsert) {
      if (mode === 'upsert') {
        // Delete the specific post first if it exists (by id)
        await db.delete(blogPostsTable).where(sql`id = ${post.id}`);
      }

      // Insert the post
      await db.insert(blogPostsTable).values({
        id: post.id,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        date: post.date,
        coverImage: post.coverImage,
        link: post.link,
      });
    }

    return NextResponse.json({
      status: 'success',
      message: 'Blog data processed successfully',
      count: postsToInsert.length,
    });
  } catch (error) {
    console.error('Error processing blog data:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to process blog data' },
      { status: 500 },
    );
  }
}

// Simple GET endpoint for testing/basic seeding
export async function GET() {
  try {
    const db = getDb();

    // First check if posts already exist
    const existingPosts = await db.select().from(blogPostsTable);

    if (existingPosts.length > 0) {
      return NextResponse.json({
        status: 'info',
        message: 'Blog posts already exist in the database',
        count: existingPosts.length,
      });
    }

    // Insert all blog posts
    for (const post of blogPosts) {
      await db.insert(blogPostsTable).values({
        id: post.id,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        date: post.date,
        coverImage: post.coverImage,
        link: post.link,
      });
    }

    return NextResponse.json({
      status: 'success',
      message: 'Blog data seeded successfully',
      count: blogPosts.length,
    });
  } catch (error) {
    console.error('Error seeding blog data:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to seed blog data' },
      { status: 500 },
    );
  }
}
