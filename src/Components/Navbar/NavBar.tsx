"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { menuAnim, perspective } from "./navAnim";
import Link from "next/link";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  // function toggleNav() {
  //   if (menuToggle) {
  //     setMenuToggle(!menuToggle);
  //   } else {
  //     setMenuToggle(true);
  //   }
  // }

  const links = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Projects",
      url: "/",
    },
    {
      name: "About",
      url: "/",
    },
    {
      name: "Resume",
      url: "/",
    },
    {
      name: "Have an Idea?",
      url: "/",
    },
  ];

  return (
    <div>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="fixed right-8 top-4 z-30"
      >
        <div className={isActive ? "hamburger hamburgerClose" : "hamburger"}>
          <svg viewBox="0 0 32 32">
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
        className="z-20 flex flex-col justify-center w-screen fixed top-0 left-0 bg-secondary/80 backdrop-blur-sm overflow-hidden"
      >
        <AnimatePresence>
          {isActive &&
            links.map((link, i) => (
              <Link key={i} href={link.url}>
                <motion.div
                  custom={i}
                  variants={perspective}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  className="hover-up p-3 pl-10 text-dim uppercase font-bold text-7xl"
                >
                  {link.name}
                </motion.div>
              </Link>
            ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default NavBar;
