import { useState } from 'react'
import './TopBar.css'
import { Link } from 'react-router-dom'

function TopBar() {
  return (
    <div className = "topBar">
      <img src = "/Spotify.png" className="logo"></img>
      <Link to="/app" className="account-name">Name</Link>
    </div>
  )
}

export default TopBar 