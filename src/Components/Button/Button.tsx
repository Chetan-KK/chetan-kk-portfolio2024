import React, { ReactNode } from "react";
import styles from "./button.module.css";

const Button = ({
  children,
  className = '',
  ...props
}: {
  children: ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button";
  [key: string]: any; // Allow any other props
}) => {
  return (
    <button className={`${styles.button} ${className} target cursor-none`} {...props}>
      {children}
    </button>
  );
};

export default Button;
