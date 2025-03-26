// src/app/api/migrate/route.ts
import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { sql } from 'drizzle-orm';

export async function GET() {
  try {
    const db = getDb();

    // Create the blog_posts table if it doesn't exist
    await db.execute(sql`
        CREATE TABLE IF NOT EXISTS blog_posts (
                                                  id VARCHAR(36) PRIMARY KEY,
            slug VARCHAR(255) NOT NULL UNIQUE,
            title VARCHAR(255) NOT NULL,
            excerpt TEXT NOT NULL,
            date VARCHAR(255) NOT NULL,
            cover_image VARCHAR(255) NOT NULL,
            link VARCHAR(255) NOT NULL
            )
    `);

    return NextResponse.json({
      status: 'success',
      message: 'Database migration completed successfully',
    });
  } catch (error) {
    console.error('Migration error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Migration failed', error: String(error) },
      { status: 500 },
    );
  }
}
