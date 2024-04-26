"use client";
import styles from "./cursor.module.css";

import { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

const Cursor = () => {
  const normalCursorX = useMotionValue(-100);
  const normalCursorY = useMotionValue(-100);

  const [hovered, setHoverd] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
      if (hoveredElement && hoveredElement.classList.contains("target")) {
        setHoverd(true);
        //upate
        normalCursorX.set(e.clientX - 32);
        normalCursorY.set(e.clientY - 32);
      } else {
        setHoverd(false);
        normalCursorX.set(e.clientX - 13);
        normalCursorY.set(e.clientY - 13);
      }
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, [normalCursorX,normalCursorY]);

  return (
    <>
      <motion.div
        className={`${styles.cursor} ${styles.outer}`}
        style={{
          width: `${hovered ? "64" : "26"}px`,
          height: `${hovered ? "64" : "26"}px`,
          x: normalCursorX,
          y: normalCursorY,
        }}
      />
    </>
  );
};

export default Cursor;
