import { useState, useEffect } from 'react'
import './PlaylistScreen.css'
import TopBar from './TopBar.tsx'

const api = "http://ec2-18-191-32-136.us-east-2.compute.amazonaws.com"

function SongList(){

    const[username,setUsername] = useState('')
    const [titles, setTitles] = useState([]);
    const [images, setImages] = useState([]);
    const [artists, setArtists] = useState([]);

    async function getSongData() {

      try {
          const response = await fetch(api + "/playlist", {
            method: "POST",
            // data is to be sent in a simple two-attribute object
            body: JSON.stringify({
                "username": window.localStorage.getItem("username"),
                "artists": artists,
                "images": images,
                "titles": titles
            }),
            headers: {
                "Content-type": "application/json"
            }
          });

          const responseObject = await response.json();
          console.log(JSON.stringify(responseObject))
          return responseObject;
      }
      catch(error) {
        console.error("http request failed");
    }  
  }
  useEffect(() => {
    const a = async () => {
        var songData = await getSongData()
        setArtists(songData.artists)
        setImages(songData.images)
        setTitles(songData.titles)
        console.log(songData)
    }
    a()
  }, [])

  return (
    <ol>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ol>
  )
}

function Playlists() {

  return (
    <div>
      <h1 className = "playlistTitle">Playlist</h1>
      <nav className='playlist'>
        <ol id="songList" className="songs">
          <SongList />    
        </ol>
      </nav>
    </div>
    )
  }
  function PlaylistScreen() {
    const [count, setCount] = useState(0)
    return (
    <body className="body">
      <div className="center">
        <Playlists />
      </div>
    </body>
    )
  }
  
  export default PlaylistScreen