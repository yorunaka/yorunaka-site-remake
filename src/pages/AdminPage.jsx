import React, { useState, useEffect, useCallback } from 'react';
import PostEditor from '../components/features/PostEditor';
import PostCard from '../components/features/PostCard';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import { Lock, Plus, Trash2, Edit, ShieldCheck } from 'lucide-react';
import { getPost, savePost, deletePost} from '../hooks/blogApi';

const INITIAL_FORM_STATE = { id: null, title: '', slug: '', excerpt: '', content: '' };

export default function Admin() {
  const [token, setToken] = useState(localStorage.getItem('admin_token') || '');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const fetchBlogPost = async (authToken) => {
    if (!authToken) {
      setIsAuthenticated(false);
      return;
    }

    try {
      const data = await getPost(authToken);
      setPosts(data);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Auth check failed:", error);
      setIsAuthenticated(false);
    }
  };

useEffect(() => {
    const savedToken = localStorage.getItem('admin_token');
    if (savedToken) {
      setToken(savedToken);
      fetchBlogPost(savedToken);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!token) return;
    
    // Save to storage and immediately fetch posts using the input token
    localStorage.setItem('admin_token', token);
    await fetchBlogPost(token);
  };

  const handleSave = async (status) => {
    try {
      await savePost(token, formData, status);
      resetForm();
      fetchBlogPost(token);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    try {
      await deletePost(token, id);
      fetchBlogPost(token);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setFormData({
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt || '',
      content: post.content
    });
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM_STATE);
    setEditingPost(null);
  };

  if (!isAuthenticated) {
    return (
      <div className="h-screen bg-slate-900 py-20">
        <div className='max-w-md mx-auto  p-6 border border-slate-800 rounded-2xl shadow-xl '>
          <div className="flex flex-col items-center gap-3 mb-6 ">
            <div className="p-3 bg-emerald-500/10 rounded-full border border-emerald-500/30 text-emerald-400">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white">Owner Only</h2>
            <p className="text-xs text-slate-400 text-center">Type my favorite food.</p>
          </div>
          <form className="space-y-4">
            <Input
              type="password"
              placeholder="Enter ADMIN_SECRET_KEY"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
            <Button onClick={handleLogin} variant="primary" className="w-full">
              Authenticate
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 space-y-8">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-emerald-400" />
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        </div>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => {
            localStorage.removeItem('admin_token');
            setIsAuthenticated(false);
          }}
        >
          Logout
        </Button>
      </div>

      <PostEditor
        formData={formData}
        setFormData={setFormData}
        onSave={handleSave}
        onCancel={() => {
          setEditingPost(null);
          setFormData({ title: '', slug: '', excerpt: '', content: '' });
        }}
        isEditing={!!editingPost}
      />

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">All Posts & Drafts ({posts.length})</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <div key={post.id} className="relative group">
              <PostCard post={post} showStatus />
              <div className="absolute top-3 right-3 flex gap-2">
                <button
                  onClick={() => handleEdit(post)}
                  className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs"
                >
                  <Edit className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="p-1.5 bg-rose-900/50 hover:bg-rose-800 text-rose-300 rounded-lg text-xs"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}