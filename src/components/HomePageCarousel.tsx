import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import CarouselImage1 from "../assets/c1.avif";
import CarouselImage2 from "../assets/c2.avif";
import CarouselImage3 from "../assets/c3.avif";
import CarouselImage4 from "../assets/c4.avif";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const MyCarousel = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="w-full mt-2"
      autoplay={{
        delay: 1900,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <img
          src={CarouselImage1}
          alt="Slide 1"
          className="object-cover"
          style={{ width: "100%" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={CarouselImage2}
          alt="Slide 2"
          className="object-cover"
          style={{ width: "100%" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={CarouselImage3}
          alt="Slide 3"
          className="object-cover"
          style={{ width: "100%" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={CarouselImage4}
          alt="Slide 4"
          className="object-cover"
          style={{ width: "100%" }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default MyCarousel;
