"use client";

import { Project } from "@/lib/getData/dataInterfaces";
import React, { useEffect, useState } from "react";
import ProjectSearchResult from "./ProjectSearchResult";
import gsap from "gsap";

const ProjectsSearch = ({ allProjects }: { allProjects: Project[] }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [resultCount, setResultCount] = useState(0);
  const [filterdResults, setFilterdResults] = useState<Project[]>([]);

  const handleSearchQuery = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    console.log(searchQuery);

    if (searchQuery.length === 0) {
      setResultCount(0);
      const tl = gsap.timeline();
      //   tl.to(".searchResults", {
      //     height: "0%",
      //     duration: 0.4,
      //   });
      //   tl.to(".searchResults", {
      //     width: "0%",
      //     duration: 0.4,
      //   });
      // } else {
      //   const tl = gsap.timeline();
      //   tl.to(".searchResults", {
      //     width: "100%",
      //     duration: 0.4,
      //   });
      //   tl.to(".searchResults", {
      //     height: "100&",
      //     maxHeight: "60vh",
      //     duration: 0.4,
      //   });
    }

    if (searchQuery === "*") {
      setFilterdResults(allProjects);
      setResultCount(allProjects.length);
    } else if (searchQuery.length > 0) {
      let filterd = allProjects.filter((text) =>
        text.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilterdResults(filterd);
      setResultCount(filterd.length);
    } else {
      if (searchQuery.length === 0) {
        setFilterdResults([]);
      }
    }
  }, [searchQuery]);

  return (
    <div className="relative flex flex-col gap-2 lg:mx-20 sm:mx-10 mx-2">
      <div className="flex justify-end items-center">
        <div
          className={`scale-100 origin-bottom-right transition-all text-primary`}
        >
          {resultCount} Results
        </div>
      </div>
      <input
        type="text"
        id="name"
        name="name"
        value={searchQuery}
        onChange={handleSearchQuery}
        className="target px-4 py-4 mx-10 border-2 border-border rounded-lg active:border-primary focus:border-primary hover:border-primary transition-all duration-300 bg-secondary/10 sm:text-base text-sm"
        placeholder="Search project name / technologies..."
        required
      />
      {/* search results */}
      <div
        className={`
        ${resultCount === 0 ? "p-0 border-0 " : "p-3 border-2"}
         searchResults hide-scroll absolute z-10 top-full left-[50%] -translate-x-[50%] mt-3 bg-secondary/50 backdrop-blur-xl w-full max-h-[60vh] overflow-y-auto flex flex-col gap-3 rounded-xl  border-primary/30`}
      >
        {filterdResults.map((project, i) => (
          <ProjectSearchResult key={i} SingleProject={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSearch;
