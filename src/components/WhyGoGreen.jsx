import React from "react";

const WhyGoGreen = () => {
  return (
    <section className="w-9/10 md:w-8/10 lg:w-7/10 mb-20 mx-auto">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-80 md:h-104 rounded-2xl overflow-hidden shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80"
            alt="Go Green"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Why Go Green?
          </h2>
          <p className="text-gray-500 text-lg mb-6 leading-relaxed">
            Sustainable living is more than a trend — it’s a movement toward
            protecting our planet, conserving resources, and building a better
            future for everyone.
          </p>

          <ul className="space-y-3 text-secondary text-lg">
            <li className="flex items-start gap-2">
              <span className="text-lg">🌿</span>
              <span>Reduces carbon footprint and pollution</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-lg">💧</span>
              <span>Conserves energy and natural resources</span>
            </li>
            <li className="flex items-start gap-2">
              <span className=" text-lg">🏡</span>
              <span>Encourages healthier, eco-friendly lifestyles</span>
            </li>
            <li className="flex items-start gap-2">
              <span className=" text-lg">🌎</span>
              <span>Supports biodiversity and sustainable ecosystems</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-lg">🤝</span>
              <span>Inspires community-driven positive change</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyGoGreen;
