import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const TripItem = ({ city, startDate, endDate, photoUrl, navigate, onDelete, onView }) => {
  // If city is an object, use its title for display
  const displayTitle = typeof city === 'object' && city !== null ? city.title || city.location || 'Trip' : city;
  const tripObj = typeof city === 'object' && city !== null ? city : null;
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
      {/* Trip Info */}
      <div className="flex items-center mb-4 sm:mb-0">
        <img
          src={photoUrl || "https://via.placeholder.com/50"}
          alt={displayTitle}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="text-base sm:text-lg font-semibold">{displayTitle}</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            {startDate} to {endDate}
          </p>
        </div>
      </div>

      {/* Action Icons */}
      <div className="flex gap-4 justify-start sm:justify-end">
        <button
          title="View trip"
          onClick={onView}
          className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faEye} />
        </button>

        <button
          title="Edit trip"
          onClick={() => navigate('/edit-trip', { state: { tripId: tripObj ? tripObj.id : undefined, tripData: tripObj } })}
          className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>

        <button
          title="Delete trip"
          onClick={onDelete}
          className="text-red-500 hover:text-red-700 transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
};

export default TripItem;
