import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import LoggedNav from './LoggedNav';
import SideBar from './SideBar';


function Notification() {
    const notifications = [
        "KIDUS joined your trip: Boston",
        "KIDUS joined your trip: Boston",
        "KIDUS joined your trip: Boston",
        "KIDUS joined your trip: Boston",
        "KIDUS joined your trip: Boston",
        "KIDUS joined your trip: Boston",
        "KIDUS joined your trip: Boston",
        "KIDUS joined your trip: Boston",
        "KIDUS joined your trip: Boston",
        "KIDUS joined your trip: Boston",
        "KIDUS joined your trip: Boston",
        "KIDUS joined your trip: Boston",
    ];

    return (
        <>
        <LoggedNav />
        <div className="bg-gray-50 min-h-screen flex">
              {/* Sidebar */}
              <SideBar />

            {/* Main Content (Right) */}
            <div className="flex-1 p-8">
                <h1 className="text-2xl font-semibold text-blue-500 mb-6">Notifications</h1>

                {/* Notification List */}
                <ul className="space-y-4">
                    {notifications.map((notification, index) => (
                        <li key={index} className="bg-white rounded-md shadow-sm p-4 flex items-center">
                            <FontAwesomeIcon icon={faBell} className="text-yellow-500 mr-2" />
                            <span>{notification}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    );
}

export default Notification;

