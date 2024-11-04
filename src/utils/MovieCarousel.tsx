import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

import MovieCard from "../components/MovieCard";
import MoviePosterProps from "../types/MoviePoster";

type MovieCarouselProps = {
  movies: MoviePosterProps[];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Arrow(props: {
  type?: any;
  className?: any;
  style?: any;
  onClick?: any;
}) {
  const { className, style, onClick } = props;
  const arrowStyles = {
    backgroundColor: "#999999",
    height: "42px",
    width: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    opacity: 0.8,
    cursor: "pointer",
    zIndex: 999,
    position: "absolute",
    top: "50%",
    right: props.type === "next" ? "50px" : undefined,
    left: props.type === "prev" ? "10px" : undefined,
  };

  const arrowHoverStyles = {
    backgroundColor: "#999988",
    opacity: 1,
  };

  const [hover, setHover] = React.useState(false);

  return (
    <div
      className={`${className} slick-arrow`}
      style={{
        ...style,
        ...arrowStyles,
        ...(hover ? arrowHoverStyles : {}),
      }}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {props.type === "next" ? ">" : "<"}
    </div>
  );
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({ movies }) => {
  const settings = {
    dots: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 3,
    infinite: true,
    initialSlide: 0,
    nextArrow: <Arrow type="next" />,
    prevArrow: <Arrow type="prev" />,

    responsive: [
      {
        breakpoint: 1400, // Large desktops
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024, // Desktops
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600, // Small tablets and large mobiles
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // Mobiles
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true, // Add this option to center the cards
          centerPadding: "20px", // Add this option to add some padding to the center
        },
      },
      {
        breakpoint: 320, // Small mobiles
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true, // Add this option to center the cards
          centerPadding: "20px", // Add this option to add some padding to the center
        },
      },
    ],
  };

  return (
    <div className="">
      <div className="slider-container">
        <Slider {...settings}>
          {movies.map((movie) => (
            <div key={movie.id} className="flex justify-center items-center">
              <MovieCard
                movieImage={movie.poster}
                name={movie.name}
                genre={movie.genre}
                rating={movie.rating}
                voteCount={movie.voteCount}
                id={movie.id}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MovieCarousel;
