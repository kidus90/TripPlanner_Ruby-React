import React, { useState } from 'react';
import { faTree, faBars, faTimes, faBell, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const LoggedNav = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 relative">
      {/* Logo & Title */}
      <div className="text-xl font-bold flex items-center gap-2 text-black-600">
        <FontAwesomeIcon icon={faTree} />
        Trip Planner
      </div>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="sm:hidden">
        <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-blue-600 focus:outline-none">
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="h-6 w-6" />
        </button>
      </div>

      {/* Desktop Navigation & Icons */}
      <nav className="hidden sm:flex items-center space-x-6">
        <a href="/Suggested" onClick={() => navigate('/Suggested')} className="text-gray-700 hover:text-blue-600 transition">Explore</a>
        <a href="/create" onClick={() => navigate('/create')} className="text-gray-700 hover:text-blue-600 transition">Trips</a>
        <a href="/Home" onClick={() => navigate('/Home')} className="text-gray-700 hover:text-red-500 transition">Log out</a>

        {/* Notification Icon */}
        <button className="relative">
          <FontAwesomeIcon icon={faBell} className="text-blue-500" />
        </button>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 w-48"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </div>

        {/* Profile Icon */}
        <button onClick={() => navigate('/Edit-Profile')}>
          <img src="images/Mountain.png" alt="User Profile" className="h-8 w-8 rounded-full" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 z-50">
          <div className="flex flex-col items-center space-y-4">
            <a href="/Suggested" onClick={() => { navigate('/Suggested'); setIsMobileMenuOpen(false); }} className="text-gray-700 hover:text-blue-600 transition w-full text-center py-2">Explore</a>
            <a href="/create" onClick={() => { navigate('/create'); setIsMobileMenuOpen(false); }} className="text-gray-700 hover:text-blue-600 transition w-full text-center py-2">Trips</a>
            <a href="/Home" onClick={() => { navigate('/Home'); setIsMobileMenuOpen(false); }} className="text-gray-700 hover:text-red-500 transition w-full text-center py-2">Log out</a>

            {/* Mobile Search Bar */}
            <div className="relative w-3/4">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
            </div>

            {/* Notification and Profile Icons in Mobile Menu */}
            <div className="flex space-x-6 mt-4">
                <button className="relative">
                    <FontAwesomeIcon icon={faBell} className="text-blue-500 h-6 w-6" />
                </button>
                <button onClick={() => { navigate('/Edit-Profile'); setIsMobileMenuOpen(false); }}>
                    <img src="images/Mountain.png" alt="User Profile" className="h-8 w-8 rounded-full" />
                </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default LoggedNav;