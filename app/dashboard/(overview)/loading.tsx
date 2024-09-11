import React from "react";
import DashboardSkeleton from "../../ui/skeletons";

const loading = () => {
  return (
    <>
      <div className="loader"></div>
      <DashboardSkeleton />
    </>
  );
};

export default loading;
