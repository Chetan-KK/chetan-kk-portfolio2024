import React from "react";

const Available = () => {
  return (
    <div className="opacity-75 text-xs border border-border rounded-full px-3 py-2 animate-pulse flex items-center justify-center gap-2">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      <p>Available for new projects</p>
    </div>
  );
};

export default Available;
