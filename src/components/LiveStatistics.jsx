import React from "react";

const LiveStatistics = ({ allChallenges }) => {
  return (
    <section className="w-9/10 md:w-8/10 lg:w-7/10 my-20 mx-auto">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-secondary mb-4">
          Live Statistics
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Real-time impact created by our community. Together, we’re reducing
          waste and protecting the planet one challenge at a time.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* CO2 Saved */}
          <div className="flex flex-col items-center text-center p-8 bg-[#f0fff4] rounded-2xl shadow-md hover:shadow-lg transition-all duration-200">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-green-100 text-4xl mb-4">
              🌍
            </div>
            <h3 className="text-3xl font-bold text-green-700 mb-1">
              {allChallenges
                .filter((challenge) => challenge.impactMetric == "kg CO2 saved")
                .reduce((sum, ch) => sum + ch.target, 0)}
            </h3>
            <p className="text-gray-700 font-medium">kg CO₂ Saved</p>
          </div>

          {/* Energy Saved */}
          <div className="flex flex-col items-center text-center p-8 bg-[#f8fff0] rounded-2xl shadow-md hover:shadow-lg transition-all duration-200">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-yellow-100 text-4xl mb-4">
              ⚡
            </div>
            <h3 className="text-3xl font-bold text-yellow-600 mb-1">
              {allChallenges
                .filter((challenge) => challenge.impactMetric == "kWh saved")
                .reduce((sum, ch) => sum + ch.target, 0)}
            </h3>
            <p className="text-gray-700 font-medium">kWh Saved</p>
          </div>

          {/* Plastic Saved */}
          <div className="flex flex-col items-center text-center p-8 bg-[#f0fff8] rounded-2xl shadow-md hover:shadow-lg transition-all duration-200">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-100 text-4xl mb-4">
              🧴
            </div>
            <h3 className="text-3xl font-bold text-blue-700 mb-1">
              {allChallenges
                .filter(
                  (challenge) => challenge.impactMetric == "kg plastic saved"
                )
                .reduce((sum, ch) => sum + ch.target, 0)}
            </h3>
            <p className="text-gray-700 font-medium">kg Plastic Saved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStatistics;
