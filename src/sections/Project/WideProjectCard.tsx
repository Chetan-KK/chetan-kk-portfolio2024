import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FastLeftStep, FastRightStep } from "@/lib/initAnimationSteps";
import MaterialSymbolsArrowForwardRounded from "@/assets/MaterialSymbolsArrowForwardRounded";
import Image from "next/image";
import { useScreenSize } from "@/lib/contexts/ScreenSizeContext";
import { Project } from "@/lib/getData/dataInterfaces";

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
      className="project-box my-10 bg-secondary/30 p-5 flex items-center gap-5 sm:rounded-3xl rounded-xl  border-2 hover:border-white border-white/20 sm:hover:shadow-[0_0_0_2px] shadow-[0_0_60px_-10px] shadow-secondary hover:shadow-[0_0_0_1px]"
    >
      <Link
        href={`/projects/${project.title}`}
        className="sm:rounded-2xl rounded-lg"
      >
        <div className="w-96 overflow-hidden flex items-center rounded-lg">
          <Image
            src={project.imgSrc}
            height={512}
            width={512}
            data-attribute-cursor="project"
            className="target sm:rounded-2xl object-cover"
            alt={project.title}
          />
        </div>
      </Link>
      <Link
        href={`/projects/${project.title}`}
        className="target"
        data-attribute-cursor="project"
      >
        <div
          className="target uppercase sm:text-4xl text-xl font-bold flex items-center gap-3"
          data-attribute-cursor="project"
        >
          {project.title}{" "}
          <MaterialSymbolsArrowForwardRounded
            className="target"
            data-attribute-cursor="project"
          />
        </div>

        <div className="target text-dim mt-3" data-attribute-cursor="project">
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
