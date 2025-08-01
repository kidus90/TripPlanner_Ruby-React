import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPencilAlt, faBell, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div className="bg-white shadow-md lg:w-64 w-full lg:min-h-screen">
      {/* Mobile Toggle Button */}
      <div className="lg:hidden p-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-semibold">Menu</h2>
        <button onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faBars} className="text-gray-700 text-xl" />
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav className={`p-4 space-y-2 ${isOpen ? 'block' : 'hidden'} lg:block`}>
        <button
          onClick={() => handleNavigate('/Edit-Profile')}
          className={`block w-full text-left p-2 hover:bg-gray-100 rounded-md flex items-center ${
            location.pathname === '/Edit-Profile' ? 'text-blue-500' : 'text-gray-700'
          }`}
        >
          <FontAwesomeIcon icon={faPencilAlt} className="mr-2" />
          Edit profile
        </button>
        <button
          onClick={() => handleNavigate('/Notification')}
          className={`block w-full text-left p-2 hover:bg-gray-100 rounded-md flex items-center ${
            location.pathname === '/Notification' ? 'text-blue-500' : 'text-gray-700'
          }`}
        >
          <FontAwesomeIcon icon={faBell} className="mr-2" />
          Notification
        </button>
        <button
          onClick={() => handleNavigate('/Help-center')}
          className={`block w-full text-left p-2 hover:bg-gray-100 rounded-md flex items-center ${
            location.pathname === '/Help-center' ? 'text-blue-500' : 'text-gray-700'
          }`}
        >
          <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
          Help
        </button>
      </nav>
    </div>
  );
};

export default SideBar;
