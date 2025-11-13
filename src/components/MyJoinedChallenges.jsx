import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import MyJoinedChallengeCard from "./MyJoinedChallengeCard";
import { toast } from "react-toastify";

const MyJoinedChallenges = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [userChallenges, setUserChallenges] = useState([]);
  const [challenges, setChallenges] = useState([]);
  useEffect(() => {
    setLoading(true);
    const getUserChallenges = async () => {
      await fetch("http://localhost:3000/user-challenges")
        .then((res) => res.json())
        .then(async (userChallenge) => {
          setUserChallenges(
            userChallenge.filter((uc) => uc.userId == user.email)
          );
          await fetch("http://localhost:3000/challenges")
            .then((res) => res.json())
            .then((challengeData) => {
              const joinedChallengesIds = userChallenge
                .filter((uc) => uc.userId == user.email)
                .map((ch) => ch.challengeId);
              setChallenges(
                challengeData.filter((oneChallenge) =>
                  joinedChallengesIds.includes(oneChallenge._id)
                )
              );
              setLoading(false);
            })
            .catch((error) => {
              toast.error(error.message);
            });
        });
    };
    getUserChallenges();
  }, [user.email]);
  return (
    <section className="my-20">
      <h2 className="text-4xl  font-bold text-secondary mb-10 text-center">
        My Joined Challenges
      </h2>
      {loading ? (
        <div className="w-9/10 md:w-8/10 lg:w-7/10 mx-auto flex justify-center">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 justify-center w-9/10 md:w-8/10 lg:w-7/10 mx-auto gap-6">
          {challenges.map((challenge) => (
            <MyJoinedChallengeCard
              key={challenge._id}
              userChallenges={userChallenges}
              challenge={challenge}
            ></MyJoinedChallengeCard>
          ))}
        </div>
      )}
    </section>
  );
};

export default MyJoinedChallenges;
