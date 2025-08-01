import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoggedNav from './LoggedNav';
import Footer from './Footer';
import TripNav from './TripNav';
import { createTrip, getCurrentUser } from '../api';

const CreateTrip = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    coverPhoto: null,
    tripName: '',
    destinations: 'Mexico',
    startDate: '',
    endDate: '',
    description: '',
    email: '',
    transportationType: 'Train',
    numberOfTravelers: '',
    travelCost: '',
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');
    try {
      // Fetch current user to get user_id
      const user = await getCurrentUser();
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
        user_id: user.id, // Set user_id from session
      };
      await createTrip(tripData);
      setSuccess('Trip created successfully!');
      setTimeout(() => navigate('/personal-trip'), 1200);
    } catch (err) {
      setError('Failed to create trip.');
    }
  };

  return (
    <>
      <LoggedNav />
      <div
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('images/create_home.png')` }}
      >
        <TripNav />

        <div className="flex justify-center px-4 py-8 sm:px-6 md:px-8 lg:py-12">
          <div className="w-full max-w-3xl bg-white bg-opacity-90 shadow-xl rounded-2xl p-6 sm:p-10">
            {success && <div className="text-green-600 font-semibold mb-2">{success}</div>}
            {error && <div className="text-red-600 font-semibold mb-2">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-6 text-sm sm:text-base">
              {/* Upload Cover Photo */}
              <div>
                <label className="block font-medium text-gray-700 mb-2">Cover Photo</label>
                <label
                  htmlFor="coverPhoto"
                  className="flex items-center cursor-pointer bg-white border border-gray-300 rounded-md px-4 py-2 text-green-600 hover:text-green-500"
                >
                  <span>Upload files...</span>
                  <input id="coverPhoto" name="coverPhoto" type="file" className="sr-only" onChange={handleChange} />
                  <span className="ml-3 text-gray-500">Drop files here</span>
                </label>
              </div>

              {/* Trip Name */}
              <div>
                <label className="block font-medium text-gray-700 mb-2">Trip Name</label>
                <input
                  type="text"
                  name="tripName"
                  value={formData.tripName}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 p-2 focus:border-green-500 focus:ring-green-500"
                />
              </div>

              {/* Destinations */}
              <div>
                <label className="block font-medium text-gray-700 mb-2">Destinations</label>
                <select
                  name="destinations"
                  value={formData.destinations}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 p-2 focus:border-green-500 focus:ring-green-500"
                >
                  <option>Mexico</option>
                  <option>Paris</option>
                  <option>Tokyo</option>
                </select>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-gray-700 mb-2">Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 p-2 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-2">End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 p-2 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  className="block w-full rounded-md border border-gray-300 p-2 focus:border-green-500 focus:ring-green-500"
                ></textarea>
              </div>

              {/* Email */}
              <div>
                <label className="block font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 p-2 focus:border-green-500 focus:ring-green-500"
                />
              </div>

              {/* Transportation Type */}
              <div>
                <label className="block font-medium text-gray-700 mb-2">Transportation</label>
                <select
                  name="transportationType"
                  value={formData.transportationType}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 p-2 focus:border-green-500 focus:ring-green-500"
                >
                  <option>Train</option>
                  <option>Flight</option>
                  <option>Car</option>
                </select>
              </div>

              {/* Number of Travelers */}
              <div>
                <label className="block font-medium text-gray-700 mb-2">Travelers</label>
                <input
                  type="number"
                  name="numberOfTravelers"
                  value={formData.numberOfTravelers}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 p-2 focus:border-green-500 focus:ring-green-500"
                />
              </div>

              {/* Travel Cost */}
              <div>
                <label className="block font-medium text-gray-700 mb-2">Cost</label>
                <input
                  type="number"
                  name="travelCost"
                  value={formData.travelCost}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 p-2 focus:border-green-500 focus:ring-green-500"
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-md w-full sm:w-auto"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="bg-white hover:bg-gray-100 text-gray-700 font-bold py-2 px-6 rounded-md border border-gray-300 w-full sm:w-auto"
                  onClick={() => navigate(-1)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateTrip;
