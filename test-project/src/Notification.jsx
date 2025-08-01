import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import LoggedNav from './LoggedNav';
import SideBar from './SideBar';

function Notification() {
  const notifications = Array(12).fill("KIDUS joined your trip: Boston");

  return (
    <>
      <LoggedNav />

      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <SideBar />
      </div>

      <div className="bg-gray-50 min-h-screen flex flex-col lg:flex-row pt-16 lg:pt-0">
        {/* Sidebar for Desktop */}
        <div className="hidden lg:block lg:w-64 bg-white shadow-md">
          <SideBar />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <h1 className="text-xl sm:text-2xl font-semibold text-blue-500 mb-4">Notifications</h1>
          <ul className="space-y-4">
            {notifications.map((note, index) => (
              <li
                key={index}
                className="bg-white rounded-md shadow-sm px-4 py-3 flex items-center gap-3 text-sm sm:text-base"
              >
                <FontAwesomeIcon icon={faBell} className="text-yellow-500" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}

export default Notification;
