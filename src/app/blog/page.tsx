import { getBlogPosts } from '@/data/blog-data';
import BlogList from './components/blog-list';

export const metadata = {
  title: 'Blog | BUTTR Sustainable Papers',
  description:
    'Read the latest articles about sustainable paper products and eco-friendly practices',
};

export default function BlogPage() {
  const posts = getBlogPosts();

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
