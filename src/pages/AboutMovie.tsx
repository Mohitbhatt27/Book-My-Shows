import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import ReactPlayer from "react-player";
import { useNavigate, useParams } from "react-router-dom";

import { useAppDispatch } from "../hooks/hooks";
import HomeLayout from "../layouts/HomeLayout";
import { getMovieById } from "../redux/MovieSlice";
import MovieType from "../types/Movie";

interface Response {
  payload: {
    data: {
      data: MovieType;
    };
  };
}

function AboutMovie() {
  const { id } = useParams();

  const [movie, setMovie] = useState<MovieType>();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = (await dispatch(getMovieById(id))) as Response;

        setMovie(response.payload?.data?.data);
      } catch (err) {
        console.error("Error fetching movie:", err);
      }
    }
    fetchMovie();
  }, [dispatch, id]);

  function handleNavigateToMovieListing() {
    navigate(`/movie/listing/${id}`, { state: { movie } });
  }

  return (
    <HomeLayout>
      <div className="h-screen lg:h-[65vw] bg-gray-900">
        <div className="flex flex-col lg:flex-row w-full mx-auto h-full lg:h-[40vw] max-w-[95%]">
          <div className="flex w-full lg:w-3/5 h-[50vh] lg:h-5/6 mt-10 ml-4 mb-2 lg:mt-24 lg:ml-24">
            <ReactPlayer
              url={movie?.trailerUrl}
              width="100%"
              height="100%"
              controls
            />
          </div>

          <div className="ml-4 mt-4 lg:ml-24 lg:mt-24 flex flex-col gap-5 text-center">
            <div className="w-auto">
              <h2 className="text-[24px] lg:text-[30px] font-semibold">
                {movie?.name}
              </h2>
            </div>
            <div className="w-auto h-[64px] bg-[#333333] flex items-center justify-center mt-3 rounded-md">
              <p className="text-[14px] lg:text-[16px] text-[#ffffff] flex gap-1 w-[209px] h-[24px] ml-4">
                <span className="text-red-500">
                  <AiFillStar className="inline text-xl lg:text-2xl text-red-500 mx-2" />
                </span>
                <span className="text-[#ffffff] text-center">
                  {movie?.rating}/10
                </span>
                <span className="ml-2">({movie?.voteCount} Votes)</span>
              </p>
            </div>

            <div className="w-auto h-auto bg-[#333333] flex flex-col items-center justify-center mt-3 rounded-md text-[14px] lg:text-[16px] gap-2 p-4">
              <div className="text-[#ffffff] flex flex-col lg:flex-row lg:justify-between w-full text-center lg:text-left">
                <div className="mb-2 lg:mb-0">{movie?.genre}</div>
                <div className="flex gap-4 justify-center lg:justify-start">
                  <button className="btn border-black text-sm lg:text-base">
                    {movie?.releaseDate}
                  </button>
                  <button className="btn border-black text-sm lg:text-base">
                    {movie?.language}
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 justify-center mt-4">
                {movie?.casts?.map((cast, index) => (
                  <button
                    key={index}
                    className="btn border-black text-sm lg:text-base"
                  >
                    {cast}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-3">
              <button
                onClick={handleNavigateToMovieListing}
                className="btn text-sm lg:text-lg bg-[#F84464] border-none font-semibold text-white hover:bg-[#F84464]"
              >
                Book Tickets
              </button>
            </div>
          </div>
        </div>

        <div className="text-xl lg:text-2xl font-bold text-left p-4 w-full lg:w-3/4 leading-4 mt-4">
          About the movie
          <div className="w-auto h-auto text-left text-[16px] lg:text-[18px] font-normal leading-6 tracking-wide mt-4">
            {movie?.description}
          </div>
        </div>
        <div className="divider w-full lg:w-3/4 mx-auto"></div>
      </div>
    </HomeLayout>
  );
}

export default AboutMovie;
