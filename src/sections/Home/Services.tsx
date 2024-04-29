import React from "react";
import SuperHeading from "../../Components/SuperHeading";
import { Parallax } from "react-scroll-parallax";

const Services = () => {
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
      <div className="max-w-screen-xl grid grid-cols-3 gap-5 m-5 mx-auto">
        {data.map((service, i) => (
          <Parallax
            rotate={i % 2 == 0 ? ["0deg", "-10deg"] : ["0deg", "10deg"]}
            translateX={i % 2 == 0 ? ["-100px", "0px"] : ["100px", "-0px"]}
            key={i}
            className={`${
              i % 3 === 0 ? "col-span-2" : ""
            } flex flex-col gap-3 p-5 border-2 border-border bg-secondary/50 rounded-xl`}
          >
            <div className="text-2xl font-bold">{service.title}</div>
            <div className="text-dim">{service.desc}</div>
          </Parallax>
        ))}
      </div>
    </div>
  );
};

export default Services;
