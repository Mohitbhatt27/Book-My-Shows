import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

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

  return (
    <HomeLayout>
      <div className="  h-[65vw]">
        <div className="flex font-roboto flex-row w-full mx-auto h-[40vw] bg-gradient-to-l from-gray-100 to-gray-900">
          <div className="flex w-2/3 h-5/6 mt-10 ml-4 mb-2">
            <ReactPlayer
              url={movie?.trailerUrl}
              width="100%"
              height="100%"
              controls
            />
          </div>

          <div className="ml-24 mt-24 flex flex-col gap-5 ">
            <div className="w-5/6 ">
              <h2 className="text-[30px] font-semibold ">{movie?.name}</h2>
            </div>
            <div className="w-5/6 h-[64px] bg-[#333333] hidden lg:flex items-center justify-start mt-3 rounded-md">
              <p className="text-[16px] text-[#ffffff] flex gap-1 w-[209px] h-[24px]  ml-4">
                <span className="text-red-500">
                  <AiFillStar className="inline text-2xl text-red-500 mx-2" />
                </span>
                <span>{movie?.rating}/10</span>{" "}
                <span className="ml-2">({movie?.voteCount} Votes)</span>
              </p>
            </div>

            <div className="hidden w-5/6 h-[120px] bg-[#333333] lg:flex flex-col items-center justify-start mt-3 rounded-md text-[16px] gap-2">
              <div className="flex text-[#ffffff] text-[16px] items-center justify-between mt-4">
                {movie?.genre}
              </div>
              <div className="mt-2 flex gap-4 justify-between mx-auto mb-2">
                <button className="btn border-black">
                  {movie?.releaseDate}
                </button>
                <button className="btn border-black ">{movie?.language}</button>
              </div>
            </div>

            <div className="mt-3">
              <button className="btn text-lg bg-[#F84464] border-none font-semibold text-white w-5/6 hover:bg-[#F84464]">
                Book Tickets
              </button>
            </div>
          </div>
        </div>

        <div className=" text-2xl font-bold text-left p-4 w-3/4 leading-4 mt-4">
          About the movie
          <div className="w-auto h-auto text-left text-[18px] font-normal leading-6 tracking-wide mt-4">
            {movie?.description}
          </div>
        </div>
        <div className="divider w-3/4 mx-auto"></div>
        <div className=" text-2xl font-bold text-left p-4 w-3/4 leading-4">
          Casts
          <div className="w-auto h-auto text-left text-[14px] font-normal leading-6 tracking-wide">
            <div className="mt-8 flex gap-4 justify-start mx-auto mb-4">
              {movie?.casts?.map((cast, index) => (
                <button key={index} className="btn border-black ">
                  {cast}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default AboutMovie;
