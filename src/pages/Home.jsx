import React from "react";

import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import ActiveChallenges from "../components/ActiveChallenges";

const Home = () => {
  const allChallenges = useLoaderData();
  return (
    <div>
      <Banner allChallenges={allChallenges}></Banner>
      <ActiveChallenges allChallenges={allChallenges}></ActiveChallenges>
    </div>
  );
};

export default Home;
