import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPencilAlt, faBell, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import LoggedNav from './LoggedNav';
import SideBar from './SideBar';

function EditProfile() {
  return (
    <>
    <LoggedNav />
        <div className="bg-gray-50 min-h-screen flex">
          
      {/* Header */}
          {/* Sidebar */}
          <div className="w-64 bg-white shadow-md">
            <SideBar />
          </div>

      {/* Main Content (Right) */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-semibold text-blue-500 mb-6">Account</h1>

        {/* User Info */}
        <div className="flex items-center mb-6">
          <img
                      src="images/Depth 6, Frame 1.png"
            alt="Profile"
            className="rounded-full w-20 h-20 mr-4"
          />
          <div>
            <h2 className="text-lg font-medium">KIDUS</h2>
            <p className="text-gray-500 text-sm">kidus.amare@bitscollege.edu.et</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-md shadow-sm p-4 text-center">
            <h3 className="text-gray-600 text-sm">Trips Taken</h3>
            <p className="text-2xl font-semibold">19</p>
          </div>
          <div className="bg-white rounded-md shadow-sm p-4 text-center">
            <h3 className="text-gray-600 text-sm">Traveler Level</h3>
            <div className="flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              <p className="text-md font-semibold"> Silver Voyager</p>
            </div>
          </div>
        </div>

        {/* Account Settings Form */}
        <div className="bg-white rounded-md shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Account Settings</h2>
          <div className="mb-4">
            <label htmlFor="displayName" className="block text-gray-700 text-sm font-bold mb-2">
              Display Name (required)
            </label>
            <input
              type="text"
              id="displayName"
              className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email (required)
            </label>
            <input
              type="email"
              id="email"
              value="kidus.amare@bitscollege.edu.et"
                            className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              readOnly
            />
          </div>

          <div className="mb-4">
            <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">
              Country (required)
            </label>
            <input
              type="text"
              id="country"
              className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <button
          className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Update
          </button>
        </div>

        {/* Delete Account Button */}
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-8">
          DELETE ACCOUNT
        </button>
      </div>
    </div>
    </>

  );
}

export default EditProfile;


