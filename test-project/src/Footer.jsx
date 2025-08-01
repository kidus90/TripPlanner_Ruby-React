import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';



function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-yellow-50 py-8">
      <div className="container mx-auto text-center">
        {/* Main Text */}
        <p className="text-3xl mb-4 text-bold">
          We're not saying we plan the best trips... but even Google Maps gets jealous.
        </p>

        {/* Contact Button */}
        <button href="/Help-center" onClick={() => navigate('/Help-center')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Contact Us
        </button>
        {/* Contact Info */}
        <div className="mt-8 flex justify-center items-center space-x-8">
            {/* Phone Number */}
            <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faPhone} className="text-blue-500 w-6 h-6" />
                <span>+251 91 333 6375</span>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 w-6 h-6" />
                <span>tripplaner@gmail.com</span>
            </div>

            {/* Address */}
            <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faLocationDot} className="text-blue-500 w-6 h-6" />
                <span>Bole, Addis Ababa</span>
            </div>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 mt-6 text-sm">
          © 2025 TripPlan, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
