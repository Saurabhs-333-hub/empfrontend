import React from "react";
import { Link } from "react-router-dom";
import Posts from "./Posts";
import user from './user.png'
import email from './message.png'
import phone from './telephone-call.png'
import location from './map-pin.png'
import "./Profile.css";
const Profile = () => {
  return (
    <div>
      <div className="settings">
        <div>
          <Link className="link" to={"/Settings"}>
            <i className="fa-solid fa-gear">Settings</i>
          </Link>
        </div>
      </div>
      <div className="profilecontainer">
        <div className="profileinfo">
          <div className="">
            <div className="flexitems">
              <span>
                <img src={user} alt="" className="imginfo" />
              </span>
              <div className="width">
                {localStorage.getItem("name").split('"')}
              </div>
            </div>
            <div className="flexitems">
              <span>
                <img src={email} alt="" className="imginfo" />
              </span>
              <div className="width">
                {localStorage.getItem("email").split('"')}
              </div>
            </div>
            <div className="flexitems">
              <span>
                <img src={phone} alt="" className="imginfo" />
              </span>
              <div className="width">
                {localStorage.getItem("phone").split('"')}
              </div>
            </div>
            <div className="flexitems">
              <span>
                <img src={location} alt="" className="imginfo" />
              </span>
              <div className="width">
                {localStorage.getItem("location").split('"')}
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="post">
            <Link className="link" to={"/SinglePost/edit"}>
              <label htmlFor="">Want To Post Something?</label>
              <i className="fa-solid fa-edit"></i>
            </Link>
          </div>
        </div>
      </div>
      <Posts />
    </div>
  );
};

export default Profile;
