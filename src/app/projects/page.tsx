"use client";

import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import ProjectComponent from "@/Components/ProjectComponent";
import ProjectSkeleton from "@/Components/skeletons/ProjectSkeleton";
import SuperHeading from "@/Components/SuperHeading";
import { Project } from "@/lib/getData/dataInterfaces";
import fetchProjects from "@/lib/getData/GetProjects";
import Contact from "@/sections/Home/Contact";
import Footer from "@/sections/Home/Footer";
import ProjectsSearch from "@/sections/Project/ProjectsSearch";
import React, { useEffect, useState } from "react";

const AllProjects = () => {
  const [allProjects, setAllProjects] = useState<Project[]>([]);

  const getProjects = async () => {
    const data = await fetchProjects();
    setAllProjects(data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <MaxWidthWrapper className="mt-14">
      <SuperHeading heading="All Projects" subheading="All Projects" />
      {allProjects && <ProjectsSearch allProjects={allProjects} />}
      <div className="lg:mx-20 sm:mx-10 mx-2">
        {allProjects ? (
          allProjects.map((project, i) => (
            <ProjectComponent key={i} project={project} index={i} />
          ))
        ) : (
          <>
            <ProjectSkeleton />
            <ProjectSkeleton />
            <ProjectSkeleton />
          </>
        )}
      </div>
      <Contact />
      <Footer />
    </MaxWidthWrapper>
  );
};

export default AllProjects;
