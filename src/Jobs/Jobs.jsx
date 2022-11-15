import React, { useEffect, useState } from "react";
import img from "../Topbar/lauren-pelesky-JEs6p2ZCYSg-unsplash.jpg";
import "./Jobs.css";
// import { Link } from "react-router-dom";
import Job from "./Job";
import axios from "axios";
const Jobs = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:8000/api/post/uhi/");
      console.log(res);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <div className="">

        <div className="postsprofile margin">
          <Job posts={posts} />
        </div>
    </div>
  );
};

export default Jobs;
