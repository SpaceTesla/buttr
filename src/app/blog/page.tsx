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
    <main className="container mx-auto h-[calc(100vh-5.5rem)] px-4 py-12 pt-[5.5rem]">
      <h1 className="mb-2 text-center text-4xl font-bold">Our Blog</h1>
      <p className="mb-8 text-center text-lg text-muted-foreground">
        The latest news and insights on sustainable paper products
      </p>
      <BlogList posts={posts} />
    </main>
  );
}
