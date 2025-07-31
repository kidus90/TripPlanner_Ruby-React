import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function TripTabs() {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine active tab from path
  let activeTab = 'personal';
  if (location.pathname === '/Personal-trip') activeTab = 'personal';
  if (location.pathname === '/Active-trip') activeTab = 'upcoming';
  if (location.pathname === '/Close-trip') activeTab = 'closed';

  const renderContent = () => {
    switch (activeTab) {
      case 'upcoming':
        return <div className="mt-4 text-blue-600 font-bold">Upcoming Events Content</div>;
      case 'personal':
        return <div className="mt-4 text-indigo-600 font-bold">Personal Trip Content</div>;
      case 'closed':
        return <div className="mt-4 text-red-600 font-bold">Closed Trip Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-6 mt-6">
      <div className="flex gap-2 mb-4">
        <button
          className={`py-2 px-4 rounded-full ${
            activeTab === 'upcoming'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => navigate('/Active-trip')}
        >
          Upcoming Events
        </button>
        <button
          className={`py-2 px-4 rounded-full ${
            activeTab === 'personal'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => navigate('/Personal-trip')}
        >
          Personal Trip
        </button>
        <button
          className={`py-2 px-4 rounded-full ${
            activeTab === 'closed'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => navigate('/Close-trip')}
        >
          Closed Trip
        </button>
      </div>
      {renderContent()}
    </div>
  );
}

export default TripTabs;
