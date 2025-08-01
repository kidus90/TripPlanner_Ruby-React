import React from 'react';
import LoggedNav from './LoggedNav';
import SideBar from './SideBar'; // Ensure this is the mobile-optimized version
import { useNavigate } from 'react-router-dom';

function EditProfile() {
  const navigate = useNavigate();

  return (
    <>
      <LoggedNav />

      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <SideBar />
      </div>

      {/* Desktop Layout */}
      <div className="bg-gray-50 min-h-screen flex flex-col lg:flex-row pt-16 lg:pt-0">
        {/* Sidebar - Desktop Only */}
        <div className="hidden lg:block lg:w-64 lg:min-h-screen bg-white shadow-md">
          <SideBar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8">
          <h1 className="text-xl sm:text-2xl font-semibold text-blue-500 mb-4 sm:mb-6 text-center lg:text-left">
            Account
          </h1>

          {/* User Info */}
          <div className="flex flex-col sm:flex-row items-center mb-6">
            <img
              src="images/Depth 6, Frame 1.png"
              alt="Profile"
              className="rounded-full w-20 h-20 mb-4 sm:mb-0 sm:mr-4"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-lg font-medium">KIDUS</h2>
              <p className="text-gray-500 text-sm">kidus.amare@bitscollege.edu.et</p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-md shadow-sm p-4 text-center">
              <h3 className="text-gray-600 text-sm">Trips Taken</h3>
              <p className="text-2xl font-semibold">19</p>
            </div>
            <div className="bg-white rounded-md shadow-sm p-4 text-center">
              <h3 className="text-gray-600 text-sm">Traveler Level</h3>
              <div className="flex justify-center items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                <span className="font-semibold">Silver Voyager</span>
              </div>
            </div>
          </div>

          {/* Account Settings Form */}
          <div className="bg-white rounded-md shadow-sm p-4 sm:p-6 mb-6">
            <h2 className="text-lg font-medium text-gray-700 mb-4 text-center sm:text-left">Account Settings</h2>
            <form className="space-y-4">
              {[
                { id: 'displayName', label: 'Display Name (required)', type: 'text' },
                { id: 'email', label: 'Email (required)', type: 'email', value: 'kidus.amare@bitscollege.edu.et', readOnly: true },
                { id: 'country', label: 'Country (required)', type: 'text' },
                { id: 'phoneNumber', label: 'Phone Number', type: 'tel' },
                { id: 'password', label: 'Password', type: 'password' },
              ].map(({ id, label, type, value, readOnly }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-1">
                    {label}
                  </label>
                  <input
                    type={type}
                    id={id}
                    value={value}
                    readOnly={readOnly}
                    className={`w-full rounded-md border border-gray-300 p-2 ${
                      readOnly ? 'bg-gray-100 cursor-not-allowed' : ''
                    } focus:outline-none focus:ring-2 focus:ring-blue-400`}
                  />
                </div>
              ))}

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full sm:w-auto"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/Home')}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md w-full sm:w-auto"
                >
                  Delete Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
