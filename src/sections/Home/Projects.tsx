"use client";

import React, { useEffect, useState } from "react";
import fetchProjects from "@/lib/getData/GetProjects";
import Link from "next/link";
import cursorClassApplier from "@/lib/cursorClassApplier";
import SuperHeading from "../../Components/SuperHeading";
import Button from "../../Components/Button/Button";
import { Project } from "@/lib/getData/dataInterfaces";
import ProjectSkeleton from "@/Components/skeletons/ProjectSkeleton";
import ProjectComponent from "@/Components/ProjectComponent";

const Projects = () => {
  const [allProjects, setAllProjects] = useState<Project[]>([]);

  const getProjects = async () => {
    const data = await fetchProjects();
    setAllProjects(data);
    if (data) {
      cursorClassApplier();
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div>
      <SuperHeading heading="Some Of my projects" subheading="showcase" />

      {/* project */}
      <div className="px-20" id="scrollDown">
        {allProjects ? (
          allProjects
            .slice(0, 2)
            .map((project, i) => (
              <ProjectComponent key={i} project={project} index={i} />
            ))
        ) : (
          <ProjectSkeleton />
        )}
        <Link href={"/projects"} className="flex justify-center">
          <Button className=" py-3 px-8">Explore all Projects</Button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
