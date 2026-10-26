import React, { useEffect, useState } from 'react';
import PostCard from '../components/features/PostCard';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { Eye, Calendar, ArrowLeft, BookOpen, Clock } from 'lucide-react';
import { adminApi } from '../hooks/blogApi';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [selectedSlug, setSelectedSlug] = useState(null);
  const [activePost, setActivePost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await adminApi.getPosts();
        setPosts(Array.isArray(data) ? data : []);
      } catch {
        // Handle error
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const openPost = (slug) => {
    setSelectedSlug(slug);
    adminApi.getPostBySlug(slug).then((data) => {
      setActivePost(data);
    });
  };

  if (selectedSlug) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 animate-in fade-in duration-200">
        <Button
          variant="ghost"
          size="sm"
          icon={ArrowLeft}
          onClick={() => { setSelectedSlug(null); setActivePost(null); }}
          className="mb-8"
        >
          Back to Articles
        </Button>

        {!activePost ? (
          <div className="text-slate-400 py-20 text-center animate-pulse">Loading article content...</div>
        ) : (
          <article className="space-y-8">
            <header className="space-y-4 border-b border-slate-800 pb-8">
              <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">{activePost.title}</h1>
              <div className="flex items-center gap-6 text-xs text-slate-400">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-emerald-400" /> {new Date(activePost.createdAt || activePost.created_at).toLocaleDateString()}</span>
                <span className="flex items-center gap-1.5"><Eye className="w-4 h-4 text-emerald-400" /> {activePost.views} Views</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-emerald-400" /> {Math.max(1, Math.ceil((activePost.content || '').split(' ').length / 200))} min read</span>
              </div>
            </header>

            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed whitespace-pre-wrap font-sans text-base">
              {activePost.content}
            </div>
          </article>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-5xl  h-screen mx-auto py-12 px-4 space-y-8">
      <div className="space-y-2">
        <Badge variant="success" icon={BookOpen}>What knowledge does to a mf</Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Articles & Insights</h2>
        <p className="text-slate-400 text-sm">Thoughts, engineering breakdowns, and project retrospectives.</p>
      </div>

      {loading ? (
        <div className="text-slate-500 py-12 text-center">Loading posts...</div>
      ) : posts.length === 0 ? (
        <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl text-center text-slate-500">
          No published posts found.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} onClick={() => openPost(post.slug)} />
          ))}
        </div>
      )}
    </div>
  );
}