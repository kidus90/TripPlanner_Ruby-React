// Axios instance for backend API
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // CHANGE this if your backend runs elsewhere
  headers: {
    'Content-Type': 'application/json',
  },
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

export default api;
