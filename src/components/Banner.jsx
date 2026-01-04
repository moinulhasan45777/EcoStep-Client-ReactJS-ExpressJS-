import React from "react";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Zoom, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import PrimaryButton from "../components/PrimaryButton";
import LiveStatistics from "./LiveStatistics";

const Banner = ({ allChallenges }) => {
  return (
    <header className="mb-20">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper min-h-50 max-h-[calc(100vh-200px)]"
      >
        {allChallenges.slice(0, 5).map((challenge) => (
          <SwiperSlide>
            <div
              style={{ backgroundImage: `url(${challenge.imageUrl})` }}
              className="bg-cover bg-center w-full min-h-[calc(100vh-200px)] relative"
            >
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center flex-col gap-5">
                <h1 className="text-[3rem] md:text-[4rem] text-primary font-semibold text-center leading-16 ">
                  {challenge.title}
                </h1>
                <PrimaryButton
                  challenge={challenge}
                  st="View Challenge"
                ></PrimaryButton>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <LiveStatistics allChallenges={allChallenges}></LiveStatistics>
      <div className="h-0.5 bg-base-100 w-9/10 md:w-8/10 lg:w-7/10 mx-auto mb-20"></div>
    </header>
  );
};

export default Banner;
