import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

const JoinChallenge = () => {
  const [joined, setJoined] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const challenge = location.state;
  const axiosInstance = useAxios();
  const { user } = useAuth();

  const status = useRef("");
  useEffect(() => {
    setLoading(true);
    const getUserChallenges = async () => {
      await fetch("http://localhost:3000/user-challenges")
        .then((res) => res.json())
        .then((data) => {
          data.find((d) => d.challengeId == challenge._id && setJoined(true));
          setLoading(false);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    };

    getUserChallenges();
  }, [challenge._id]);
  const handleYes = async () => {
    if (new Date(challenge.startDate) > new Date()) {
      status.current = "Not Started";
    } else if (
      new Date(challenge.startDate) <= new Date() &&
      new Date(challenge.endDate) >= new Date()
    ) {
      status.current = "Ongoing";
    } else {
      status.current = "Finished";
    }
    const userChallenge = {
      userId: user.email,
      challengeId: challenge._id,
      status: status.current,
      progress: 0,
      joinDate: new Date(),
    };

    setLoading(true);

    const newChallenge = { participants: challenge.participants + 1 };
    await axiosInstance
      .post(`/challenges/join/${challenge._id}`, userChallenge)
      .then(async () => {
        await fetch(`http://localhost:3000/challenges/${challenge._id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newChallenge),
        })
          .then((res) => res.json())
          .then(() => {
            toast.success("Challenge Joined!");
            setJoined(true);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setLoading(false));
  };

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
            <p className="text-lg mt-4 max-w-2xl mx-auto leading-relaxed text-gray-100">
              {challenge?.target}
            </p>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="w-7/10 mx-auto flex justify-center">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 px-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            {joined
              ? "Congratulations on joining the Challenge!"
              : "Are you sure you want to join the challenge?"}
          </h2>

          <div className="flex items-center gap-6">
            <button
              disabled={joined}
              onClick={handleYes}
              className="bg-primary disabled:cursor-auto disabled:bg-secondary  hover:bg-secondary text-white font-semibold px-8 py-3 rounded-xl shadow-md transition-all cursor-pointer"
            >
              {joined ? "Already Joined" : "Yes"}
            </button>
            {joined || (
              <button
                disabled={joined}
                className="bg-secondary disabled:cursor-auto disabled:hover:bg-secondary disabled:hover:text-white hover:bg-transparent ring-2 text-white hover:text-black font-semibold px-8 py-3 rounded-xl shadow-md transition-all cursor-pointer"
              >
                No
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default JoinChallenge;
