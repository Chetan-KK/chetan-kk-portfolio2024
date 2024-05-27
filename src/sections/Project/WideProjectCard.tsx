import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FastLeftStep, FastRightStep } from "@/lib/initAnimationSteps";
import MaterialSymbolsArrowForwardRounded from "@/assets/MaterialSymbolsArrowForwardRounded";
import Image from "next/image";
import { useScreenSize } from "@/lib/contexts/ScreenSizeContext";
import { Project } from "@/lib/getData/dataInterfaces";
import { ParallaxBanner } from "react-scroll-parallax";

const WideProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const screenSize = useScreenSize();

  return (
    <motion.div
      variants={index % 2 == 0 ? FastRightStep : FastLeftStep}
      initial="hidden"
      whileInView="show"
      className="project-box my-10 bg-secondary/30 p-5 flex sm:flex-row flex-col items-center gap-5 sm:rounded-3xl rounded-xl  border-2 hover:border-white border-white/20 sm:hover:shadow-[0_0_0_2px] shadow-[0_0_60px_-10px] shadow-secondary hover:shadow-[0_0_0_1px]"
    >
      <Link
        href={`/projects/${project.title}`}
        className="sm:rounded-2xl rounded-lg sm:w-auto w-full sm:h-auto h-full"
      >
        <ParallaxBanner
          layers={[{ image: project.imgSrc, speed: -10 }]}
          className="aspect-[10/6] md:h-52 sm:h-32 w-full h-full rounded-xl"
        />
      </Link>
      <Link
        href={`/projects/${project.title}`}
        className="target"
        data-attribute-cursor="project"
      >
        <div
          className="target uppercase md:text-4xl text-2xl font-bold flex items-center gap-3"
          data-attribute-cursor="project"
        >
          {project.title}{" "}
          <MaterialSymbolsArrowForwardRounded
            className="target"
            data-attribute-cursor="project"
          />
        </div>

        <div
          className="target text-dim md:text-base text-sm md:mt-3 mt-1"
          data-attribute-cursor="project"
        >
          {project.desc.length > 230 ? (
            <>{project.desc.slice(0, 230)}...</>
          ) : (
            project.desc
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default WideProjectCard;