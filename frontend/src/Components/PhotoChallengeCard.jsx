import React from 'react';

const PhotoChallengeCard = ({ challenge }) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4 border border-gray-200">
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{challenge.title}</h2>
        <p className="text-gray-600 mb-4">{challenge.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <p>Start: {new Date(challenge.startDate).toLocaleDateString()}</p>
          <p>End: {new Date(challenge.endDate).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoChallengeCard;