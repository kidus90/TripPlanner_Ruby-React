import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBookings, getTrips, getCurrentUser } from '../api';
import LoggedNav from './LoggedNav';
import Footer from './Footer';
import TripNav from './TripNav';
import TripTab from './TripTab';

const TripItem = ({ city, startDate, endDate, photoUrl, description, trip, onView }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center flex-col sm:flex-row text-center sm:text-left">
      <div className="mr-0 mb-4 sm:mr-4 sm:mb-0">
        <img
          src={photoUrl || "https://via.placeholder.com/100"}
          alt={city}
          className="w-16 h-16 rounded-full mx-auto sm:mx-0"
        />
      </div>
      <div>
        <h3 className="font-semibold text-lg">{city}</h3>
        <p className="text-gray-600">{startDate} to {endDate}</p>
        <button onClick={() => onView(trip)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
          View
        </button>
      </div>
    </div>
  );
};

const ActiveTrips = () => {
  const [activeTrips, setActiveTrips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchActiveTrips() {
      try {
        const user = await getCurrentUser();
        const bookings = await getBookings();
        const trips = await getTrips();
        // Filter bookings for current user
        const myBookings = bookings.filter(b => b.user_id === user.id);
        // Map bookings to trip details
        const myTrips = myBookings.map(b => {
          const trip = trips.find(t => t.id === b.trip_list_id);
          return trip ? {
            city: trip.title || trip.city,
            startDate: trip.start_date || trip.startDate,
            endDate: trip.end_date || trip.endDate,
            photoUrl: trip.photo_url
          } : null;
        }).filter(Boolean);
        setActiveTrips(myTrips);
      } catch (err) {
        setActiveTrips([]);
      }
    }
    fetchActiveTrips();
  }, []);

  const handleView = (trip) => {
    navigate('/Personal-Trip-detail', { state: { trip } });
  };

  return (
    <>
      {/* Header Section */}
      <LoggedNav />
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-start sm:py-2 " style={{ backgroundImage: `url('images/create_home.png')` }}>
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
              {activeTrips.length > 0 ? (
                activeTrips.map((trip, index) => (
                  <TripItem
                    key={index}
                    city={trip.city}
                    startDate={trip.startDate}
                    endDate={trip.endDate}
                    photoUrl={trip.photoUrl}
                    description={trip.description}
                    trip={trip}
                    onView={handleView}
                  />
                ))
              ) : (
                <p className="text-gray-600">No active trips found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ActiveTrips;
