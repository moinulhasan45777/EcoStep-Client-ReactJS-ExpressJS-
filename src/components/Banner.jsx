import React from "react";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Zoom, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import PrimaryButton from "../components/PrimaryButton";
const Banner = ({ allChallenges }) => {
  return (
    <div className="mb-20">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper min-h-50 "
      >
        {allChallenges.slice(0, 5).map((challenge) => (
          <SwiperSlide>
            <div
              style={{ backgroundImage: `url(${challenge.imageUrl})` }}
              className="bg-cover bg-center w-full min-h-[calc(100vh-72.594px)] relative"
            >
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center flex-col gap-5">
                <h1 className="text-[4rem] text-primary font-semibold text-center leading-20">
                  {challenge.title}
                </h1>
                <PrimaryButton st="View Challenge"></PrimaryButton>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
