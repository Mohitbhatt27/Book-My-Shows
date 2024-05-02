import { AiOutlineInfoCircle } from "react-icons/ai";

import ShowTimingCard from "./ShowTimingCard";
import TheatreNameCard from "./TheatreNameCard";

function TheatreShowCard({ num }: { num: number }) {
  return (
    <div className="w-full px-4 pt-4 pb-4">
      <div className="flex justify-start items-start">
        <div className="min-w-[30%] max-w-[45%]">
          <TheatreNameCard />
        </div>

        <div className="min-w-[6%] max-w-[10%] font-light ">
          <AiOutlineInfoCircle className="inline" />
          <span className="text-[10px] text-[#7d7d7d]">INFO</span>
        </div>

        <div className="ml-4 w-auto flex items-center justify-start flex-wrap">
          {Array(num)
            .fill(0)
            .map(() => {
              return <ShowTimingCard />;
            })}
        </div>
      </div>

      <div className="divider"></div>
    </div>
  );
}

export default TheatreShowCard;
