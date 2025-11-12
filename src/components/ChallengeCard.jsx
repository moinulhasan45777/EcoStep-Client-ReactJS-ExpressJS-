import React from "react";

const ChallengeCard = ({ challenge }) => {
  return (
    <div className=" bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col">
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
        <h2 className="text-xl font-semibold text-gray-800 mt-1">
          {challenge.title}
        </h2>
        <p className="text-gray-600 text-sm mt-2 leading-relaxed mb-4 grow">
          {challenge.description}
        </p>

        {/* Impact Metric + Button */}
        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
          <span className="text-sm font-medium text-green-600">
            🌱 Impact: {challenge.impactMetric}
          </span>
          <button className="text-sm px-3 py-1.5 rounded-lg bg-primary text-white hover:bg-secondary transition cursor-pointer">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
