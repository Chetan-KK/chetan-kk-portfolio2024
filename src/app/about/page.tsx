"use client";

import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import { bebasNeue } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Contact from "@/sections/Home/Contact";
import Footer from "@/sections/Home/Footer";
import React, { useEffect } from "react";
import { Parallax } from "react-scroll-parallax";

const AboutPage = () => {
  return (
    <MaxWidthWrapper className="min-h-[200vh]">
      <div className="py-24 sm:px-10 px-4">
        <Parallax
          translateX={[-10, 2]}
          className="uppercase font-bold md:text-7xl sm:text-5xl text-3xl text-primary"
        >
          About Me
        </Parallax>
        <div className="text-dim md:text-xl text-sm mt-3">Chetan Khulage</div>
      </div>
      <Parallax
        speed={-4}
        translateX={[10, -10]}
        className={cn(
          bebasNeue.className,
          "text-center lg:text-[20rem] lg:mb-0 mb-10 text-9xl text-dark"
        )}
      >
        Chetan-KK
      </Parallax>
      {/* <ParallaxBanner
        layers={[
          //   { image: "/me/code-transparent-bg.png", speed: -15 },
          {
            image: "/me/name-transparent-bg.png",
            speed: -5,
            scale: [0.5, 1.1],
          },
          { image: "/me/chetan-khulage-transparent-bg.png", speed: -10 },
          {
            image: "/me/icons-transparent-bg.png",
            speed: -7,
            scale: [0.9, 1.1],
          },
          {
            speed: -15,
            children: (
              <div className="absolute inset-0 flex items-center justify-center"></div>
            ),
          },
        ]}
        className="aspect-[2/1]"
      /> */}
      <Contact />
      <Footer />
    </MaxWidthWrapper>
  );
};

export default AboutPage;
