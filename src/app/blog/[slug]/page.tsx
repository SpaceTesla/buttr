import { getBlogPostBySlug, getBlogPosts } from '@/data/blog-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CalendarIcon, UserIcon } from 'lucide-react';
import { remark } from 'remark';
import html from 'remark-html';

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) {
    return {
      title: 'Post Not Found | BUTTR Blog',
      description: 'The requested blog post could not be found',
    };
  }
  return {
    title: `${post.title} | BUTTR Blog`,
    description: post.excerpt,
  };
}

const markdownToHtml = async (markdown: string) => {
  const processedContent = await remark().use(html).process(markdown);
  return processedContent.toString();
};

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const formattedContent = await markdownToHtml(post.content);

  return (
    <div className="container mx-auto h-[calc(100vh-5.5rem)] bg-white px-4 py-8 pt-[5.5rem]">
      <div className="bg-buttr-yellow mx-auto my-4 max-w-6xl overflow-hidden shadow-xl shadow-gray-600">
        <div className="px-4 py-6 text-center">
          <div
            className="font-chomsky text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: 'Chomsky' }}
          >
            Buttr Times
          </div>
          <div className="my-4 h-px w-full bg-black"></div>
        </div>
        <article className="prose mx-auto max-w-3xl pb-8">
          <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>

          <div className="mb-6 flex items-center text-muted-foreground">
            <div className="mr-4 flex items-center">
              <CalendarIcon className="mr-1 h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <UserIcon className="mr-1 h-4 w-4" />
              <span>{post.author}</span>
            </div>
          </div>

          <div className="relative mb-8 h-80 w-full overflow-clip rounded-lg">
            <Image
              src={post.coverImage || '/placeholder.svg'}
              alt={post.title}
              fill
              className="rounded-lg object-cover"
            />
          </div>

          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: formattedContent }}
          />
        </article>
      </div>
    </div>
  );
}
