import { NextRequest, NextResponse } from 'next/server';
import { getBlogPostBySlug } from '@/data/blog-data';

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.pathname.split('/').pop();

  if (!slug) {
    return NextResponse.json({ error: 'Invalid slug' }, { status: 400 });
  }

  const post = getBlogPostBySlug(slug);

  if (!post) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  return NextResponse.json(post, { status: 200 });
}
