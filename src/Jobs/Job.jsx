import React from "react";
import JobFunction from "./JobFunction";
const Job = ({ posts }) => {
  return (
    <div>
      {posts.map((p) => (
        <JobFunction key={p._id} post={p} />
      ))}
    </div>
  );
};

export default Job;
