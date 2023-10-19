import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './context/user.jsx'
import TourProvider from './context/Tour.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserProvider>
      <TourProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>,
      </TourProvider>
    </UserProvider>
  </BrowserRouter>
)
