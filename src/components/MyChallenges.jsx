import React from "react";
import MyChallengeCard from "./MyChallengeCard";

const MyChallenges = ({ allChallenges, email, setMyChallenges }) => {
  return (
    <section className="my-20">
      <h2 className="text-4xl font-bold text-secondary mb-10 text-center">
        My Challenges
      </h2>
      {allChallenges.filter((challenge) => challenge.createdBy == email)
        .length < 1 ? (
        <h3 className="text-2xl  font-semibold text-secondary text-center">
          You Don't have any challenge of your own!
        </h3>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 justify-center w-9/10 md:w-8/10 lg:w-7/10 mx-auto gap-6">
          {allChallenges.filter((challenge) => challenge.createdBy == email)
            .length < 1 ? (
            <h3 className="text-2xl  font-semibold text-secondary text-center">
              You Don't have any challenge of your own!
            </h3>
          ) : (
            allChallenges
              .filter((challenge) => challenge.createdBy == email)
              .map((challenge) => {
                return (
                  <MyChallengeCard
                    key={challenge._id}
                    challenge={challenge}
                    setMyChallenges={setMyChallenges}
                  ></MyChallengeCard>
                );
              })
          )}
        </div>
      )}
    </section>
  );
};

export default MyChallenges;
