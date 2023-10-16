import { Outlet, Route, Routes } from 'react-router-dom'
import '../src/App.css'
import Navbar from './Components/navbar/Navbar'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard/Dashboard'
import Footer from './Components/Footer'
import ConctactUs from './pages/ContactUs'
// import About from './pages/Tourpage/Tour'
import Destination from './Components/Destination'
import AmazingOffer from './Components/AmazingOffer'
import Highlight from './Components/Highlight'
import Testimonial from './Components/Testimonial'
import Tour from './pages/Tourpage/Tour'
import Tourlist from './pages/Tourpage/Tourlist'
import SingleTourPage from './pages/Tourpage/SingleTourPage'

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
        <Route path='/tour' element={<Tour/>} />
        <Route path='/singletourpage' element={<SingleTourPage/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/amazingtour' element={<AmazingOffer/>} />
        <Route path='/testimonial' element={<Testimonial/>} />
        <Route path="*" element={<div>NOt Found</div>} />
      </Route>
      <Route />
    </Routes>
  )
}

export default App
