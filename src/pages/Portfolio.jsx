import React, { useState, useMemo } from 'react';
import projects from '../assets/projectData';

const Portfolio = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique project types for filter buttons
  const categories = useMemo(() => {
    const types = projects.map((p) => p.type);
    return ['All', ...Array.from(new Set(types))];
  }, []);

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedType === 'All' || project.type === selectedType;
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.desc.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedType, searchQuery]);

  return (
    <section className="min-h-screen bg-slate-900 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            My <span className="text-indigo-400">Projects</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-base sm:text-lg">
            A showcase of my software engineering, web development, and image processing work.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-800/60 p-4 rounded-xl backdrop-blur border border-slate-700/50">
          
          {/* Search Input */}
          <div className="w-full md:w-72 relative">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 text-slate-200 border border-slate-700 rounded-lg py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder-slate-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedType(category)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedType === category
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 flex flex-col justify-between hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  {/* Card Header: Title & Type Badge */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {project.name}
                    </h3>
                    <span className="inline-block px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase bg-indigo-950/80 text-indigo-300 border border-indigo-800/50 rounded-full shrink-0">
                      {project.type}
                    </span>
                  </div>

                  {/* Card Body: Description */}
                  <p className="text-slate-300 text-sm leading-relaxed line-clamp-4">
                    {project.desc}
                  </p>
                </div>

                {/* Card Footer: Action Links */}
                <div className="pt-6 mt-4 border-none border-slate-700/40 flex items-center gap-3">
                  {/* GitHub Link */}
                  {project.linkToProject && (
                    <a
                      href={project.linkToProject}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      Repository
                    </a>
                  )}

                  {/* Live Demo Link */}
                  {project.linkToWebsite && (
                    <a
                      href={project.linkToWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 shadow-sm shadow-indigo-600/30 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-800/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-base">No projects found matching your filter.</p>
            <button
              onClick={() => {
                setSelectedType('All');
                setSearchQuery('');
              }}
              className="mt-4 text-xs font-semibold text-indigo-400 hover:text-indigo-300 underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Portfolio;