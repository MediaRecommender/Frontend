import { useState } from 'react'

import reactLogo from './assets/react.svg' // temp logo

import './App.css'

function LoginScreen() {
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');

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
                    <button>Log In</button>
                </div>
                
                <button>Sign Up</button>

            </div>
        </>
    )
}


export default LoginScreen