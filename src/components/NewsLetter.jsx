import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-green-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md p-8 sm:p-12 text-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Stay in the Loop 🌱
          </h2>

          {/* Description */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Get eco-friendly tips, new sustainability challenges, and upcoming
            events delivered straight to your inbox. One email at a time, one
            greener step forward.
          </p>

          {/* Form */}
          <form
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full sm:flex-1 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition"
            >
              Subscribe
            </button>
          </form>

          {/* Trust Message */}
          <p className="mt-4 text-xs sm:text-sm text-gray-500">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
