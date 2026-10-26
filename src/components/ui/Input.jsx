
import React from 'react';

export default function Input({ label, error, icon: Icon, className = '', ...props }) {
  return (
    <div className="space-y-1.5 w-full">
      {label && <label className="block text-xs font-medium text-slate-400">{label}</label>}
      <div className="relative flex items-center">
        {Icon && <Icon className="w-4 h-4 absolute left-3.5 text-slate-500 pointer-events-none" />}
        <input
          className={`w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition ${
            Icon ? 'pl-10' : ''
          } ${error ? 'border-rose-500' : ''} ${className}`}
          {...props}
        />
      </div>
      {error && <p className="text-[11px] text-rose-400">{error}</p>}
    </div>
  );
}