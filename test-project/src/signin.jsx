import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
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
    <div className="flex items-center justify-center min-h-screen bg-[#f0f2f5] font-sans">
      <div className="flex flex-col md:flex-row bg-white rounded-[10px] shadow-[0_0_20px_rgba(0,0,0,0.1)] w-[95%] md:w-[80%] max-w-[1200px] overflow-hidden m-5">
        <div className="p-10 w-full md:w-1/2 box-border">
          <div className="text-xl font-bold mb-7 flex items-center gap-2 text-black-600">
            <FontAwesomeIcon icon={faTree} />
            Trip Planner
          </div>
          <h1 className="text-2xl mb-2 font-semibold">Sign in</h1>
          <p className="text-[#666] mb-7">Please login to continue to your account.</p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm text-[#333] mb-1">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-[#ddd] rounded text-base"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm text-[#333] mb-1">Password</label>
              <div className="relative flex items-center">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  id="password"
                  className="w-full p-3 border border-[#ddd] rounded text-base pr-10"
                />
                <span
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#999] text-sm"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? 'Hide' : 'Show'}
                </span>
              </div>
            </div>
            <div className="flex items-center text-[#666]">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm cursor-pointer">Keep me logged in</label>
            </div>
            <button
              type="submit"
              href="/Create"
              onClick={() => navigate('/Create')} 
              className="bg-blue-500 text-white py-3 px-5 rounded text-lg w-full transition duration-200 hover:bg-blue-600"
            >
              Sign in
            </button>
          </form>
          <div className="mt-7 text-center text-[#666] text-sm">
            Need an account?{' '}
            <a href="/Signup" onClick={() => navigate('/signup')} className="text-blue-500 hover:underline">Create one</a>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-[url('images/signin.jpg')] bg-cover bg-center h-[300px] md:h-auto"></div>
      </div>
    </div>
  );
};

export default SignIn;
