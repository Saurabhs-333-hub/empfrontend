import React, { useEffect, useState } from "react";
import img from "../Topbar/lauren-pelesky-JEs6p2ZCYSg-unsplash.jpg";
import "../Jobs/Jobs.css";
// import { Link } from "react-router-dom";
// import Job from "./Job";
import axios from "axios";
import Post from "./Post";
const Posts = () => {
    const [posts, setPosts] = useState([]);
    let i = 0
    let data
    let datafinal
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get("http://localhost:8000/api/usersapi");
                for (let j = 0; j < res.data.result.length; j++) {
                    data = res.data.result[j].users;
                    for (let k = 0; k < data.length; k++) {
                        datafinal = data[k];
                        // console.log(datafinal)
                        // console.log(data[k])
                    }
                    console.log(data)
                }
                // console.log(datafinal);
                setPosts(data);
            } catch (error) {
                console.log(error)
            }
        };
        fetchPosts();
    }, []);
    return (
        <div className="">

            <div className="postsprofile">
                <Post posts={posts} />
            </div>
        </div>
    );
};

export default Posts;
