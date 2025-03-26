// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth/next';
import { authOptions } from './options';
import { DefaultSession } from 'next-auth';

// Type declarations can stay in this file
declare module 'next-auth' {
  interface User {
    role?: string;
  }
  interface Session {
    user: {
      role?: string;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: string;
  }
}

// Create and export the handler only
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
