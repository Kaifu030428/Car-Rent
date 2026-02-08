import React, { useState } from 'react'
import { assets, menuLinks } from '../assets/assets'
import { Link, useLocation, useNavigate } from "react-router-dom"


const NavBar = ({ setShowLogin }) => {

  const locations = useLocation();
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <nav
      className={`
        w-full flex items-center justify-between px-6 py-4 shadow-sm border-b
        ${locations.pathname === '/' ? "bg-light" : "bg-white"}
      `}
      aria-label="Main navigation"
    >

      {/* Logo */}
      <Link to='/' aria-label="Go to home page">
        <img className="h-12 cursor-pointer" src={assets.logo} alt="Car rental logo" />
      </Link>

      {/* Desktop + Mobile Menu */}
      <div
        className={`
          flex items-center gap-8 transition-all duration-300

          sm:flex

          max-sm:fixed max-sm:top-0 max-sm:right-0 
          max-sm:h-full max-sm:w-3/4 
          max-sm:bg-white max-sm:flex-col 
          max-sm:pt-24 max-sm:shadow-xl 
          max-sm:z-40
          ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}
        `}
      >

        {/* Menu Links */}
        {menuLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            onClick={() => setOpen(false)}
            aria-label={`Navigate to ${link.name}`}
            className={`
              text-lg font-medium
              text-gray-700 hover:text-blue-600 transition

              ${locations.pathname === link.path ? "text-blue-600 font-semibold" : ""}
            `}
          >
            {link.name}
          </Link>
        ))}

        {/* Search Box (Desktop Only) */}
        <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2">
          <input 
            className="bg-transparent outline-none text-sm w-40" 
            type="text" 
            placeholder="Search Products" 
          />
          <img className="w-5 h-5 opacity-60" src={assets.search_icon} alt="Search" />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-6 sm:mt-0">
          <button
            onClick={() => navigate('/owner')}
            className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Dashboard
          </button>

          <button
            onClick={() => setShowLogin(true)}
            className="px-4 py-2 text-sm font-medium border border-gray-400 rounded-full hover:bg-gray-100 transition"
          >
            Login
          </button>
        </div>

      </div>

      {/* Mobile Hamburger / Close Button */}
      <button 
        className="sm:hidden z-999 absolute top-6 right-6" 
        onClick={() => setOpen(!open)}
      >
        <img
          className="w-7 h-7"
          src={open ? assets.close_icon : assets.menu_icon}
          alt="menu"
        />
      </button>

    </nav>
  )
}

export default NavBar
