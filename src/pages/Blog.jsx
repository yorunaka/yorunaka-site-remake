import React, { useEffect, useState } from 'react';
import { Eye, Calendar, ArrowLeft, BookOpen, Clock } from 'lucide-react';
import { getPost } from '../hooks/blogApi';

function SingleFilePostCard({ post, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-slate-900/50 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/80 rounded-2xl p-5 flex flex-col justify-between h-full relative group cursor-pointer transition"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {new Date(post.createdAt || post.created_at).toLocaleDateString()}
          </span>
          <span className="flex items-center gap-1 text-slate-400">
            <Eye className="w-3.5 h-3.5 text-emerald-400" /> {post.views || 0}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition">
          {post.title}
        </h3>
        <p className="text-sm text-slate-400 line-clamp-3">
          {post.excerpt || 'Click to read full article...'}
        </p>
      </div>

      <div className="pt-4 mt-4 border-t border-slate-800/60 text-xs font-semibold text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
        Read Article &rarr;
      </div>
    </div>
  );
}

// --- MAIN BLOG PAGE COMPONENT ---
export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [selectedSlug, setSelectedSlug] = useState(null);
  const [activePost, setActivePost] = useState(null);
  const [loading, setLoading] = useState(true);

  // 1. Fetch public post list on mount
  const fetchPosts = async () => {
    try {
      const data = await getPost(); // Call public API (no token)
      const postArray = Array.isArray(data) ? data : (data.posts || data.data || []);
      // console.log('[DEBUG] Fetched post list:', postArray);
      setPosts(postArray);
    } catch (error) {
      // console.error('[DEBUG] Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // 2. Open individual post by slug
  const openPost = async (slug) => {
    // console.log('[DEBUG] openPost clicked with slug:', slug);
    if (!slug) {
      // console.warn('[DEBUG] Cannot open post: slug is missing!');
      return;
    }

    setSelectedSlug(slug);
    setActivePost(null); // Show loading skeleton state

    try {
      const res = await fetch(`/api/posts?slug=${encodeURIComponent(slug)}`);
      // console.log('[DEBUG] Fetch status for single post:', res.status);
      
      if (res.ok) {
        const data = await res.json();
        // console.log('[DEBUG] Received post payload:', data);
        const postDetail = data.post || data.data || data;
        setActivePost(postDetail);
      } else {
        console.error('Failed HTTP request for post slug:', res.status);
      }
    } catch (err) {
      console.error('Error inside openPost fetch:', err);
    }
  };

  // --- VIEW 1: FULL PAGE ARTICLE READER ---
  if (selectedSlug) {
    return (
      <div className="min-h-screen w-full bg-slate-950 text-slate-100 py-10 px-4 sm:px-8 lg:px-16 animate-in fade-in duration-200">
        <div className="max-w-5xl mx-auto space-y-8">
          <button
            onClick={() => {
              setSelectedSlug(null);
              setActivePost(null);
            }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Articles
          </button>

          {!activePost ? (
            <div className="text-slate-400 py-20 text-center animate-pulse">
              Loading article content...
            </div>
          ) : (
            <article className="space-y-8">
              <header className="space-y-4 border-b border-slate-800/80 pb-8">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                  {activePost.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    {new Date(activePost.createdAt || activePost.created_at).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-emerald-400" />
                    {activePost.views || 0} Views
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    {Math.max(1, Math.ceil((activePost.content || '').split(' ').length / 200))} min read
                  </span>
                </div>
              </header>

              <div className="prose prose-invert prose-emerald max-w-none text-slate-300 leading-relaxed whitespace-pre-wrap font-sans text-base sm:text-lg">
                {activePost.content}
              </div>
            </article>
          )}
        </div>
      </div>
    );
  }

  // --- VIEW 2: ARTICLE GRID LIST ---
  return (
    <div className="max-w-5xl min-h-screen mx-auto py-12 px-4 space-y-8">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/50 text-emerald-400 text-xs font-medium">
          <BookOpen className="w-3.5 h-3.5" /> What knowledge does to a mf
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Articles & Insights</h2>
        <p className="text-slate-400 text-sm">
          Thoughts, engineering breakdowns, and project retrospectives.
        </p>
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
            <SingleFilePostCard
              key={post.id || post.slug}
              post={post}
              onClick={() => openPost(post.slug)}
            />
          ))}
        </div>
      )}
    </div>
  );
}