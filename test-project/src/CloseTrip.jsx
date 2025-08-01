import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import LoggedNav from './LoggedNav';
import Footer from './Footer';
import TripNav from './TripNav';
import TripTab from './TripTab';


library.add(fab);

const TripItem = ({ city, startDate, endDate }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center mb-2 sm:mb-0">
        <div className="mr-4">
          <img
            src="https://via.placeholder.com/50"
            alt={city}
            className="w-12 h-12 rounded-full"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{city}</h3>
          <p className="text-gray-600 text-sm">{startDate} to {endDate}</p>
        </div>
      </div>
    </div>
  );
};

const PersonalTrips = () => {
  
  const trips = [
    { city: 'Babogaya', startDate: '2025-07-17', endDate: '2026-06-08' },
  ];

  return (
    <>
      {/* Header Section */}
      <LoggedNav />

      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-start sm:py-2 "style={{ backgroundImage: `url('images/create_home.png')` }}>

        {/* Tab Navigation */}
          <TripNav />
        

        {/* Main Content */}
        <div className="flex items-center justify-center px-4 py-8 sm:px-6 sm:py-12 bg-cover bg-center" >
          <div className="w-full max-w-4xl bg-white bg-opacity-90 shadow-xl rounded-3xl px-6 pt-4 pb-6 sm:px-10 sm:pt-6 sm:pb-8">
            <h2 className="text-2xl font-semibold mb-4 text-center sm:text-left">ACTIVE TRIPS</h2>

            {/* Trip Tab Navigation */}
            <TripTab />

            {/* Trip Items */}
            <div>
              {trips.map((trip, index) => (
                <TripItem
                  key={index}
                  city={trip.city}
                  startDate={trip.startDate}
                  endDate={trip.endDate}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default PersonalTrips;
