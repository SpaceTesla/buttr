import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/data/blog-data';
import { CalendarIcon, UserIcon } from 'lucide-react';

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <article
          key={post.id}
          className="overflow-hidden rounded-lg border shadow-sm transition-shadow hover:shadow-md"
        >
          <Link href={`/blog/${post.slug}`}>
            <div className="relative h-48 w-full">
              <Image
                src={post.coverImage || '/placeholder.svg'}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </Link>
          <div className="p-6">
            <div className="mb-3 flex items-center text-sm text-muted-foreground">
              <div className="mr-4 flex items-center">
                <CalendarIcon className="mr-1 h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <UserIcon className="mr-1 h-4 w-4" />
                <span>{post.author}</span>
              </div>
            </div>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="mb-2 text-xl font-semibold transition-colors hover:text-primary">
                {post.title}
              </h2>
            </Link>
            <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="font-medium text-primary hover:underline"
            >
              Read More
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
