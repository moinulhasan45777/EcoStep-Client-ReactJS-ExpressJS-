import React, { useEffect } from "react";

const MyJoinedChallenges = ({ setMyChallenges }) => {
  const [loading, setLoading] = useEffect(() => {});
  return (
    <section className="my-20">
      <h2 className="text-4xl  font-bold text-secondary mb-10 text-center">
        My Challenges
      </h2>
      <div className="grid grid-cols-3 justify-center w-7/10 mx-auto gap-6">
        {allChallenges
          .filter((challenge) => challenge.createdBy == email)
          .map((challenge) => {
            return (
              <MyChallengeCard
                key={challenge._id}
                challenge={challenge}
              ></MyChallengeCard>
            );
          })}
      </div>
    </section>
  );
};

export default MyJoinedChallenges;
