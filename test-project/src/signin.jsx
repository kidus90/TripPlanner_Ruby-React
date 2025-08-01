import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { login } from '../api';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      await login(email, password);
      setSuccess('Login successful! Redirecting...');
      setTimeout(() => navigate('/personal-trip'), 1500);
    } catch (err) {
      setError(err.message || JSON.stringify(err));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f0f2f5] font-sans px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg w-full max-w-[1200px] overflow-hidden">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 sm:p-10">
          <div className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800">
            <FontAwesomeIcon icon={faTree} />
            Trip Planner
          </div>
          <h1 className="text-lg sm:text-xl mb-1 font-semibold text-gray-800">Sign in</h1>
          <p className="text-sm text-gray-500 mb-6">Please log in to continue to your account.</p>

          {error && <div className="text-red-500 mb-2">{error}</div>}
{success && <div className="text-green-600 mb-2">{success}</div>}
<form onSubmit={handleSubmit} className="space-y-5">
  <div>
    <label htmlFor="email" className="block text-sm text-gray-700 mb-1">Email</label>
    <input
      type="email"
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring focus:ring-blue-200"
    />
  </div>
  <div>
    <label htmlFor="password" className="block text-sm text-gray-700 mb-1">Password</label>
    <div className="relative">
      <input
        type={passwordVisible ? 'text' : 'password'}
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg text-base pr-12 focus:outline-none focus:ring focus:ring-blue-200"
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700"
      >
        {passwordVisible ? 'Hide' : 'Show'}
      </button>
    </div>
  </div>
  <div className="flex items-center text-gray-600 text-sm">
    <input type="checkbox" id="remember" className="mr-2" />
    <label htmlFor="remember" className="cursor-pointer">Keep me logged in</label>
  </div>
  <button
    type="submit"
    className="bg-blue-500 text-white py-3 px-5 rounded-lg text-lg w-full transition duration-200 hover:bg-blue-600"
  >
    Sign in
  </button>
</form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Need an account?{' '}
            <button
              type="button"
              onClick={() => navigate('/signup')}
              className="text-blue-500 hover:underline"
            >
              Create one
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 h-64 md:h-auto bg-[url('images/signin.jpg')] bg-cover bg-center"></div>
      </div>
    </div>
  );
};

export default SignIn;
