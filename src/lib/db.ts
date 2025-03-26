// src/lib/db.ts
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

// Database connection singleton
let connection: ReturnType<typeof createConnection> | null = null;

function createConnection() {
  const pool = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: parseInt(process.env.DATABASE_PORT || '3306'),
    ssl: {
      rejectUnauthorized: false,
    },
  });

  return drizzle(pool);
}

export function getDb() {
  if (!connection) {
    connection = createConnection();
  }
  return connection;
}
