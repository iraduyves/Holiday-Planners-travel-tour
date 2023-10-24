import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './context/user.jsx'
// import TourProvider from './context/Tour.jsx'
import AppProvider from './context/AppProvider.jsx'
import TourProvider from './context/Tour.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const query = new QueryClient({});
ReactDOM.createRoot(document.getElementById('root')).render(

  <QueryClientProvider client={query}>
  <BrowserRouter>
  <TourProvider>
    <UserProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>,
    </UserProvider>
    </TourProvider>
  </BrowserRouter>
  </QueryClientProvider>
)
