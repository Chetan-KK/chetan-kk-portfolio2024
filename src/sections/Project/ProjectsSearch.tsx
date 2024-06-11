"use client";

import { Project } from "@/lib/getData/dataInterfaces";
import React, { useEffect, useState } from "react";
import ProjectSearchResult from "./ProjectSearchResult";
import gsap from "gsap";
import {
  MaterialSymbolsArrowForwardRounded,
  MaterialSymbolsCloseRounded,
  MaterialSymbolsSearchRounded,
} from "@/assets/Icons";
import Button from "@/Components/Button/Button";

const ProjectsSearch = ({ allProjects }: { allProjects: Project[] }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [resultCount, setResultCount] = useState(0);
  const [searchFocused, setSearchFocused] = useState(false);
  const [filterdResults, setFilterdResults] = useState<Project[]>([]);

  const handleSearchQuery = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (searchQuery.length === 0) {
      setResultCount(0);
      setFilterdResults([]);
      const tl = gsap.timeline();
    } else if (searchQuery === "*") {
      setFilterdResults(allProjects);
      setResultCount(allProjects.length);
    } else if (searchQuery.length > 0) {
      let filterd = allProjects.filter((project) => {
        const titleMatch = project.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const stackMatch = project.stack.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return titleMatch || stackMatch;
      });
      setFilterdResults(filterd);
      setResultCount(filterd.length);
    }
  }, [searchQuery, allProjects]);

  const handleOnInputFocus = () => {
    setSearchFocused(true);
    const tl = gsap.timeline();
    tl.to(".blurBg", {
      opacity: 1,
      pointerEvents: "all",
      duration: 0.5,
      ease: "power4.out",
    });
    tl.to(
      ".searchContainer",
      {
        x: "0",
        duration: 0.5,
        ease: "power4.out",
      },
      "-=.3"
    );

    tl.to(".title", {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power4.out",
      stagger: 0.1,
    });

    tl.to(
      ".closeButton",
      {
        scale: 1,
        rotate: 0,
        duration: 0.7,
        ease: "elastic.out(1,0.3)",
      },
      "-=.5"
    );

    tl.to(
      ".PopUp",
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power4.out",
      },
      "-=.3"
    );
  };

  const handleOnInputBlur = () => {
    setSearchFocused(false);
    const tl = gsap.timeline();
    tl.to(".title", {
      x: -100,
      opacity: 0,
      duration: 0.5,
      ease: "power4.out",
      stagger: 0.1,
    });
    tl.to(
      ".closeButton",
      {
        scale: 0,
        rotate: 90,
        duration: 0.7,
        ease: "power4.out",
      },
      "-=.5"
    );
    tl.to(
      ".PopUp",
      {
        y: 100,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
      },
      "-=.3"
    );

    tl.to(".searchContainer", {
      x: "-100%",
      duration: 0.5,
      ease: "power4.out",
    });
    tl.to(
      ".blurBg",
      {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.5,
        ease: "power4.out",
      },
      "-=.3"
    );
  };

  return (
    <>
      <div className="flex px-20 gap-5 sticky top-0">
        <Button className="px-10 text-xl flex items-center gap-2 justify-center">
          <MaterialSymbolsArrowForwardRounded className="rotate-180 text-2xl" />{" "}
          Back
        </Button>
        <div
          className="target px-4 py-4 w-full border-2 border-border rounded-lg active:border-primary text-dim focus:border-primary hover:border-primary duration-300 bg-secondary/10 sm:text-base text-sm flex items-center gap-2"
          onClick={handleOnInputFocus}
        >
          <MaterialSymbolsSearchRounded height={30} width={30} />
          Search for project by name or technologies...
        </div>
      </div>
      <div
        className="target blurBg fixed z-10 h-screen w-screen bg-secondary/50 top-0 left-0 opacity-0 pointer-events-none"
        onClick={handleOnInputBlur}
      ></div>
      <div
        className={`searchContainer fixed px-20 pt-20 overflow-hidden bg-secondary z-10 h-screen overflow-y-scroll w-[70vw] top-0 left-0 origin-left -translate-x-[100%] shadow-secondary shadow-[0_0_80px_-20px]`}
        data-lenis-prevent
      >
        <div className="flex justify-between items-center">
          <div className="title translate-x-[-100px] opacity-0 uppercase font-bold md:text-5xl sm:text-4xl text-2xl text-primary">
            Search for Project
          </div>
          <MaterialSymbolsCloseRounded
            onClick={handleOnInputBlur}
            className="target closeButton rotate-90 scale-0 p-2 h-12 w-12 border-2 bg-secondary/50 border-primary/30 rounded-md"
          />
        </div>
        <div className="PopUp opacity-0 translate-y-10 flex flex-col items-end mt-7 gap-4 mb-2">
          <MaterialSymbolsSearchRounded
            height={30}
            width={30}
            className="absolute left-4 top-4 text-dim"
          />

          <input
            type="text"
            id="name"
            name="name"
            value={searchQuery}
            onChange={handleSearchQuery}
            className="target pl-14 px-4 py-4 w-full border-2 border-border rounded-lg active:border-primary focus:border-primary hover:border-primary duration-300 bg-secondary/10 sm:text-base text-sm"
            placeholder="Search project by name or technologies..."
            required
          />
          <div
            className={`${
              resultCount <= 0 ? "scale-0" : " scale-100"
            } origin-top-right transition-all text-primary`}
          >
            {resultCount} Results
          </div>
        </div>
        {/* search results */}
        {resultCount <= 0 && (
          <h1 className="title translate-x-[-100px] opacity-0 uppercase font-bold md:text-xl text-2xl text-primary">
            Featured Projects
          </h1>
        )}
        <div
          className={`PopUp grid grid-cols-3 place-items-center items-start gap-3`}
        >
          {filterdResults.map((project, i) => (
            <ProjectSearchResult
              index={i + 1}
              key={i}
              SingleProject={project}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsSearch;
