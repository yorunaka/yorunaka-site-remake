export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyle = "px-5 py-2.5 rounded-xl font-medium transition-all duration-300 backdrop-blur-md active:scale-95";
  const variants = {
    primary: "bg-indigo-600/80 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 border border-indigo-400/30",
    secondary: "bg-slate-800/60 hover:bg-slate-700/60 text-slate-200 border border-slate-700/50 hover:border-slate-500/50",
    ghost: "bg-transparent hover:bg-slate-800/40 text-slate-300",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}