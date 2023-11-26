import React from 'react'
import ReactDOM from 'react-dom/client'
import PlaylistScreen from './PlaylistScreen.tsx'
import DeleteAccountScreen from './DeleteAccountScreen.tsx'
import './index.css'
import SongScreen from './SongScreen.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <PlaylistScreen />
  </React.StrictMode>,
)
