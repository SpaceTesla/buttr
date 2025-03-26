// src/app/blog/page.tsx - Updated to use database
import BlogList from './components/blog-list';
import { getDbBlogPosts } from '@/lib/blog-utils';

export const metadata = {
  title: 'Blog | BUTTR Sustainable Papers',
  description:
    'Read the latest articles about sustainable paper products and eco-friendly practices',
};

export default async function BlogPage() {
  // Fetch posts from database
  const posts = await getDbBlogPosts();

  return (
    <main className="container mx-auto px-4 py-12 pt-[5rem]">
      <div className="container mx-auto bg-white px-4 py-8">
        <div className="mx-auto my-4 max-w-6xl overflow-hidden bg-buttr-yellow pb-8 shadow-xl shadow-gray-400">
          <div className="px-8 py-6 text-center">
            <div
              className="font-chomsky text-5xl md:text-6xl lg:text-8xl"
              style={{ fontFamily: 'Chomsky' }}
            >
              Buttr Times
            </div>
            <div className="my-4 h-1 w-full bg-black"></div>
          </div>
          <BlogList posts={posts} />
        </div>
      </div>
    </main>
  );
}
