import React, { useState } from 'react';
import { Search, Lock, LogOut } from 'lucide-react';
import VisitorCounter from './VisitorCounter';
import LoginModal from './LoginModal';
import { auth } from '../utils/auth';

export default function Navbar({ activeTab, setActiveTab, onOpenCommand }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(auth.isAuthenticated());

  const handleLogout = () => {
    auth.logout();
    setIsLoggedIn(false);
    if (activeTab === 'admin') setActiveTab('blog');
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => setActiveTab('portfolio')} className="font-bold text-white tracking-wider flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-emerald-400"></span>
              PORTFOLIO
            </button>
            <VisitorCounter />
          </div>

          <nav className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${activeTab === 'portfolio' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('blog')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${activeTab === 'blog' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Blog
            </button>

            {/* Show Admin tab only when logged in */}
            {isLoggedIn ? (
              <>
                <button
                  onClick={() => setActiveTab('admin')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${activeTab === 'admin' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'text-slate-400 hover:text-white'}`}
                >
                  Admin
                </button>
                <button
                  onClick={handleLogout}
                  className="p-1.5 text-slate-400 hover:text-rose-400 text-xs flex items-center gap-1"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsLoginOpen(true)}
                className="p-1.5 text-slate-500 hover:text-slate-300 transition"
                title="Owner Login"
              >
                <Lock className="w-3.5 h-3.5" />
              </button>
            )}

            <button
              onClick={onOpenCommand}
              className="ml-2 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white text-xs flex items-center gap-2"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </nav>
        </div>
      </header>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={() => setIsLoggedIn(true)}
      />
    </>
  );
}