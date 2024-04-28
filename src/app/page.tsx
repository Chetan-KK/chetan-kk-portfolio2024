"use client";

import Hero from "@/sections/Home/Hero";
import Logo from "@/Components/Logo";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import NavBar from "@/Components/Navbar/NavBar";
import Image from "next/image";
import Projects from "@/sections/Home/Projects";
import Services from "@/sections/Home/Services";
import { Parallax } from "react-scroll-parallax";
import About from "@/sections/Home/About";
import Contact from "@/sections/Home/Contact";
import Footer from "@/sections/Home/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <MaxWidthWrapper>
        <Logo />
        <NavBar />
        <Parallax
          speed={-100}
          scale={[-2, 3]}
          translateX={["100px", "400px"]}
          className="absolute w-[70rem] top-0 right-0 -z-30"
        >
          <div className="absolute top-0 left-0 bg-[#2A132B] blur-2xl h-96 w-96 rounded-full"></div>
        </Parallax>
        <Parallax
          speed={-40}
          rotateX={["0deg", "360deg"]}
          rotateY={["0deg", "20deg"]}
          rotateZ={["0deg", "20deg"]}
          className="absolute w-[70rem] top-0 right-0 -z-30"
        >
          <Image
            src={"/grid.svg"}
            alt="img"
            width={100}
            height={100}
            className="w-full h-full"
          />
        </Parallax>
        <Hero />
        <Projects />
        <Services />
        <About />
        <Contact />
        <Footer />
      </MaxWidthWrapper>
    </div>
  );
}
