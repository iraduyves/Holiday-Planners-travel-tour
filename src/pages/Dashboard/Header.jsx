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

  let userr=JSON.parse(localStorage.getItem("isLogin"));
  let token =userr?.access_token;
  let userData=userr?.user;
  console.log(userData);

  useLayoutEffect(()=>{
    console.log(userData?.role);
    if(!localStorage?.getItem('isLogin') || userData?.role !=='admin') window.location.href = "/login" 
  })

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

      {/* {loggedUser && */}
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <h2 style={{ fontSize: 'x-large', color: '#9E9EA4',cursor:'pointer' }}> {userData?.email}</h2>
          <div className="img-box-small">
            <img src="https://i.pinimg.com/550x/d3/91/41/d391417c2dc4c794aca41da6080bed7a.jpg" alt="" style={{cursor:'pointer' }}/>
          </div>
        </div>
      {/* } */}
    </header>
  )
}
Header.propTypes = {
  OpenSidebar: PropTypes.func.isRequired,
};

export default Header