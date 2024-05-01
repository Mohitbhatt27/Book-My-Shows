import MoviePoster from "../assets/MoviePoster.avif";
import HomePageCarousel from "../components/HomePageCarousel";
import MovieCard from "../components/MovieCard";

function Home() {
  return (
    <div>
      <HomePageCarousel />
      <div className="flex flex-col justify-center w-[90vw] mx-auto">
      <p className="text-[24px] font-roboto antialiased font-bold mt-5 mb-2 leading-[28.08px]">Recommended Movies</p>
      <div className="mt-2 flex justify-start items-center gap-14">
        <MovieCard movieImage={MoviePoster} />
        <MovieCard movieImage={MoviePoster} />
        <MovieCard movieImage={MoviePoster} />
        <MovieCard movieImage={MoviePoster} />
        <MovieCard movieImage={MoviePoster} />
      </div>
      </div>
    </div>
  );
}
export default Home;
