import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/lib/fonts";
import Cursor from "@/Components/cursor/Cursor";
import { cn } from "@/lib/utils";
import Providers from "./Providers";
import Preloader from "@/Components/Preloader";

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
        <Providers>
          <Cursor />
          <div className="fixed top-0 left-0 overflow-hidden -z-50">
            {/* <BackgroundGradientAnimation
            gradientBackgroundStart="rgb(0,0,0)"
            gradientBackgroundEnd="rgb(10,10,10)"
            firstColor="30, 16, 40"
            secondColor="183, 13, 143"
            thirdColor="30, 16, 40"
            fourthColor="130, 65, 70"
            fifthColor="183, 153, 33"
            pointerColor="130, 65, 70"
          /> */}
          </div>
          <Preloader />
          {children}
        </Providers>
      </body>
    </html>
  );
}
