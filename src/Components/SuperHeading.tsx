import React from "react";
import ParallaxText from "./ParallaxText";
import { cn } from "@/lib/utils";
import { bebasNeue } from "@/lib/fonts";
import { Parallax } from "react-scroll-parallax";
import { useScreenSize } from "@/lib/contexts/ScreenSizeContext";

const SuperHeading = ({
  heading,
  subheading,
}: {
  heading: string;
  subheading: string;
}) => {
  const screenSize = useScreenSize();

  return (
    <div className="w-full">
      {screenSize < 800 ? (
        <div
          className={cn(
            bebasNeue.className,
            "uppercase text-[13vw]  2xl:text-[14rem] text-center text-dim"
          )}
        >
          {heading}
        </div>
      ) : (
        <Parallax speed={5} scale={[1, 1.1]}>
          <div
            className={cn(
              bebasNeue.className,
              "uppercase text-[13vw] 2xl:text-[14rem] text-center text-dim"
            )}
          >
            {heading}
          </div>
        </Parallax>
      )}
      <div className="translate-y-8 sm:translate-y-0">
        <ParallaxText baseVelocity={5}>{subheading}</ParallaxText>
      </div>
    </div>
  );
};

export default SuperHeading;
