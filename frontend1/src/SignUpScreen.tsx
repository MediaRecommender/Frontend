import { useState } from 'react'

import reactLogo from './assets/react.svg' // temp logo


import './App.css'

function SignUpScreen() {
    const[username,setUsername] = useState('')
    const[password,setPassword] = useState('')


    return(
        <>
            <div>
                <img src={reactLogo} className="logo react" alt="Logo"/>
                <br/>
                <h2>CREATE PROFILE</h2>
                <div>
                    <input value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder='Username'/>
                    <br/>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Password'/>
                </div>

                <button>Back</button>
                <button>Continue</button>

            </div>
        </>
    )
}

export default SignUpScreen