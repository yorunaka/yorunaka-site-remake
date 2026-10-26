import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Chatbot from './Chatbot/Chatbox'; 
import { PORTFOLIO_DATA } from '../assets/portfolioData';

const Hero = () => {
  const roles = PORTFOLIO_DATA.personal.roles;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[currentIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
        if (displayedText === currentText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentText.slice(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentIndex, roles]);

  return (
    <section id="home" className="relative pt-12 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              Coding 4 Fun!
            </div> */}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Hello, <br />
              <span className="bg-linear-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Vincent
              </span>{' '}
              here.
            </h1>

            <p className="text-lg text-slate-300 font-light min-h-12 leading-relaxed">
              I'm a{' '}
              <motion.span
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-semibold text-sky-400"
              >
                {displayedText}
              </motion.span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="font-bold text-sky-400 ml-0.5"
              >
                |
              </motion.span>{' '}
              who has a great vision about the future.
            </p>

            <div className="pt-2">
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`} 
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-sky-500 text-white font-medium hover:bg-sky-400 shadow-lg shadow-sky-500/25 transition-all duration-300 active:scale-95"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* <div className="lg:col-span-6 w-full">
            <div className="p-1 rounded-2xl bg-linear-to-b from-sky-500/20 via-slate-800/40 to-slate-900/80 backdrop-blur-xl border border-slate-800 shadow-2xl">
              <Chatbot /> 
            </div>
          </div> */}

        </div>
      </div>
    </section>
  );
};

export default Hero;