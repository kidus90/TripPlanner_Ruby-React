import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import LoggedNav from './LoggedNav';
import SideBar from './SideBar';
import { getNotifications } from '../api';

function Notification() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const notes = await getNotifications();
        setNotifications(notes);
      } catch (err) {
        setError('Failed to load notifications.');
      } finally {
        setLoading(false);
      }
    };
    fetchNotifications();
  }, []);

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
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div className="text-red-600">{error}</div>
          ) : notifications.length === 0 ? (
            <div className="text-gray-500">No notifications.</div>
          ) : (
            <ul className="space-y-4">
              {notifications.map((note, index) => (
                <li
                  key={note.id || index}
                  className="bg-white rounded-md shadow-sm px-4 py-3 flex items-center gap-3 text-sm sm:text-base"
                >
                  <FontAwesomeIcon icon={faBell} className="text-yellow-500" />
                  <span>{note.message}</span>
                </li>
              ))}
            </ul>
          )}
        </main>
      </div>
    </>
  );
}

export default Notification;
