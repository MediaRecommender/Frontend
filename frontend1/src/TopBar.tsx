import { useState } from 'react'
import './TopBar.css'
import { Link, useNavigate } from 'react-router-dom'

function TopBar() {
  var username = window.localStorage.getItem("username");
  var password = window.localStorage.getItem("password");

  const navigate = useNavigate();
  
  function logoutUser() {
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("password");
    navigate("/");
  }

  return (
    <div className = "topBar">
      <img src = "/Spotify.png" className="logo"></img>
      <button onClick={logoutUser}>Logout</button>
      <Link to="/app" className="account-name">{username == null ? "not found":username}</Link>
    </div>
  )
}

export default TopBar 