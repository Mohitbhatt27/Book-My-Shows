import Banner from "../assets/Banner.avif";
import MoviePoster from "../assets/MoviePoster.avif";
import HomeBanner from "../components/HomeBanner";
import HomeFooter from "../components/HomeFooter";
import HomePageCarousel from "../components/HomePageCarousel";
import MovieCard from "../components/MovieCard";

function Home() {
  return (
    <div>
      <HomePageCarousel />
      <div className="flex flex-col w-[90vw] mx-auto">
        <p className="text-[24px] font-roboto antialiased font-bold mt-5 mb-2 leading-[28.08px]">
          Recommended Movies
        </p>
        <div className="mt-2 flex flex-col lg:flex-row items-center gap-16 space justify-between">
          <MovieCard movieImage={MoviePoster} />
          <MovieCard movieImage={MoviePoster} />
          <MovieCard movieImage={MoviePoster} />
          <MovieCard movieImage={MoviePoster} />
          <MovieCard movieImage={MoviePoster} />
        </div>
      </div>
      <HomeBanner image={Banner} />
      <HomeFooter />
    </div>
  );
}
export default Home;
