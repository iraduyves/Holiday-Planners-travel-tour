import { useCallback, useMemo, useRef } from "react"
import logowhite from '/logo-icon-white.svg'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
import { Link } from 'react-router-dom'

export default function MenuBar() {
    const id = useMemo(() => "nav-input-menu", [])
    const menu_input = useRef(null)

    let links = [
        {
            label: "",
            name: "Home"
        },
        {
            label: "tour",
            name: "tour"
        },
        {
            label: "contact",
            name: "contact"
        },
        {
            label: "login",
            name: "Login"
        },
        {
            label: "signup",
            name: "SignUp"
        },
        {
            label: "dashboard",
            name: "Dashboard"
        },
    ]

    const move = useCallback(() => {
        if(!menu_input.current) return
        menu_input.current.checked = false
    }, [])

    return (
        <>
            <input type="checkbox" id={id} className="nav-input" ref={menu_input} />
            <label htmlFor={id} className="menu-bar navigation-btn" id='menu-btn'>
                <span className="first"></span>
                <span className="second"></span>
                <span className="third"></span>
            </label>
            <div className="full-menu">
                <div className="logo-icon"><img src={logowhite} alt="whitelogo version" /></div>
                <div className="containner">
                    <div className="full-menu-logo-row">
                        <div className="row">
                            <div className="row-left">
                                <div className="site-branding">
                                    <img src={logowhite} alt="" className='aimg' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row-left5">
                            <div className="menu-container">
                                <ul>

                                    {
                                        links.map((item, index) => {
                                            return (
                                                <Link to={`/${item.label}`} key={index} onClick={move}>
                                                    <li ><span className='a'>{item.name}</span></li>
                                                </Link>
                                            )
                                        })
                                    }

                                    {/* <Link  to="/about">
                                         <li ><span className='a'>About</span></li>
                                    </Link> */}

                                    {/* <li className='dropdown-items dropdown-open'>
                                        <span className='a'>Tour</span>
                                        <ul className='sub-menu'>
                                        <Link to="/tour"> <li><span className="a">Tour</span></li></Link>
                                            <li><span className="a">Tour Details</span></li>
                                        </ul>
                                    </li>
                                    <Link to="/login">
                                         <li ><span className='a'>Login</span></li>
                                    </Link>
                                    <Link  to="/signup">
                                         <li ><span className='a'>Signup</span></li>
                                    </Link>
                                    <Link  to="/contact">
                                         <li ><span className='a'>Contact</span></li>
                                    </Link> */}

                                </ul>
                            </div>
                        </div>
                        <div className="row-right5">
                            <div className="full-menu-social">
                                <ul>
                                    <li ><div className="a"><FaFacebookF /></div></li>
                                    <li ><div className="a"><FaInstagram /></div></li>
                                    <li ><div className="a"><FaTwitter /></div></li>
                                    <li ><div className="a"><FaFacebookF /></div></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
