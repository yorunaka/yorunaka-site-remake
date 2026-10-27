import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Eye, Calendar, ArrowLeft, BookOpen, Clock } from 'lucide-react';
import { getPost } from '../hooks/blogApi';


function SingleFilePostCard({ post, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-slate-900/50 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/80 rounded-2xl p-6 flex flex-col justify-between h-full group cursor-pointer transition"
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

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [selectedSlug, setSelectedSlug] = useState(null);
  const [activePost, setActivePost] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const data = await getPost();
      const postArray = Array.isArray(data) ? data : (data.posts || data.data || []);
      setPosts(postArray);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const openPost = async (slug) => {
    if (!slug) return;
    setSelectedSlug(slug);
    setActivePost(null);

    try {
      const res = await fetch(`/api/posts?slug=${encodeURIComponent(slug)}`);
      if (res.ok) {
        const data = await res.json();
        const postDetail = data.post || data.data || data;
        setActivePost(postDetail);
      }
    } catch (err) {
      console.error('Error fetching post detail:', err);
    }
  };


  if (selectedSlug) {
    return (
      <div className="min-h-screen w-full bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-10">
          
          {/* Back Navigation */}
          <button
            onClick={() => {
              setSelectedSlug(null);
              setActivePost(null);
            }}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition text-xs font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Articles
          </button>

          {!activePost ? (
            <div className="text-slate-500 py-24 text-center animate-pulse">
              Loading story...
            </div>
          ) : (
            <article className="space-y-10">
              
              {/* Medium Header Layout */}
              <header className="space-y-6 border-b border-slate-800/80 pb-10">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                  {activePost.title}
                </h1>

                {activePost.excerpt && (
                  <p className="text-lg sm:text-xl text-slate-400 leading-relaxed font-normal">
                    {activePost.excerpt}
                  </p>
                )}

                <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-400 pt-2">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    {new Date(activePost.createdAt || activePost.created_at).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    {Math.max(1, Math.ceil((activePost.content || '').split(' ').length / 200))} min read
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-emerald-400" />
                    {activePost.views || 0} views
                  </span>
                </div>
              </header>

              {/* Medium Article Body with Markdown & Inline Image Support */}
              <div className="prose prose-invert prose-emerald max-w-none text-slate-300 text-lg leading-relaxed font-sans space-y-6">
                <ReactMarkdown
                  components={{
                    // Custom styled image rendering for Medium look
                    img: ({ node, ...props }) => (
                      <figure className="my-8 space-y-2">
                        <img
                          {...props}
                          className="w-full rounded-2xl border border-slate-800/80 object-cover max-h-125 shadow-2xl"
                          loading="lazy"
                        />
                        {props.alt && (
                          <figcaption className="text-center text-xs sm:text-sm text-slate-500 italic">
                            {props.alt}
                          </figcaption>
                        )}
                      </figure>
                    ),
                    // Elegant paragraph spacing
                    p: ({ node, children }) => (
                      <p className="leading-8 text-slate-300 text-base sm:text-lg mb-6">
                        {children}
                      </p>
                    ),
                  }}
                >
                  {activePost.content}
                </ReactMarkdown>
              </div>
            </article>
          )}
        </div>
      </div>
    );
  }


  return (
    <div className="max-w-5xl min-h-screen mx-auto py-12 px-4 space-y-8">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/50 text-emerald-400 text-xs font-medium">
          <BookOpen className="w-3.5 h-3.5" /> Published Insights
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Articles & Stories</h2>
        <p className="text-slate-400 text-sm">
          Engineering breakdowns, system architecture, and deep dives.
        </p>
      </div>

      {loading ? (
        <div className="text-slate-500 py-12 text-center">Loading stories...</div>
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