import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold flex items-center gap-2 text-gray-700">
          <FontAwesomeIcon icon={faTree} />
          Trip Planner
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <button onClick={() => navigate('/')} className="text-blue-600 font-medium hover:underline">
            Home
          </button>
          <button onClick={() => navigate('/signup')} className="text-gray-700 hover:text-blue-600 font-medium">
            Sign Up
          </button>
          <button onClick={() => navigate('/signin')} className="text-gray-700 hover:text-blue-600 font-medium">
            Login
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700 text-xl"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden mt-4 space-y-3 text-center">
          <button onClick={() => navigate('/')} className="block w-full text-blue-600 font-medium py-2 hover:bg-gray-100">
            Home
          </button>
          <button onClick={() => navigate('/signup')} className="block w-full text-gray-700 font-medium py-2 hover:bg-gray-100">
            Sign Up
          </button>
          <button onClick={() => navigate('/signin')} className="block w-full text-gray-700 font-medium py-2 hover:bg-gray-100">
            Login
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
