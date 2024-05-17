import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='home-background w-full h-full min-h-[100vh]'>
      <App />
    </div>
  </React.StrictMode>,
)
