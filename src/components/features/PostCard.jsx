import React from 'react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { Calendar, Edit3 } from 'lucide-react';
import { auth } from '../../utils/auth';

export default function PostCard({ post, onClick, onEdit, showStatus = false }) {
  const isOwner = auth.isAuthenticated();

  return (
    <Card 
      hoverable 
      onClick={onClick} 
      className="flex flex-col justify-between h-full relative group cursor-pointer"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {new Date(post.createdAt || post.created_at).toLocaleDateString()}
            {showStatus && (
              <Badge variant={post.status === 'published' ? 'success' : 'warning'}>
                {post.status}
              </Badge>
            )}
          </span>
          
          {isOwner && onEdit && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation(); // Prevents triggering post reader
                onEdit(post);
              }}
              className="p-1.5 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 rounded-lg transition"
              title="Edit Post"
            >
              <Edit3 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition">
          {post.title}
        </h3>
        <p className="text-sm text-slate-400 line-clamp-3">
          {post.excerpt || 'Click to read full article...'}
        </p>
      </div>

      <div onClick={onClick} className="pt-4 mt-4 border-t border-slate-800/60 text-xs font-semibold text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
        Read Article &rarr;
      </div>
    </Card>
  );
}