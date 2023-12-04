import { useState } from 'react'
import './DeleteAccountScreen.css'
import TopBar from './TopBar'

const testUsername = "username1"
const testPassword = "password1"

function Delete() {

  const[username,setUsername] = useState('');
  const[password,setPassword] = useState('');

  const[loginErrorDisplayed, setLoginErrorDisplayed] = useState(false);
  return (
    <div>
      <div className = 'top'>
        <button>Back</button>
      </div>
      <div className='loginContainer'>
        <div className='login'>
                    <img src = "/Spotify.png" className="deleteLogo"></img>
                    <input value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder='Username'/>
                    <input value={password} onChange={e => setPassword(e.target.value)} type= "password" placeholder='Password'/>
                    <button onClick={()=>{
                        // in the future, the condition for this if statement should be connected somehow to the database
                        if(username == testUsername && password == testPassword) {
                            // correct username handling here
                            setLoginErrorDisplayed(false)
                        }
                        else {
                            setLoginErrorDisplayed(true)
                        }
                    }}>Delete Account</button>
                    <p hidden={!loginErrorDisplayed}>Incorrect username or password!</p>
                </div>
      </div>
    </div>
    )
  }
  function DeleteAccountScreen() {
    const [count, setCount] = useState(0)
    return (
    <body className="body">
      <div className="center">
        <Delete />
      </div>
    </body>
    )
  }
  
  export default DeleteAccountScreen