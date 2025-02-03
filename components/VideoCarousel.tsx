"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function VideoCarousel() {
  return (
    <div className="mt-[50px] w-full">
      <Swiper
        slidesPerView="auto"
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        freeMode={true}
        grabCursor={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={10000}
        modules={[Autoplay, FreeMode]}
        className="swiper-stories"
      >
        {[...Array(10)].map((_, index) => (
          <SwiperSlide key={index}>
            <video
              src={`/video.mp4`}
              muted
              className="w-full h-full object-cover"
            ></video>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
