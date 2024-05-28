"use client";

import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import ProjectComponent from "@/Components/ProjectComponent";
import ProjectSkeleton from "@/Components/skeletons/ProjectSkeleton";
import SuperHeading from "@/Components/SuperHeading";
import { Project } from "@/lib/getData/dataInterfaces";
import fetchProjects from "@/lib/getData/GetProjects";
import Contact from "@/sections/Home/Contact";
import Footer from "@/sections/Home/Footer";
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
      <div className="lg:px-20 sm:px-10 px-2">
        {allProjects ? (
          allProjects.map((project, i) => (
            <ProjectComponent key={i} project={project} index={i} />
          ))
        ) : (
          <ProjectSkeleton />
        )}
      </div>
      <Contact />
      <Footer />
    </MaxWidthWrapper>
  );
};

export default AllProjects;
