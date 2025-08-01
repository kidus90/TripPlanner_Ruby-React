import React from 'react';
import Footer from './Footer';
import LoggedNav from './LoggedNav';
import { useNavigate } from 'react-router-dom';

const SuggestedTripCard = ({ city, startDate, endDate, availableTravelers }) => {
  const navigate = useNavigate(); 

  return (
    <div className="bg-white rounded-lg shadow-md m-4 p-4 flex flex-col lg:flex-row items-center lg:items-start">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:mr-4">
        <img
          src="https://via.placeholder.com/400x200"
          alt="Trip"
          className="rounded-lg w-full h-auto"
        />
      </div>

      {/* Trip Details Section */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{city}</h2>
        <p className="text-gray-600 text-sm sm:text-base">{startDate} - {endDate}</p>
        <p className="text-gray-600 text-sm sm:text-base">Available Travelers: {availableTravelers}</p>
        <button
          onClick={() => navigate('/Active-trip')}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4 transition"
        >
          Book Now
        </button>
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
      <div className="bg-gray-100 min-h-screen pt-20 sm:pt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 text-center sm:text-left">
            Suggested Trips
          </h1>
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
