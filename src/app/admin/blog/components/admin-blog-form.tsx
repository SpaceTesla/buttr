// src/app/admin/blog/components/admin-blog-form.tsx
'use client';

import { useState } from 'react';
import { BlogPost } from '@/data/blog-data';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  post: BlogPost | null;
  isCreating: boolean;
  onSubmit: (post: BlogPost) => void;
  onCancel: () => void;
}

export default function AdminBlogForm({
  post,
  isCreating,
  onSubmit,
  onCancel,
}: Props) {
  const [formData, setFormData] = useState<BlogPost>({
    id: post?.id || uuidv4(),
    slug: post?.slug || '',
    title: post?.title || '',
    excerpt: post?.excerpt || '',
    date:
      post?.date ||
      new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    coverImage: post?.coverImage || '',
    link: post?.link || '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">
        {isCreating ? 'Create New Post' : 'Edit Post'}
      </h2>

      <div>
        <label className="mb-1 block font-medium">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-gray-300 p-2"
        />
      </div>

      <div>
        <label className="mb-1 block font-medium">Slug</label>
        <input
          type="text"
          name="slug"
          value={formData.slug}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-gray-300 p-2"
        />
      </div>

      <div>
        <label className="mb-1 block font-medium">Excerpt</label>
        <textarea
          name="excerpt"
          value={formData.excerpt}
          onChange={handleChange}
          required
          rows={3}
          className="w-full rounded-md border border-gray-300 p-2"
        />
      </div>

      <div>
        <label className="mb-1 block font-medium">Date</label>
        <input
          type="text"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-gray-300 p-2"
        />
      </div>

      <div>
        <label className="mb-1 block font-medium">Cover Image URL</label>
        <input
          type="text"
          name="coverImage"
          value={formData.coverImage}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-gray-300 p-2"
        />
      </div>

      <div>
        <label className="mb-1 block font-medium">Link</label>
        <input
          type="text"
          name="link"
          value={formData.link}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-gray-300 p-2"
        />
      </div>

      <div className="flex gap-2">
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          {isCreating ? 'Create' : 'Update'} Post
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
