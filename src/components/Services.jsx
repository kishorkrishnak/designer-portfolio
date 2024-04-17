import React from "react";
import { uid } from "react-uid";

const Services = () => {
  const services = [
    {
      slNo: "01",
      title: "Design",
      description:
        "I make web designs that engage your audience and create the user experience you want.",
    },

    {
      slNo: "02",
      title: "Development",
      description:
        "Bringing visuals to life through developing highly functional web solutions.",
    },

    {
      slNo: "03",
      title: "The Full Package",
      description:
        "Get the best of both worlds for your website, capture your brand identity and get fully functional features.",
    },
  ];
  return (
    <section data-scroll-section className="pt-[9rem] md:pt-[12rem] bg-[#efefef] dark:bg-[#111414] dark:text-[#efefef] px-4 lg:px-8 flex flex-col gap-[5rem] font-ppmori text-[#111414]">
      <p className="w-full text-4xl md:text-[4vw]">I can help you <br className="md:hidden" /> with ...</p>

      <div className="flex justify-between items-center">
        <div className="gap-[1.5rem] md:gap-0 flex flex-col md:flex-row items-start justify-between">
          {services.map((service) => (
            <div
              key={uid(service)}
              className="flex-1  md:px-8 md:border-l border-[#D9D9D9] flex flex-col items-start justify-center gap-[2.1rem] md:gap-[3.6rem]"
            >
              <h1 className="text-4xl md:text-[3.5vw] text-[#d9d9d9]">{service.slNo}</h1>
              <div className="flex flex-col items-start justify-center gap-3">
                <p className="md:text-[1.8vw]">{service.title}</p>
                <p className="md:text-[1.6vw] lg:text-[1.1vw] max-w-[70%] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
