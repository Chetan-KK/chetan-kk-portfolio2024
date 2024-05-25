import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FastLeftStep, FastRightStep } from "@/lib/initAnimationSteps";
import MaterialSymbolsArrowForwardRounded from "@/assets/MaterialSymbolsArrowForwardRounded";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import { useScreenSize } from "@/lib/contexts/ScreenSizeContext";

const ProjectComponent = ({ project, index }: any) => {
  const screenSize = useScreenSize();

  return (
    <motion.div
      variants={index % 2 == 0 ? FastRightStep : FastLeftStep}
      initial="hidden"
      whileInView="show"
      className="project-box my-10 bg-secondary/30 p-5 sm:rounded-3xl rounded-xl  border-2 hover:border-white border-white/20 sm:hover:shadow-[0_0_0_2px] hover:shadow-[0_0_0_1px] shadow-white/10"
    >
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <Link
            href={`/project/${project.title}`}
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
            <span
              data-attribute-cursor="link"
              className="target sm:block hidden"
            >
              Preview
            </span>
            <MaterialSymbolsArrowForwardRounded
              data-attribute-cursor="link"
              className="target sm:text-4xl text-2xl -rotate-45"
            />
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
          href={`project/${project.title}`}
          className="main-project-thumbnail w-full overflow-hidden sm:rounded-2xl rounded-lg"
        >
          <Parallax className="h-full w-full" speed={3}>
            <Image
              src={project.imgSrc}
              height={1024}
              width={1024}
              data-attribute-cursor="project"
              className="target h-full w-full sm:rounded-2xl rounded-lg object-cover"
              alt={project.title}
            />
          </Parallax>
        </Link>
        {project.imgs &&
          project.imgs.slice(0, 2).map((thumbnail: string, _: number) => (
            <Link
              href={`project/${project.title}`}
              className="h-full w-full overflow-hidden sm:rounded-2xl rounded-lg"
              key={_}
            >
              <Parallax className="h-full w-full" speed={4}>
                <Image
                  key={_}
                  src={thumbnail}
                  height={1024}
                  data-attribute-cursor="project"
                  width={1024}
                  className="target object-cover w-full h-full sm:rounded-2xl rounded-lg"
                  alt={project.title}
                />
              </Parallax>
            </Link>
          ))}
      </div>
    </motion.div>
  );
};

export default ProjectComponent;
