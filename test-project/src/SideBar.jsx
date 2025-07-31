import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faBell, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-64 min-h-screen bg-white ">
      <nav className="p-4 space-y-2">
        <a
          href="/Edit-Profile"
          onClick={e => { e.preventDefault(); navigate('/Edit-Profile'); }}
          className={`block p-2 hover:bg-gray-100 rounded-md flex items-center ${
            location.pathname === '/Edit-Profile' ? 'text-blue-500' : 'text-gray-700'
          }`}
        >
          <FontAwesomeIcon icon={faPencilAlt} className="mr-2" />
          Edit profile
        </a>
        <a
          href="/Notification"
          onClick={e => { e.preventDefault(); navigate('/Notification'); }}
          className={`block p-2 hover:bg-gray-100 rounded-md flex items-center ${
            location.pathname === '/Notification' ? 'text-blue-500' : 'text-gray-700'
          }`}
        >
          <FontAwesomeIcon icon={faBell} className="mr-2" />
          Notification
        </a>
        <a
          href="/Help-center"
          onClick={e => { e.preventDefault(); navigate('/Help-center'); }}
          className={`block p-2 hover:bg-gray-100 rounded-md flex items-center ${
            location.pathname === '/Help-center' ? 'text-blue-500' : 'text-gray-700'
          }`}
        >
          <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
          Help
        </a>
      </nav>
    </div>
  );
};

export default SideBar;
