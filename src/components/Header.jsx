import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="h-fit w-full bg-slate-500/25 shadow-sm">
      <div className="flex items-center justify-center py-4">
        <nav className="flex space-x-5">
          <NavLink to='/home'>
            <a
              href=""
              className="text-lg font-normal text-slate-800 hover:text-blue-500 lg:text-lg"
            >
              Home
            </a>
          </NavLink>
          <NavLink to='/blog'>
            <a
              href=""
              className="text-lg font-normal text-slate-800 hover:text-blue-500 lg:text-lg"
            >
              Blog
            </a>
          </NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Header
