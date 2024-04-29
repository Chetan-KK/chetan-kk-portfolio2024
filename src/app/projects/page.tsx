"use client";

import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import ProjectComponent from "@/Components/ProjectComponent";
import ProjectSkeleton from "@/Components/skeletons/ProjectSkeleton";
import cursorClassApplier from "@/lib/cursorClassApplier";
import { Project } from "@/lib/getData/dataInterfaces";
import fetchProjects from "@/lib/getData/GetProjects";
import React, { useEffect, useState } from "react";

const page = () => {
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
    <MaxWidthWrapper>
      {allProjects ? (
        allProjects
          .slice(0, 2)
          .map((project, i) => (
            <ProjectComponent key={i} project={project} index={i} />
          ))
      ) : (
        <ProjectSkeleton />
      )}
    </MaxWidthWrapper>
  );
};

export default page;
