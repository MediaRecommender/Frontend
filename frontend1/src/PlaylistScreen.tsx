import { useState } from 'react'
import './PlaylistScreen.css'
import TopBar from './TopBar.tsx'

function Playlists() {
  return (
    <>
    <h1>Your Playlist</h1>
      <div className='textcenter panel wider'>
      <nav className='playlist'>
        <ol className="songs">
          <li>Sunshine On My Shoulders - John Denver</li>
          <li>Mona Lisa - Nat King Cole</li>
          <li>Something - The Beatles</li>
          <li>Vincent - Don McLean</li>
          <li>Leader of the Band - Dan Fogelberg</li>
          <li>Sunshine On My Shoulders - John Denver</li>
          <li>Mona Lisa - Nat King Cole</li>
          <li>Something - The Beatles</li>
          <li>Vincent - Don McLean</li>
          <li>Leader of the Band - Dan Fogelberg</li>
          <li>Sunshine On My Shoulders - John Denver</li>
          <li>Mona Lisa - Nat King Cole</li>
          <li>Something - The Beatles</li>
          <li>Vincent - Don McLean</li>
          <li>Leader of the Band - Dan Fogelberg</li>
          <li>Sunshine On My Shoulders - John Denver</li>
          <li>Mona Lisa - Nat King Cole</li>
          <li>Something - The Beatles</li>
          <li>Vincent - Don McLean</li>
          <li>Leader of the Band - Dan Fogelberg</li>
          <li>Sunshine On My Shoulders - John Denver</li>
          <li>Mona Lisa - Nat King Cole</li>
          <li>Something - The Beatles</li>
          <li>Vincent - Don McLean</li>
          <li>Leader of the Band - Dan Fogelberg</li>
          <li>Sunshine On My Shoulders - John Denver</li>
          <li>Mona Lisa - Nat King Cole</li>
          <li>Something - The Beatles</li>
          <li>Vincent - Don McLean</li>
          <li>Leader of the Band - Dan Fogelberg</li>            
        </ol>
      </nav>
      </div>
    </>
    )
  }
  function PlaylistScreen() {
    const [count, setCount] = useState(0)
    return (
        <Playlists />
    )
  }
  
  export default PlaylistScreen