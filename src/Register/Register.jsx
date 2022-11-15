import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import signup_svg from "../Topbar/SignUp.svg";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [about, setAbout] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [pic, setPic] = useState("");
  // const [Error, setError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setError(false);
    try {
      const res = await axios.post("http://localhost:8000/api/signup", {
        name,
        email,
        password,
        phone,
        location,
        about,
        pic,
        date
      });
      alert(res.data.user._id);
      navigate("/Login");
    } catch (error) {
      // setError(true);
    }
  };
  return (
    <div className="maindiv">
      <div>
        <form action="" onSubmit={handleSubmit} className="login">
          <div className="div1">
            <img src={signup_svg} alt="" />
          </div>
          <div className="flex">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name=""
              onChange={(e) => setName(e.target.value)}
              className="input"
              placeholder="Name"
              pattern="^[A-Za-z]{3,20}$"
              title="Type Your Name Without Space and Special Characters"
              required
            />
          </div>
          <div className="flex">
            <label htmlFor="">Phone</label>
            <input
              type="tel"
              name=""
              onChange={(e) => setPhone(e.target.value)}
              className="input"
              placeholder="Phone"
              // maxLength={10}
              // minLength={10}
              pattern="[0-9]{10}"
              title="10 Numbers Required"
              required
            />
          </div>
          <div className="flex">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name=""
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="Email"
              required
            />
          </div>
          <div className="flex">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name=""
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="Password"
              pattern={`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`}
              title="Password must contain 1 number,1 Special symbol,have 8 characters"
              required
            />
          </div>
          <div className="flex">
            <label htmlFor="">Date</label>
            <input
              type="date"
              name=""
              onChange={(e) => setDate(e.target.value)}
              className="input"
              placeholder="Write About YourSelf"
              required
            />
          </div>
          <div className="flex">
            <label htmlFor="">About</label>
            <input
              type="textarea"
              name=""
              onChange={(e) => setAbout(e.target.value)}
              className="input"
              placeholder="Write About YourSelf"
              required
            />
          </div>
          <div className="flex">
            <label htmlFor="">Location</label>
            <input
              type="text"
              name=""
              onChange={(e) => setLocation(e.target.value)}
              className="input"
              placeholder="Location"
              required
            />
          </div>
          {/* <div className="flex">
            <label htmlFor="">Pic</label>
            <input
              type="image"
              name=""
              onChange={(e) => setPic(e.target.files[0])}
              className="input"
              placeholder="Pic"
              required
            />
          </div> */}
          <input type="submit" value="SignUp" className="button1" />
        </form>
      </div>
    </div>
  );
};

export default Register;
