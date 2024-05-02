function ShowTimingcard() {
  return (
    <div className="group relative w-32 py-1 px-2 flex flex-col items-center justify-center text-[12px] text-[#4abd5d] rounded-md border border-[#9A9A9A] font-roboto">
      <div>10:45 PM</div>

      <div className="text-[12px]">DOLBY ATMOS</div>

      <div className="absolute top-[100%] left-[10%] text-black hidden group-hover:block shadow-lg py-2 px-4">
        <div className="flex flex-col items-center justify-center">
          <div>Rs. 200.00</div>
          <div className="text-gray-500">GOLD</div>
          <div className="text-[#49ba8f]">Available</div>
        </div>
      </div>
    </div>
  );
}

export default ShowTimingcard;
