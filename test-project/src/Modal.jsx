// import React from 'react';

// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null; // Don't render anything if the modal is not open

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto relative">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-semibold"
//           aria-label="Close modal"
//         >
//           &times;
//         </button>
//         <div className="p-6">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;