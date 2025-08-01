import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const TripItem = ({ city, startDate, endDate, navigate, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
      {/* Trip Info */}
      <div className="flex items-center mb-4 sm:mb-0">
        <img
          src="https://via.placeholder.com/50"
          alt={city}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="text-base sm:text-lg font-semibold">{city}</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            {startDate} to {endDate}
          </p>
        </div>
      </div>

      {/* Action Icons */}
      <div className="flex gap-4 justify-start sm:justify-end">
        <button
          title="View trip"
          onClick={() => navigate('/Personal-Trip-detail')}
          className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faEye} />
        </button>

        <button
          title="Edit trip"
          onClick={() => navigate('/edit-trip')}
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
