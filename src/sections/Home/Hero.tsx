"use client";
import { useLenis } from "@/lib/contexts/LenisContext";
import { bebasNeue, poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import { usePreloader } from "@/lib/contexts/PreloaderContext";

const Hero2 = () => {
  const container = useRef(null);
  const { lenisStart, lenisStop, lenisRef } = useLenis();

  const { isPreloaderShown } = usePreloader();

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: isPreloaderShown ? 0.5 : 9.5 });

      tl.from(".slide-bottom", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });
      tl.then(() => {
        if (lenisRef.current) {
          lenisStart();
        }
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="mt-28 sm:pl-10 lg:pl-5 pl-3 mb-80">
      <Parallax
        speed={10}
        translateY={[0, 0]}
        translateX={["-400px", "100px"]}
        className="overflow-hidden"
      >
        <div className={cn(poppins.className, "slide-bottom font-light")}>
          {"👋🏻 Hello, I'm"}
        </div>
      </Parallax>
      <Parallax
        speed={10}
        translateY={[0, 0]}
        translateX={["-200px", "100px"]}
        className="overflow-hidden"
      >
        <div
          className={cn(
            poppins.className,
            "slide-bottom font-bold uppercase lg:text-8xl text-6xl"
          )}
        >
          Chetan Khulage
        </div>
      </Parallax>
      <div className="lg:flex sm:ml-10 lg:ml-0 xs:ml-14 ml-6 mt-3 xs:mt-0">
        <Parallax
          speed={10}
          translateY={[0, 0]}
          translateX={["100px", "-100px"]}
          className="overflow-hidden"
        >
          <span
            className={cn(
              poppins.className,
              "slide-bottom font-light mr-4 whitespace-nowrap"
            )}
          >
            {"I'm a"}
          </span>
        </Parallax>
        <Parallax
          speed={10}
          translateY={[0, 0]}
          translateX={["100px", "-100px"]}
          className="overflow-hidden"
        >
          <div
            className={cn(
              bebasNeue.className,
              "slide-bottom font-bold uppercase sm:text-[11vw] text-5xl leading-[1] sm:whitespace-nowrap text-dark"
            )}
          >
            FrontEnd web Developer
          </div>
        </Parallax>
      </div>
      <Parallax
        speed={-10}
        className="overflow-hidden xs:pl-5 pl-2 mt-10 xs:mt-0"
      >
        <div
          className={cn(
            poppins.className,
            "slide-bottom font-bold uppercase text-dim lg:text-5xl sm:text-3xl"
          )}
        >
          with over{" "}
          <span className="lg:text-7xl sm:text-5xl text-3xl text-primary">
            4
          </span>{" "}
          years of experience
        </div>
      </Parallax>
      <Parallax
        rotate={["0deg", "160deg"]}
        onClick={() => {
          // lenisScrollTo("1000px");
        }}
        className="gsap-opacity absolute right-10 xs:right-32 top-[33rem] text-xs xs:text-base text-dim flex items-center uppercase animate-pulse hover:animate-none hover:text-primary transition-colors target"
      >
        Scroll
        <svg
          className="target xs:h-auto xs:w-auto h-7 w-7"
          width="35"
          height="35"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_25_862)">
            <path
              className="target"
              d="M51 46.75C51 51.2587 49.2089 55.5827 46.0208 58.7708C42.8327 61.9589 38.5087 63.75 34 63.75C29.4913 63.75 25.1673 61.9589 21.9792 58.7708C18.7911 55.5827 17 51.2587 17 46.75V21.25C17 16.7413 18.7911 12.4173 21.9792 9.22919C25.1673 6.04107 29.4913 4.25 34 4.25C38.5087 4.25 42.8327 6.04107 46.0208 9.22919C49.2089 12.4173 51 16.7413 51 21.25V46.75ZM34 0C28.3641 0 22.9591 2.23883 18.974 6.22398C14.9888 10.2091 12.75 15.6141 12.75 21.25V46.75C12.75 52.3858 14.9888 57.7909 18.974 61.776C22.9591 65.7612 28.3641 68 34 68C39.6359 68 45.0409 65.7612 49.026 61.776C53.0112 57.7909 55.25 52.3858 55.25 46.75V21.25C55.25 15.6141 53.0112 10.2091 49.026 6.22398C45.0409 2.23883 39.6359 0 34 0Z"
              fill="white"
              fillOpacity="0.4"
            />
            <path
              className="target animate-bounce"
              d="M35.5026 41.6224C35.1041 41.2239 34.5636 41 34 41C33.4364 41 32.8959 41.2239 32.4974 41.6224C32.0989 42.0209 31.875 42.5614 31.875 43.125V51.625C31.875 52.1886 32.0989 52.7291 32.4974 53.1276C32.8959 53.5261 33.4364 53.75 34 53.75C34.5636 53.75 35.1041 53.5261 35.5026 53.1276C35.9011 52.7291 36.125 52.1886 36.125 51.625V43.125C36.125 42.5614 35.9011 42.0209 35.5026 41.6224Z"
              fill="white"
              fillOpacity="0.4"
            />
          </g>
          <defs>
            <clipPath id="clip0_25_862">
              <rect width="68" height="68" fill="white" />
            </clipPath>
          </defs>
        </svg>
        down
      </Parallax>
    </div>
  );
};

export default Hero2;
