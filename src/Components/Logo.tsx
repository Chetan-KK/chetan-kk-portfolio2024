import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="target hover:scale-110 transition-all duration-300 fixed sm:top-6 top-4 sm:left-8 left-4 sm:text-2xl text-xl z-30 text-primary"
    >
      <span className="text-dim">{"<"}</span>CK
      <span className="text-dim">{"/>"}</span>
    </Link>
  );
};

export default Logo;
