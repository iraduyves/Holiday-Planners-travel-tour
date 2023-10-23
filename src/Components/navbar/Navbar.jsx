import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCallback, useContext, useEffect, useState } from 'react'
import logo from '/logo.png'
import logowhite from '/logo-icon-white.svg'
import '../navbar/navbar.css'
import {  faCircleXmark, faEnvelope, faMagnifyingGlass, faPhone } from '@fortawesome/free-solid-svg-icons'

import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import MenuBar from './manuBar'
import { UserContent } from '../../context/user'

const Navbar = () => {
    const logout = (e) => {
        e.preventDefault()
        localStorage.removeItem('access_token')
        window.location.assign('/login')
    }
    const { user } = useContext(UserContent)

    const [isStatic, setIsStatic] = useState(false)

    const scrolled = useCallback(() => {
        setIsStatic(window.scrollY > 130)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', scrolled)
    })

    return (
        <header className={`site-header ${!isStatic ? 'static-header' : ''}`}>
            <div className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="row-left">
                            <ul className="contact-list-item">

                                <li className="li-item">
                                    <span className='faicon'><FontAwesomeIcon icon={faEnvelope} className='faicon' /></span>
                                    <span className=''> iradukundayves11@gmail.com</span>
                                </li>
                                <li className="li-item">
                                    <span className='faicon'><FontAwesomeIcon icon={faPhone} className='faicon' /></span>
                                    <span className=''> (+250) 782045468</span>
                                </li>
                            </ul>

                        </div>
                        <div className="row-right">
                            <ul className="header-social">
                                <li>

                                    <span ><FaFacebookF className='faicon' /></span>

                                </li>
                                <li>
                                    <span><FaInstagram className='faicon' /></span>
                                </li>
                                <li>
                                    <span><FaTwitter className='faicon' /></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-header">
                <div className="bottom-header-inner">
                    <div className="row">
                        <div className="row-left">
                            <div className="site-branding">
                                <img src={logo} alt="site branding" className='aimg' />
                            </div>
                        </div>
                        <div className="row-right">
                            <div className="header-menu-side">
                                <div className="header-reserve-btn for-des">
                                    <button className="sec-btn"><span>Reserve</span> </button>
                                </div>
                                <div className="search-wp">
                                    <div className="search-icon">
                                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ arialhidden: 'true' }} className='' id='search' />
                                        <FontAwesomeIcon icon={faCircleXmark} style={{ arialhidden: 'true' }} className='faicon' id='times' />
                                    </div>
                                    <div className="search-overlay">
                                        <div className="search-overlay-inner">
                                            <div className="logo-icon"><img src={logowhite} alt="logoWhite" /></div>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="rowsearch">
                                                        <div className="search-inner-box">
                                                            <form action="">
                                                                <span className="form-control-span search-wrap">
                                                                    <input type="text" className="form-input" placeholder='Search....' />
                                                                    <button type='submit' className="sm-btn">
                                                                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ arialhidden: 'true' }} className='faicon' id='search' />
                                                                    </button>
                                                                </span>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  
                                </div>
                                <div className="main-navigation">
                                    <MenuBar />


                                </div>
                                <div className="row-right">
                                  {user&&   <p style={{fontSize:'large',color:'#C29D59'}} className=''>{user.email}</p>}
                                  <button  className="sec-btn2" style={{fontSize:'small'}} onClick={logout}>logout</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
h

