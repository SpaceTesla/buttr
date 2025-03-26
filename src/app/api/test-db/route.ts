// src/app/api/test-db/route.ts
import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export async function GET() {
  try {
    const db = getDb();

    // Basic query to check connection
    const result = await db.execute('SELECT 1 as test');

    return NextResponse.json({
      status: 'success',
      message: 'Connected to database',
      data: result,
    });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to connect to database' },
      { status: 500 },
    );
  }
}
