import React, { useContext, useState } from "react";
import "./SinglePage.css";
// import img from "../Topbar/butterfly_leaves_wings_134436_1366x768.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Context } from "../context/Context";
const SinglePage = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  console.log(path);
  const [post, setPost] = useState({});
  const [title, setTitle] = useState({});
  const [desc, setDesc] = useState({});
  const [deleteItem, setDelete] = useState(false);
  const [update, setUpdate] = useState(false);
  // const PF = "http://localhost:8000/images/";
  const name = localStorage.getItem("name").split('"');
  // console.log(unames)
  const { user } = useContext(Context);
  // let users= JSON.stringify(user)
  const navigate = useNavigate();
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:8000/api/post/" + path);
      setPost(res.data.post);
      setTitle(res.data.post.title);
      setDesc(res.data.post.desc);
      console.log(res.data.post.name, user.user.name);
      // console.log(res.data.post);
      // console.log(user.user.name);
    };
    getPost();
    // console.log(unames)
  }, [path]);
  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:8000/api/post/${post._id}`,
        { data: { name: user.user.name } }
      );
      // setDelete(true)
      // deleteItem ?
      //   (window.location.reload()) : (console.log('Could not delete'))
      // console.log(res);
      // console.log(post._id);
    } catch (err) {
      console.log(err);
    }
  };
  const handleUpdate = async () => {
    try {
      const res = await axios.put(
        `http://localhost:8000/api/post/${post._id}`,
        { name: user.user.name, title, desc }
      );
      // setUpdate(false)
      window.location.reload()
      console.log(res);
      console.log(post._id);
    } catch (err) {
      console.log(err);
    }
  };
  return (<>
    <div className="icons">
      {post.name === user.user.name ? (
        <i className="fa-solid fa-trash" onClick={handleDelete}></i>
      ) : (
        <div></div>
      )}
      {post.name === user.user.name ? (
        <i
          className="fa-solid fa-pen-to-square"
          onClick={() => setUpdate(true)}
        ></i>
      ) : (
        <div></div>
      )}
    </div>
    <div className="main3">
      <div className="">
        <div className="singleImg">
          {/* <img src={PF + post.photo} alt="" className="Img" /> */}
        </div>
        <div className="">
          <div className="editinfo">

            <div className="editmain1">
              {update ? (
                <input type="text" value={title} className="inputTitle writeInput" autoFocus onChange={(e) => setTitle(e.target.value)} />
              ) : (
                <div className="title">
                  {post.title}
                </div>
              )}
            </div>
            <div className="editmain2">
              <div className="author">
                {post.name}
              </div>
              <div className="author">
                {new Date(post.createdAt).toDateString()}
              </div>
              <div className="author">
                {user.user.phone}
              </div>
              <div className="author">
                {user.user.location}
              </div>
            </div>
          </div>
          {update ? (
            <textarea type="text" value={desc} className="textarea" onChange={(e) => setDesc(e.target.value)} />
          ) : (
            <div className="desc">{post.desc}</div>)}
          {update ? (<button className="button1" onClick={handleUpdate}>Update</button>) : (<h6>{post.name}'s Post</h6>)}
        </div>
      </div>
    </div>
  </>
  );
};

export default SinglePage;
