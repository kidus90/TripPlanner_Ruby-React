import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TripNav() {
  const [view] = useState('home');
  const navigate = useNavigate();

  const renderContent = () => {
    switch (view) {
      case 'create':
        return <div className="mt-4 text-green-700 font-bold">Create Trip Page</div>;
      case 'mytrips':
        return <div className="mt-4 text-blue-700 font-bold">My Trips Page</div>;
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row justify-start  space-y-2 sm:space-y-0 sm:space-x-4">
        <button
          onClick={() => navigate('/create')}
          className={`py-2 px-4 font-semibold focus:outline-none ${
            view === 'create'
              ? 'text-gray-700 border-b-2 border-green-500'
              : 'text-gray-400 hover:text-gray-700'
          }`}
        >
          Create Trip
        </button>
        <button
          onClick={() => navigate('/Active-trip')}
          className={`py-2 px-4 font-semibold focus:outline-none ${
            view === 'mytrips'
              ? 'text-blue-600 border-b-2 border-blue-500'
              : 'text-gray-400 hover:text-gray-700'
          }`}
        >
          My Trips
        </button>
      </div>
      {renderContent()}
    </div>
  );
}

export default TripNav;
