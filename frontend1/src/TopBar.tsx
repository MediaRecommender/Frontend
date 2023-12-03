import { useState } from 'react'
import './TopBar.css'

function TopBar() {
  return (
    <div className = "topBar">
      <img src = "Spotify.png" className="logo"></img>
      <div className="dropdown">
        <button className="account-button">Name</button>
        <div className="dropdown-content">
        <a href="#">Sign Out</a>
        <a href="#">Your Playlist</a>
        <a href="#">Genre Survey</a>
        <a href="#">Song Survey</a>
        <a href="#">Delete Account</a>
        </div>
      </div>
</div>
  )
}

export default TopBar 