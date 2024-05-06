import { MdFastfood } from "react-icons/md";
import { PiDeviceMobileBold } from "react-icons/pi";

function TheatreNameCard({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-start justify-center font-semibold px-4 py-2 font-roboto text-[12px]">
      <div className="text-[#333333] ">{name}</div>

      <div className="flex gap-8 items-center justify-around mt-3">
        <div className="text-[#49ba8e] font-normal">
          <PiDeviceMobileBold className="inline text-2xl " /> M-Ticket
        </div>

        <div className="text-[#ffa426] font-normal">
          <MdFastfood className="inline text-2xl" /> Food & Beverages
        </div>
      </div>
    </div>
  );
}

export default TheatreNameCard;
