import { useEffect, useState } from "react";

import Banner from "../assets/Banner.avif";
import HomeBanner from "../components/HomeBanner";
import HomeFooter from "../components/HomeFooter";
import HomePageCarousel from "../components/HomePageCarousel";
import MovieCard from "../components/MovieCard";
import { AxiosInstance } from "../config/AxiosInstance";
import MovieType from "../types/Movie";
import MoviePosterType from "../types/MoviePoster";

function Home() {
  const [moviePoster, setMoviePoster] = useState([
    { id: "", poster: "", name: "", genre: "", rating: "", voteCount: "" },
  ]);
  async function fetchMovie() {
    try {
      const response = await AxiosInstance.get("/mba/api/v1/movies");
      const movieData = response.data.data.map((movie: MovieType) => {
        return {
          id: movie._id,
          poster: movie.poster,
          name: movie.name,
          genre: movie.genre,
          rating: movie.rating,
          voteCount: movie.voteCount,
        };
      });
      setMoviePoster(movieData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMovie();
  }, []);
  return (
    <div>
      <HomePageCarousel />
      <div className="flex flex-col w-[90vw] mx-auto">
        <p className="text-[24px] font-roboto antialiased font-bold mt-5 mb-2 leading-[28.08px]">
          Recommended Movies
        </p>
        <div className="mt-2 flex flex-col lg:flex-row items-center gap-16 space justify-between">
          {moviePoster &&
            moviePoster.map((moviePost: MoviePosterType) => {
              return (
                <MovieCard
                  movieImage={moviePost.poster}
                  key={moviePost.id}
                  name={moviePost.name}
                  genre={moviePost.genre}
                  rating={moviePost.rating}
                  voteCount={moviePost.voteCount}
                />
              );
            })}
        </div>
      </div>
      <HomeBanner image={Banner} />
      <HomeFooter />
    </div>
  );
}
export default Home;
