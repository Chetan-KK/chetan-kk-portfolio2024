"use client";

import Hero from "@/Components/Home/Hero";
import Logo from "@/Components/Logo";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import NavBar from "@/Components/Navbar/NavBar";
import { bebasNeue, inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const container = useRef(null);

  const loaderDealy = 1;
  const loaderDuration = 4;

  useGSAP(
    () => {
      // start loader
      const tl = gsap.timeline({ delay: 0.5 });

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
          top: "-100%",
          duration: loaderDealy,
          ease: "power4.in",
        },
        "-=.8"
      );
    },
    { scope: container }
  );

  useEffect(() => {}, []);

  return (
    <div className="min-h-screen" ref={container}>
      <MaxWidthWrapper>
        {/* preloader */}
        <div
          className={cn(
            bebasNeue.className,
            "overflow-hidden loader-container z-40 h-screen w-screen fixed top-0 left-0 bg-secondary"
          )}
        >
          <div className="bg-year translate-y-12 opacity-0 h-full grid place-content-center text-dark text-[25rem]">
            {/*<div className="absolute top-[70%] left-[50%] translate-x-[-50%] uppercase text-7xl">
              portfolio
        </div>*/}
            <div>2024</div>
          </div>
          <div className="count-slide text-7xl">
            <span className="count">0</span>%
          </div>
          <div className="loader"></div>
        </div>
        {/* main body */}
        <Logo />
        <NavBar />
        <Image
          src={"/grid.svg"}
          alt="img"
          width={2880}
          height={5120}
          className="absolute top-0 right-0"
        />
        <Hero />
      </MaxWidthWrapper>
    </div>
  );
}
