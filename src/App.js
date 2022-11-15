import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../src/Home/Home'
import Topbar from '../src/Topbar/Topbar'
import Jobs from '../src/Jobs/Jobs'
import Profile from './Profile/Profile'
import SinglePage from '../src/SinglePage/SinglePage'
import EditPost from '../src/EditPost/EditPost'
import './App.css'
import Settings from './Settings/Settings'
import Register from './Register/Register'
import Login from './Login/Login'
import { Context } from './context/Context'
import DashBoard from './Admin/DashBoard'
const App = () => {
  const { user } = useContext(Context)
  return (
    <div className="App">
      <Topbar />
      <Routes>
        <Route exact path='/' element={user ? <Home /> : <Login />} />

        <Route path='/Profile' element={user ? <Profile /> : <Login />} />
        <Route path='/SinglePost/:id' element={<SinglePage />} />
        <Route path='/SinglePost/edit' element={<EditPost />} />
        <Route path='/Settings' element={<Settings />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Jobs' element={user ? <Jobs /> : <Login />} />
        <Route path='/DashBoard' element={user ? <DashBoard /> : <Login />} />
      </Routes>
    </div>
  )
}

export default App