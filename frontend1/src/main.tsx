import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginScreen from './LoginScreen.jsx'
import PlaylistScreen from './PlaylistScreen.tsx'
import DeleteAccountScreen from './DeleteAccountScreen.tsx'
import './index.css'
import SongScreen from './SongScreen.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUpScreen from './SignUpScreen.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <LoginScreen/>,
  },
  {
    path:"/signup",
    element: <SignUpScreen/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router = {router} />
  </React.StrictMode>,
)
