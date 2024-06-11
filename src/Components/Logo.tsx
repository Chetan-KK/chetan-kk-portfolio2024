import Link from "next/link";
import React, { useEffect } from "react";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="target hover:scale-110 transition-all duration-300 fixed sm:top-6 top-4 sm:left-8 left-4 sm:text-2xl text-xl flex items-center gap-3 z-30 text-primary"
    >
      <div>
        <span className="text-dim">{"<"}</span>CK
        <span className="text-dim">{"/>"}</span>{" "}
      </div>
      <span className="text-xs text-dim">
        (This site is still in development)
      </span>
    </Link>
  );
};

export default Logo;
