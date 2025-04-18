import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/data/blog-data';
import { CalendarIcon, ExternalLinkIcon } from 'lucide-react';

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="flex flex-col gap-6">
      {posts.map((post) => (
        <article
          key={post.id}
          className="mx-8 flex flex-col overflow-hidden rounded-lg border shadow-sm transition-shadow hover:shadow-md md:flex-row"
        >
          <div className="flex flex-1 flex-col p-6">
            <div className="mb-3 flex items-center text-sm text-muted-foreground">
              <div className="mr-4 flex items-center">
                <CalendarIcon className="mr-1 h-4 w-4" />
                <span>{post.date}</span>
              </div>
              {/*<div className="flex items-center">*/}
              {/*  <ExternalLinkIcon className="mr-1 h-4 w-4" />*/}
              {/*  <a*/}
              {/*    href={post.link}*/}
              {/*    target="_blank"*/}
              {/*    rel="noopener noreferrer"*/}
              {/*    className="hover:underline"*/}
              {/*  >*/}
              {/*    External Source*/}
              {/*  </a>*/}
              {/*</div>*/}
            </div>
            <Link href={post.link}>
              <h2 className="mb-2 text-xl font-semibold transition-colors hover:text-buttr-green">
                {post.title}
              </h2>
            </Link>
            <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto font-medium text-primary hover:text-buttr-green hover:underline"
            >
              Know More
            </a>
          </div>
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="md:w-1/3 lg:w-1/4"
          >
            <div className="relative h-48 w-full md:h-full">
              <Image
                src={post.coverImage || '/placeholder.svg'}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </a>
        </article>
      ))}
    </div>
  );
}
