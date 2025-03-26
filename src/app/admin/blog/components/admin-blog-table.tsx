// src/app/admin/blog/components/admin-blog-table.tsx
'use client';

import { BlogPost } from '@/data/blog-data';

interface Props {
  posts: BlogPost[];
  loading: boolean;
  onEdit: (post: BlogPost) => void;
  onDelete: (id: string) => void;
}

export default function AdminBlogTable({
  posts,
  loading,
  onEdit,
  onDelete,
}: Props) {
  if (loading) {
    return <div className="text-center">Loading blog posts...</div>;
  }

  if (posts.length === 0) {
    return <div className="text-center">No blog posts found.</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Title
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Date
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {posts.map((post) => (
            <tr key={post.id}>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="text-sm font-medium text-gray-900">
                  {post.title}
                </div>
                <div className="text-sm text-gray-500">{post.slug}</div>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                {post.date}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm">
                <button
                  onClick={() => onEdit(post)}
                  className="mr-2 rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(post.id)}
                  className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
