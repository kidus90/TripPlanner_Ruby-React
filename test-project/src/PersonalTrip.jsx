import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoggedNav from './LoggedNav';
import Footer from './Footer';
import TripNav from './TripNav';
import TripTab from './TripTab';
import TripItem from './TripItem'; // assuming this is refactored separately

const PersonalTrips = () => {
  const navigate = useNavigate();
  const [trips, setTrips] = useState([
    { city: 'Babogaya', startDate: '2025-07-17', endDate: '2026-06-08' },
  ]);

  const handleDelete = (indexToRemove) => {
    setTrips(prevTrips => prevTrips.filter((_, idx) => idx !== indexToRemove));
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
                trips.map((trip, index) => (
                  <TripItem
                    key={index}
                    city={trip.city}
                    startDate={trip.startDate}
                    endDate={trip.endDate}
                    navigate={navigate}
                    onDelete={() => handleDelete(index)}
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
