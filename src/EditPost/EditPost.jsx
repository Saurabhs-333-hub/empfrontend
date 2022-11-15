import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import "./EditPost.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const EditPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [pic, setPic] = useState("");
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const users = localStorage.getItem("user");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      name: users.name,
      title,
      pic,
      desc,
      name
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:8000/api/upload", data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const res = await axios.post(
        "http://localhost:8000/api/post/add",
        newPost
      );
      console.log(res.data.post._id);
      // window.location.replace("/SinglePost/", +res.data.post._id);
      navigate(`/SinglePost/${res.data.post._id}`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="write">
        {file && (
          <img
            src={URL.createObjectURL(file)}
            alt=""
            onChange={(e) => setFile(e.target.files[0])}
          />
        )}
        <form action="" className="writeForm" onSubmit={handleSubmit}>
          <div className="writeGroup">
            <label htmlFor="fileInput">
              {/* <i className="fa-solid fa-image"></i> */}
            </label>
            <input
              type="file"
              name=""
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <input
              type="text"
              className="writeInput"
              placeholder="Write Your Title...."
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              type="text"
              className="writeInput"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              title="Please Write Your Correct Username"
              required
            />
          </div>
          <div className="writeGroup">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="textarea"
              placeholder="Describe Your Job...."
              onChange={(e) => setDesc(e.target.value)}
              required
            ></textarea>
          </div>
          <input type="submit" value="Upload" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default EditPost;
