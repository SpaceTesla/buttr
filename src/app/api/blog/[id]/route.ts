// src/app/api/blog/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { blogPosts as blogPostsTable } from '@/schema/blog';
import { eq } from 'drizzle-orm';

// GET - Retrieve a single blog post by ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const db = getDb();

    const [post] = await db
      .select()
      .from(blogPostsTable)
      .where(eq(blogPostsTable.id, id))
      .limit(1);

    if (!post) {
      return NextResponse.json(
        { status: 'error', message: 'Blog post not found' },
        { status: 404 },
      );
    }

    return NextResponse.json({
      status: 'success',
      data: post,
    });
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to fetch blog post' },
      { status: 500 },
    );
  }
}

// PUT - Update a blog post
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const db = getDb();
    const body = await request.json();

    // Check if post exists
    const [existingPost] = await db
      .select()
      .from(blogPostsTable)
      .where(eq(blogPostsTable.id, id))
      .limit(1);

    if (!existingPost) {
      return NextResponse.json(
        { status: 'error', message: 'Blog post not found' },
        { status: 404 },
      );
    }

    // Update post fields
    await db
      .update(blogPostsTable)
      .set({
        slug: body.slug || existingPost.slug,
        title: body.title || existingPost.title,
        excerpt: body.excerpt || existingPost.excerpt,
        date: body.date || existingPost.date,
        coverImage: body.coverImage || existingPost.coverImage,
        link: body.link || existingPost.link,
      })
      .where(eq(blogPostsTable.id, id));

    const [updatedPost] = await db
      .select()
      .from(blogPostsTable)
      .where(eq(blogPostsTable.id, id))
      .limit(1);

    return NextResponse.json({
      status: 'success',
      message: 'Blog post updated successfully',
      data: updatedPost,
    });
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to update blog post' },
      { status: 500 },
    );
  }
}

// DELETE - Remove a blog post
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const db = getDb();

    // Check if post exists
    const [existingPost] = await db
      .select()
      .from(blogPostsTable)
      .where(eq(blogPostsTable.id, id))
      .limit(1);

    if (!existingPost) {
      return NextResponse.json(
        { status: 'error', message: 'Blog post not found' },
        { status: 404 },
      );
    }

    // Delete the post
    await db.delete(blogPostsTable).where(eq(blogPostsTable.id, id));

    return NextResponse.json({
      status: 'success',
      message: 'Blog post deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to delete blog post' },
      { status: 500 },
    );
  }
}
