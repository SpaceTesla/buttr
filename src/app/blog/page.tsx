// src/app/blog/page.tsx - Updated to use database
import BlogList from './components/blog-list';
import { getDbBlogPosts } from '@/lib/blog-utils';

export const revalidate = 60;

export const metadata = {
  title: 'Blog - BUTTR Sustainable Papers',
  description:
    'Explore our collection of articles on sustainable paper products, eco-friendly packaging, and environmental practices. Learn how BUTTR is revolutionizing the paper industry.',
  keywords:
    'sustainable paper, eco-friendly paper, BUTTR papers, environmental practices',
  openGraph: {
    title: 'Sustainable Paper Blog | BUTTR Sustainable Papers',
    description:
      'Explore sustainable paper innovations and eco-friendly practices',
    images: [
      {
        url: '/images/og-img.png', // Create this image
        width: 1200,
        height: 630,
        alt: 'BUTTR Sustainable Papers Blog',
      },
    ],
  },
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
