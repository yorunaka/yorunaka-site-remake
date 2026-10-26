import React from 'react';
import { PORTFOLIO_DATA } from '../assets/portfolioData';  

const Contacts = () => {
  return (
    <section id="contact" className="py-20 border-none border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Know More About Me!</h2>
          <p className="mt-2 text-slate-400">Connect with me across my social profiles.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {PORTFOLIO_DATA.socials.map((social) => (  
            <a
              key={social.name}
              href={social.url}  
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-900/50 border border-slate-800 text-slate-300 hover:text-white hover:border-sky-500/50 hover:bg-slate-800/50 transition-all duration-300 shadow-md hover:-translate-y-0.5"
            >
              <span className="font-medium text-sm">{social.name}</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Contacts;