"use client";

import { LenisProvider } from "@/lib/contexts/LenisContext";
import ReactLenis, { useLenis } from "@studio-freight/react-lenis/types";
import { ParallaxProvider } from "react-scroll-parallax";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ParallaxProvider>
      {/* <ReactLenis root> */}
      <LenisProvider>{children}</LenisProvider>
      {/* </ReactLenis> */}
    </ParallaxProvider>
  );
}
