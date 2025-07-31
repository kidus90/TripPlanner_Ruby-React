import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full font-sans bg-[#f0f2f5]">
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white rounded-[10px] shadow-lg flex overflow-hidden w-4/5 max-w-[1200px] mx-5 flex-col md:flex-row">
          {/* Signup Form */}
          <div className="w-full md:w-1/2 p-10 box-border">
            <div className="text-[1.5em] font-bold mb-8 flex items-center">
              <FontAwesomeIcon icon={faTree} style={{ color: 'black' }} />
              <span className="ml-2">Trip Planner</span>
            </div>
            <h1 className="text-[2em] mb-2">Sign up</h1>
            <p className="text-[#666] mb-8">Sign up to enjoy the feature of Revolutie</p>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm text-[#333] mb-1">Your Name</label>
                <input type="text" id="name" className="w-full p-3 border border-[#ddd] rounded-md text-base box-border" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-[#333] mb-1">Email</label>
                <input type="email" id="email" className="w-full p-3 border border-[#ddd] rounded-md text-base box-border" />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm text-[#333] mb-1">Password</label>
                <div className="relative flex items-center">
                  <input type="password" id="password" className="w-full p-3 pr-10 border border-[#ddd] rounded-md text-base box-border" />
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#999] cursor-pointer">
                    {/* Eye icon goes here */}
                  </span>
                </div>
              </div>
              <button type="submit" href="/create" onClick={() => navigate('/Create')} className="w-full py-3 bg-[#3b82f6] text-white rounded-md text-[1.1em] hover:bg-[#2563eb] transition">Sign up</button>
            </form>

            <div className="text-center mt-8 text-[#666] text-sm">
              Already have an account? <Link to="/signin" onClick={() => navigate('/signin')} className="text-[#3b82f6] hover:underline">Sign in</Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="hidden md:block md:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('images/signup.jpg')" }}></div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
