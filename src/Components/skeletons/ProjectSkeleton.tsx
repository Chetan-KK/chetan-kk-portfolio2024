import React from "react";
import SmallLoader from "../SmallLoader";

const ProjectSkeleton = () => {
  return (
    <div className="animate-pulse m-10 bg-secondary/30 p-5 rounded-3xl border-2 border-primary/20">
      <div className="">
        <div className="flex justify-between items-center">
          <div className="h-10 w-96 bg-primary/30 rounded-lg uppercase text-4xl font-bold"></div>
          <p className="text-primary">projects loading...</p>
          <div className=" flex items-center justify-center h-10 w-10 bg-primary/30 rounded-lg">
            <SmallLoader />
          </div>
        </div>
        <div className="mt-2 flex justify-between  text-dim items-center">
          <div className="w-96 h-5 bg-primary/30 rounded-lg "></div>
          <div className="bg-primary/30 rounded-lg h-5 w-20"></div>
        </div>
      </div>
      <div className="project-grid py-3">
        <div className="main-project-thumbnail w-full h-full bg-primary/30 rounded-lg "></div>
        <div className="h-full w-full  bg-primary/30 rounded-lg "></div>
        <div className="h-full w-full  bg-primary/30 rounded-lg "></div>
      </div>
    </div>
  );
};

export default ProjectSkeleton;
