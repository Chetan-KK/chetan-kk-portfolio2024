import React from "react";
import SmallLoader from "../SmallLoader";

const SingleProjectSkeleton = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-3">
      <SmallLoader size={10} />
      <div className="animate-pulse text-dim">Loading please wait</div>
    </div>
  );
};

export default SingleProjectSkeleton;
