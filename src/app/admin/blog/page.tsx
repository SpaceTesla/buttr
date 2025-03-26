// src/app/admin/blog/page.tsx
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import AdminBlogManager from './components/admin-blog-manager';

export const metadata = {
  title: 'Blog Management | Admin',
};

export default async function AdminBlogPage() {
  // Check if user is authenticated (requires NextAuth setup)
  const session = await getServerSession();
  if (!session) {
    redirect('/api/auth/signin');
  }

  return (
    <main className="container mx-auto p-4 pt-24">
      <h1 className="mb-6 text-2xl font-bold">Blog Management</h1>
      <AdminBlogManager />
    </main>
  );
}
