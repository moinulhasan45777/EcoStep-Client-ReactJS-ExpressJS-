import React, { useState } from "react";
import useAuth from "../hooks/useAuth";

import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router";
import useTitle from "../hooks/useTitle";

const UpdateChallenge = () => {
  useTitle("Update Challenge");
  const navigate = useNavigate();
  const location = useLocation();
  const challenge = location.state;
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [startDateError, setStartDateError] = useState("");
  const [endDateError, setEndDateError] = useState("");

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
    const updatedAt = new Date().toISOString().slice(0, 10);
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
      updatedAt,
    };

    if (
      new Date(startDate).setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0)
    ) {
      setStartDateError("Please select a valid Start Date!");
      return;
    } else if (
      new Date(endDate).setHours(0, 0, 0, 0) <
      new Date(startDate).setHours(0, 0, 0, 0)
    ) {
      setEndDateError("Please select a valid End Date!");
      return;
    }

    setLoading(true);
    await fetch(
      `https://eco-step-api-server.vercel.app/challenges/update/${challenge._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newChallenge),
      }
    )
      .then((res) => res.json())
      .then(() => {
        toast.success("Challenge Updated!");
        setStartDateError("");
        setEndDateError("");
        navigate("/my-activities");
        setLoading(false);
      })
      .catch((error) => toast.error(error.message));
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
              defaultValue={challenge.title}
              type="text"
              name="title"
              placeholder="Enter challenge title"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-sm text-gray-600 mb-1 block">Category</label>
            <select
              defaultValue={challenge.category}
              name="category"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
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
              defaultValue={challenge.duration}
              name="duration"
              placeholder="e.g. 21"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Target */}
          <div className="sm:col-span-2">
            <label className="text-sm text-gray-600 mb-1 block">Target</label>
            <input
              type="text"
              name="target"
              defaultValue={challenge.target}
              placeholder="e.g. Reduce daily water waste"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
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
              defaultValue={challenge.description}
              rows="4"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full resize-none focus:outline-none focus:ring-2 focus:ring-primary"
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
              defaultValue={challenge.imageUrl}
              placeholder="https://example.com/image.jpg"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
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
              defaultValue={challenge.impactMetric}
              placeholder="e.g. liters saved"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Start Date */}
          <div>
            <label className="text-sm text-gray-600 mb-1 block">
              Start Date
            </label>
            <input
              onFocus={() => setStartDateError("")}
              defaultValue={new Date(challenge.startDate)
                .toISOString()
                .slice(0, 10)}
              type="date"
              name="startDate"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            {startDateError && (
              <div>
                <p className="text-sm mt-1  text-red-500 mb-1">
                  {startDateError}
                </p>
              </div>
            )}
          </div>

          {/* End Date */}
          <div>
            <label className="text-sm text-gray-600 mb-1 block">End Date</label>
            <input
              onFocus={() => setEndDateError("")}
              type="date"
              defaultValue={new Date(challenge.endDate)
                .toISOString()
                .slice(0, 10)}
              name="endDate"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            {endDateError && (
              <div>
                <p className="text-sm mt-1  text-red-500 mb-1">
                  {endDateError}
                </p>
              </div>
            )}
          </div>

          {/* Submit */}
          <div className="sm:col-span-2 text-center mt-4">
            <button
              type="submit"
              disabled={loading}
              className={`${
                loading
                  ? "bg-secondary cursor-auto"
                  : "bg-primary hover:bg-secondary cursor-pointer"
              } text-white font-semibold px-8 py-3 rounded-lg shadow-md transition`}
            >
              {loading ? "Updating..." : "Update Challenge"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateChallenge;
