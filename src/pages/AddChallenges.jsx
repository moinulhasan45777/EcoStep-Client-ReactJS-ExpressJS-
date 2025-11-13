import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const AddChallenges = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const axiosInstance = useAxios();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const duration = form.duration.value;
    const target = form.target.value;
    const description = form.description.value;
    const imageUrl = form.imageUrl.value;
    const impactMetric = form.impactMetric.value;
    const startDate = form.startDate.value.toString().slice(0, 10);
    const endDate = form.endDate.value.toString().slice(0, 10);

    const newChallenge = {
      title,
      category,
      description,
      duration,
      target,
      participants: 0,
      impactMetric,
      createdBy: user.email,
      startDate,
      endDate,
      imageUrl,
    };

    setLoading(true);
    await axiosInstance.post("/challenges", newChallenge).then((data) => {
      console.log(data.data);
      setLoading(false);
    });
  };
  return (
    <section className="w-full min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-10 border border-gray-100">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          ➕ Create New Challenge
        </h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {/* Title */}
          <div className="sm:col-span-2">
            <label className="text-sm text-gray-600 mb-1 block">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter challenge title"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-sm text-gray-600 mb-1 block">Category</label>
            <select
              name="category"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="">Select Category</option>
              <option value="Water Conservation">Water Conservation</option>
              <option value="Green Living">Green Living</option>
              <option value="Sustainable Transport">
                Sustainable Transport
              </option>
              <option value="Waste Reduction">Waste Reduction</option>
              <option value="Energy Conservation">Energy Conservation</option>
            </select>
          </div>

          {/* Duration */}
          <div>
            <label className="text-sm text-gray-600 mb-1 block">
              Duration (days)
            </label>
            <input
              type="number"
              name="duration"
              placeholder="e.g. 21"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Target */}
          <div className="sm:col-span-2">
            <label className="text-sm text-gray-600 mb-1 block">Target</label>
            <input
              type="text"
              name="target"
              placeholder="e.g. Reduce daily water waste"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Description */}
          <div className="sm:col-span-2">
            <label className="text-sm text-gray-600 mb-1 block">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter challenge details..."
              rows="4"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            ></textarea>
          </div>

          {/* Image URL */}
          <div className="sm:col-span-2">
            <label className="text-sm text-gray-600 mb-1 block">
              Image URL
            </label>
            <input
              type="url"
              name="imageUrl"
              placeholder="https://example.com/image.jpg"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Impact Metric */}
          <div>
            <label className="text-sm text-gray-600 mb-1 block">
              Impact Metric
            </label>
            <input
              type="text"
              name="impactMetric"
              placeholder="e.g. liters saved"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Start Date */}
          <div>
            <label className="text-sm text-gray-600 mb-1 block">
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* End Date */}
          <div>
            <label className="text-sm text-gray-600 mb-1 block">End Date</label>
            <input
              type="date"
              name="endDate"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Submit */}
          <div className="sm:col-span-2 text-center mt-4">
            <button
              type="submit"
              disabled={loading}
              className={`${
                loading ? "bg-green-400" : "bg-green-600 hover:bg-green-700"
              } text-white font-semibold px-8 py-3 rounded-lg shadow-md transition`}
            >
              {loading ? "Creating..." : "Create Challenge"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddChallenges;
