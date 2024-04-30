import React from "react";

const Logo = () => {
  return (
    <div className="target hover:scale-110 transition-all duration-300 fixed top-6 left-8 text-2xl z-30 text-primary">
      <span className="target text-dim">{"<"}</span>CK
      <span className="target text-dim">{"-/>"}</span>
    </div>
  );
};

export default Logo;
