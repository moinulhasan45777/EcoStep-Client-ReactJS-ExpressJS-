import React from "react";
import ChallengeCard from "./ChallengeCard";

const ActiveChallenges = ({ allChallenges }) => {
  return (
    <section className="mb-20">
      <h2 className="text-4xl font-bold text-secondary mb-10 text-center">
        Active Challenges
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center w-9/10 md:w-8/10 lg:w-7/10 mx-auto gap-6">
        {allChallenges
          .filter((challenge) => new Date() <= new Date(challenge.endDate))
          .slice(0, 6)
          .map((challenge) => {
            return (
              <ChallengeCard
                key={challenge._id}
                challenge={challenge}
              ></ChallengeCard>
            );
          })}
      </div>
    </section>
  );
};

export default ActiveChallenges;
