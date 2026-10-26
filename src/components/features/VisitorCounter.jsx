import React, { useEffect, useState } from 'react';
import Badge from '../ui/Badge';
import { Eye } from 'lucide-react';

export default function VisitorCounter() {
  const [views, setViews] = useState(null);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('visited_session');
    const method = hasVisited ? 'GET' : 'POST';

    fetch('/api/visitor-count', { method })
      .then((res) => res.json())
      .then((data) => {
        if (data.totalVisitors !== undefined) {
          setViews(data.totalVisitors);
          sessionStorage.setItem('visited_session', 'true');
        }
      })
      .catch(() => setViews(1));
  }, []);

  return (
    <Badge variant="neutral">
      <span className="relative flex h-2 w-2 mr-1">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <Eye className="w-3.5 h-3.5 text-slate-400" />
      <span>Views: <strong className="text-white font-semibold">{views ?? '...'}</strong></span>
    </Badge>
  );
}