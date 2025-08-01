import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoggedNav from './LoggedNav';
import SideBar from './SideBar';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const HelpCenter = () => {
  return (
    <>
      <LoggedNav />

      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <SideBar />
      </div>

      <div className="bg-gray-50 min-h-screen flex flex-col lg:flex-row pt-16 lg:pt-0">
        {/* Sidebar for desktop */}
        <div className="hidden lg:block lg:w-64 bg-white shadow-md">
          <SideBar />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <h1 className="text-xl sm:text-2xl font-semibold text-blue-500 flex items-center mb-4">
            <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
            Help Center
          </h1>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            Here you'll find guidance on using your account and making the most of your travel planner. If something
            isn't working as expected, we're here to help!
          </p>

          {/* Help Topics */}
          <ul className="list-disc list-inside text-gray-700 space-y-3 text-sm sm:text-base">
            <li>
              <span className="font-semibold">Editing Your Profile:</span> Update your name, email, and other info from the{" "}
              <span className="text-blue-500 hover:underline cursor-pointer">Edit Profile</span> section.
            </li>
            <li>
              <span className="font-semibold">Resetting Your Password:</span> Click “Forgot password?” on the login page or contact support for help.
            </li>
            <li>
              <span className="font-semibold">Updating Preferences:</span> Keep your travel settings updated for better suggestions.
            </li>
            <li>
              <span className="font-semibold">Managing Notifications:</span> Visit the{" "}
              <span className="text-blue-500 hover:underline cursor-pointer">Notifications</span> page to customize updates.
            </li>
            <li>
              <span className="font-semibold">Need More Help?</span> Email us at{" "}
              <a href="mailto:KoDah@gmail.com" className="text-blue-500 hover:underline">KoDah@gmail.com</a> — we’ll respond quickly.
            </li>
          </ul>

          {/* Tip Box */}
          <div className="bg-yellow-100 p-4 rounded-md text-sm text-gray-700 mt-6">
            <span className="font-semibold">Tip:</span> Browse our FAQ and use live chat during business hours for quick support.
          </div>
        </main>
      </div>
    </>
  );
};

export default HelpCenter;
