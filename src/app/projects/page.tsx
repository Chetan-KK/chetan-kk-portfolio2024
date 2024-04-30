"use client";

import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import ProjectComponent from "@/Components/ProjectComponent";
import ProjectSkeleton from "@/Components/skeletons/ProjectSkeleton";
import SuperHeading from "@/Components/SuperHeading";
import CursorClassApplier from "@/lib/CursorClassApplier";
import { Project } from "@/lib/getData/dataInterfaces";
import fetchProjects from "@/lib/getData/GetProjects";
import Footer from "@/sections/Home/Footer";
import React, { useEffect, useState } from "react";

const AllProjects = () => {
  // after refresh on page lenis is getting stoped because of preloader (remove preloader on other pages)

  const [allProjects, setAllProjects] = useState<Project[]>([]);

  const getProjects = async () => {
    const data = await fetchProjects();
    setAllProjects(data);
    if (data) {
      CursorClassApplier();
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <MaxWidthWrapper>
      <SuperHeading heading="All Projects" subheading="All Projects" />
      {allProjects ? (
        allProjects.map((project, i) => (
          <ProjectComponent key={i} project={project} index={i} />
        ))
      ) : (
        <ProjectSkeleton />
      )}
      <Footer />
    </MaxWidthWrapper>
  );
};

export default AllProjects;
