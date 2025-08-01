import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { updateTrip, getTripById } from '../api';

const EditTripForm = ({ onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    coverPhoto: null,
    tripName: '',
    destinations: '',
    startDate: '',
    endDate: '',
    description: '',
    email: '',
    transportationType: '',
    numberOfTravelers: '',
    travelCost: '',
    status: '',
  });
  const [tripId, setTripId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchTrip() {
      let id = null;
      let trip = null;
      if (location.state && location.state.tripId) {
        id = location.state.tripId;
        setTripId(id);
        try {
          // If tripData is passed, use it, else fetch from API
          if (location.state.tripData) {
            trip = location.state.tripData;
          } else {
            trip = await getTripById(id);
          }
        } catch (err) {
          setError('Failed to fetch trip data.');
          setLoading(false);
          return;
        }
      } else {
        setError('No trip selected for editing.');
        setLoading(false);
        return;
      }
      if (trip) {
        setFormData({
          coverPhoto: null, // don't prefill file input
          tripName: trip.title || '',
          destinations: trip.location || '',
          startDate: trip.start_date || '',
          endDate: trip.end_date || '',
          description: trip.description || '',
          email: trip.email || '',
          transportationType: trip.travel_type || '',
          numberOfTravelers: trip.traveler_number || '',
          travelCost: trip.cost || '',
          status: trip.status || '',
        });
      }
      setLoading(false);
    }
    fetchTrip();
    // eslint-disable-next-line
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const tripData = {
        title: formData.tripName,
        description: formData.description,
        location: formData.destinations,
        start_date: formData.startDate,
        end_date: formData.endDate,
        cost: formData.travelCost,
        travel_type: formData.transportationType,
        traveler_number: formData.numberOfTravelers,
        email: formData.email,
        upload_file: formData.coverPhoto,
        status: formData.status,
      };
      await updateTrip(tripId, tripData);
      onClose && onClose();
      navigate('/personal-trip');
    } catch (err) {
      alert('Failed to update trip.');
    }
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-600">{error}</div>;

  return (
    <div
      className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 md:px-8 flex flex-col justify-start"
      style={{ backgroundImage: `url('images/create_home.png')` }}
    >
      <div className="max-w-md sm:max-w-lg lg:max-w-2xl mx-auto bg-white rounded-lg shadow-lg px-6 py-8 space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center">Edit Trip</h2>
        <form onSubmit={handleSubmit} className="space-y-5 text-sm">
          {/* Upload Cover Photo */}
          <div>
            <label className="block text-gray-700 mb-2">Cover Photo</label>
            <label
              htmlFor="coverPhoto"
              className="flex items-center cursor-pointer bg-white border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-50"
            >
              <span>Upload File</span>
              <input
                id="coverPhoto"
                name="coverPhoto"
                type="file"
                className="sr-only"
                onChange={handleChange}
              />
              <span className="ml-3 text-gray-500">
                {formData.coverPhoto ? formData.coverPhoto.name : 'No file chosen'}
              </span>
            </label>
          </div>

          {/* Trip Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Trip Name</label>
              <input
                type="text"
                name="tripName"
                value={formData.tripName}
                onChange={handleChange}
                className="w-full border rounded-md p-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Destinations</label>
              <select
                name="destinations"
                value={formData.destinations}
                onChange={handleChange}
                className="w-full border rounded-md p-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Select destination</option>
                <option>Italy</option>
                <option>Mexico</option>
                <option>Paris</option>
                <option>Tokyo</option>
              </select>
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full border rounded-md p-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full border rounded-md p-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="w-full border rounded-md p-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Transport, Travelers, Cost */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Transportation</label>
              <select
                name="transportationType"
                value={formData.transportationType}
                onChange={handleChange}
                className="w-full border rounded-md p-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Select type</option>
                <option>Plane</option>
                <option>Train</option>
                <option>Car</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Travelers</label>
              <input
                type="number"
                name="numberOfTravelers"
                value={formData.numberOfTravelers}
                onChange={handleChange}
                className="w-full border rounded-md p-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Cost</label>
              <input
                type="number"
                name="travelCost"
                value={formData.travelCost}
                onChange={handleChange}
                className="w-full border rounded-md p-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-4">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md w-full sm:w-auto"
            >
              Update Trip
            </button>
            <button
              type="button"
              onClick={() => navigate('/personal-trip')}
              className="bg-white hover:bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded-md border border-gray-300 w-full sm:w-auto"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTripForm;
