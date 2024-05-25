"use client";

import { LenisProvider } from "@/lib/contexts/LenisContext";
import { PreloaderProvider } from "@/lib/contexts/PreloaderContext";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ParallaxProvider>
      <PreloaderProvider>
        <LenisProvider>{children}</LenisProvider>
      </PreloaderProvider>
    </ParallaxProvider>
  );
}
