"use client";
import styles from "./cursor.module.css";

import { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import MaterialSymbolsArrowForwardRounded from "@/assets/MaterialSymbolsArrowForwardRounded";
import cursorClassApplier from "@/lib/cursorClassApplier";

const Cursor = () => {
  const normalCursorX = useMotionValue(-100);
  const normalCursorY = useMotionValue(-100);

  const [hovered, setHovered] = useState(false);
  const [innerData, setInnerData] = useState(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
      if (hoveredElement && hoveredElement.classList.contains("target")) {
        setHovered(true);
        //upate

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
    cursorClassApplier();
  }, []);

  return (
    <>
      <motion.div
        className={`${styles.cursor} ${styles.outer}`}
        style={{
          width: `${hovered ? "64" : "26"}px`,
          height: `${hovered ? "64" : "26"}px`,
          x: normalCursorX,
          y: normalCursorY,
          mixBlendMode: `${innerData ? "normal" : "difference"}`,
        }}
      >
        {innerData === "project" && (
          <MaterialSymbolsArrowForwardRounded
            className="text-4xl -rotate-45"
            style={{ scale: innerData === "project" ? 1 : 0 }}
          />
        )}
      </motion.div>
    </>
  );
};

export default Cursor;
