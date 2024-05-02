import ShowTimingCard from "../components/ShowTimingCard";
import TheatreNameCard from "../components/TheatreNameCard";

function MovieListings() {
  return (
    <>
      <div className="mt-40 ml-40">
        <div>Show Timing</div>
        <ShowTimingCard />
        <TheatreNameCard />
      </div>
    </>
  );
}

export default MovieListings;
