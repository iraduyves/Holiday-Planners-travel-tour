import { Outlet, Route, Routes } from 'react-router-dom'
import '../src/App.css'
import Navbar from './Components/navbar/Navbar'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Footer from './Components/Footer'

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
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="*" element={<div>NOt Found</div>} />
      </Route>
      <Route />
    </Routes>
  )
}

export default App
