import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="h-fit w-full bg-slate-500/25 shadow-xs">
      <div className="flex items-center justify-center py-4">
        <nav className="flex space-x-5">
          <NavLink to='/home' className="text-lg font-normal text-slate-800 hover:text-blue-500 lg:text-lg">
              Home
          </NavLink>
          <NavLink to='/blog' className="text-lg font-normal text-slate-800 hover:text-blue-500 lg:text-lg">
              Blog
          </NavLink>
          <NavLink to='/chatbot' className="text-lg font-normal text-slate-800 hover:text-blue-500 lg:text-lg">
              Chatbot
          </NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Header
