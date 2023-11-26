import { useState } from 'react'
import './TopBar.css'

function TopBar() {
  return (
    <div className = "topBar">
      <img src = "Spotify.png" className="logo"></img>
      <a href="https://twitter.com/home" className="account-name">Name</a>
    </div>
  )
}

export default TopBar 