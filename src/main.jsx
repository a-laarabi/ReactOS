import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className='home-background w-full h-full min-h-[100vh]'>
        <App />
      </div>
    </Provider>
  </React.StrictMode>,
)
