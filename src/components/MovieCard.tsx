import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

type HomeMovieCardProps = {
  movieImage: string;
  name: string;
  genre: string;
  rating: string;
  voteCount: string;
  id: string;
};

function MovieCard({
  movieImage,
  name,
  genre,
  rating,
  voteCount,
  id,
}: HomeMovieCardProps) {
  const navigate = useNavigate();
  function handleOnClick() {
    navigate(`/about/${id}`);
  }

  return (
    <div
      className=" flex flex-col items-center justify-center h-[416px] w-[222px] mb-4 hover:cursor-pointer"
      onClick={handleOnClick}
    >
      <img
        src={movieImage}
        className="h-[95%] w-full rounded-tl-lg rounded-tr-lg"
      />
      <div className="bg-black w-full text-white text-left rounded-br-lg rounded-bl-lg py-1">
        <AiFillStar className="inline text-2xl text-red-500" />
        <span className="text-sm sm:text-xs md:text-sm">{rating}/10</span>
        <span className="text-sm sm:text-xs md:text-sm">{voteCount} Votes</span>
      </div>
      <div className="flex justify-start items-start w-full mt-2 flex-col">
        <p className="text-[#222222] text-left font-roboto text-[18px] leading-[23.94px] font-medium sm:text-[16px] md:text-[18px]">
          {name}
        </p>
        <p className="text-[#727272] text-left font-roboto text-[16px] leading-[24px] font-light sm:text-[14px] md:text-[16px]">
          {genre}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
