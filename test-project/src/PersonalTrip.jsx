import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTrips, getCurrentUser, deleteTrip } from '../api';
import LoggedNav from './LoggedNav';
import Footer from './Footer';
import TripNav from './TripNav';
import TripTab from './TripTab';
import TripItem from './TripItem'; // assuming this is refactored separately

const PersonalTrips = () => {
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    async function fetchTrips() {
      try {
        const user = await getCurrentUser();
        setUserId(user.id);
        const allTrips = await getTrips();
        // Filter trips by current user
        const myTrips = allTrips.filter(trip => trip.user_id === user.id);
        setTrips(myTrips);
      } catch (err) {
        // Optionally handle error
      }
    }
    fetchTrips();
  }, []);

  const handleDelete = async (tripId) => {
    try {
      await deleteTrip(tripId);
      setTrips(prevTrips => prevTrips.filter(trip => trip.id !== tripId));
    } catch (err) {
      alert('Failed to delete trip.');
    }
  };

  const handleView = (trip) => {
    navigate('/Personal-Trip-detail', { state: { trip } });
  };

  return (
    <>
      <LoggedNav />
      <div
        className="min-h-screen bg-gray-100 pt-16 sm:pt-6 flex flex-col"
        style={{ backgroundImage: `url('images/create_home.png')` }}
      >
        <TripNav />
        <main className="flex justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-12 bg-cover bg-center">
          <section className="w-full max-w-4xl bg-white bg-opacity-90 shadow-xl rounded-2xl p-6 sm:p-10">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">ACTIVE TRIPS</h2>
            <TripTab />
            <div className="mt-6">
              {trips.length > 0 ? (
                trips.map((trip) => (
                  <TripItem
                    key={trip.id}
                    city={trip}
                    startDate={trip.start_date}
                    endDate={trip.end_date}
                    photoUrl={trip.photo_url}
                    navigate={navigate}
                    onDelete={() => handleDelete(trip.id)}
                    onView={() => handleView(trip)}
                  />
                ))
              ) : (
                <p className="text-gray-600">No active trips found.</p>
              )}
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default PersonalTrips;
