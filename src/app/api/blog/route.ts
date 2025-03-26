// src/app/api/blog/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { blogPosts as blogPostsTable } from '@/schema/blog';
import { eq } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid'; // You'll need to install: npm install uuid @types/uuid

// GET - Retrieve all blog posts
export async function GET(request: NextRequest) {
  try {
    const db = getDb();
    const posts = await db.select().from(blogPostsTable);

    return NextResponse.json({
      status: 'success',
      data: posts,
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to fetch blog posts' },
      { status: 500 },
    );
  }
}

// POST - Create a new blog post
export async function POST(request: NextRequest) {
  try {
    const db = getDb();
    const body = await request.json();

    // Validate required fields
    const requiredFields = [
      'title',
      'slug',
      'excerpt',
      'date',
      'coverImage',
      'link',
    ];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { status: 'error', message: `Missing required field: ${field}` },
          { status: 400 },
        );
      }
    }

    // Generate ID if not provided
    const newPost = {
      id: body.id || uuidv4(),
      slug: body.slug,
      title: body.title,
      excerpt: body.excerpt,
      date: body.date,
      coverImage: body.coverImage,
      link: body.link,
    };

    await db.insert(blogPostsTable).values(newPost);

    return NextResponse.json(
      {
        status: 'success',
        message: 'Blog post created successfully',
        data: newPost,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to create blog post' },
      { status: 500 },
    );
  }
}
