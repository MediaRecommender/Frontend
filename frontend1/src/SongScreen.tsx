import { useState } from 'react'
import './SongScreen.css'
import { useNavigate } from "react-router-dom";
function Songs() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Select Songs</h1>
      <div className='textcenter panel wider'>
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
      <button className='backButton' onClick={()=>navigate("/app/genresurvey")}>Back</button>
      <button onClick={()=>navigate("/app")}>Finish</button>
      </div>
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