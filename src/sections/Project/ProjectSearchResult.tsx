import React from "react";
import { Project } from "@/lib/getData/dataInterfaces";
import Image from "next/image";
import Link from "next/link";
import { MaterialSymbolsArrowForwardRounded } from "@/assets/Icons";

const ProjectSearchResult = ({
  SingleProject,
  index,
}: {
  SingleProject: Project;
  index: number;
}) => {
  // Determine if the project should be selected or skipped
  const isWide = index % 4 < 2;
  const isSecond = index % 2 == 0;

  return (
    <Link
      // href={`/projects/${SingleProject.title}`}
      href={"#"}
      className={`${
        isWide ? "col-span-2" : ""
      } target relative flex flex-col rounded-xl overflow-hidden h-full hover:shadow-secondary hover:z-20 hover:scale-110 hover:shadow-[0_0_30px_-10px] duration-300`}
      data-attribute-cursor="go"
    >
      <Image
        src={SingleProject.imgSrc}
        alt={SingleProject.title}
        width={512}
        height={512}
        className="object-cover h-full w-full rounded-xl"
      />
      <div
        className={`${
          isSecond
            ? "bg-gradient-to-bl items-end text-right"
            : "bg-gradient-to-tr justify-end "
        } absolute flex flex-col w-full h-full opacity-0  from-secondary/80  hover:opacity-100 bg-secondary/30 p-3 duration-300`}
      >
        <div
          className={`${
            isWide ? "md:text-3xl text-2xl" : "md:text-xl text-xl"
          } uppercase font-bold flex items-center gap-3`}
        >
          {SingleProject.title}
          {/* <MaterialSymbolsArrowForwardRounded height={40} width={40} /> */}
        </div>
        <div className={`${isWide ? "text-sm" : "text-sm"} text-dim w-fit`}>
          {SingleProject.desc.split(" ").slice(0, 17).join(" ")}...
          {/* <MaterialSymbolsArrowForwardRounded height={40} width={40} /> */}
        </div>
      </div>
    </Link>
  );
};

export default ProjectSearchResult;
