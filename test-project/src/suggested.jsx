import React from 'react';
import Footer from './Footer';
import LoggedNav from './LoggedNav';
import { useNavigate } from 'react-router-dom';

// ✅ FIXED: useNavigate added inside this component
const SuggestedTripCard = ({ city, startDate, endDate, availableTravelers }) => {
  const navigate = useNavigate(); // moved here

  return (
    <div className="bg-white rounded-lg shadow-md flex items-center m-4 p-4">
      {/* Left Side - Trip Details */}
      <div className="w-1/2 p-4">
        <h2 className="text-xl font-semibold text-gray-800">{city}</h2>
        <p className="text-gray-600">{startDate} - {endDate}</p>
        <p className="text-gray-600">Available Number of Travelers: {availableTravelers}</p>
        <button
          onClick={() => navigate('/Active-trip')}
          className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Book Now
        </button>
      </div>
      {/* Right Side - Image */}
      <div className="w-1/2">
        <img
          src="https://via.placeholder.com/400x200"
          alt="Trip"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

const Suggested = () => {
  const tripData = {
    city: "Boston",
    startDate: "2025-07-17",
    endDate: "2026-06-08",
    availableTravelers: 0,
  };

  return (
    <>
      <LoggedNav />
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Suggested Trips</h1>
          <SuggestedTripCard
            city={tripData.city}
            startDate={tripData.startDate}
            endDate={tripData.endDate}
            availableTravelers={tripData.availableTravelers}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Suggested;
