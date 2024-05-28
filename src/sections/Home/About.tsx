import ParallaxImage from "@/Components/ParallaxImage";
import SuperHeading from "@/Components/SuperHeading";
import { bebasNeue } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Parallax, useParallax } from "react-scroll-parallax";

const About = () => {
  const parallax = useParallax<HTMLDivElement>({
    onProgressChange: (progress) => {
      if (parallax.ref.current) {
        // set progress to CSS variable
        parallax.ref.current.style.setProperty(
          "--progress",
          progress.toString()
        );
      }
    },
  });

  return (
    <div className="mb-32">
      <SuperHeading heading="About Me" subheading="who am i" />
      <div className="relative grid md:grid-cols-2 grid-cols-1 m-auto w-fit mt-32">
        <Parallax
          speed={20}
          className="md:w-[30rem] m-auto p-4 md:h-[46rem] h-[25rem]"
        >
          <Image
            src={"/me.jpg"}
            alt="chetan khulage"
            height={512}
            width={512}
            className="object-cover saturate-0 shadow-[0_0_60px_-10px] shadow-secondary"
          />
        </Parallax>
        <Parallax
          speed={20}
          scale={[1, 1.5]}
          className={cn(
            bebasNeue.className,
            "text-center text-dark lg:text-7xl -translate-y-24 md:translate-y-0 text-5xl lg:mt-5 mt-20"
          )}
        >
          16 march
          <div className="lg:text-[15rem] text-9xl">2002</div>
        </Parallax>
        <Parallax
          speed={10}
          scale={[0.7, 1.3]}
          rotate={["0deg", "5deg"]}
          className="md:absolute bottom-0 lg:leading-10 sm:leading-9 leading-6 lg:text-xl sm:text-lg text-sm text-justify xl:left-[37%] lg:left-[20%] left-[10%] text-white/90 lg:w-[45rem] w-auto p-7"
        >
          <div
            ref={parallax.ref}
            style={{
              lineHeight: `calc(3.2 * var(--progress, 10) + 1)`,
              opacity: `var(--progress, 1)`,
            }}
          >
            <span className="lg:text-6xl text-4xl">H</span>ello, I&apos;m
            Chetan, a front-end developer with a passion for creating stunning,
            interactive web experiences. With over three years of expertise in
            JavaScript, React, and THREE.js, I blend creativity with technical
            prowess to bring your ideas to life. Whether designing sleek
            interfaces or crafting dynamic animations, I am dedicated to
            delivering top-notch, user-centric solutions.
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default About;
