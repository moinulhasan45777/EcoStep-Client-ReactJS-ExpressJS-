import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

const JoinedChallengePage = () => {
  const { user } = useAuth();
  const [challenge, setChallenge] = useState(null);
  const [userChallenges, setUserChallenges] = useState([]);
  const [userChallenge, setUserChallenge] = useState(null);
  const [loading, setLoading] = useState(false);
  const id = useParams();

  useEffect(() => {
    setLoading(true);
    const getChallenge = async () => {
      await fetch(`http://localhost:3000/challenges/${id.id}`)
        .then((res) => res.json())
        .then(async (data) => {
          setChallenge(data);
          await fetch("http://localhost:3000/user-challenges")
            .then((res) => res.json())
            .then((all) => {
              setUserChallenges(all);
              setUserChallenge(
                all.find(
                  (uc) => uc.challengeId == data._id && uc.userId == user.email
                )
              );
              setLoading(false);
            })

            .catch((error) => {
              toast.error(error.message);
              setLoading(false);
            });
        })
        .catch((error) => {
          toast.error(error.message);
          setLoading(false);
        });
    };
    getChallenge();
  }, [id.id, user.email]);

  if (loading) {
    return (
      <div className="w-9/10 md:w-8/10 lg:w-7/10 mx-auto flex justify-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
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
      <div className="lg:max-w-7/10 mx-auto px-6 py-12">
        {/* Description */}
        <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-8 mb-10 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {challenge?.description}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {challenge?.description}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-linear-to-br from-green-100 to-green-50 p-6 rounded-xl shadow-sm text-center">
            <p className="text-gray-700 font-medium">Duration</p>
            <h3 className="text-2xl font-bold text-green-700 mt-1">
              {challenge?.duration} Days
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

          {/*Progress Card */}
          <div className="bg-linear-to-br from-pink-100 to-pink-50 p-6 rounded-xl shadow-sm text-center">
            <p className="text-gray-700 font-medium">Progress</p>
            <div className="mt-3 w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-pink-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${parseInt(userChallenge?.progress)}%` }}
              ></div>
            </div>
            <p className="text-sm font-semibold text-pink-700 mt-2">
              {parseInt(userChallenge?.progress)}% Complete
            </p>
          </div>
        </div>

        {/* Footer Info */}
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
              <span className="font-semibold">Status:</span>{" "}
              {userChallenge?.status}
            </p>
            <p className="text-gray-600 text-sm mt-2">
              <span className="font-semibold">Created by:</span>{" "}
              {challenge?.createdBy}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinedChallengePage;
