// src/app/admin/blog/components/admin-blog-manager.tsx
'use client';

import { useState, useEffect } from 'react';
import { BlogPost } from '@/data/blog-data';
import AdminBlogForm from './admin-blog-form';
import AdminBlogTable from './admin-blog-table';

export default function AdminBlogManager() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<string | null>(null);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/blog');
      const data = await res.json();

      if (data.status === 'success') {
        setPosts(data.data || []);
      } else {
        throw new Error(data.message || 'Failed to fetch blog posts');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setIsCreating(false);
  };

  const handleDelete = async (id: string) => {
    setPostToDelete(id);
    setDeleteConfirmOpen(true);
  };

  const confirmDelete = async () => {
    if (!postToDelete) return;

    try {
      const res = await fetch(`/api/blog/${postToDelete}`, {
        method: 'DELETE',
      });
      const data = await res.json();

      if (data.status === 'success') {
        fetchPosts();
      } else {
        throw new Error(data.message || 'Failed to delete post');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setDeleteConfirmOpen(false);
      setPostToDelete(null);
    }
  };

  const handleSubmit = async (post: BlogPost) => {
    try {
      let res;

      if (isCreating) {
        res = await fetch('/api/blog', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(post),
        });
      } else {
        res = await fetch(`/api/blog/${post.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(post),
        });
      }

      const data = await res.json();

      if (data.status === 'success') {
        setEditingPost(null);
        setIsCreating(false);
        fetchPosts();
      } else {
        throw new Error(data.message || 'Failed to save post');
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div>
      {error && (
        <div className="mb-4 rounded-md bg-red-50 p-4 text-red-700">
          {error}
          <button className="ml-2 font-medium" onClick={() => setError(null)}>
            Dismiss
          </button>
        </div>
      )}

      <div className="mb-6">
        <button
          onClick={() => {
            setIsCreating(true);
            setEditingPost({
              id: '',
              slug: '',
              title: '',
              excerpt: '',
              date: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }),
              coverImage: '',
              link: '',
            });
          }}
          className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          Create New Post
        </button>
      </div>

      {/* Delete Confirmation Dialog */}
      {deleteConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <h3 className="mb-4 text-lg font-medium">Delete Confirmation</h3>
            <p className="mb-6 text-gray-600">
              Are you sure you want to delete this blog post? This action cannot
              be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeleteConfirmOpen(false)}
                className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {editingPost || isCreating ? (
        <AdminBlogForm
          post={editingPost}
          isCreating={isCreating}
          onSubmit={handleSubmit}
          onCancel={() => {
            setEditingPost(null);
            setIsCreating(false);
          }}
        />
      ) : (
        <AdminBlogTable
          posts={posts}
          loading={loading}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
