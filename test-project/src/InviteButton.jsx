import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InviteButton = () => {
  const navigate = useNavigate();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleInviteClick = () => {
    // Simulate an action (e.g., sending an invite)
    console.log('Invite action initiated!');

    // Show the success alert
    setShowSuccessAlert(true);

    // After a short delay, hide the alert and navigate
    setTimeout(() => {
      setShowSuccessAlert(false); // Hide alert
      navigate('/active-trip'); // Navigate to the specified path
    }, 1500); // 1.5 seconds delay
  };

  return (
    <div className="p-4">
      {/* Conditionally render the success alert */}
      {showSuccessAlert && (
        <div className="fixed top-0 left-0 w-full p-4 bg-green-500 text-white text-center text-lg font-semibold z-50">
          Invitation sent successfully! Redirecting...
        </div>
      )}

    

      {/* The Invite button */}
      <button
        onClick={handleInviteClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Invite
      </button>
    </div>
  );
};

export default InviteButton;