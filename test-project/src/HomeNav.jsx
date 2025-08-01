import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo and Site Name */}
      <div className="text-xl font-bold mb-1 flex items-center gap-2 text-black-600">
                  <FontAwesomeIcon icon={faTree} />
                  Trip Planner
              </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6">
        <a href="/" className="text-blue-600 font-medium transition">
          Home
        </a>
        <a href="/signup" onClick={() => navigate('/signup')} className="text-gray-700 hover:text-blue-600 font-medium transition">
          Sign Up
        </a>
        <a href="/signin" onClick={() => navigate('/signin')} className="text-gray-700 hover:text-blue-600 font-medium transition">
          Login
        </a>
      </nav>
    </header>
  );
};
export default Header;