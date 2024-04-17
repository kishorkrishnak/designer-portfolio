import React from "react";
import DropALine from "./DropALine";

const Outro = () => {
  return (
    <div className="bg-[#efefef] dark:bg-[#111414] dark:text-[#efefef] flex flex-col gap-[1.6rem] md:flex-row items-start justify-between md:items-end px-4 md:px-8 pt-[9rem] md:pt-[12rem] pb-[5rem]">
      <p className="w-full md:w-[70%] text-xl md:text-[6vw] leading-[1]">
        Let’s talk about a project, collaboration or an idea you may have
      </p>

      <DropALine />
    </div>
  );
};

export default Outro;
