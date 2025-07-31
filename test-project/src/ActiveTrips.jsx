import { useNavigate } from 'react-router-dom';
import LoggedNav from './LoggedNav';
import Footer from './Footer';
import TripNav from './TripNav';
import TripTab from './TripTab';

const TripItem = ({ city, startDate, endDate }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center">
      <div className="mr-4">
        <img
          src="images/Caribbean.png"
          alt={city}
          className="w-12 h-12 rounded-full"
        />
      </div>
      <div>
        <h3 className="font-semibold text-lg">{city}</h3>
        <p className="text-gray-600">{startDate} to {endDate}</p>
        <button herf="/Trip-detail" onClick={() => navigate('/Trip-detail')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
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
      <LoggedNav />
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-start sm:py-2 "style={{ backgroundImage: `url('images/create_home.png')` }}>
        

        {/* Tab Navigation */}
        <TripNav />

        {/* Trip List Section with Updated Wrapper */}
        <div className="flex items-center justify-center min-h-screen px-6 py-12 bg-cover bg-center" >
          <div className="w-full max-w-4xl bg-white bg-opacity-90 shadow-xl rounded-3xl px-10 pt-6 pb-8">
            <h2 className="text-2xl font-semibold mb-4">ACTIVE TRIPS</h2>

            <TripTab />

            {/* <div className="flex gap-2 mb-4">
              <button
                className={`py-2 px-4 rounded-full ${
                  activeTab === 'upcoming'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => handleTabClick('upcoming')}
                
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
                herf="/Personal-trip"
                // onClick={() => handleTabClick('personal')}
              >
                Personal Trip
              </button>
              <button
                className={`py-2 px-4 rounded-full ${
                  activeTab === 'closed'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                // onClick={() => handleTabClick('closed')}
              >
                Closed Trip
              </button>
            </div> */}
           

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
