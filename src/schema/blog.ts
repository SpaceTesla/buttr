// src/schema/blog.ts
import { mysqlTable, varchar, text } from 'drizzle-orm/mysql-core';

export const blogPosts = mysqlTable('blog_posts', {
  id: varchar('id', { length: 36 }).primaryKey(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  title: varchar('title', { length: 255 }).notNull(),
  excerpt: text('excerpt').notNull(),
  date: varchar('date', { length: 255 }).notNull(),
  coverImage: varchar('cover_image', { length: 255 }).notNull(),
  link: varchar('link', { length: 255 }).notNull(),
});
