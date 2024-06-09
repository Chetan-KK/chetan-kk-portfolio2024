"use client";
import styles from "./cursor.module.css";

import { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import {
  MaterialSymbolsLightEyeTrackingOutlineSharp,
  PhArrowSquareInLight,
} from "@/assets/Icons";
import { useScreenSize } from "@/lib/contexts/ScreenSizeContext";

const Cursor = () => {
  const screenSize = useScreenSize();

  const normalCursorX = useMotionValue(-100);
  const normalCursorY = useMotionValue(-100);

  const [hovered, setHovered] = useState(false);
  const [innerData, setInnerData] = useState<string | null>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      let hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
      let foundTarget = false;

      while (hoveredElement && !foundTarget) {
        if (hoveredElement.classList.contains("target")) {
          foundTarget = true;
          setHovered(true);

          const dataAttribute = hoveredElement.getAttribute(
            "data-attribute-cursor"
          );
          if (dataAttribute) {
            setInnerData(dataAttribute);
          } else {
            setInnerData(null);
          }

          normalCursorX.set(e.clientX - 32);
          normalCursorY.set(e.clientY - 32);
        } else {
          hoveredElement = hoveredElement.parentElement;
        }
      }

      if (!foundTarget) {
        setHovered(false);
        normalCursorX.set(e.clientX - 13);
        normalCursorY.set(e.clientY - 13);
        setInnerData(null);
      }
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, [normalCursorX, normalCursorY]);

  useEffect(() => {
    //  Applier();
  }, []);

  return (
    <>
      {screenSize > 800 && (
        <motion.div
          className={`${styles.cursor} ${styles.outer} ${
            innerData ? styles.data : ""
          } ${hovered ? styles.hovered : ""}`}
          style={{
            x: normalCursorX,
            y: normalCursorY,
          }}
        >
          {innerData === "project" && (
            <MaterialSymbolsLightEyeTrackingOutlineSharp className="text-3xl  transition-all duration-500" />
          )}

          {innerData === "link" && (
            <PhArrowSquareInLight className="text-3xl transition-all duration-500" />
          )}
        </motion.div>
      )}
    </>
  );
};

export default Cursor;
