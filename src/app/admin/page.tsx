// src/app/admin/page.tsx (server component approach)
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
import LogoutButton from './LogoutButton'; // Create this as a client component

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

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
        {/* Admin content */}
      </div>
    </div>
  );
}
