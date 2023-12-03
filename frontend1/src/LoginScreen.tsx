import { useState } from 'react'

import reactLogo from './assets/react.svg' // temp logo
import { useNavigate, redirect } from "react-router-dom";

//import './App.css'

const testUsername = "username1"
const testPassword = "password1"


function LoginScreen() {
    var currentUser = window.localStorage.getItem("username");

    const navigate = useNavigate();

    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');

    const[loginErrorDisplayed, setLoginErrorDisplayed] = useState(false);
    



    return(
        <>
            <div>
                <img src={reactLogo} className="logo react" alt="Logo"/>
                <h2>LOG IN</h2>

                <div>
                    <input value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder='Username'/>
                    <br/>
                    <input value={password} onChange={e => setPassword(e.target.value)} type= "password" placeholder='Password'/>
                    <br/>
                    <button onClick={()=>{
                        // in the future, the condition for this if statement should be connected somehow to the database
                        if(username == testUsername && password == testPassword) {
                            // correct username handling here
                            setLoginErrorDisplayed(false)
                            window.localStorage.setItem("username", username)
                            window.localStorage.setItem("password", password)
                            navigate("/app")
                        }
                        else {
                            setLoginErrorDisplayed(true)
                        }
                    }}>Log In</button>
                    <p hidden={!loginErrorDisplayed}>Incorrect username or password!</p>
                </div>
                
                <button onClick={()=>{navigate("signup")}}>Sign Up</button>

            </div>
        </>
    )
}

export default LoginScreen