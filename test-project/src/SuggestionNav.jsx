import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';

const SuggestionNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      {/* Top Row */}
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <div className="text-xl font-bold flex items-center gap-2 text-black">
          <FontAwesomeIcon icon={faTree} />
          Trip Planner
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 lg:hidden focus:outline-none"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Search Bar (Desktop) */}
        <div className="hidden lg:block relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav
        className={`flex flex-col lg:flex-row lg:items-center lg:justify-between px-4 sm:px-6 lg:px-8 space-y-4 lg:space-y-0 lg:space-x-6 transition-all duration-300 ${
          menuOpen ? 'block' : 'hidden lg:flex'
        }`}
      >
        <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
        <a href="/trips" className="text-gray-700 hover:text-blue-600 font-medium">Trips</a>
        <a href="/suggestion" className="text-gray-700 hover:text-blue-600 font-medium">Suggestion</a>
        <a href="/signin" className="text-gray-700 hover:text-blue-600 font-medium">Sign In</a>

        {/* Search Bar (Mobile) */}
        <div className="lg:hidden relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </div>
      </nav>
    </header>
  );
};

export default SuggestionNav;
