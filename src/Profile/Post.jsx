import React from "react";
import { useEffect } from "react";
import PostFunction from "./PostFunction";
let data
const Post = ({ posts }) => {
    console.log(posts)
    useEffect(() => {

        // const datafinal = async () => {
        //     // let length = posts.users.length
        //     // console.log(length)
        //     // for (let i = 0; i < length; i++) {
        //     //     data = posts.users[i];
        //     //     // console.log(data)
        //     // }
        //     console.log(data)
        // }
        // datafinal()
    }, [])
    return (
        <div>
            {/* <p>{Array.posts}</p> */}
            {posts.map((p) => (
                <PostFunction key={p._id} post={p} />
            ))}
        </div>
    );
};

export default Post;
