import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full relative max-w-[140rem] overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
