import { useState } from 'react'
import './SongScreen.css'

function Songs() {
  return (
    <>
      <h1>Select Songs</h1>
      <nav className='playlist'>
        <ol className="songs">
          <li><input type="checkbox"></input> Sunshine On My Shoulders - John Denver</li>
          <li><input type="checkbox"></input> Mona Lisa - Nat King Cole</li>
          <li><input type="checkbox"></input> Something - The Beatles</li>
          <li><input type="checkbox"></input> Vincent - Don McLean</li>
          <li><input type="checkbox"></input> Leader of the Band - Dan Fogelberg</li>
          <li><input type="checkbox"></input> Sunshine On My Shoulders - John Denver</li>
          <li><input type="checkbox"></input> Mona Lisa - Nat King Cole</li>
          <li><input type="checkbox"></input> Something - The Beatles</li>
          <li><input type="checkbox"></input> Vincent - Don McLean</li>
          <li><input type="checkbox"></input> Leader of the Band - Dan Fogelberg</li>
          <li><input type="checkbox"></input> Sunshine On My Shoulders - John Denver</li>
          <li><input type="checkbox"></input> Mona Lisa - Nat King Cole</li>
          <li><input type="checkbox"></input> Something - The Beatles</li>
          <li><input type="checkbox"></input> Vincent - Don McLean</li>
          <li><input type="checkbox"></input> Leader of the Band - Dan Fogelberg</li>
          <li><input type="checkbox"></input> Sunshine On My Shoulders - John Denver</li>
          <li><input type="checkbox"></input> Mona Lisa - Nat King Cole</li>
          <li><input type="checkbox"></input> Something - The Beatles</li>
          <li><input type="checkbox"></input> Vincent - Don McLean</li>
          <li><input type="checkbox"></input> Leader of the Band - Dan Fogelberg</li>
          <li><input type="checkbox"></input> Sunshine On My Shoulders - John Denver</li>
          <li><input type="checkbox"></input> Mona Lisa - Nat King Cole</li>
          <li><input type="checkbox"></input> Something - The Beatles</li>
          <li><input type="checkbox"></input> Vincent - Don McLean</li>
          <li><input type="checkbox"></input> Leader of the Band - Dan Fogelberg</li>
          <li><input type="checkbox"></input> Sunshine On My Shoulders - John Denver</li>
          <li><input type="checkbox"></input> Mona Lisa - Nat King Cole</li>
          <li><input type="checkbox"></input> Something - The Beatles</li>
          <li><input type="checkbox"></input> Vincent - Don McLean</li>
          <li><input type="checkbox"></input> Leader of the Band - Dan Fogelberg</li>            
        </ol>
      </nav>
    </>
    )
  }
  function SongScreen() {
    const [count, setCount] = useState(0)
    return (
        <Songs />
    )
  }
  
  export default SongScreen