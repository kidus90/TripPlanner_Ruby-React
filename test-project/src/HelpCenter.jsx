import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoggedNav from './LoggedNav';
import SideBar from './SideBar';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const HelpCenter = () => {
  return (
    <>
    <LoggedNav />
    <div className="bg-gray-50 min-h-screen flex">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-semibold text-blue-500 flex items-center mb-4">
          <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
          Help Center
        </h1>
        <p className="text-gray-700 mb-4">
          Here you'll find guidance on using your account and making the most of your travel planner. If something
          isn't working as expected, we're here to help!
        </p>

        {/* Help Topics */}
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            <span className="font-semibold">Editing Your Profile:</span> Update your name, email, and other personal info from the
            <a href="#" className="text-blue-500 hover:underline">Edit Profile</a> section.
          </li>
          <li>
            <span className="font-semibold">Resetting Your Password:</span> Click on "Forgot password?" on the login page or contact support for
            help.
          </li>
          <li>Updating Country & Preferences: Keep your travel preferences accurate for better suggestions.</li>
          <li>
            <span className="font-semibold">Managing Notifications:</span> Visit the
            <a href="#" className="text-blue-500 hover:underline">Notifications</a> page to adjust what updates you receive.
          </li>
          <li>
                        <span className="font-semibold">Need More Help?</span> Reach us via email at
            <a href="mailto:KoDah@gmail.com" className="text-blue-500 hover:underline">KoDah@gmail.com</a> and we'll respond as soon as possible.
          </li>
        </ul>

        {/* Tip */}
        <div className="bg-yellow-100 p-3 rounded-md text-sm text-gray-700 mb-4">
          <span className="font-semibold">Tip:</span> You can also browse our FAQ section and chat with support during business hours.
        </div>

        
      </div>
    </div>
    </>
  );
};

export default HelpCenter;

