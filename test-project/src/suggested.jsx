import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import LoggedNav from './LoggedNav';
import { useNavigate } from 'react-router-dom';
import { getTrips, getCurrentUser, bookTrip } from '../api';

const SuggestedTripCard = ({ id, city, startDate, endDate, availableTravelers, photoUrl, onBook }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-lg shadow-md m-4 p-4 flex flex-col lg:flex-row items-center lg:items-start">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:mr-4">
        <img
          src={photoUrl || "https://via.placeholder.com/400x200"}
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
          onClick={onBook}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4 transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

const Suggested = () => {
  const [trips, setTrips] = useState([]);
  const [bookingSuccess, setBookingSuccess] = useState('');
  const [bookingError, setBookingError] = useState('');

  useEffect(() => {
    async function fetchTrips() {
      try {
        const allTrips = await getTrips();
        setTrips(allTrips);
      } catch (err) {
        // Optionally handle error
      }
    }
    fetchTrips();
  }, []);

  const handleBook = async (tripId) => {
    setBookingSuccess('');
    setBookingError('');
    try {
      const user = await getCurrentUser();
      await bookTrip(tripId, user.id);
      setBookingSuccess('Trip booked successfully!');
    } catch (err) {
      // Try to extract backend error message for already booked
      if (err.errors && err.errors.some(e => e.toLowerCase().includes('already booked'))) {
        setBookingError('You have already booked this trip.');
      } else if (err.errors && err.errors.some(e => e.toLowerCase().includes('no available travelers'))) {
        setBookingError('No available travelers left for this trip.');
      } else if (err.errors && typeof err.errors[0] === 'string') {
        setBookingError(err.errors[0]);
      } else if (err.message) {
        setBookingError(err.message);
      } else {
        setBookingError('Failed to book trip.');
      }
    }
  };

  return (
    <>
      <LoggedNav />
      <div className="bg-gray-100 min-h-screen pt-20 sm:pt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 text-center sm:text-left">
            Suggested Trips
          </h1>
          {bookingSuccess && <div className="text-green-600 font-semibold mb-2">{bookingSuccess}</div>}
          {bookingError && <div className="text-red-600 font-semibold mb-2">{bookingError}</div>}
          {trips.length > 0 ? (
            trips.map((trip, idx) => (
              <SuggestedTripCard
                key={trip.id || idx}
                id={trip.id}
                city={trip.title || trip.city}
                startDate={trip.start_date || trip.startDate}
                endDate={trip.end_date || trip.endDate}
                availableTravelers={trip.traveler_number}
                photoUrl={trip.photo_url}
                onBook={() => handleBook(trip.id)}
              />
            ))
          ) : (
            <p className="text-gray-600">No trips found.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Suggested;
