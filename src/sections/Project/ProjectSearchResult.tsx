import React from "react";
import { Project } from "@/lib/getData/dataInterfaces";

const ProjectSearchResult = ({ SingleProject }: { SingleProject: Project }) => {
  return (
    <div className="" data-lenis-prevent>
      {SingleProject.title}
    </div>
  );
};

export default ProjectSearchResult;
