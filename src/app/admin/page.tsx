// src/app/admin/page.tsx
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
import LogoutButton from './LogoutButton';
import Link from 'next/link';
import { getDb } from '@/lib/db';
import { blogPosts as blogPostsTable } from '@/schema/blog';

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  // Get blog stats
  const db = getDb();
  const posts = await db.select().from(blogPostsTable);
  const blogCount = posts.length;
  const latestPost = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )[0];

  return (
    <div className="min-h-screen p-8 pt-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span>Welcome, {session.user?.name}</span>
            <LogoutButton />
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Blog Posts</h2>
            <p className="mt-2 text-3xl font-bold">{blogCount}</p>
            <div className="mt-4">
              <Link
                href="/admin/blog"
                className="inline-flex items-center justify-center rounded-md bg-buttr-green px-4 py-2 text-sm font-medium text-white hover:bg-buttr-green/90"
              >
                Manage Blog Posts
              </Link>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Latest Post</h2>
            {latestPost ? (
              <>
                <p className="mt-2 font-bold">{latestPost.title}</p>
                <p className="text-sm text-muted-foreground">
                  {latestPost.date}
                </p>
              </>
            ) : (
              <p className="mt-2 text-muted-foreground">No posts yet</p>
            )}
            <div className="mt-4">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                View Blog
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 rounded-lg border p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/admin/blog"
              className="rounded-md bg-buttr-green px-4 py-2 text-white hover:bg-buttr-green/90"
            >
              Manage Blog
            </Link>
            {/*<Link*/}
            {/*  href="/api/migrate"*/}
            {/*  className="rounded-md border bg-slate-100 px-4 py-2 hover:bg-slate-200"*/}
            {/*>*/}
            {/*  Run DB Migration*/}
            {/*</Link>*/}
            <Link
              href="/blog"
              className="rounded-md border bg-slate-100 px-4 py-2 hover:bg-slate-200"
            >
              View Public Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
