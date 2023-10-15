import { Outlet, Route, Routes } from 'react-router-dom'
import '../src/App.css'
import Navbar from './Components/navbar/Navbar'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Footer from './Components/Footer'
import ConctactUs from './pages/ContactUs'
import About from './pages/About'
import Destination from './Components/Destination'
import AmazingOffer from './Components/AmazingOffer'
import Highlight from './Components/Highlight'
import Testimonial from './Components/Testimonial'

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




  return (

    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<ConctactUs/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/destination' element={<Destination/>} />
        <Route path='/amazingtour' element={<AmazingOffer/>} />
        <Route path='/testimonial' element={<Testimonial/>} />
        <Route path="*" element={<div>NOt Found</div>} />
      </Route>
      <Route />
    </Routes>
  )
}

export default App
