import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify }
  from 'react-icons/bs'
import './Dashboard.jsx'
import PropTypes from 'prop-types';
import './dashboard.css'
import { useContext, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContent } from '../../context/user.jsx';


function Header({ OpenSidebar }) {
  const navigate = useNavigate()
  const { user } = useContext(UserContent)

  useLayoutEffect(() => {
    console.log({ user })
    if (!localStorage.getItem('access_token') || !user || user.role !== 'admin') navigate('/login')
  }, [navigate, user])

  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        <BsSearch className='icon' />
      </div>
      <div className='header-right'>
      {user &&<p style={{fontSize:'large',color:'red'}}>{user.email}</p>}
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
        <BsPersonCircle className='icon' />
      </div>
    </header>
  )
}
Header.propTypes = {
  OpenSidebar: PropTypes.func.isRequired,
};

export default Header