import React, { useEffect, useState } from 'react';
import { Search, FileText, Code, User, Mail, Sparkles, X } from 'lucide-react';

export default function CommandPalette({ isOpen, onClose, onNavigate }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { id: 'about', label: 'Go to About Section', icon: User, section: 'about' },
    { id: 'skills', label: 'View Skills & Tech Stack', icon: Code, section: 'skills' },
    { id: 'blog', label: 'Explore Blog Articles', icon: FileText, section: 'blog' },
    { id: 'contact', label: 'Send a Message / Contact', icon: Mail, section: 'contact' },
    { id: 'admin', label: 'Owner Admin Dashboard', icon: Sparkles, section: 'admin' },
  ];

  const filtered = actions.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-start justify-center pt-24 px-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center px-4 border-b border-slate-800">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input
            type="text"
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent py-4 text-white placeholder-slate-500 focus:outline-none text-sm"
            autoFocus
          />
          <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:bg-slate-800">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-2 max-h-60 overflow-y-auto space-y-1">
          {filtered.length === 0 ? (
            <p className="p-4 text-center text-xs text-slate-500">No matching commands</p>
          ) : (
            filtered.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.section);
                    onClose();
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 transition text-sm text-left"
                >
                  <Icon className="w-4 h-4 text-emerald-400" />
                  <span>{item.label}</span>
                </button>
              );
            })
          )}
        </div>
        <div className="px-4 py-2 border-none border-slate-800/50 bg-slate-950/50 text-[10px] text-slate-500 flex justify-between">
          <span>Press <kbd className="px-1 bg-slate-800 rounded">ESC</kbd> to close</span>
          <span>Navigation Quick-Access</span>
        </div>
      </div>
    </div>
  );
}