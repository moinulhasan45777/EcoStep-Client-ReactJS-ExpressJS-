import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import useTitle from "../hooks/useTitle";

const JoinChallenge = () => {
  useTitle("Join Challenge");
  const [challenge, setChallenge] = useState(null);
  const [joined, setJoined] = useState(false);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosInstance = useAxios();
  const { user } = useAuth();

  const status = useRef("");

  useEffect(() => {
    setLoading(true);

    if (location.state) {
      setChallenge(location.state);
      fetch("http://localhost:3000/user-challenges")
        .then((res) => res.json())
        .then((data) => {
          const hasJoined = data.some(
            (uc) =>
              uc.userId === user.email && uc.challengeId === location.state._id
          );
          setJoined(hasJoined);
          setLoading(false);
        })
        .catch((error) => {
          toast.error(error.message);
          setLoading(false);
        });
    } else {
      fetch(`http://localhost:3000/challenges/${id}`)
        .then((res) => res.json())
        .then(async (data) => {
          if (!data) {
            toast.error("Challenge not found!");
            navigate("/challenges");
            return;
          }
          setChallenge(data);

          await fetch("http://localhost:3000/user-challenges")
            .then((res) => res.json())
            .then((all) => {
              const hasJoined = all.some(
                (uc) => uc.userId === user.email && uc.challengeId === data._id
              );
              setJoined(hasJoined);
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
    }
  }, [id, location.state, navigate, user.email]);

  const handleYes = async () => {
    if (!challenge) return;

    const now = new Date();
    const start = new Date(challenge.startDate);
    const end = new Date(challenge.endDate);

    if (now < start) status.current = "Not Started";
    else if (now >= start && now <= end) status.current = "Ongoing";
    else status.current = "Finished";

    const userChallenge = {
      userId: user.email,
      challengeId: challenge._id,
      status: status.current,
      progress: 0,
      joinDate: new Date(),
    };

    const updatedChallenge = { participants: challenge.participants + 1 };

    setLoading(true);
    axiosInstance
      .post(`/challenges/join/${challenge._id}`, userChallenge)
      .then(async () => {
        await fetch(`http://localhost:3000/challenges/${challenge._id}`, {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(updatedChallenge),
        })
          .then((res) => res.json())
          .then(() => {
            toast.success("Challenge Joined!");
            setJoined(true);
            setChallenge((prev) => ({
              ...prev,
              participants: prev.participants + 1,
            }));
            setLoading(false);
          });
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  return (
    <section className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative w-full h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${challenge?.imageUrl})` }}
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

      {/* Confirmation Section */}
      <div className="flex flex-col items-center justify-center py-24 px-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          {joined
            ? "🎉 You have already joined this challenge!"
            : "Are you sure you want to join the challenge?"}
        </h2>

        <div className="flex items-center gap-6">
          <button
            disabled={joined}
            onClick={handleYes}
            className="bg-primary disabled:cursor-auto disabled:bg-secondary hover:bg-secondary text-white font-semibold px-8 py-3 rounded-xl shadow-md transition-all cursor-pointer"
          >
            {joined ? "Already Joined" : "Yes"}
          </button>
          {!joined && (
            <button
              onClick={() => navigate("/challenges")}
              className="bg-secondary hover:bg-transparent ring-2 text-white hover:text-black font-semibold px-8 py-3 rounded-xl shadow-md transition-all cursor-pointer"
            >
              No
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default JoinChallenge;
