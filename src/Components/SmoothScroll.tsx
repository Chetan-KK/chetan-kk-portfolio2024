"use client";
import React, { useEffect } from "react";
import { useLenis } from "@/lib/contexts/LenisContext";

const SmoothScroll = () => {
  const { lenisStop, lenisStart } = useLenis();
  useEffect(() => {
    // lenisStop();
  }, []);
  return <div></div>;
};

export default SmoothScroll;
