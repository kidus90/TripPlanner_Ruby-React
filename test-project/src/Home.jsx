import React from 'react';
import HomeNav from './HomeNav';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <HomeNav />

      {/* Hero Section */}
      <section className="relative bg-yellow-200">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-green-900 mb-4">
            We don’t follow travel trends<br />we create them.
          </h1>
          <p className="text-base sm:text-xl text-gray-900 mb-8">
            The world waits for our itinerary.
          </p>
        </div>
        <div className="absolute inset-0 z-0">
          <img
            src="images/Section 1.png"
            alt="Palm Trees"
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </div>
      </section>

      {/* Unleash Your Wanderlust Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4">Unleash Your Wanderlust</h2>
        <p className="text-gray-600 mb-8 text-sm sm:text-base">
          Get the most of your time in a single place with incredible recommendations from locals, advisors, and planners.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              iconColor: 'bg-green-100',
              textColor: 'text-green-600',
              title: 'Reach New Heights',
              body: 'Through new friends, amazing destinations, and smart recommendations, get your best experience yet!',
              iconPath: "M17.259 11.463A9.002 9.002 0 0012 15.75a9.002 9.002 0 00-5.259-4.287m11.508 0A12.002 12.002 0 0012 19.5a12.002 12.002 0 00-8.251-6.75"
            },
            {
              iconColor: 'bg-pink-100',
              textColor: 'text-pink-600',
              title: 'Unlock Endless Freedom',
              body: 'Become a master of travelling yourself when planning incredible adventures. Travel smarter.',
              iconPath: "M15.042 21.672L13.684 16.625m0-2.941a3.225 3.225 0 11-6.45 0 3.225 3.225 0 016.45 0zM19.488 9.219l-4.343 5.791m0 0a3.225 3.225 0 10-6.45 0 3.225 3.225 0 006.45 0zM6.75 15.75l-7.64-1.273M6.75 15.75l7.5-7.5"
            },
            {
              iconColor: 'bg-yellow-100',
              textColor: 'text-yellow-600',
              title: 'Embark on Your Journey',
              body: 'Explore new sites and get the chance to visit and travel your new location in the circumference yet.',
              iconPath: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            }
          ].map((benefit, index) => (
            <div key={index} className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className={`flex items-center justify-center w-12 h-12 rounded-full mx-auto mb-4 ${benefit.iconColor}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${benefit.textColor}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={benefit.iconPath} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{benefit.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Plan with Confidence Section */}
      <section className="relative bg-gray-100">
        <div className="absolute inset-0">
          <img
            src="images/Section 4.png"
            alt="Beach Landscape"
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </div>
        <div className="relative z-10 container mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-500 mb-4">Plan with Confidence</h2>
          <p className="text-white text-sm sm:text-base mb-6">
            Unlock incredible experiences, make memories, and enjoy the journey with powerful planning tools at your side.
          </p>
          <button
            onClick={() => navigate('/signup')}
            className="bg-white hover:bg-blue-700 text-gray-700 hover:text-white font-bold py-2 px-6 rounded transition-colors"
          >
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
