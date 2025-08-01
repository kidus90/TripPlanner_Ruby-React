// Axios instance for backend API
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // CHANGE this if your backend runs elsewhere
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Always send cookies/session
});

// Register function
export const register = async (name, email, password, passwordConfirmation) => {
  try {
    const response = await api.post('/api/v1/users', {
      user: {
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Login function
export const login = async (email, password) => {
  try {
    const response = await api.post('/api/v1/login', { email, password });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Logout function
export const logout = async () => {
  try {
    const response = await api.delete('/api/v1/logout', { withCredentials: true });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Get current user info
export const getCurrentUser = async () => {
  try {
    const response = await api.get('/api/v1/users');
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Get current user info details
export const getCurrentUserInfo = async () => {
  try {
    const response = await api.get('/api/v1/user_infos');
    // Find the user info for the current user (assuming user_id is in user object)
    // If backend is updated to provide /user_infos for current user only, just return response.data
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Update user info
export const updateUserInfo = async (userInfo) => {
  try {
    const response = await api.patch(`/api/v1/user_infos/${userInfo.id}`, userInfo);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Update user (email, password, name)
export const updateUser = async (user) => {
  try {
    const response = await api.patch(`/api/v1/users/${user.id}`, { user });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Create trip with file upload support
export const createTrip = async (tripData) => {
  try {
    const formData = new FormData();
    Object.entries(tripData).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(`trip[${key}]`, value);
      }
    });
    const response = await api.post('/api/v1/trips', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Update a trip by id (PATCH)
export const updateTrip = async (tripId, tripData) => {
  try {
    const formData = new FormData();
    Object.entries(tripData).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(`trip[${key}]`, value);
      }
    });
    const response = await api.patch(`/api/v1/trips/${tripId}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Get all trips (optionally filter by user)
export const getTrips = async () => {
  try {
    const response = await api.get('/api/v1/trips');
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Book a trip (create a booking)
export const bookTrip = async (trip_list_id, user_id) => {
  try {
    const response = await api.post('/api/v1/bookings', {
      booking: { trip_list_id, user_id }
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Get all bookings
export const getBookings = async () => {
  try {
    const response = await api.get('/api/v1/bookings');
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Get notifications for the current user
export const getNotifications = async () => {
  try {
    const response = await api.get('/api/v1/notifications');
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Delete a trip by id
export const deleteTrip = async (tripId) => {
  try {
    const response = await api.delete(`/api/v1/trips/${tripId}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Delete a user by id
export const deleteUser = async (userId) => {
  try {
    const response = await api.delete(`/api/v1/users/${userId}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Get a single trip by id
export const getTripById = async (tripId) => {
  try {
    const response = await api.get(`/api/v1/trips/${tripId}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export default api;
