import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner";
import { toast } from "react-toastify";
import useTitle from "../hooks/useTitle";

const Challenge = () => {
  useTitle("Challenge Details");
  const navigate = useNavigate();
  const id = useParams();
  const [loading, setLoading] = useState(true);
  const [challenge, setChallenge] = useState(null);
  useEffect(() => {
    const getChallenge = async () => {
      await fetch(`https://eco-step-api-server.vercel.app/challenges/${id.id}`)
        .then((res) => res.json())
        .then((data) => {
          setChallenge(data);
          setLoading(false);
        })
        .catch((error) => toast.error(error.message));
    };

    getChallenge();
  }, [id.id]);

  const handleClick = () => {
    navigate(`/challenges/join/${challenge._id}`, { state: challenge });
  };

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <section className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative w-full h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${challenge?.imageUrl})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <span className="bg-green-600 px-4 py-1 rounded-full text-sm font-medium tracking-wide">
              {challenge?.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 drop-shadow-lg">
              {challenge?.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-9/10 md:max-w-7/10 mx-auto px-6 py-12">
        <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-8 mb-10 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            About the Challenge
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {challenge?.description}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-linear-to-br from-green-100 to-green-50 p-6 rounded-xl shadow-sm text-center">
            <p className="text-gray-700 font-medium">Duration</p>
            <h3 className="text-2xl font-bold text-green-700 mt-1">
              {challenge?.duration ? `${challenge?.duration} Days` : "N/A"}
            </h3>
          </div>

          <div className="bg-linear-to-br from-blue-100 to-blue-50 p-6 rounded-xl shadow-sm text-center">
            <p className="text-gray-700 font-medium">Participants</p>
            <h3 className="text-2xl font-bold text-blue-700 mt-1">
              {challenge?.participants}
            </h3>
          </div>

          <div className="bg-linear-to-br from-yellow-100 to-yellow-50 p-6 rounded-xl shadow-sm text-center">
            <p className="text-gray-700 font-medium">Impact Metric</p>
            <h3 className="text-2xl font-bold text-yellow-700 mt-1">
              {challenge?.impactMetric}
            </h3>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-8 border border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Start:</span>{" "}
              {challenge?.startDate}
            </p>
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">End:</span> {challenge?.endDate}
            </p>
            <p className="text-gray-600 text-sm mt-2">
              <span className="font-semibold">Created by:</span>{" "}
              {challenge?.createdBy}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleClick}
              className="bg-primary hover:bg-secondary cursor-pointer text-white font-semibold px-8 py-3 rounded-xl transition-all shadow-sm"
            >
              🌱 Join Challenge
            </button>
            <button className="border border-gray-300 hover:bg-gray-100 text-gray-800 font-semibold px-8 py-3 rounded-xl transition-all cursor-pointer">
              🔗 Share
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
