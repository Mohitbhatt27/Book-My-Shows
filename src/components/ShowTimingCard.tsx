function ShowTimingcard({
  format,
  price,
  timing,
}: {
  format: string;
  price: string;
  timing: string;
}) {
  return (
    <div className="group relative w-32 py-1 px-2 flex flex-col items-center justify-center text-[12px] text-[#4abd5d] rounded-md border border-[#9A9A9A] font-roboto mx-2 my-2">
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
