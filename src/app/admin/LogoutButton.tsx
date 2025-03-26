'use client';

import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/login' })}
      className="rounded-md bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
    >
      Logout
    </button>
  );
}
