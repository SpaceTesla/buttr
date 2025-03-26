// src/lib/blog-utils.ts
import { getDb } from '@/lib/db';
import { blogPosts as blogPostsTable } from '@/schema/blog';
import { eq } from 'drizzle-orm';
import type { BlogPost } from '@/data/blog-data';

export async function getDbBlogPosts(): Promise<BlogPost[]> {
  try {
    const db = getDb();
    const posts = await db.select().from(blogPostsTable);

    return posts.map((post) => ({
      ...post,
      coverImage: post.coverImage, // Ensure field names match
    }));
  } catch (error) {
    console.error('Error fetching blog posts from DB:', error);
    // Fallback to static data if DB fails
    const { blogPosts } = await import('@/data/blog-data');
    return blogPosts;
  }
}

export async function getDbBlogPostBySlug(
  slug: string,
): Promise<BlogPost | undefined> {
  try {
    const db = getDb();
    const [post] = await db
      .select()
      .from(blogPostsTable)
      .where(eq(blogPostsTable.slug, slug))
      .limit(1);

    return post;
  } catch (error) {
    console.error('Error fetching blog post by slug:', error);
    // Fallback to static data if DB fails
    const { getBlogPostBySlug } = await import('@/data/blog-data');
    return getBlogPostBySlug(slug);
  }
}
