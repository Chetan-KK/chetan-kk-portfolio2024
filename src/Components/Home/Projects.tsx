"use client";

import { bebasNeue } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import ParallaxText from "../ParallaxText";
import { Parallax } from "react-scroll-parallax";
import fetchProjects from "@/lib/getData/GetProjects";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FastLeftStep, FastRightStep } from "@/lib/initAnimationSteps";
import cursorClassApplier from "@/lib/cursorClassApplier";
import MaterialSymbolsArrowForwardRounded from "@/assets/MaterialSymbolsArrowForwardRounded";

interface Project {
  desc: string;
  gitLink: string;
  imgSrc: string;
  imgs: string[];
  link: string;
  stack: string[];
  title: string;
  year: string;
}

const Projects = () => {
  const [allProjects, setAllProjects] = useState<Project[]>([]);

  const getProjects = async () => {
    const data = await fetchProjects();
    setAllProjects(data);
    cursorClassApplier();
    console.log(data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div>
      <Parallax speed={10} translateY={[0, 0]} translateX={["-100px", "100px"]}>
        <div
          className={cn(
            bebasNeue.className,
            "uppercase text-[13vw] 2xl:text-[14rem] text-center text-dim"
          )}
        >
          Some Of my projects
        </div>
      </Parallax>
      <ParallaxText baseVelocity={5}>showcase</ParallaxText>

      {/* project */}
      <div className="px-20">
        {allProjects.slice(0, 3).map((project, i) => (
          <motion.div
            variants={i % 2 == 0 ? FastRightStep : FastLeftStep}
            initial="hidden"
            whileInView="show"
            key={i}
            data-attribute-cursor="project"
            className="project-box target m-10 bg-secondary/30 p-5 rounded-3xl border-2 border-secondary/40"
          >
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <h1 className="uppercase text-4xl font-bold">
                  {project.title}
                </h1>
                <Link href={`project/${project.title}`}>
                  <MaterialSymbolsArrowForwardRounded className="text-4xl -rotate-45" />
                </Link>
              </div>
              <div className="flex justify-between  text-dim items-center">
                <div className="flex gap-2">
                  {project.stack.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <div>{project.year}</div>
              </div>
            </div>
            <div className="project-grid py-3">
              <div className="main-project-thumbnail w-full overflow-hidden rounded-2xl">
                <Parallax className="h-full w-full" speed={3}>
                  <Image
                    src={project.imgSrc}
                    height={1024}
                    width={1024}
                    className="h-full w-full rounded-2xl object-cover"
                    alt={project.title}
                  />
                </Parallax>
              </div>
              {project.imgs &&
                project.imgs.slice(0, 2).map((thumbnail, _) => (
                  <div
                    className="h-full w-full overflow-hidden rounded-2xl"
                    key={_}
                  >
                    <Parallax className="h-full w-full" speed={4}>
                      <Image
                        key={_}
                        src={thumbnail}
                        height={1024}
                        width={1024}
                        className="object-cover w-full h-full rounded-2xl"
                        alt={project.title}
                      />
                    </Parallax>
                  </div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
