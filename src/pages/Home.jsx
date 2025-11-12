import React from "react";

import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import ActiveChallenges from "../components/ActiveChallenges";
import Tips from "../components/Tips";
import UpcomingEvents from "../components/UpcomingEvents";

const Home = () => {
  const allChallenges = useLoaderData();
  return (
    <div>
      <Banner allChallenges={allChallenges}></Banner>
      <ActiveChallenges allChallenges={allChallenges}></ActiveChallenges>
      <Tips></Tips>
      <UpcomingEvents></UpcomingEvents>
    </div>
  );
};

export default Home;
