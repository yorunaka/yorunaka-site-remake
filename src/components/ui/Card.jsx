export default function Card({ children, className = '' }) {
  return (
    <div className={`p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 ${className}`}>
      {children}
    </div>
  );
}