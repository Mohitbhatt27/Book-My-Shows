import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import HomeLayout from "../layouts/HomeLayout";
import { getAllMovies } from "../redux/MovieSlice";
import { addNewShow } from "../redux/ShowSlice";
import { getAllTheatres } from "../redux/TheatreSlice";

function AddNewShows() {
  const [showDetails, setShowDetails] = useState({
    theatreId: "",
    movieId: "",
    timing: "",
    noOfSeats: 10,
    price: 50,
    // seatConfiguration: "Standard",
    format: "2D",
  });

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data = showDetails;
    dispatch(addNewShow(data));
  };

  const movieList = useAppSelector((state) => state.movies.movieList);
  const theatreList = useAppSelector((state) => state.theatres.theatreList);

  useEffect(() => {
    dispatch(getAllTheatres());
    dispatch(getAllMovies());
  }, [dispatch]);

  return (
    <HomeLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Add New Show</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Theatre selection */}
          <div>
            <label className="block text-sm font-bold">Select Theatre</label>
            <select
              value={showDetails.theatreId}
              onChange={(e) =>
                setShowDetails({ ...showDetails, theatreId: e.target.value })
              }
              className="select select-bordered w-full"
            >
              <option value="" disabled>
                Select Theatre
              </option>
              {theatreList.map((theatre) => (
                <option key={theatre._id} value={theatre._id}>
                  {theatre.name}
                </option>
              ))}
            </select>
          </div>

          {/* Movie selection */}
          <div>
            <label className="block text-sm font-bold">Select Movie</label>
            <select
              value={showDetails.movieId}
              onChange={(e) =>
                setShowDetails({ ...showDetails, movieId: e.target.value })
              }
              className="select select-bordered w-full"
            >
              <option value="" disabled>
                Select Movie
              </option>
              {movieList.map((movie) => (
                <option key={movie._id} value={movie._id}>
                  {movie.name}
                </option>
              ))}
            </select>
          </div>

          {/* Show timing */}
          <div>
            <label className="block text-sm font-bold">Show Date & Time</label>
            <input
              type="datetime-local"
              value={showDetails.timing}
              onChange={(e) =>
                setShowDetails({ ...showDetails, timing: e.target.value })
              }
              className="input input-bordered w-full"
            />
          </div>

          {/* Number of seats */}
          <div>
            <label className="block text-sm font-bold">Number of Seats</label>
            <input
              type="number"
              min={1}
              value={showDetails.noOfSeats}
              onChange={(e) =>
                setShowDetails({
                  ...showDetails,
                  noOfSeats: Number(e.target.value),
                })
              }
              className="input input-bordered w-full"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-bold">Price</label>
            <input
              type="number"
              min={1}
              value={showDetails.price}
              onChange={(e) =>
                setShowDetails({
                  ...showDetails,
                  price: Number(e.target.value),
                })
              }
              className="input input-bordered w-full"
            />
          </div>

          {/* Seat type */}
          {/* <div>
            <label className="block text-sm font-bold">Seat Type</label>
            <select
              value={showDetails.seatConfiguration}
              onChange={(e) =>
                setShowDetails({
                  ...showDetails,
                  seatConfiguration: e.target.value,
                })
              }
              className="select select-bordered w-full"
            >
              <option value="Standard">Standard</option>
              <option value="VIP">VIP</option>
              <option value="Premium">Premium</option>
            </select>
          </div> */}

          {/* Show format */}
          <div>
            <label className="block text-sm font-bold">Format Type</label>
            <select
              value={showDetails.format}
              onChange={(e) =>
                setShowDetails({ ...showDetails, format: e.target.value })
              }
              className="select select-bordered w-full"
            >
              <option value="2D">2D</option>
              <option value="3D">3D</option>
              <option value="IMAX">IMAX</option>
            </select>
          </div>

          {/* Submit button */}
          <div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </HomeLayout>
  );
}

export default AddNewShows;
