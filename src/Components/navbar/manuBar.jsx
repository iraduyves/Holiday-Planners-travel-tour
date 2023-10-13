import { useMemo } from "react"
import logowhite from '/logo-icon-white.svg'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"

export default function MenuBar() {
    const id = useMemo(() => "nav-input-menu", [])

    return (
        <>
            <input type="checkbox" id={id} className="nav-input" />
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
                                    <li className="active"><span className='a'>Home</span></li>
                                    <li ><span className='a'>About</span></li>
                                    <li className='dropdown-items dropdown-open'>
                                        {/* <FontAwesomeIcon icon={faCircleChevronDown} style={{color: "#c29d59"}} className='faicon' /> */}
                                        <span className='a'>Tour</span>
                                        <ul className='sub-menu'>
                                            <li><span className="a">Tour</span></li>
                                            <li><span className="a">Tour Details</span></li>
                                        </ul>
                                    </li>

                                    <li ><span className='a'>Login</span></li>
                                    <li ><span className='a'>Signup</span></li>
                                    <li ><span className='a'>Contact</span></li>

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
