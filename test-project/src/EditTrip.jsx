import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditTripForm = ({ onClose }) => {
  const navigate = useNavigate();
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

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
    navigate('/personal-trip');
  };

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
