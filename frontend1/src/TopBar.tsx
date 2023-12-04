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
      <img src = "Spotify.png" className="logo"></img>
      <button className="logOut" onClick={logoutUser}>Logout</button>
      {/* <Link to="/app" className="account-name">{username == null ? "not found":username}</Link> */}
      <div className="dropdown">
        <button className="account-button">{username == null ? "not found":username}</button>
        <div className="dropdown-content">
        <Link to="playlist">Your Playlist</Link>
        <Link to="genresurvey">Genre Survey</Link>
        <Link to="songsurvey">Song Survey</Link>
        <Link to="delete">Delete Account</Link>
        </div>
      </div>
</div>
  )
}

export default TopBar 