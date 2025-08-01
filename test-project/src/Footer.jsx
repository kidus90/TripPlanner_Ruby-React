import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-yellow-50 py-8 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Text */}
        <p className="text-xl sm:text-2xl font-semibold mb-6">
          We're not saying we plan the best trips... but even Google Maps gets jealous.
        </p>

        {/* Contact Button */}
        <button
          onClick={() => navigate('/Help-center')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded mb-6"
        >
          Contact Us
        </button>

        {/* Contact Info */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm sm:text-base justify-items-center sm:justify-items-start">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <FontAwesomeIcon icon={faPhone} className="text-blue-500 w-5 h-5" />
            <span>+251 91 333 6375</span>
          </div>
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 w-5 h-5" />
            <span>tripplaner@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <FontAwesomeIcon icon={faLocationDot} className="text-blue-500 w-5 h-5" />
            <span>Bole, Addis Ababa</span>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 mt-8 text-xs sm:text-sm">
          © 2025 TripPlan, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
