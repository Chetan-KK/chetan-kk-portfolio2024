"use client";

import { LenisProvider } from "@/lib/contexts/LenisContext";
import { PreloaderProvider } from "@/lib/contexts/PreloaderContext";
import { ScreenSizeProvider } from "@/lib/contexts/ScreenSizeContext";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ParallaxProvider>
      <ScreenSizeProvider>
        <PreloaderProvider>
          <LenisProvider>{children}</LenisProvider>
        </PreloaderProvider>
      </ScreenSizeProvider>
    </ParallaxProvider>
  );
}
