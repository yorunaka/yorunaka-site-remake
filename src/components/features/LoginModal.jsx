import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { Lock, X } from 'lucide-react';
import { auth } from '../../utils/auth';

export default function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [key, setKey] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Verify token with backend
      const res = await fetch('/api/admin/posts', {
        headers: { Authorization: `Bearer ${key}` }
      });

      if (res.ok) {
        auth.setToken(key);
        onLoginSuccess();
        onClose();
      } else {
        setError('Invalid.');
      }
    } catch {
      setError('Failed to authenticate.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 w-full max-w-md shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="p-3 bg-emerald-500/10 rounded-full border border-emerald-500/30 text-emerald-400">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white">Owner only</h2>
          <p className="text-xs text-slate-400">Enter my favorite food.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="password"
            placeholder="..."
            value={key}
            onChange={(e) => setKey(e.target.value)}
            required
            autoFocus
          />

          {error && <p className="text-xs text-rose-400">{error}</p>}

          <Button type="submit" variant="primary" className="w-full" disabled={loading}>
            {loading ? 'Authenticating...' : 'Sign In'}
          </Button>
        </form>
      </div>
    </div>
  );
}