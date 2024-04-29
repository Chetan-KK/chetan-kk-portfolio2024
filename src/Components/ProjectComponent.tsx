import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FastLeftStep, FastRightStep } from "@/lib/initAnimationSteps";
import MaterialSymbolsArrowForwardRounded from "@/assets/MaterialSymbolsArrowForwardRounded";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

const ProjectComponent = ({ project, index }: any) => {
  return (
    <motion.div
      variants={index % 2 == 0 ? FastRightStep : FastLeftStep}
      initial="hidden"
      whileInView="show"
      className="project-box m-10 bg-secondary/30 p-5 rounded-3xl border-2 border-white/20"
    >
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <Link
            href={`/project/${project.title}`}
            className="target uppercase text-4xl font-bold"
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
            Preview
            <MaterialSymbolsArrowForwardRounded className="text-4xl -rotate-45" />
          </a>
        </div>
        <div className="flex justify-between  text-dim items-center">
          <div className="flex gap-2">
            {/* {project.stack.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}  */}
            {project.stack.join(", ")}.
          </div>
          <div>{project.year}</div>
        </div>
      </div>
      <div className="project-grid py-3">
        <Link
          href={`project/${project.title}`}
          className=" main-project-thumbnail w-full overflow-hidden rounded-2xl"
        >
          <Parallax className="h-full w-full" speed={3}>
            <Image
              src={project.imgSrc}
              height={1024}
              width={1024}
              data-attribute-cursor="project"
              className="target h-full w-full rounded-2xl object-cover"
              alt={project.title}
            />
          </Parallax>
        </Link>
        {project.imgs &&
          project.imgs.slice(0, 2).map((thumbnail: string, _: number) => (
            <Link
              href={`project/${project.title}`}
              className="h-full w-full overflow-hidden rounded-2xl"
              key={_}
            >
              <Parallax className="h-full w-full" speed={4}>
                <Image
                  key={_}
                  src={thumbnail}
                  height={1024}
                  data-attribute-cursor="project"
                  width={1024}
                  className="target object-cover w-full h-full rounded-2xl"
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
