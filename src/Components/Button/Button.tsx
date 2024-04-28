import React, { ReactNode } from "react";
import styles from "./button.module.css";

const Button = ({
  children,
  className,
  type,
}: {
  children: ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
}) => {
  return (
    <button type={type} className={`${styles.button} ${className} target`}>
      {children}
    </button>
  );
};

export default Button;
