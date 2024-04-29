import React from "react";
import ParallaxText from "./ParallaxText";
import { cn } from "@/lib/utils";
import { bebasNeue } from "@/lib/fonts";
import { Parallax } from "react-scroll-parallax";

const SuperHeading = ({
  heading,
  subheading,
}: {
  heading: string;
  subheading: string;
}) => {
  return (
    <div className="w-full overflow-hidden">
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
      <ParallaxText baseVelocity={5}>{subheading}</ParallaxText>
    </div>
  );
};

export default SuperHeading;
