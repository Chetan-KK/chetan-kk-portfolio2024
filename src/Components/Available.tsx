import Link from "next/link";
import React from "react";

const Available = ({
  message = "Available for new projects",
}: {
  message?: string;
}) => {
  return (
    <Link
      href={"/contact"}
      className="target text-xs border border-dark rounded-full px-3 py-2 flex items-center justify-center gap-2 backdrop-blur-md hover:bg-dim hover:text-secondary font-bold hover:animate-none duration-300 transition-all"
    >
      <span className=" relative flex h-3 w-3">
        <span className=" animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className=" relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      <p className="whitespace-nowrap animate-pulse">{message}</p>
    </Link>
  );
};

export default Available;
