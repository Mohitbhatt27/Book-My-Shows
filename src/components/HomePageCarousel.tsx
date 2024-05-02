import Slider from "react-slick";

import CarouselImage1 from "../assets/c1.avif";
import CarouselImage2 from "../assets/c2.avif";
import CarouselImage3 from "../assets/c3.avif";
import CarouselImage4 from "../assets/c4.avif";

function MyCarousel() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "80px",
    slidesToShow: 1,
    speed: 500,
    dots: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="focus:bg-none">
          <img
            src={CarouselImage1}
            style={{ width: "100%", borderRadius: "30px", padding: "5px" }}
          />
        </div>
        <div className="focus:bg-none">
          <img
            src={CarouselImage2}
            style={{ width: "100%", borderRadius: "30px", padding: "5px" }}
          />
        </div>
        <div className="focus:bg-none">
          <img
            src={CarouselImage3}
            style={{ width: "100%", borderRadius: "30px", padding: "5px" }}
          />
        </div>
        <div className="focus:bg-none">
          <img
            src={CarouselImage4}
            style={{ width: "100%", borderRadius: "30px", padding: "5px" }}
          />
        </div>
      </Slider>
    </div>
  );
}

export default MyCarousel;
