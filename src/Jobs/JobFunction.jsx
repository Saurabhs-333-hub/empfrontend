import React from "react";
import { Link } from "react-router-dom";
// import img from "../Topbar/lauren-pelesky-JEs6p2ZCYSg-unsplash.jpg";
import "./JobFunction.css";
const Job = ({ post }) => {
  const PF = "http://localhost:8000/images/";
  return (
    <div>
      {/* <Link to={"/SinglePost"}> */}
      <div className="card">
        {post.photo && (
          // <div className="img">
          <img src={PF + post.photo} alt="" />
          // </div>
        )}
        <Link className="link" to={`/SinglePost/${post._id}`}>
          <div className="flex">
            <div className="title2">{post.title}</div>
            <div className="author2">{post.name}</div>
          </div>
          <div className="title2">{new Date(post.updatedAt).toDateString()}</div>
          <div className="desc2">{post.desc}</div>
        </Link>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default Job;
