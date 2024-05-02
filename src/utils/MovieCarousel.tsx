import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import MovieCard from "../components/MovieCard";
import MoviePosterProps from "../types/MoviePoster";

type MovieCarouselProps = {
  movies: MoviePosterProps[];
};

const MovieCarousel: React.FC<MovieCarouselProps> = ({ movies }) => {
  const settings = {
    dots: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {movies.map((movie, index) => (
        <div key={index}>
          <MovieCard
            movieImage={movie.poster}
            name={movie.name}
            genre={movie.genre}
            rating={movie.rating}
            voteCount={movie.voteCount}
          />
        </div>
      ))}
    </Slider>
  );
};

export default MovieCarousel;
