import { useEffect, useState } from "react";

import Banner from "../assets/Banner.avif";
import HomeBanner from "../components/HomeBanner";
import HomePageCarousel from "../components/HomePageCarousel";
import { AxiosInstance } from "../config/AxiosInstance";
import HomeLayout from "../layouts/HomeLayout";
import MovieType from "../types/Movie";
import MovieCarousel from "../utils/MovieCarousel";

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
    <HomeLayout>
      <HomePageCarousel />
      <div className="flex flex-col w-[90vw] mx-auto lg:w-[80vw]">
        <p className=" text-[24px] font-roboto antialiased font-bold mt-5 mb-4 leading-[28.08px] sm:text-[28px] md:text-[32px] lg:text-[36px]">
          Recommended Movies
        </p>

        <MovieCarousel movies={moviePoster} />
      </div>
      <HomeBanner image={Banner} />
    </HomeLayout>
  );
}
export default Home;
