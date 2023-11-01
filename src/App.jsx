import { Outlet, Route, Routes } from 'react-router-dom'
import '../src/App.css'
import Navbar from './Components/navbar/Navbar'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Footer from './Components/Footer'
import ConctactUs from './pages/ContactUs'
import AmazingOffer from './Components/AmazingOffer'
import Testimonial from './Components/Testimonial'
import Tour from './pages/Tourpage/Tour'
import SingleTourPage from './pages/Tourpage/SingleTourPage'
import Header from './pages/Dashboard/Header'
import Sidebar from './pages/Dashboard/Sidebar'
import Tours from './pages/Dashboard/Tours'
import Home from './pages/Dashboard/Home'

import { useState } from 'react'
import Bookings from './pages/Dashboard/Bookings'
import Users from './pages/Dashboard/Users'
import About from './pages/About'
import Contacts from './pages/Dashboard/Contacts'

// import AppProvider from './context/AppProvider'

function Layout1() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <main className="main-container">
        <Outlet />
      </main>
    </div>
  )
}

function Layout() {
  return (
    <div className="page_layout">
      <Navbar />

      <main className="main">
        <Outlet />
      </main>

      <Footer />
    </div>
  )


}

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  return (
    
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
          <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} isLoggedIn={isLoggedIn} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<ConctactUs />} />
          <Route path='/tour' element={<Tour />} />
          <Route path='/tour/:name' element={<SingleTourPage />} />
          <Route path='/amazingtour' element={<AmazingOffer />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path="*" element={<div>NOt Found</div>} />
        </Route>
        <Route path='/dashboard' element={<Layout1 />} >
          <Route index element={<Home />} />
          <Route path='/dashboard/tours' element={<Tours />} />
          <Route path='/dashboard/bookings' element={<Bookings />} />
          <Route path='/dashboard/contacts' element={<Contacts/>} />
          <Route path='/dashboard/users' element={<Users />} />
        </Route>
      </Routes>

  )
}

export default App
