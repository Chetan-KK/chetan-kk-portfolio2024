import React, { ReactNode } from "react";
import styles from "./button.module.css";

const Button = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`${styles.button} ${className} target`}>{children}</div>
  );
};

export default Button;
