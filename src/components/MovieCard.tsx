import { AiFillStar } from "react-icons/ai";

type HomeMovieCardProps = {
  movieImage: string;
};

function MovieCard({ movieImage }: HomeMovieCardProps) {
  return (
    <div className="flex flex-col items-center justify-center h-[416px] w-[222px] mb-4">
      <img
        src={movieImage}
        className="h-[95%] w-full rounded-tl-lg rounded-tr-lg"
      />
      <div className="bg-black w-full text-white text-left rounded-br-lg rounded-bl-lg py-1">
        <AiFillStar className="inline text-2xl text-red-500 mx-2" />
        <span>9/10</span> <span>52.5K Votes</span>
      </div>
      <div className="flex justify-start items-start w-full mt-2 flex-col">
        <p className="text-[#222222] text-left font-roboto text-[18px] leading-[23.94px] font-medium">
          Rogue One: A Star Wars Story
        </p>
        <p className="text-[#727272] text-left font-roboto text-[16px] leading-[24px] font-light">
          Action/Sci-fi
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
