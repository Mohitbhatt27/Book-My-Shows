import { useNavigate } from "react-router-dom";

function ShowTimingcard({
  config,
  format,
  price,
  timing,
  showId,
  theatreId,
  movieId,
}: {
  format: string;
  price: string;
  timing: string;
  config: string;
  showId: string;
  theatreId: string;
  movieId: string;
}) {
  const navigate = useNavigate();

  function handleOnShowTimingCardClick() {
    if (config) {
      navigate("/about/buyTickets", {
        state: { config, timing, price, movieId, theatreId, showId },
      });
    }
  }

  return (
    <div
      onClick={handleOnShowTimingCardClick}
      className={`group relative w-32 py-1 px-2 flex flex-col items-center justify-center text-[12px] text-[#4abd5d] rounded-md border border-[#9A9A9A] font-roboto mx-2 my-2 ${
        config ? "hover:cursor-pointer" : ""
      }`}
    >
      <div>{timing}</div>

      <div className="text-[12px]">{format}</div>

      <div className="z-10 bg-white absolute top-[100%] left-[10%] text-black hidden group-hover:block shadow-lg py-2 px-4">
        <div className="flex flex-col items-center justify-center">
          <div>{price}</div>
          <div className="text-gray-500">GOLD</div>
          <div className="text-[#49ba8f]">Available</div>
        </div>
      </div>
    </div>
  );
}

export default ShowTimingcard;
