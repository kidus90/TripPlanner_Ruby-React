import React from 'react';
import HomeNav from './HomeNav';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
    <HomeNav />
    
    <div>
      {/* Hero Section */}
      <section className="bg-yellow-200 relative">
        <div className="container mx-auto py-24 px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-green-900 mb-4">
           We don’t follow travel trends <br />we create them.
          </h1>
          <p className="text-gray-900 mb-58 text-2xl">
            The world waits for our itinerary.
          </p>
        </div>
        <div className="absolute inset-0">
          <img
            src="images/Section 1.png"
            alt="Palm Trees"
            className="w-full h-full mix-blend-multiply"
          />
        </div>
      </section>

      {/* Unleash Your Wanderlust Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Unleash Your Wanderlust
          </h2>
          <p className="text-gray-600 mb-8">
            Get the most of your time in a single place with incredible
            recommendations from amazing locals, travel advisors and proven journey
            planners.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-green-600">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.259 11.463A9.002 9.002 0 0012 15.75a9.002 9.002 0 00-5.259-4.287m11.508 0A12.002 12.002 0 0012 19.5a12.002 12.002 0 00-8.251-6.75" />
                </svg>

              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Reach New Heights
              </h3>
              <p className="text-gray-600">
                Through new friends, amazing destinations, and smart recommendations, get your best experience yet!
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-pink-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.625m0-2.941a3.225 3.225 0 11-6.45 0 3.225 3.225 0 016.45 0zM19.488 9.219l-4.343 5.791m0 0a3.225 3.225 0 10-6.45 0 3.225 3.225 0 006.45 0zM6.75 15.75l-7.64-1.273M6.75 15.75l7.5-7.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Unlock Endless Freedom
              </h3>
              <p className="text-gray-600">
                Become a master of travelling yourself when planning incredible adventures. Travel smarter.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-yellow-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Embark on Your Journey
              </h3>
              <p className="text-gray-600">
                Explore new sites and get the chance to visit and travel your new location in the circumference yet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plan with Confidence Section */}
      <section className="bg-gray-100 relative">
        <div className="absolute inset-0">
          <img
            src="images/Section 4.png"
            alt="Beach Landscape"
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </div>
        <div className="container mx-auto py-24 px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold text-green-500 mb-4">
            Plan with Confidence
          </h2>
          <p className="text-white mb-8">
            Unlock the greatest experience you can have and make memories and enjoy<br></br>
            with incredible tools to make it happen with new sites.
          </p>
          <button  href="/signup" onClick={() => navigate('/signup')} className="bg-white hover:bg-blue-700 text-gray hover:text-white font-bold py-2 px-4 rounded-md">
            Get Started
          </button>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default Home;

