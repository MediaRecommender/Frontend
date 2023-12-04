import { useState } from 'react'

import reactLogo from './assets/react.svg' // temp logo
import { useNavigate } from "react-router-dom";


const testTakenUsername = "username1"

const usernameTakenErrorMsg = "Username has already been taken!"
const emptyFieldsErrorMsg = "Please fill out all required fields!"


function SignUpScreen() {
    const[username,setUsername] = useState('')
    const[password,setPassword] = useState('')

    const[errorMessageVisible,setErrorMessageVisible] = useState(false)

    const[errorMsg, setErrorMsg] = useState(usernameTakenErrorMsg)

    const navigate = useNavigate();

    function continueButtonHandler() {
        if(username == "" || password == "") {
            setErrorMsg(emptyFieldsErrorMsg)
            setErrorMessageVisible(true)
        }
        // this is where database connection should go
        else if(username == testTakenUsername) {
            setErrorMsg(usernameTakenErrorMsg)
            setErrorMessageVisible(true)
        }
        else {
            // temp; in the future this should instead tell the backend to create a new account
            setErrorMessageVisible(false)

            navigate("/app/genresurvey")
        }
    }

    return(
        <>
            <div className = "textcenter contentdiv">
                <div className = "disp">
                    <img src={reactLogo} className="logo react" alt="Logo" />
                    <h1>Media Recommender</h1>
                </div>
                <br/>
                <div className='textcenter panel'>
                <h2>CREATE PROFILE</h2>
                    <input value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder='Username'/>
                    <br/>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Password'/>
                <p hidden={!errorMessageVisible}>{errorMsg}</p> 
                <br/>
                <button className='backButton' onClick={()=>navigate("/")}>Back</button>
                <button onClick={continueButtonHandler}>Continue</button>
                </div>

            </div>
        </>
    )
}

export default SignUpScreen