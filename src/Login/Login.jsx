import React, { useState } from "react";
// import axios from "axios";
import "./Login.css";
import login_svg from "../Topbar/Login.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/Context";
const Login = () => {
  // const [state, setState] = useState("Hello");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const userRef = useRef();
  // const passwordRef = useRef();
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const handleOnClick = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch("http://localhost:8000/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            localStorage.getItem("token")
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();
      localStorage.setItem("email", JSON.stringify(data.user.email));
      localStorage.setItem("name", JSON.stringify(data.user.name));
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("phone", JSON.stringify(data.user.phone));
      localStorage.setItem("location", JSON.stringify(data.user.location));
      window.location.replace('/')
      navigate("/");
      console.log(data);
      // console.log(user.user.email)
    } catch (err) {
      console.log(err);
    }
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post("http://localhost:8000/api/signin", {
  //       email: userRef.current.value,
  //       password: passwordRef.current.value,
  //     });
  //     localStorage.setItem("user", JSON.stringify(res.data.user));
  //     localStorage.setItem("email", JSON.stringify(res.data.user.email));
  //     navigate("/");
  //     // alert(localStorage.getItem("email"));
  //     // setState(() => res.data.user.email);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div className="maindiv">
      <div className="login">
        <div className="div1">
          <img src={login_svg} alt="" />
        </div>
        <form action="" onSubmit={handleOnClick} className="form">
          <div className="flex">
            <label htmlFor="">Email </label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="input"
            />
          </div>
          <div className="flex">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="input"
            />
          </div>
          <button type="submit" onClick={handleOnClick} className="button1">
            SignIn
          </button>
          <h6>Don't have an Account?</h6>
          <Link to={'/Register'}>Sign Up</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
