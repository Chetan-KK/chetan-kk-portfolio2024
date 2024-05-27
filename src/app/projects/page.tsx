"use client";

import Logo from "@/Components/Logo";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import NavBar from "@/Components/Navbar/NavBar";
import ProjectComponent from "@/Components/ProjectComponent";
import ProjectSkeleton from "@/Components/skeletons/ProjectSkeleton";
import SuperHeading from "@/Components/SuperHeading";
import { useLenis } from "@/lib/contexts/LenisContext";
import cursorClassApplier from "@/lib/cursorClassApplier";
import { Project } from "@/lib/getData/dataInterfaces";
import fetchProjects from "@/lib/getData/GetProjects";
import Contact from "@/sections/Home/Contact";
import Footer from "@/sections/Home/Footer";
import React, { useEffect, useState } from "react";

const AllProjects = () => {
  // after refresh on page lenis is getting stoped because of preloader (remove preloader on other pages)
  const { lenisStart, lenisRef } = useLenis();

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

  useEffect(() => {
    if (lenisRef.current) {
      lenisStart();
    }
  }, [lenisRef.current]);

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
