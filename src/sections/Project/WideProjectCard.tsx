import React from "react";
import Link from "next/link";
import MaterialSymbolsArrowForwardRounded from "@/assets/MaterialSymbolsArrowForwardRounded";
import { useScreenSize } from "@/lib/contexts/ScreenSizeContext";
import { Project } from "@/lib/getData/dataInterfaces";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

const WideProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const screenSize = useScreenSize();

  return (
    <Parallax
      translateX={index % 2 == 0 ? ["-30px", "100px"] : ["30px", "-100px"]}
      easing="easeInQuad"
      className="project-box my-10 bg-secondary/30 sm:rounded-3xl rounded-xl border-2 hover:border-primary border-primary/20 shadow-[0_0_60px_-10px] shadow-secondary"
    >
      <Link
        href={`/projects/${project.title}`}
        className="target flex sm:flex-row flex-col p-5 items-center gap-5"
        data-attribute-cursor="project"
      >
        <div className="sm:rounded-2xl rounded-lg sm:w-auto w-full sm:h-auto h-full">
          <ParallaxBanner
            layers={[{ image: project.imgSrc, speed: -10 }]}
            className="aspect-[10/6] md:h-52 sm:h-32 shadow-[0_0_3px] shadow-dim w-full h-full rounded-xl"
          />
        </div>
        <div>
          <div
            className="target uppercase md:text-4xl text-2xl font-bold flex items-center gap-3"
            data-attribute-cursor="project"
          >
            {project.title}{" "}
            <MaterialSymbolsArrowForwardRounded
              className="target"
              data-attribute-cursor="project"
            />
          </div>

          <div
            className="target text-dim md:text-base text-sm md:mt-3 mt-1"
            data-attribute-cursor="project"
          >
            {project.desc.length > 230 ? (
              <>{project.desc.slice(0, 230)}...</>
            ) : (
              project.desc
            )}
          </div>
        </div>
      </Link>
    </Parallax>
  );
};

export default WideProjectCard;
