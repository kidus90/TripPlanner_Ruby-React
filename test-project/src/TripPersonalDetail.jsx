import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import InviteButton2 from './InviteButton2';

const PersonalTripDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tripData = location.state?.trip;
  if (!tripData) return null;

  const {
    title,
    city,
    location: destination,
    start_date,
    end_date,
    description,
    email,
    travel_type,
    traveler_number,
    cost,
    photo_url
  } = tripData;

  return (
    <div
      className="fixed inset-0 z-50 bg-gray-600 bg-opacity-50 overflow-y-auto flex items-center justify-center px-4 sm:px-6"
      style={{ backgroundImage: `url('images/create_home.png')` }}
    >
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full my-8">
        {/* Header */}
        <div className="relative p-4">
          <button
            onClick={() => navigate('/personal-trip')}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex justify-center mb-2">
            <img
              src={photo_url || "images/Alps.png"}
              alt="Trip Avatar"
              className="w-20 h-20 rounded-full border-4 border-white"
            />
          </div>
          <h2 className="text-center text-xl font-semibold text-blue-500">{title || city}</h2>
        </div>

        {/* Trip Details */}
        <div className="p-4 space-y-3 text-sm sm:text-base">
          {[
            { label: 'Destination', value: destination },
            { label: 'Start Date', value: start_date },
            { label: 'End Date', value: end_date },
            { label: 'Description', value: description },
            { label: 'Email', value: email },
            { label: 'Transportation', value: travel_type },
            { label: 'Number of Travelers', value: traveler_number },
            { label: 'Trip Cost', value: cost ? `$${cost}` : undefined },
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-md py-2 px-3">
              <strong>{item.label}:</strong> {item.value}
            </div>
          ))}
        </div>

        {/* Invite Section */}
        <div className="p-4 flex flex-col sm:flex-row gap-2 border-t border-gray-200">
          <input
            type="email"
            placeholder="Invite by email..."
            className="flex-grow rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring focus:ring-blue-500 text-sm"
          />
          <InviteButton2 />
        </div>
      </div>
    </div>
  );
};

export default PersonalTripDetail;
