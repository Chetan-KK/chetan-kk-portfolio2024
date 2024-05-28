"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { menuAnim, perspective } from "./navAnim";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { bebasNeue } from "@/lib/fonts";
import Available from "../Available";
import { useScreenSize } from "@/lib/contexts/ScreenSizeContext";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const screenSize = useScreenSize();

  const links = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Projects",
      url: "/projects",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Resume",
      url: "/resume",
    },
    {
      name: "Have an Idea?",
      url: "/contact",
    },
  ];

  return (
    <div>
      <div className="fixed z-40 sm:top-7 top-3.5 sm:right-24 right-16">
        {screenSize < 500 ? <Available message="Available" /> : <Available />}
      </div>
      <div
        onClick={() => {
          setIsActive((prev) => !prev);
        }}
        className="fixed sm:right-8 right-4 sm:top-4 top-2 z-30"
      >
        <div className={isActive ? "hamburger hamburgerClose" : "hamburger"}>
          <svg viewBox="0 0 32 32" className="target sm:h-14 h-11 sm:w-14 w-11">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </div>
      </div>
      <motion.div
        variants={menuAnim}
        animate={isActive ? "open" : "closed"}
        initial="closed"
        className="z-20 flex flex-col sm:justify-center w-screen sm:pt-0 fixed top-0 left-0 bg-secondary overflow-hidden"
      >
        <AnimatePresence>
          {isActive &&
            links.map((link, i) => (
              <Link
                key={i}
                onClick={() => {
                  setIsActive((prev) => !prev);
                }}
                href={link.url}
                className="target"
              >
                <motion.div
                  custom={i}
                  variants={perspective}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  className="hover-up sm:p-3 p-2 sm:pl-10 pl-5 text-dim uppercase font-bold sm:text-7xl text-2xl"
                >
                  {link.name}
                </motion.div>
              </Link>
            ))}
        </AnimatePresence>
        <div
          className={cn(
            bebasNeue.className,
            "absolute sm:-bottom-52 -bottom-10 text-dark -z-10 sm:right-0 right-5 sm:text-[25rem] text-[10rem]"
          )}
        >
          2024
        </div>
      </motion.div>
    </div>
  );
};

export default NavBar;
