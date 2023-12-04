import { useState } from 'react'

import reactLogo from './assets/react.svg' // temp logo
import { useNavigate, redirect } from "react-router-dom";

//import './App.css'

const api = "http://ec2-18-191-32-136.us-east-2.compute.amazonaws.com"

const testUsername = "username1"
const testPassword = "password1"


function LoginScreen() {

    var currentUser = window.localStorage.getItem("username");

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginErrorDisplayed, setLoginErrorDisplayed] = useState(false);

    async function loginHandler() {
        // if loginSuccess is true, the login will proceed; otherwise, show an error
        var loginSuccess = true;

        try {
            // attempt the http request
            // fetch is javascript's built-in http request
            const response = await fetch(api + "/login", {
                method: "POST",
                // data is to be sent in a simple two-attribute object in the JSON format
                body: JSON.stringify({
                    "username": username,
                    "password": password,
                }),
                // this only header tells the API that we are sending data in JSON
                headers: {
                    "Content-Type": "application/json"
                }
            });

            // if the http request succeeds, attempt to parse the response as JSON
            const responseObject = await response.json();

            // if we get past this point, responseObject is now a javascript object
            // backend told me the response should be a simple object with two attributes: "success", a boolean, and "message", a string
            loginSuccess = responseObject.success;
            console.log(responseObject.message);
        }
        // if anything goes wrong in the entire process, log the error to the console
        catch(error) {
            console.error("http request failed: " + error);
            loginSuccess = false;
        }

//      if (loginSuccess) {
        // replace above with below once the backend is properly up
        if (username == testUsername && password == testPassword) {
            setLoginErrorDisplayed(false)
            // make login credentials persistent
            window.localStorage.setItem("username", username)
            window.localStorage.setItem("password", password)
            // move to main app page
            navigate("/app")
        }
        else {
            setLoginErrorDisplayed(true)
        }
    }

    return (
        <>
            <div>
                <img src={reactLogo} className="logo react" alt="Logo" />
                <h2>LOG IN</h2>

                <div>
                    <input value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder='Username' />
                    <br />
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Password' />
                    <br />
                    <button onClick={() => {
                        loginHandler()
                    }}>Log In</button>
                    <p hidden={!loginErrorDisplayed}>Incorrect username or password!</p>
                </div>

                <button onClick={() => { navigate("signup") }}>Sign Up</button>

            </div>
        </>
    )
}

export default LoginScreen