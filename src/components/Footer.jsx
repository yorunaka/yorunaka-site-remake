import React from 'react';
import { PORTFOLIO_DATA } from '../assets/portfolioData';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-none border-slate-900 bg-slate-950 text-slate-500 text-sm text-center">
      <div className="max-w-6xl mx-auto px-4">
        <p>© {year} {PORTFOLIO_DATA.personal.handle} — All Rights Reserved.</p> { }
      </div>
    </footer>
  );
};

export default Footer;