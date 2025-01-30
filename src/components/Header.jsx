import React from 'react'

const Header = () => {
  return (
    <div className="h-fit w-full bg-slate-500/25">
      <div className="flex items-center justify-center py-4">
        <ul className="flex space-x-5">
          <li>
            <a
              href="#home"
              className="text-lg font-normal text-slate-800 hover:text-blue-500 lg:text-lg"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="blog.html"
              className="text-lg font-normal text-slate-800 hover:text-blue-500 lg:text-lg"
            >
              Blog
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
