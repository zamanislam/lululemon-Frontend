// src/components/Carousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/Cau.css"

import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Correct import path

const CustomCarousel = () => {
  const images = [
    "https://i.postimg.cc/MGRQKTb2/Untitled-design-4.png",
    "https://i.postimg.cc/C5K5DLDK/Untitled-design-5.png"
  ];

  return (
    <div id="a1">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        id="a2"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              id="a3"
              className=" object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomCarousel;
