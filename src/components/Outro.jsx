import React from "react";
import DropALine from "./DropALine";
import face from "../assets/images/face.jpeg";
const Outro = () => {
  return (
    <div
      data-scroll-section
      className="bg-[#efefef] dark:bg-[#111414] dark:text-[#efefef] flex flex-col gap-[1.6rem] md:flex-row items-start justify-between md:items-end px-4 md:px-8 pt-[9rem] md:pt-[12rem] pb-[2.6rem] md:pb-[5rem]"
    >
      <p className="w-full relative md:w-[70%] text-4xl md:text-[6vw] leading-[1]">
        <div className="mr-4 absolute top-3 relative rounded-full w-fit inline-block">
          <img src={face} className="rounded-full h-24 w-24" alt="" />{" "}
          <div className="absolute top-1 right-1 w-5 border border-2 border-white h-5 bg-[#A0C000]  rounded-full"></div>
        </div>
        Let’s talk about a project, collaboration or an idea you may have
      </p>

      <DropALine />
    </div>
  );
};

export default Outro;
