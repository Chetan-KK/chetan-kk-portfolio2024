import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FastLeftStep, FastRightStep } from "@/lib/initAnimationSteps";
import MaterialSymbolsArrowForwardRounded from "@/assets/MaterialSymbolsArrowForwardRounded";
import { ParallaxBanner } from "react-scroll-parallax";
import { useScreenSize } from "@/lib/contexts/ScreenSizeContext";

const ProjectComponent = ({ project, index }: any) => {
  const screenSize = useScreenSize();

  return (
    <motion.div
      variants={index % 2 == 0 ? FastRightStep : FastLeftStep}
      initial="hidden"
      whileInView="show"
      className="project-box my-10 bg-secondary/30 p-5 sm:rounded-3xl rounded-xl  border-2 hover:border-white border-white/20 sm:hover:shadow-[0_0_0_2px] shadow-[0_0_60px_-10px] shadow-secondary hover:shadow-[0_0_0_1px]"
    >
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <Link
            href={`/projects/${project.title}`}
            className="target uppercase sm:text-4xl text-xl font-bold"
            data-attribute-cursor="project"
          >
            {project.title}
          </Link>
          <a
            data-attribute-cursor="link"
            href={project.link}
            target="_blank"
            className="target flex items-center"
          >
            <span className="sm:block hidden">Preview</span>
            <MaterialSymbolsArrowForwardRounded className="sm:text-4xl text-2xl -rotate-45" />
          </a>
        </div>
        <div className="flex justify-between sm:text-base text-xs text-dim items-center">
          <div className="flex gap-2">
            {screenSize < 700 ? (
              <>{project.stack.slice(0, 3).join(", ")}..</>
            ) : (
              project.stack.join(", ")
            )}
            .
          </div>
          <div className="whitespace-nowrap">{project.year}</div>
        </div>
      </div>
      <div className="project-grid py-3">
        <Link
          href={`projects/${project.title}`}
          data-attribute-cursor="project"
          className="target main-project-thumbnail w-full h-full sm:rounded-2xl rounded-lg"
        >
          <ParallaxBanner
            layers={[{ image: project.imgSrc, speed: -10 }]}
            className="shadow-[0_0_3px] shadow-dim w-full h-full sm:rounded-2xl rounded-lg"
          />
        </Link>
        {project.imgs &&
          project.imgs.slice(0, 2).map((thumbnail: string, _: number) => (
            <Link
              href={`projects/${project.title}`}
              className="target h-full w-full sm:rounded-2xl rounded-lg"
              data-attribute-cursor="project"
              key={_}
            >
              <ParallaxBanner
                layers={[{ image: thumbnail, speed: 10 }]}
                className="w-full h-full shadow-[0_0_3px] shadow-dim sm:rounded-2xl rounded-lg"
              />
            </Link>
          ))}
      </div>
    </motion.div>
  );
};

export default ProjectComponent;
