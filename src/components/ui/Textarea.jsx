
import React from 'react';

export default function Textarea({ label, error, className = '', ...props }) {
  return (
    <div className="space-y-1.5 w-full">
      {label && <label className="block text-xs font-medium text-slate-400">{label}</label>}
      <textarea
        className={`w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition resize-none ${
          error ? 'border-rose-500' : ''
        } ${className}`}
        {...props}
      />
      {error && <p className="text-[11px] text-rose-400">{error}</p>}
    </div>
  );
}