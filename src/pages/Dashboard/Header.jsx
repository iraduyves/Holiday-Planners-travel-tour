import { BsFillBellFill, BsFillEnvelopeFill,  BsSearch, BsJustify }
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
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
        {/* <BsPersonCircle className='icon' /> */}
      </div>

      {user &&
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <h2 style={{ fontSize: 'x-large', color: '#9E9EA4',cursor:'pointer' }}>{user.email}</h2>
          <div className="img-box-small">
            <img src="https://i.pinimg.com/550x/d3/91/41/d391417c2dc4c794aca41da6080bed7a.jpg" alt="" style={{cursor:'pointer' }}/>
          </div>
        </div>
      }
    </header>
  )
}
Header.propTypes = {
  OpenSidebar: PropTypes.func.isRequired,
};

export default Header