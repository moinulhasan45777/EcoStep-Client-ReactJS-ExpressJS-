import React from "react";

const testimonials = [
  {
    name: "Aarav Patel",
    role: "Student & EcoStep Member",
    quote:
      "EcoStep helped me turn sustainability into a daily habit. The challenges are simple, motivating, and actually fun.",
  },
  {
    name: "Sarah Johnson",
    role: "Community Organizer",
    quote:
      "What I love about EcoStep is the sense of community. Seeing others take action keeps me inspired and accountable.",
  },
  {
    name: "Daniel Kim",
    role: "Climate Enthusiast",
    quote:
      "EcoStep made me realize that small actions truly matter. Every challenge feels meaningful and achievable.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Loved by Our Community
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600">
            Real people. Real actions. Real impact.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Quote */}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                “{item.quote}”
              </p>

              {/* Divider */}
              <div className="h-px bg-gray-200 my-6"></div>

              {/* Author */}
              <div>
                <h4 className="font-semibold text-gray-900">{item.name}</h4>
                <p className="text-xs sm:text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
