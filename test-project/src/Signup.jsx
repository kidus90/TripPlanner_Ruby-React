import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/create');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f0f2f5] font-sans px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row bg-white rounded-[10px] shadow-[0_0_20px_rgba(0,0,0,0.1)] w-full max-w-[1200px] overflow-hidden m-5">
        {/* Form Section */}
        <div className="p-8 sm:p-10 w-full md:w-1/2 box-border">
          <div className="text-xl font-bold mb-6 flex items-center gap-2 text-black-600">
            <FontAwesomeIcon icon={faTree} />
            Trip Planner
          </div>
          <h1 className="text-2xl mb-2 font-semibold">Sign up</h1>
          <p className="text-[#666] mb-6">Create an account to enjoy the features of Revolutie.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm text-[#333] mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-[#ddd] rounded-lg text-base"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-[#333] mb-1">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-[#ddd] rounded-lg text-base"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm text-[#333] mb-1">Password</label>
              <div className="relative">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  id="password"
                  className="w-full p-3 border border-[#ddd] rounded-lg text-base pr-12"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-[#999] hover:text-[#333]"
                >
                  {passwordVisible ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-5 rounded text-lg w-full transition duration-200 hover:bg-blue-600"
            >
              Sign up
            </button>
          </form>

          <div className="mt-6 text-center text-[#666] text-sm">
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => navigate('/signin')}
              className="text-blue-500 hover:underline"
            >
              Sign in
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-[url('/images/signup.jpg')] bg-cover bg-center h-[300px] md:h-auto"></div>
      </div>
    </div>
  );
}

export default Signup;
