import React from 'react';
import { PORTFOLIO_DATA } from '../assets/portfolioData';

const About = () => {
  const { personal } = PORTFOLIO_DATA;
  const text = ["My name is Vincent Louis Fernando. I'm currently studied in Computer Science major at the Universitas Negeri Surabaya. I'm a developer who has interest at doing fun AI stuff, web development, UI/UX, and graphic design. I'm a gamer and technology enthusiast. I'm a fast learner and I'm always eager to learn new things. I'm a hard worker and always willing to put in extra effort to get the job done. I'm also ready for collaborative environment and always open for work within a team."];

  return (
    <section id="about" className="py-20 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-sky-500 to-indigo-500 opacity-30 blur-xl group-hover:opacity-60 transition duration-300" />
              <img
                src={personal.portraitImg}
                alt="Portrait"
                className="relative rounded-2xl max-w-xs sm:max-w-sm object-cover border border-slate-800 bg-slate-900 shadow-2xl"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              About Me
            </h2>

            <p className="text-slate-300 leading-relaxed text-justify sm:text-lg">
              {personal.bio} 
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <h3 className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-1">Education</h3>
                <p className="text-slate-200 font-medium">{personal.degree}</p> 
                <p className="text-xs text-slate-400">{personal.institution}</p> 
              </div>
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <h3 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">Focus Areas</h3>
                <p className="text-slate-200 font-medium">AI & Web Development</p> 
                <p className="text-xs text-slate-400">UI/UX & Graphic Design</p> 
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;