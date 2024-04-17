import React from "react";
import DropALine from "./DropALine";

const HeroSection = () => {
  return (
    <section className="pt-[10rem] bg-[#efefef] dark:bg-[#111414] dark:text-[#efefef]  md:pt-[16rem] px-4 lg:px-8 flex flex-col gap-[5.5rem] text-[#111414] font-ppmori">
      <div className="gap-[2rem] flex flex-col md:flex-row justify-between items-end">
        <h1 className="text-[17.8vw] leading-[0.9]">Digital Designer</h1>

        <p className="text-md lg:text-lg  w-[100%] mr-12">
          specialized in Web Design, UX / UI, Webflow, and Front End
          Development.
        </p>
      </div>

      <div className="flex justify-between items-start">
        <div className="flex flex-col items-start justify-between gap-[2rem] w-full md:w-[60%] ">
          <p className="text-xl md:text-[2.25vw] leading-[1.4]">
            I'm helping startups and business owners to make a visual statement
            through spotless Web Design and Development so they can increase
            brand <br className="hidden md:block" /> awareness and sell more.
          </p>

          <DropALine />
        </div>

        <div className="hidden md:flex flex-col items-start justify-center gap-5 text-sm lg:text-[16px]">
          <p className="border-b border-[#d9d9d9] pb-2 mr-20">Let's get Connected</p>

          <ul className="flex flex-col items-staer justify-center gap-3">
            <li>
              <a href="/dribble">Dribble</a>
            </li>
            <li>
              <a href="/dribble">Dribble</a>
            </li>

            <li>
              <a href="/dribble">Dribble</a>
            </li>

            <li>
              <a href="/dribble">Dribble</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
