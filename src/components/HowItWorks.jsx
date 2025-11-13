import React from "react";

const HowItWorks = () => {
  return (
    <section className="w-9/10 md:w-8/10 lg:w-7/10 mb-20 mx-auto">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-secondary mb-4">How It Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Take small steps that create a big impact. Join eco-friendly
          challenges, stay motivated, and inspire others to live sustainably.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center p-6 bg-[#fafff0] rounded-2xl shadow-md hover:shadow-lg transition-all duration-200">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 text-3xl mb-4">
              🌱
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Join a Challenge
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Pick a sustainability challenge that fits your lifestyle and start
              your eco-journey.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-[#fcfff6] rounded-2xl shadow-md hover:shadow-lg transition-all duration-200">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100  text-3xl mb-4">
              📊
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Track Progress
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Monitor your progress and see the real impact you’re making for a
              cleaner planet.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-[#fafff0] rounded-2xl shadow-md hover:shadow-lg transition-all duration-200">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 text-3xl mb-4">
              💬
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Share Tips
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Exchange practical advice with others and grow a community that
              supports sustainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
