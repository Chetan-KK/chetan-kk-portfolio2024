"use client";

import React, { useEffect, useState } from "react";
import fetchProjects from "@/lib/getData/GetProjects";
import Link from "next/link";
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
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div>
      <SuperHeading heading="Some Of my projects" subheading="showcase" />

      {/* project */}
      <div className="lg:px-20 sm:px-10 px-2">
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
          <Button className="sm:py-3 py-2 sm:px-8 px-5 sm:mb-0 mb-10">
            Explore all Projects
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
