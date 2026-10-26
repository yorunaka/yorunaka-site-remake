
import React from 'react';

const variants = {
  success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  neutral: 'bg-slate-900/90 text-slate-300 border-slate-800',
  danger: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
};

export default function Badge({ children, variant = 'neutral', icon: Icon, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium backdrop-blur-md ${variants[variant]} ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </span>
  );
}