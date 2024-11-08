import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import TheatreShowCard from "../components/TheatreShowCard";
import { AxiosInstance } from "../config/AxiosInstance";
import HomeLayout from "../layouts/HomeLayout";
import { show, TheatreState } from "../types/MovieListing";

function MovieListings() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [theatreData, setTheatreData] = useState<TheatreState>({});
  async function fetchShowsForMovie() {
    try {
      const response = await AxiosInstance.get(
        `/mba/api/v1/shows?movieId=${state?.movie._id}`
      );
      const shows: show[] = response.data.data;
      const showInATheatre: TheatreState = {};

      shows.map((show: show) => {
        if (show.theatreId._id in showInATheatre) {
          showInATheatre[show.theatreId._id].shows.push({
            id: show._id,
            timing: show.timing,
            price: show.price,
            noOfSeats: show.noOfSeats,
            format: show.format,
            seatConfiguration: show.seatConfiguration
              ? show.seatConfiguration
              : "",
            movieId: show.movieId,
            theatreId: show.theatreId._id,
          });
        } else {
          showInATheatre[show.theatreId._id] = {
            theatreName: show.theatreId.name,
            id: show.theatreId._id,
            shows: [
              {
                id: show._id,
                timing: show.timing,
                price: show.price,
                noOfSeats: show.noOfSeats,
                format: show.format,
                seatConfiguration: show.seatConfiguration
                  ? show.seatConfiguration
                  : "",
                movieId: show.movieId,
                theatreId: show.theatreId._id,
              },
            ],
          };
        }
      });

      setTheatreData(showInATheatre);
    } catch (error) {
      console.error("Error in getting all shows for the movie", error);
    }
  }

  useEffect(() => {
    if (!state || !state.movie.name) navigate("/");
    fetchShowsForMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HomeLayout>
      <div className="min-h-[80-vh] bg-[#F2F2F2]">
        <div className="bg-[#333545] text-white">
          <div className="font-light text-7xl pt-8 pb-6 w-[80vw] mx-auto">
            {state && state.movie.name}
            <div className="flex gap-3 mt-6">
              {state &&
                state.movie.genre
                  .split("/")
                  .map((genre: string, idx: number) => (
                    <button
                      key={idx}
                      className="btn btn-xs text-sm border-2 border-white bg-transparent text-white hover:bg-transparent"
                    >
                      {genre}
                    </button>
                  ))}
            </div>
          </div>
        </div>

        {/* Theatre listing */}

        <div className="bg-[#F2F2F2] mt-4 w-[100vw]">
          <div className="w-[80vw] mx-auto bg-[#FFFFFF]">
            {theatreData &&
              Object.keys(theatreData).map((theatreId: string) => {
                return (
                  <TheatreShowCard
                    shows={theatreData[theatreId].shows}
                    key={theatreId}
                    name={theatreData[theatreId].theatreName}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default MovieListings;
