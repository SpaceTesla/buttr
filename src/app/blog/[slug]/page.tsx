'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CalendarIcon, UserIcon } from 'lucide-react';
import { remark } from 'remark';
import html from 'remark-html';
import { use } from 'react';
import { BlogPost } from '@/data/blog-data';
import axios from 'axios';

const markdownToHtml = async (markdown: string) => {
  const processedContent = await remark().use(html).process(markdown);
  return processedContent.toString();
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: PageProps) {
  const { slug } = use(params);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [formattedContent, setFormattedContent] = useState<string>('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/api/blog/${slug}`);
        const data: BlogPost = res.data;
        setPost(data);
        const content = await markdownToHtml(data.content);
        setFormattedContent(content);
      } catch (error) {
        console.error('Error fetching blog post:', error);
        notFound();
      }
    };

    fetchPost();
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto bg-white px-4 py-8 pt-[5rem]">
      <div className="mx-auto my-4 max-w-6xl overflow-hidden bg-buttr-yellow shadow-xl shadow-gray-400">
        <div className="px-8 py-6 text-center">
          <div
            className="font-chomsky text-5xl md:text-6xl lg:text-8xl"
            style={{ fontFamily: 'Chomsky' }}
          >
            Buttr Times
          </div>
          <div className="my-4 h-1 w-full bg-black"></div>
        </div>
        <article className="prose mx-auto max-w-3xl px-2 pb-32">
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
