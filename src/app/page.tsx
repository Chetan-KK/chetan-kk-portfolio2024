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
  // useEffect(() => {}, []);

  return (
    <div className="min-h-screen">
      <MaxWidthWrapper>
        {/* preloader
        <Preloader /> */}
        {/* main body */}
        <Logo />
        <NavBar />
        <Parallax
          speed={-40}
          className="absolute w-[70rem] top-0 right-0 -z-30"
        >
          <Image src={"/grid.svg"} alt="img" width={2880} height={5120} />
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
