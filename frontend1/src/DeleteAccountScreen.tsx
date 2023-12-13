import { useState } from 'react'
import './DeleteAccountScreen.css'
import TopBar from './TopBar'
import Spinner from './Spinner'
import { useNavigate } from 'react-router-dom'

const api = "http://ec2-18-191-32-136.us-east-2.compute.amazonaws.com"
function Delete() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [submitting, setSubmitting] = useState(false);

  const [loginErrorDisplayed, setLoginErrorDisplayed] = useState(false);

  const navigate = useNavigate()

  async function onClickHandler() {
    if (username == window.localStorage.getItem("username") && password == window.localStorage.getItem("password")) {
      try {
        const response = await fetch(api + "/profile/delete", {
          method: "POST",
          body: JSON.stringify({
            "username": window.localStorage.getItem("username")
          }),
          headers: {
            "Content-Type": "application/json"
          }
        });

        const responseObject = await response.json();

        if(responseObject.success) {
          setLoginErrorDisplayed(false)
          window.localStorage.removeItem("username")
          window.localStorage.removeItem("password")
          navigate("/")
        }
      }
      catch (error) {
        console.error("http request failed: " + error);
      }
    }
    else {
      setLoginErrorDisplayed(true)
    }
  }

  return (
    <>
      <div className='panel'>
        <p>Please enter your login credentials again: </p>
        <input value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder='Username' />
        <br />
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Password' />
        <br />
        <button onClick={() => 
          onClickHandler()}>Delete Account</button>
        <p hidden={!loginErrorDisplayed}>Incorrect username or password!</p>
      </div>
    </>
  )
}
function DeleteAccountScreen() {
  const [count, setCount] = useState(0)
  return (
    <Delete />
  )
}

export default DeleteAccountScreen