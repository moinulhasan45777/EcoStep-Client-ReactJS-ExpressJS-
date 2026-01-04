import React from "react";

const About = () => {
  return (
    <main className="w-full overflow-x-hidden bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-green-50 px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 leading-tight">
            About EcoStep
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-600">
            Small steps. Collective impact. A more sustainable future.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            EcoStep empowers people to take meaningful action for the planet by
            creating and participating in eco-sustainable challenges.
            Sustainability should be simple, engaging, and community-driven.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            What We Do
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            EcoStep is a platform where individuals and groups create, share,
            and join sustainability challenges. From reducing waste to saving
            energy, everyday actions turn into measurable impact.
          </p>
        </div>
      </section>

      {/* Why EcoStep */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
            Why EcoStep
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Community-Powered",
                desc: "Stay motivated and inspired by taking action together.",
              },
              {
                title: "Action-Focused",
                desc: "Simple, practical challenges that fit real life.",
              },
              {
                title: "Impact-Driven",
                desc: "Every challenge completed contributes to a greener planet.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Our Vision
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We envision a world where sustainable living becomes the norm.
            Through shared challenges, EcoStep inspires lasting environmental
            awareness and behavior change.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
