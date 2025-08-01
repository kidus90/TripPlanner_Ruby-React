import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SuggestionNav = () => {
  return (
    <header className="bg-white shadow flex items-center justify-between px-6 py-4">
          {/* Logo & Title */}
            <div className="text-xl font-bold mb-1 flex items-center gap-2 text-black-600">
                <FontAwesomeIcon icon={faTree} />
                Trip Planner
            </div>

      {/* Navigation Links */}
      <nav className="flex items-center space-x-6">
        <a href="/" className="text-gray-700 hover:text-blue-600 transition font-medium">Home</a>
        <a href="/trips" className="text-gray-700 hover:text-blue-600 transition font-medium">Trips</a>
        <a href="/suggestion" className="text-gray-700 hover:text-blue-600 transition font-medium">Suggestion</a>
        <a href="/signin" className="text-gray-700 hover:text-blue-600 transition font-medium">Sign In</a>
      

      {/* Search Bar */}
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
      </nav>
    </header>
  );
};

export default SuggestionNav;
