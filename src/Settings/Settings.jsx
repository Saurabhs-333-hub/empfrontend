import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../context/Context';
import img from "../Topbar/butterfly_leaves_wings_134436_1366x768.jpg";
import './Settings.css'
const Settings = () => {
    const [users, setUsers] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const [deleteItem, setDelete] = useState(false);
    const { user } = useContext(Context);
    const handleDelete = async () => {
        try {
            const res = await axios.delete(
                `http://localhost:8000/api/${user.user._id}`,
                { data: { name: user.user.name } }
            );
            setDelete(true)
            localStorage.removeItem("user");
            localStorage.removeItem("email");
            localStorage.removeItem("name");
            // window.location.reload()
            window.location.replace('/login')
            // console.log(res);
            // console.log(user._id);
        } catch (err) {
            console.log(err);
        }
    };
    const handleSubmit = async () => {
        const update = {
            _id: user.user._id, name, email, password
        }
        try {
            const res = await axios.put(
                `http://localhost:8000/api/${user.user._id}`, update
            );
            // setUpdate(false)
            // window.location.reload()
            // console.log(res)
            // setUsers(res.data.user);
            // setName(res.data.user.name);
            // setEmail(res.data.user.email);
            // setPassword(res.data.user.password);
            setSuccess(true)
            console.log(res);
            console.log(user._id);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            <div className="update">

            </div>
            <div className="delete">

            </div>
            <div className="profile">
                <form action="" onSubmit={handleSubmit} className="column">
                    {/* <label htmlFor="" className="name">Profile Picture</label> */}
                    {/* <img src={img} alt="" /> */}
                    {/* <label htmlFor="fileInput"><i className="fa-solid fa-image"></i></label> */}
                    <input type="file" name="" id="fileInput" style={{ display: "none" }} />
                    <div className="flexitems"><label htmlFor="" className="name">Name</label>
                        <input type="text" className='writeInput1' placeholder={user.user.name} onChange={(e) => setName(e.target.value)} /></div>
                    <div className="flexitems">
                        <label htmlFor="" className="name">Email</label>
                        <input type="email" className='writeInput2' placeholder={user.user.email} onChange={(e) => setEmail(e.target.value)} />
                    </div>              <div className="flexitems">
                        <label htmlFor="" className="name">Encrypted Password</label>
                        <input type="text" className='writeInput3' placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)} /></div>
                    <input type="button" value="Update" className="btn1" onClick={handleSubmit} />
                    <input type="button" value="Delete" className="btn2" onClick={handleDelete} />
                    {success ? <h1 className="button1">Updated</h1> : <h1>You Can Update!</h1>}
                </form>
            </div>
        </div>
    )
}

export default Settings