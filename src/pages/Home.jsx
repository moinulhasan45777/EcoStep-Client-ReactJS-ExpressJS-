import React from "react";

import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import ActiveChallenges from "../components/ActiveChallenges";
import Tips from "../components/Tips";
import UpcomingEvents from "../components/UpcomingEvents";
import WhyGoGreen from "../components/WhyGoGreen";
import HowItWorks from "../components/HowItWorks";

const Home = () => {
  const allChallenges = useLoaderData();
  return (
    <div>
      <Banner allChallenges={allChallenges}></Banner>
      <WhyGoGreen></WhyGoGreen>
      <div className="h-0.5 bg-base-100 w-7/10 mx-auto mb-20"></div>
      <ActiveChallenges allChallenges={allChallenges}></ActiveChallenges>
      <div className="h-0.5 bg-base-100 w-7/10 mx-auto mb-20"></div>

      <Tips></Tips>
      <div className="h-0.5 bg-base-100 w-7/10 mx-auto mb-20"></div>

      <HowItWorks></HowItWorks>
      <div className="h-0.5 bg-base-100 w-7/10 mx-auto mb-20"></div>
      <UpcomingEvents></UpcomingEvents>
    </div>
  );
};

export default Home;
