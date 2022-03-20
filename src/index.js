import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
    // Activate some additional checks and warnings using React.StrictMode
    <React.StrictMode>
        <App />
    </React.StrictMode>, 
    document.getElementById('root')
)