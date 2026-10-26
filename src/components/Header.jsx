import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { PORTFOLIO_DATA } from '../assets/portfolioData';
import { Lock, LogOut } from 'lucide-react';
import LoginModal from '../components/features/LoginModal';
import { auth } from '../utils/auth';

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(auth.isAuthenticated());
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-950/70 border-b border-slate-800/80 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div 
              onClick={() => navigate('/home')} 
              className="flex items-center gap-4 cursor-pointer"
            >
              <div className="shadow-lg shadow-slate-900/20">
                <img src={PORTFOLIO_DATA.logo} alt="Logo" className="h-8" />
              </div>
              <NavLink 
                to="/home" 
                className="text-xl font-bold bg-linear-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent"
              >
                {PORTFOLIO_DATA.personal.handle}
              </NavLink>
            </div>

            <nav className="flex items-center space-x-1 sm:space-x-6">
              {PORTFOLIO_DATA.navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-sky-400 bg-sky-500/10 border border-sky-500/20'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              {/* Show Admin navigation link when authenticated */}
              {isLoggedIn && (
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    `px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`
                  }
                >
                  Admin
                </NavLink>
              )}

              {/* Lock / Logout Action Button */}
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="p-1.5 text-slate-400 hover:text-rose-400 transition-colors duration-200"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="p-1.5 text-slate-500 hover:text-slate-300 transition-colors duration-200"
                  title="Owner Login"
                >
                  <Lock className="w-3.5 h-3.5" />
                </button>
              )}
            </nav>
          </div>
        </div>
      </header>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={() => setIsLoggedIn(true)}
      />
    </>
  );
};

export default Header;