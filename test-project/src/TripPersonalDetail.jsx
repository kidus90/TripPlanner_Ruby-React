import React from 'react';
import { useNavigate } from 'react-router-dom';
import InviteButton2 from './InviteButton2';

const PersonalTripDetail = ({ isOpen, tripData }) => {
  const navigate = useNavigate();
  if (!isOpen) {
    return null;
  }

  const {
    city,
    destination,
    startDate,
    endDate,
    description,
    email,
    transportation,
    numberOfTravelers,
    tripCost,
  } = tripData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50"style={{ backgroundImage: `url('images/create_home.png')` }}>
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md w-full">
        {/* Header */}
        <div className="relative p-4">
          <button
            onClick={() => navigate('/personal-trip')}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex justify-center">
            <img
              src="images/Alps.png"
              alt="Trip Avatar"
              className="w-20 h-20 rounded-full border-4 border-white absolute -top-0.5 "
            />
          </div>
          <h2 className="text-center text-xl font-semibold mt-15 text-blue-500">{city}</h2> {/* City text blue */}
        </div>

        {/* Details */}
        <div className="p-4 space-y-2 ">
          <div className="bg-gray-50 rounded-md py-2 px-3">
            <strong>Destination:</strong> {destination}
          </div>
          <div className="bg-gray-50 rounded-md py-2 px-3">
            <strong>Start Date:</strong> {startDate}
          </div>
          <div className="bg-gray-50 rounded-md py-2 px-3">
            <strong>End Date:</strong> {endDate}
          </div>
          <div className="bg-gray-50 rounded-md py-2 px-3">
            <strong>Description:</strong> {description}
          </div>
          <div className="bg-gray-50 rounded-md py-2 px-3">
            <strong>Email:</strong> {email}
          </div>
          <div className="bg-gray-50 rounded-md py-2 px-3">
            <strong>Transportation:</strong> {transportation}
          </div>
          <div className="bg-gray-50 rounded-md py-2 px-3">
            <strong>Number of Travelers:</strong> {numberOfTravelers}
          </div>
          <div className="bg-gray-50 rounded-md py-2 px-3">
            <strong>Trip Cost:</strong> ${tripCost}
          </div>
        </div>

        {/* Invite Section */}
        <div className="p-4 flex items-center gap-2 border-t border-gray-200">
          <input
            type="email"
            placeholder="Invite by email..."
            className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
          <InviteButton2 />
        </div>
      </div>
    </div>
  );
};

export default PersonalTripDetail;
