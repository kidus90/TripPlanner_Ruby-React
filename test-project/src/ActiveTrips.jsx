import { useNavigate } from 'react-router-dom';
import LoggedNav from './LoggedNav';
import Footer from './Footer';
import TripNav from './TripNav';
import TripTab from './TripTab';

const TripItem = ({ city, startDate, endDate }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center flex-col sm:flex-row text-center sm:text-left">
      <div className="mr-0 mb-4 sm:mr-4 sm:mb-0">
        <img
          src="images/Caribbean.png"
          alt={city}
          className="w-16 h-16 rounded-full mx-auto sm:mx-0"
        />
      </div>
      <div>
        <h3 className="font-semibold text-lg">{city}</h3>
        <p className="text-gray-600">{startDate} to {endDate}</p>
        <button onClick={() => navigate('/Trip-detail')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
          View
        </button>
      </div>
    </div>
  );
};

const ActiveTrips = () => {
  const trips = [
    { city: 'Boston', startDate: '2025-07-17', endDate: '2026-06-08' },
    { city: 'Boston', startDate: '2025-07-17', endDate: '2026-06-08' },
    { city: 'Boston', startDate: '2025-07-17', endDate: '2026-06-08' },
    { city: 'Boston', startDate: '2025-07-17', endDate: '2026-06-08' },
  ];

  return (
    <>
      {/* Header Section */}
      <LoggedNav />
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-start sm:py-2 "style={{ backgroundImage: `url('images/create_home.png')` }}>

        {/* Tab Navigation */}
        <TripNav />

        {/* Trip List Section with Updated Wrapper */}
        <div className="flex items-center justify-center min-h-screen px-4 py-8 sm:px-6 sm:py-12 bg-cover bg-center" >
          <div className="w-full max-w-4xl bg-white bg-opacity-90 shadow-xl rounded-3xl px-6 pt-4 pb-6 sm:px-10 sm:pt-6 sm:pb-8">
            <h2 className="text-2xl font-semibold mb-4 text-center sm:text-left">ACTIVE TRIPS</h2>

            {/* Trip Tab */}
            <TripTab />

            {/* Trip Data */}
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
      <Footer />
    </>
  );
};

export default ActiveTrips;
