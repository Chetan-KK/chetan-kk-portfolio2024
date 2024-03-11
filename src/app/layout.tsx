import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/lib/fonts";
import { BackgroundGradientAnimation } from "@/Components/background-gradient-animation";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Chetan-KK-portfolio-2024",
  description: "portfolio 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", poppins.className)}>
        <div className="fixed top-0 left-0 overflow-hidden -z-50">
          {/* <svg
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 z-40"
          >
            <filter id="noiseFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="1.6"
                numOctaves="3"
                stitchTiles="stitch"
              />
            </filter>

            <rect
              width="100%"
              height="100%"
              filter="url(#displacementFilters)"
            />
          </svg> */}
          <BackgroundGradientAnimation
            gradientBackgroundStart="rgb(0,0,0)"
            gradientBackgroundEnd="rgb(10,10,10)"
            firstColor="30, 16, 40"
            secondColor="183, 13, 143"
            thirdColor="30, 16, 40"
            fourthColor="130, 65, 70"
            fifthColor="183, 153, 33"
            pointerColor="130, 65, 70"
          />
        </div>
        {children}
      </body>
    </html>
  );
}
