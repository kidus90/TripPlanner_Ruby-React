import React, { useEffect, useState } from 'react';
import LoggedNav from './LoggedNav';
import SideBar from './SideBar';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, getCurrentUserInfo, updateUser, updateUserInfo, deleteUser } from '../api';

function EditProfile() {
 
  const [user, setUser] = useState({ id: '', name: '', email: '', password: '' });
  const [userInfo, setUserInfo] = useState({ id: '', Phone: '', Country: '', Travel_level: '', Trip_taken: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const userData = await getCurrentUser();
        setUser({ id: userData.id, name: userData.name, email: userData.email, password: '' });
        const userInfoData = await getCurrentUserInfo();
        setUserInfo(userInfoData);
        setLoading(false);
      } catch (err) {
        setError('Failed to load user data');
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["name", "email", "password"].includes(name)) {
      setUser((prev) => ({ ...prev, [name]: value }));
    } else {
      setUserInfo((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await updateUser(user);
      await updateUserInfo(userInfo);
      setSuccess('Profile updated successfully!');
    } catch (err) {
      setError('Update failed.');
    }
  };

  const handleDeleteAccount = async () => {
    setError('');
    setSuccess('');
    try {
      await deleteUser(user.id);
      setSuccess('Account deleted successfully!');
      setTimeout(() => navigate('/Home'), 1000);
    } catch (err) {
      setError('Failed to delete account.');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <LoggedNav />
      <div className="lg:hidden">
        <SideBar />
      </div>
      <div className="bg-gray-50 min-h-screen flex flex-col lg:flex-row pt-16 lg:pt-0">
        <div className="hidden lg:block lg:w-64 lg:min-h-screen bg-white shadow-md">
          <SideBar />
        </div>
        <div className="flex-1 p-4 sm:p-6 lg:p-8">
          <h1 className="text-xl sm:text-2xl font-semibold text-blue-500 mb-4 sm:mb-6 text-center lg:text-left">
            Account
          </h1>
          {error && <div className="text-red-500 mb-2">{error}</div>}
          {success && <div className="text-green-500 mb-2">{success}</div>}
          <div className="flex flex-col sm:flex-row items-center mb-6">
            <img
              src="images/Depth 6, Frame 1.png"
              alt="Profile"
              className="rounded-full w-20 h-20 mb-4 sm:mb-0 sm:mr-4"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-lg font-medium">{user.name}</h2>
              <p className="text-gray-500 text-sm">{user.email}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-md shadow-sm p-4 text-center">
              <h3 className="text-gray-600 text-sm">Trips Taken</h3>
              <p className="text-2xl font-semibold">{userInfo.Trip_taken}</p>
            </div>
            <div className="bg-white rounded-md shadow-sm p-4 text-center">
              <h3 className="text-gray-600 text-sm">Traveler Level</h3>
              <div className="flex justify-center items-center gap-2">
                <span className="font-semibold">{userInfo.Travel_level}</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-sm p-4 sm:p-6 mb-6">
            <h2 className="text-lg font-medium text-gray-700 mb-4 text-center sm:text-left">Account Settings</h2>
            <form className="space-y-4" onSubmit={handleUpdate}>
              <div>
                <label htmlFor="displayName" className="block text-gray-700 text-sm font-bold mb-1">
                  Display Name (required)
                </label>
                <input
                  type="text"
                  id="displayName"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-1">
                  Email (required)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-1">
                  Country (required)
                </label>
                <input
                  type="text"
                  id="country"
                  name="Country"
                  value={userInfo.Country}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your country"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="Phone"
                  value={userInfo.Phone}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full sm:w-auto"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={handleDeleteAccount}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md w-full sm:w-auto"
                >
                  Delete Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
