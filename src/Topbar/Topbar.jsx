import React from "react";
import "./Topbar.css";
import { Link, useNavigate } from "react-router-dom";
import img from "../Profile/user.png";
import { Context } from "../context/Context";
import { useContext } from "react";
// import Login from "../Login/Login";
const Topbar = () => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const Logout = async () => {
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    // window.location.reload()
    navigate("/login");
  };
  // console.log(user.user.email)
  const email = "sonisaurabhsoni333@gmail.com"
  return (
    <div className="main">
      <div>
        <ul>
          <li>
            <Link className="link" to={"/"}>
              {/* <i className="fa-solid fa-house-chimney"></i> */}
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to={"/Jobs"}>
              {/* <i className="fa-solid fa-address-card"></i> */}
              Jobs
            </Link>
          </li>
        </ul>
        <ul>
          <li className="flex">
            {(
              email) ? (
              <ul>
                <li className="flex">
                  <Link className="link" to={"/DashBoard"}>
                    <p style={{
                      display: email ? 'block' : 'none'
                    }} className="link">DashBoard</p>
                    {/* {localStorage.getItem("email").split('"')} */}
                  </Link>
                </li>
              </ul>
            ) : (
              <div></div>
            )}
            <Link className="link" to={"/Profile"}>
              <img src={img} alt="" />
            </Link>
          </li>
          {!user ? (
            <div className="buttons">
              <li>
                <Link className="link" to={"/Login"}>
                  {/* <i className="fa-solid fa-right-to-bracket"></i> */}
                  <button className='button' onClick={Logout}>Login</button>
                </Link>
              </li>
              {/* <li>
            <Link className="link" to={"/Register"}>
              {/* <i className="fa-solid fa-address-card"></i> }
              <button className='button' onClick={Logout}>Sign Up</button>
            </Link>
          </li> */}
            </div>
          ) : (
            <div>
              <li>
                <button className='button' onClick={Logout}>Logout</button>
              </li>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
