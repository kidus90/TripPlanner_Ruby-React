import React from 'react';
import { useNavigate } from 'react-router-dom';
import InviteButton from './InviteButton';

const TripDetail = ({ isOpen, tripData }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50 px-4 sm:px-6 overflow-y-auto"
      style={{ backgroundImage: `url('images/create_home.png')` }}
    >
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md my-8">
        {/* Header */}
        <div className="relative p-4 pb-2">
          <button
            onClick={() => navigate('/Active-trip')}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
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
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex justify-center mb-2">
            <img
              src="images/Alps.png"
              alt="Trip Avatar"
              className="w-20 h-20 rounded-full border-4 border-white"
            />
          </div>
          <h2 className="text-center text-xl font-semibold text-blue-500">{city}</h2>
        </div>

        {/* Details */}
        <div className="p-4 space-y-3 text-sm sm:text-base">
          {[
            { label: 'Destination', value: destination },
            { label: 'Start Date', value: startDate },
            { label: 'End Date', value: endDate },
            { label: 'Description', value: description },
            { label: 'Email', value: email },
            { label: 'Transportation', value: transportation },
            { label: 'Number of Travelers', value: numberOfTravelers },
            { label: 'Trip Cost', value: `$${tripCost}` },
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-md py-2 px-3">
              <strong>{item.label}:</strong> {item.value}
            </div>
          ))}
        </div>

        {/* Invite */}
        <div className="p-4 flex flex-col sm:flex-row gap-2 border-t border-gray-200">
          <input
            type="email"
            placeholder="Invite by email..."
            className="flex-grow rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring focus:ring-blue-500 text-sm"
          />
          <InviteButton />
        </div>
      </div>
    </div>
  );
};

export default TripDetail;
