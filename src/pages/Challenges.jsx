import React, { useEffect, useState } from "react";
import ChallengeCard from "../components/ChallengeCard";
import { useNavigate } from "react-router";

const Challenges = () => {
  const [allChallenges, setAllChallenges] = useState([]);
  const [category, setCategory] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [participantNumber, setParticipantNumber] = useState(0);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const search = async () => {
      await fetch(
        `http://localhost:3000/challenges?category=${encodeURIComponent(
          category
        )}&startDate=${start}&endDate=${end}&participant=${participantNumber}`
      )
        .then((res) => res.json())
        .then((data) => {
          setAllChallenges(data);
          setLoading(false);
        });
    };

    search();
  }, [category, start, end, participantNumber]);

  const handleFilter = (e) => {
    e.preventDefault();
    const form = e.target;

    setCategory(form.category.value);
    setStart(form.startDate.value.toString().slice(0, 10));
    setEnd(form.endDate.value.toString().slice(0, 10));
    setParticipantNumber(parseInt(form.participants.value));
  };

  return (
    <section className="w-7/10 min-h-[calc(100vh-72.594px)] mx-auto py-16">
      <div className="mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-secondary mb-10 text-center">
          Explore Challenges
        </h1>

        {/* Add New Challenge Button */}
        <div className="flex justify-center mb-8">
          <button
            className="bg-primary hover:bg-secondary text-white font-medium px-6 py-3 rounded-lg shadow-md transition duration-300 cursor-pointer"
            onClick={() => navigate("/challenges/add")}
          >
            ➕ Create New Challenge
          </button>
        </div>

        {/* Filters */}
        <form
          onSubmit={handleFilter}
          className="bg-gray-50 shadow-sm rounded-2xl p-6 mb-10 flex flex-wrap items-center justify-between gap-4"
        >
          {/* Category */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Category</label>
            <select
              name="category"
              className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All</option>
              <option value="Water Conservation">Water Conservation</option>
              <option value="Green Living">Green Living</option>
              <option value="Sustainable Transport">
                Sustainable Transport
              </option>
              <option value="Waste Reduction">Waste Reduction</option>
              <option value="Energy Conservation">Energy Conservation</option>
            </select>
          </div>

          {/* Start Date */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Start Date</label>
            <input
              type="date"
              defaultValue=""
              name="startDate"
              className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* End Date */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">End Date</label>
            <input
              type="date"
              defaultValue=""
              name="endDate"
              className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Participants */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Participants</label>
            <input
              type="number"
              name="participants"
              defaultValue={0}
              placeholder="Min participants"
              className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Apply Button */}
          <button
            type="submit"
            className="bg-primary hover:bg-secondary cursor-pointer text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 sm:mt-0"
          >
            Apply Filters
          </button>
        </form>

        {loading ? (
          <div className="w-7/10 mx-auto flex justify-center">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allChallenges.map((challenge) => (
              <ChallengeCard
                key={challenge._id}
                challenge={challenge}
              ></ChallengeCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Challenges;
