import React from "react";
import SuperHeading from "../../Components/SuperHeading";
import { Parallax } from "react-scroll-parallax";
import { useScreenSize } from "@/lib/contexts/ScreenSizeContext";

const Services = () => {
  const screenSize = useScreenSize();

  const data = [
    {
      title: "Frontend web development",
      desc: "I can create a beautiful website for your upcoming project, i create websites that just blows minds",
    },
    {
      title: "UI Development",
      desc: "I can create a beautiful website for your upcoming project, i create websites that just blows minds",
    },
    {
      title: "UI Development",
      desc: "I can create a beautiful website for your upcoming project, i create websites that just blows minds",
    },
    {
      title: "Frontend web development",
      desc: "I can create a beautiful website for your upcoming project, i create websites that just blows minds",
    },
  ];

  return (
    <div className="mb-20">
      <SuperHeading heading="I can help you with" subheading="Things i do" />
      <div
        className={`max-w-screen-xl grid ${
          screenSize > 1000 && `grid-cols-3`
        } sm:gap-5 gap-8 m-5 mx-auto`}
      >
        {data.map((service, i) => (
          <Parallax
            rotate={i % 2 == 0 ? ["0deg", "-10deg"] : ["0deg", "10deg"]}
            translateX={i % 2 == 0 ? ["-100px", "0px"] : ["100px", "-0px"]}
            key={i}
            className={`${
              screenSize > 1000
                ? i % 3 === 0
                  ? "col-span-2"
                  : ""
                : "max-w-[40rem] sm:mx-auto mx-5"
            } gap-3 p-5 border-2 border-border bg-secondary/50 rounded-xl`}
          >
            <div className="sm:text-2xl font-bold">{service.title}</div>
            <div className="sm:text-base text-xs text-dim">{service.desc}</div>
          </Parallax>
        ))}
      </div>
    </div>
  );
};

export default Services;
