import React from 'react';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const LoggedNav = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-white shadow flex items-center justify-between px-6 py-4">
      {/* Logo & Title */}
        <div className="text-xl font-bold mb-1 flex items-center gap-2 text-black-600">
            <FontAwesomeIcon icon={faTree} />
            Trip Planner
        </div>
      

      {/* Navigation & Icons */}
      <nav className="flex items-center space-x-6">
        <a href="/Suggested" onClick={() => navigate('/Suggested')} className="text-gray-700 hover:text-blue-600 transition">Explore</a>
        <a href="/create" onClick={() => navigate('/create')} className="text-gray-700 hover:text-blue-600 transition">Trips</a>
        <a href="/Home" onClick={() => navigate('/Home')} className="text-gray-700 hover:text-red-500 transition">Log out</a>

        {/* Notification Icon */}
        <button className="relative">
          <FontAwesomeIcon icon={faBell} className="text-blue-500 mr-2" />
        </button>

        <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
              </div>

        {/* Profile Icon */}
        <button>
          <img src="images/Mountain.png" alt="User Profile" className="h-8 w-8 rounded-full" />
        </button>
      </nav>
    </header>
  );
};

export default LoggedNav;
