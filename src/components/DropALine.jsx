import React from "react";
import { PiArrowUpRight } from "react-icons/pi";
const DropALine = () => {
  return (
    <button className="relative flex items-center justify-center gap-12 w-fit text-sm md:text-lg bg-[#111414] dark:bg-[#efefef] text-[#efefef] dark:text-[#111414] px-[1.5rem] pr-[4rem] py-[0.8rem] rounded-full overflow-hidden group">
      Drop me a line
      <div className="flex items-center justify-center absolute right-6 h-2 w-2 group-hover:translate-x-3 duration-200 transition-all group-hover:h-10 group-hover:w-10 bg-white rounded-full">
        <PiArrowUpRight
          color="black"
          className="hidden group-hover:block h-6 w-6"
        />
      </div>
    </button>
  );
};

export default DropALine;
