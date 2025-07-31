// import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import LoggedNav from './LoggedNav';
import Footer from './Footer';
import TripNav from './TripNav';
import TripTab from './TripTab';
import { useNavigate } from 'react-router-dom';

library.add(fab);

const TripItem = ({ city, startDate, endDate, navigate }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="mr-4">
          <img
            src="https://via.placeholder.com/50"
            alt={city}
            className="w-12 h-12 rounded-full"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{city}</h3>
          <p className="text-gray-600">{startDate} to {endDate}</p>
        </div>
      </div>

      {/* Icons Section */}
      <div className="flex gap-2">
        <button herf="/Personal-Trip-detail'" onClick={() => navigate('/Personal-Trip-detail')} className="text-blue-500 hover:text-blue-700 focus:outline-none">
          <FontAwesomeIcon icon={faEye} />
        </button>
        <button onClick={() => navigate('/edit-trip')} className="text-blue-500 hover:text-blue-700 focus:outline-none">
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button className="text-red-500 hover:text-red-700 focus:outline-none">
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
};
const PersonalTrips = () => {
  const navigate = useNavigate();
  const trips = [
    { city: 'Babogaya', startDate: '2025-07-17', endDate: '2026-06-08' },
  ];


  

  return (
    <>
    <LoggedNav />
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-start sm:py-2 "style={{ backgroundImage: `url('images/create_home.png')` }}>
      {/* Header Section */}
      {/* <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(images/create_home.png)` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto py-24 px-100 text-center relative z-10">
          <h2 className="text-5xl font-cursive font-bold text-white mb-4">Create your Own Trip</h2>
          <p className="mt-2 text-lg text-gray-200">
            Plan your Dream Vacation with our easy-to-use trip planning tool. Customize your trip with destination details, travel dates, and more
          </p>
        </div>
      </div> */}

      {/* Tab Navigation */}
        <TripNav />

      {/* Trip List Section */}
      
      <div className="flex  justify-center min-h-screen px-6 py-12 bg-cover bg-center" >
          <div className="w-full max-w-4xl bg-white bg-opacity-90 shadow-xl rounded-3xl px-10 pt-6 pb-8">
            <h2 className="text-2xl font-semibold mb-4">ACTIVE TRIPS</h2>

            <TripTab />

        <div>
          {trips.map((trip, index) => (
            <TripItem
              key={index}
              city={trip.city}
              startDate={trip.startDate}
              endDate={trip.endDate}
              navigate={navigate}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
    <Footer />
    </>
  );
};

export default PersonalTrips;
