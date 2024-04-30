"use client";

import { LenisProvider } from "@/lib/contexts/LenisContext";
import { ParallaxProvider } from "react-scroll-parallax";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ParallaxProvider>
      <LenisProvider>{children}</LenisProvider>
    </ParallaxProvider>
  );
}
