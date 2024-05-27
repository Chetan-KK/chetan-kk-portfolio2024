"use client";

import Logo from "@/Components/Logo";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import NavBar from "@/Components/Navbar/NavBar";
import ParallaxImage from "@/Components/ParallaxImage";
import ProjectComponent from "@/Components/ProjectComponent";
import ProjectSkeleton from "@/Components/skeletons/ProjectSkeleton";
import { useLenis } from "@/lib/contexts/LenisContext";
import { bebasNeue } from "@/lib/fonts";
import { Project as ProjectInterface } from "@/lib/getData/dataInterfaces";
import fetchProjects from "@/lib/getData/GetProjects";
import { getUniqueRandomNumbers } from "@/lib/randomNumbers";
import { cn } from "@/lib/utils";
import Footer from "@/sections/Home/Footer";
import WideProjectCard from "@/sections/Project/WideProjectCard";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";

const Project = () => {
  const params: { projectId: string } = useParams();

  const { lenisStart, lenisRef } = useLenis();

  const CurrentProjectName = params.projectId.replaceAll("%20", " ");

  const [project, setProject] = useState<ProjectInterface | null>(null);
  const [randomProjectSet, setRandomProjectSet] = useState<
    ProjectInterface[] | null
  >(null);
  // const [activeImg, setActiveImg] = useState(null);

  const getProjects = async () => {
    const allProjects = await fetchProjects();

    const CurrentProject = allProjects.filter(
      (project: any) => project.title === CurrentProjectName
    );

    const [firstRandom, secondRandom, thirdRandom] = getUniqueRandomNumbers(
      3,
      allProjects.length
    );

    const randomArr = [
      allProjects[firstRandom],
      allProjects[secondRandom],
      allProjects[thirdRandom],
    ];

    setRandomProjectSet(randomArr);

    setProject(CurrentProject[0]);
  };

  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisStart();
    }
  }, [lenisRef.current]);

  return (
    <MaxWidthWrapper>
      {project && (
        <div className="pt-24 px-10">
          <Parallax
            translateX={[-10, 2]}
            className="uppercase font-bold text-7xl text-primary"
          >
            {project.title}
          </Parallax>
          <div className="text-dim text-xl mt-3">
            {project.stack.join(", ")}.
          </div>
          <div className="flex justify-between items-center content-center">
            <div className="leading-[3rem] w-[40vw] text-dim first-letter:text-6xl first-letter:text-primary text-xl my-10">
              {project.desc}
            </div>
            <div className="">
              <Parallax
                speed={-4}
                translateX={[10, -10]}
                className={cn(
                  bebasNeue.className,
                  "text-center text-[20rem] text-dark"
                )}
              >
                {project.year.split("-")[1]}
              </Parallax>
              <Parallax
                speed={-10}
                rotate={["-10deg", "10deg"]}
                className="m-auto"
              >
                <Image
                  src={project.imgSrc}
                  height={512}
                  width={512}
                  alt={project.title}
                  className="rounded-md shadow-[0_0_60px_-10px] shadow-secondary w-full"
                  priority
                />
              </Parallax>
            </div>
          </div>

          <div className="mt-20">
            <Parallax
              speed={-4}
              translateX={[10, -10]}
              className={cn(
                bebasNeue.className,
                "text-center text-[10rem] text-dark"
              )}
            >
              ScreenShots
            </Parallax>

            {project.imgs &&
              project.imgs.map((thumbnail: string, _: number) => (
                <Parallax
                  // translateX={["-400px", "0px"]}
                  scale={[0.6, 1.2]}
                  // rotate={[-180, 0]}
                  easing="easeInQuad"
                  // className="m-auto"
                  key={_}
                >
                  <Image
                    src={thumbnail}
                    height={2048}
                    width={2048}
                    alt={thumbnail}
                    className="rounded-md shadow-[0_0_60px_-10px] shadow-secondary w-full"
                    priority
                  />
                </Parallax>
              ))}
          </div>

          <div className="mt-20">
            <Parallax
              speed={-4}
              translateX={[-10, 10]}
              className={cn(
                bebasNeue.className,
                "text-center text-[10rem] text-dark"
              )}
            >
              Other Projects
            </Parallax>
            {randomProjectSet ? (
              randomProjectSet.map((project, i) => (
                <WideProjectCard key={i} project={project} index={i} />
              ))
            ) : (
              <ProjectSkeleton />
            )}
          </div>
        </div>
      )}
      <Footer />
    </MaxWidthWrapper>
  );
};

export default Project;
