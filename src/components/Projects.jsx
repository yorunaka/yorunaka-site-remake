import React from 'react';
import projects from '../assets/projectData';  

const Project = () => {
  return (
    <section id="project" className="py-20 border-none border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Featured Projects</h2>
          <p className="mt-2 text-slate-400">Explore some of my latest work and builds.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(({ name, type, desc, linkToProject, linkToWebsite }, index) => (  
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl flex flex-col justify-between hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 group"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                    {name} { }
                  </h3>
                  {type && (
                    <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {type} { }
                    </span>
                  )}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {desc} { }
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 mt-4 border-none border-slate-800/50">
                {linkToProject && (
                  <a
                    href={linkToProject}  
                    className="text-xs font-medium px-4 py-2 rounded-lg bg-sky-500/10 text-sky-400 hover:bg-sky-500 hover:text-white transition-all duration-200"
                  >
                    View Repository
                  </a>
                )}
                {linkToWebsite && (
                  <a
                    href={linkToWebsite}  
                    className="text-xs font-medium px-4 py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 transition-all duration-200"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Project;