import ParallaxImage from "@/Components/ParallaxImage";
import SuperHeading from "@/Components/SuperHeading";
import { bebasNeue } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Parallax } from "react-scroll-parallax";

const About = () => {
  return (
    <div className="mb-32">
      <SuperHeading heading="About Me" subheading="who am i" />
      <div className="relative grid grid-cols-2 m-auto w-fit gap-10 mt-32">
        <div className="w-[30rem] overflow-hidden h-[46rem]">
          <Parallax speed={20}>
            <Image
              src={"/me.jpg"}
              alt="chetan khulage"
              height={512}
              width={512}
              className="object-cover saturate-0"
            />
          </Parallax>
        </div>
        <div
          className={cn(
            bebasNeue.className,
            "text-center text-dark text-7xl mt-5"
          )}
        >
          16 march
          <div className="text-[15rem]">2002</div>
        </div>
        <div className="absolute bottom-0 leading-10 text-xl text-justify left-[37%] text-white/90 w-[45rem]">
          <span className="text-6xl">H</span>ello everyone, my name is Chetan
          and I'm an experienced front-end developer with a specialization in
          THREE JS development and motion design for the web. With around three
          years of experience in web development, I have gained extensive
          knowledge of several programming languages and tools, including
          JavaScript, React, GSAP, Vite.js, Node.js, Express.js, Tailwind,
          Chart.js, and version control tools like Git and GitHub. I also
          possess proficiency in several designing softwares such as Photoshop,
          Adobe XD, Figma, Blender, Illustrator, Canva, Lightroom, and Spline.
        </div>
      </div>
    </div>
  );
};

export default About;
