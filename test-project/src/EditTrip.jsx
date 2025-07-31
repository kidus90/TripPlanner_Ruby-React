import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


// No LoggedNav here, as it belongs to the main page layout, not the modal content

const EditTripForm = ({ onClose }) => { // Expects onClose prop from the parent
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
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Call onClose to close the modal after submission
        onClose();
        // You might want to handle data submission (e.g., to an API) here
        // and then potentially clear the form or show a success message
    };

    return (
        // The form content itself, without the modal overlay wrapper
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-start sm:py-2" style={{ backgroundImage: `url('images/create_home.png')` }}>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md py-10 px-6 space-y-4 ">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Edit Trip</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Upload Cover Photo */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Cover Photo</label>
                    <label htmlFor="coverPhoto" className="relative cursor-pointer bg-white border border-gray-300 rounded-md py-2 px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500">
                        <span>Choose File</span>
                        <input id="coverPhoto" name="coverPhoto" type="file" className="sr-only" onChange={handleChange} />
                        <span className="ml-2 text-gray-500">
                          {formData.coverPhoto ? formData.coverPhoto.name : 'No file chosen'}
                        </span>
                    </label>
                </div>

                {/* Trip Name and Destinations */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Trip Name</label>
                        <input type="text" name="tripName" value={formData.tripName} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Destinations</label>
                        <select name="destinations" value={formData.destinations} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm">
                            <option value="">Select a destination</option>
                            <option>Italy</option>
                            <option>Mexico</option>
                            <option>Paris</option>
                            <option>Tokyo</option>
                        </select>
                    </div>
                </div>

                {/* Start Date and End Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                        <div className="relative">
                            <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm" />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                        <div className="relative">
                            <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm" />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} rows="3" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"></textarea>
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm" />
                </div>

                {/* Transportation Type, Number of Travelers, and Travel Cost */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Transportation Type</label>
                        <select name="transportationType" value={formData.transportationType} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm">
                            <option value="">Select type</option>
                            <option>Plane</option>
                            <option>Train</option>
                            <option>Car</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Number of Travelers</label>
                        <input type="number" name="numberOfTravelers" value={formData.numberOfTravelers} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Travel Cost</label>
                        <input type="number" name="travelCost" value={formData.travelCost} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm" />
                    </div>
                </div>

                

                {/* Update Trip and Cancel Buttons */}
                <div className="flex justify-end gap-4 mt-6">
                    <button type="submit" onClick={() => navigate('/personal-trip')} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Update Trip
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate('/personal-trip')}// Calls the onClose prop to close the modal
                        className="bg-white hover:bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded border border-gray-300"
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