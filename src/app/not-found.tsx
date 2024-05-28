"use client";

import Button from "@/Components/Button/Button";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import Contact from "@/sections/Home/Contact";
import Footer from "@/sections/Home/Footer";
import Link from "next/link";
import React from "react";
import { Parallax } from "react-scroll-parallax";

const NotFound = () => {
  return (
    <MaxWidthWrapper>
      <Parallax
        scale={[0.6, 1]}
        className=" min-h-screen flex items-center justify-center text-center flex-col gap-2"
      >
        <div className="uppercase font-bold md:text-[20rem] sm:text-9xl text-7xl text-primary">
          404
        </div>
        <div className="text-dim sm:text-3xl text-xl">page not found!</div>
        <Link href={"/"}>
          <Button className="py-3 px-7 sm:mt-10 mt-4">Go home</Button>
        </Link>
      </Parallax>
      <Contact />
      <Footer />
    </MaxWidthWrapper>
  );
};

export default NotFound;
