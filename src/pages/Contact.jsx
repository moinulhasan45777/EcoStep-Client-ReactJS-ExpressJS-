import React from "react";
import useTitle from "../hooks/useTitle";

const Contact = () => {
  useTitle("Contact Us");

  return (
    <main className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-green-50 px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700">
            Contact Us
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600">
            Have a question, idea, or feedback? We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-8">
              Whether you’re interested in sustainability challenges,
              partnerships, or just want to say hello — our team is here to
              help.
            </p>

            <ul className="space-y-4 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-semibold">Email:</span>
                <span>support@ecostep.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-semibold">Community:</span>
                <span>Join discussions inside EcoStep</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-semibold">
                  Response Time:
                </span>
                <span>Within 24–48 hours</span>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm sm:text-base text-gray-600">
            Together, we can make sustainability a habit — one step at a time 🌱
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
