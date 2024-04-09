import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonLoader = () => {
  return (
    <div>
      <Skeleton height={200} style={{ backgroundColor: "red" }} />
      <Skeleton count={3} />
    </div>
  );
};

export default SkeletonLoader;
