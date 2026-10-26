import React, { useState } from 'react';
import stacks from '../assets/stackData';  

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const nextIcon = "https://img.icons8.com/ios/50/circled-chevron-right--v1.png";
  const prevIcon = "https://img.icons8.com/ios/50/circled-chevron-left--v1.png";
  

  return (
    <section id="skills" className="py-20 border-none border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Skills & Tech Stack</h2>
          <p className="mt-2 text-slate-400">Tools and frameworks I use to bring ideas to life.</p>
        </div>

        {/* Category Selector Tabs */}
        {stacks.length > 1 && (
        <div className="flex justify-center items-center gap-4 mb-8">
          {/* Previous Button */}
          <button
            onClick={() => setActiveCategory((prev) => Math.max(prev - 1, 0))}
            disabled={activeCategory === 0}
            className={`p-2 rounded-xl border border-slate-800 transition-all duration-200 ${
              activeCategory === 0
                ? 'opacity-40 cursor-default bg-slate-900/30'
                : 'bg-slate-900/60 hover:bg-slate-800 cursor-pointer active:scale-95'
            }`}
            aria-label="Previous Page"
          >
            <img src={prevIcon} alt="Previous" className="w-6 h-6 invert" />
          </button>

          {/* Page Counter Indicator */}
          <span className="text-slate-400 text-sm font-medium">
            {activeCategory + 1} / {stacks.length}
          </span>

          {/* Next Button */}
          <button
            onClick={() => setActiveCategory((prev) => Math.min(prev + 1, stacks.length - 1))}
            disabled={activeCategory === stacks.length - 1}
            className={`p-2 rounded-xl border border-slate-800 transition-all duration-200 ${
              activeCategory === stacks.length - 1
                ? 'opacity-40 cursor-default bg-slate-900/30'
                : 'bg-slate-900/60 hover:bg-slate-800 cursor-pointer active:scale-95'
            }`}
            aria-label="Next Page"
          >
            <img src={nextIcon} alt="Next" className="w-6 h-6 invert" />
          </button>
        </div>
      )}

        {/* Tech Stack Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {stacks[activeCategory]?.tech.map((item, id) => ( 
            <div
              key={id}
              className="group p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm flex flex-col items-center justify-center hover:border-sky-500/40 hover:bg-slate-800/50 hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={item.img} 
                alt={item.name}  
                className="w-12 h-12 object-contain mb-3 group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-sm font-medium text-slate-300 group-hover:text-white text-center">
                {item.name} { }
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;