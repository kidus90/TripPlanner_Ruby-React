import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoggedNav from './LoggedNav';
import Footer from './Footer';
import TripNav from './TripNav';
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
    numberOfTravelers: "",
    travelCost: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <LoggedNav />
      <div
  className=" min-h-screen px-6 py-12 bg-cover bg-center"
  style={{ backgroundImage: `url('images/create_home.png')` }}
>

        {/* Tab Navigation */}
          <TripNav />

        {/* Form Section with Updated Wrapper Layout */}
        <div className="flex items-center justify-center min-h-screen px-6 py-12">
          <div className="w-full max-w-4xl bg-white shadow-xl rounded-3xl px-10 pt-6 pb-8">
            <form onSubmit={handleSubmit} className="space-y-6 text-base">
              {/* Upload Cover Photo */}
              <div>
                <label className="block font-medium text-gray-700 mb-2">Upload Cover Photo</label>
                <label
                  htmlFor="coverPhoto"
                  className="flex items-center w-70 cursor-pointer bg-white border border-gray-300 rounded-md px-4 py-2 text-green-600 hover:text-green-500"
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
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>

              {/* Destinations */}
              <div>
                <label className="block font-medium text-gray-700 mb-2">Destinations</label>
                <select
                  name="destinations"
                  value={formData.destinations}
                  onChange={handleChange}
                  className="block w-50 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                >
                  <option>Mexico</option>
                  <option>Paris</option>
                  <option>Tokyo</option>
                </select>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-gray-700 mb-2">Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="block w-80 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-2">End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="block w-80 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
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
                  rows="3"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
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
                  className="block w-80 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>

              {/* Transportation */}
              <div>
                <label className="block font-medium text-gray-700 mb-2">Transportation Type</label>
                <select
                  name="transportationType"
                  value={formData.transportationType}
                  onChange={handleChange}
                  className="block w-50 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                >
                  <option>Train</option>
                  <option>Flight</option>
                  <option>Car</option>
                </select>
              </div>

              {/* Number of Travelers */}
              <div>
                <label className="block font-medium text-gray-700 mb-2">Number of Travelers</label>
                <input
                  type="number"
                  name="numberOfTravelers"
                  value={formData.numberOfTravelers}
                  onChange={handleChange}
                  className="block w-50 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>

              {/* Travel Cost */}
              <div>
                <label className="block font-medium text-gray-700 mb-2">Travel Cost</label>
                <input
                  type="number"
                  name="travelCost"
                  value={formData.travelCost}
                  onChange={handleChange}
                  className="block w-50 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-start gap-6 mt-6">
                <button type="submit" onClick={() => navigate('/personal-trip')} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md">
                  Save
                </button>
                <button type="button" className="bg-white hover:bg-gray-100 text-gray-700 font-bold py-2 px-6 rounded-md border border-gray-300">
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
