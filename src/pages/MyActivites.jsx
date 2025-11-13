import React, { useState } from "react";
import { useLoaderData } from "react-router";
import useAuth from "../hooks/useAuth";
import MyChallenges from "../components/MyChallenges";
import { toast } from "react-toastify";
import MyJoinedChallenges from "../components/MyJoinedChallenges";
import useTitle from "../hooks/useTitle";

const MyActivites = () => {
  useTitle("My Activities");
  const { user } = useAuth();
  const allChallenges = useLoaderData();
  const [loading, setLoading] = useState(false);

  const [challenges, setChallenges] = useState(allChallenges);

  const setMyChallenges = async (id) => {
    setLoading(true);
    await fetch(`http://localhost:3000/challenges/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Challenge Successfully Deleted!");
        setChallenges(challenges.filter((challenge) => challenge._id != id));
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      {loading ? (
        <div className="w-9/10 md:w-8/10 lg:w-7/10 mx-auto flex justify-center">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      ) : (
        <div>
          <MyChallenges
            allChallenges={challenges}
            email={user.email}
            setMyChallenges={setMyChallenges}
          ></MyChallenges>
          <MyJoinedChallenges></MyJoinedChallenges>
        </div>
      )}
    </div>
  );
};

export default MyActivites;
