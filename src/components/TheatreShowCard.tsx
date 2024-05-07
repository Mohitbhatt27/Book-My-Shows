import { AiOutlineInfoCircle } from "react-icons/ai";

import ShowTimingCard from "./ShowTimingCard";
import TheatreNameCard from "./TheatreNameCard";

type MovieShows = {
  id: string; // show id
  timing: string;
  format: string;
  price: number;
  noOfSeats: number;
  seatConfiguration: string;
  theatreId: string;
  movieId: string;
};

function formatTime(timeString: string) {
  const [hourString, minute] = timeString.split(":");
  const hour = +hourString % 24;
  return (hour % 12 || 12) + ":" + minute + (hour < 12 ? "AM" : "PM");
}

function TheatreShowCard({
  shows,
  name,
}: {
  shows: [MovieShows];
  name: string;
}) {
  return (
    <div className="w-full px-4 pt-4 pb-4">
      <div className="flex justify-start items-start">
        <div className="min-w-[30%] max-w-[45%]">
          <TheatreNameCard name={name} />
        </div>

        <div className="min-w-[6%] max-w-[10%] font-light ">
          <AiOutlineInfoCircle className="inline" />
          <span className="text-[10px] text-[#7d7d7d]">INFO</span>
        </div>

        <div className="ml-4 w-auto flex items-center justify-start flex-wrap">
          {shows.map((show) => (
            <ShowTimingCard
              config={show.seatConfiguration}
              format={show.format}
              price={show.price.toString()}
              showId={show.id}
              movieId={show.movieId}
              theatreId={show.theatreId}
              timing={formatTime(new Date(show.timing).toLocaleTimeString())}
              key={show.id}
            />
          ))}
        </div>
      </div>

      <div className="divider"></div>
    </div>
  );
}

export default TheatreShowCard;
