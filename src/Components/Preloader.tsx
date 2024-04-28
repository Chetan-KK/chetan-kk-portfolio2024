"use client";

import { bebasNeue } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP);

const Preloader = () => {
  const container = useRef(null);

  const loaderDealy = 1;
  const loaderDuration = 4;

  useGSAP(
    () => {
      // start loader
      const tl = gsap.timeline({ delay: 0.5 });

      tl.to(".bg-title", {
        scale: 1,
        opacity: 1,
        duration: 1,
      });
      tl.to(".bg-title", {
        scale: 2,
        opacity: 0,
        duration: 1,
      });
      tl.to(".bg-year", {
        y: 0,
        opacity: 1,
        duration: 1,
      });
      tl.to(".loader", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: loaderDuration,
        ease: "circ.out",
      });
      tl.to(
        ".count",
        {
          innerText: 100,
          duration: loaderDuration,
          snap: {
            innerText: 1,
          },
          ease: "circ.out",
        },
        "-=4"
      );
      tl.to(
        ".count-slide",
        {
          right: "0%",
          duration: loaderDuration,
          ease: "circ.out",
        },
        "-=4"
      );

      // remove loader

      tl.call(() => {
        window.scrollTo(0, 0);
      });

      tl.to(".loader", {
        clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        duration: loaderDealy,
        ease: "circ.out",
      });
      tl.to(
        ".count-slide",
        {
          right: "-5%",
          opacity: 0,
          duration: loaderDealy,
          ease: "circ.out",
        },
        "-=.7"
      );
      tl.to(
        ".bg-year",
        {
          y: -300,
          opacity: 0,
          duration: 1,
        },
        "-=.5"
      );

      tl.to(
        ".loader-container",
        {
          height: "0%",
          duration: loaderDealy,
          ease: "power4.in",
        },
        "-=.8"
      );
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <div
        className={cn(
          bebasNeue.className,
          "loader-container overflow-hidden z-40 h-screen w-screen fixed top-0 left-0 bg-secondary"
        )}
      >
        <div className="scale-0 opacity-0 text-dim bg-title absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] uppercase text-7xl">
          portfolio
        </div>
        <div className="bg-year translate-y-12 opacity-0 h-full grid place-content-center text-dark text-[25rem]">
          <div>2024</div>
        </div>
        <div className="count-slide text-7xl">
          <span className="count">0</span>%
        </div>
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default Preloader;
