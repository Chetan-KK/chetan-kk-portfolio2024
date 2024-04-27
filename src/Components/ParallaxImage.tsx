import { cn } from "@/lib/utils";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

interface img {
  src: string;
  alt: any;
  height: number;
  width: number;
  className: string;
}

const ParallaxImage = ({ src, alt, height, width, className }: img) => {
  return (
    <Image
      src={src}
      alt={alt}
      height={height}
      width={width}
      className={cn(className, "")}
    />
  );
};

export default ParallaxImage;
