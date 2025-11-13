import React from "react";
import { useNavigate } from "react-router";

const MyJoinedChallengeCard = ({ challenge, userChallenges }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate();
  };
  return (
    <div
      onClick={handleClick}
      className=" bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
    >
      {/* Image Section */}
      <div
        className="relative w-full h-48 bg-gray-200"
        style={{
          backgroundImage: `url(${challenge.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content Section */}
      <div className="flex flex-col grow p-5">
        <p className="text-sm text-gray-500 font-medium">
          {challenge.category}
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-1">
          {challenge.title}
        </h3>
        <p className="text-gray-600 text-sm mt-2 leading-relaxed mb-4 grow">
          {challenge.description}
        </p>

        {/* Duration & Participants */}
        <div className="flex text-sm text-gray-500 gap-4 mb-2">
          <span>🕒 Duration: {challenge.duration} days</span>
          <span>👥 Participants: {challenge.participants}</span>
        </div>

        {/* Impact Metric + Button */}
        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
          <span className="text-sm font-medium flex mr-2 gap-1">
            <span>🌱</span> <span>Impact: {challenge.impactMetric}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyJoinedChallengeCard;
