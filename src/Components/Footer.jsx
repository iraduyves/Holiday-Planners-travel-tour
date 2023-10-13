import React from 'react'
import logowhite  from '/logo-icon-white.svg'
import './navbar/navbar.css'
import footerback from '/footer-back.jpg'
import { FaFacebookF} from 'react-icons/fa';
import { FaInstagram} from 'react-icons/fa';
import { FaTwitter} from 'react-icons/fa';

const Footer = () => {
  return (
    // 
    <div className="site-footer back-image overlay"style={{backgroundImage:'url("https://html.geekcodelab.com/holiday-planners/assets/images/footer-back.jpg")'}} >
        <div className="sec-wp">
            <div className="container">
                <div className="top-footer common-sec">
                    <div className="row">
                        <div className="row-left">
                            <div className="footer-logo" style={{marginBottom:'30px', animationduration: '1s', animationdelay: '0.1s', animationname: 'none'}}>
                                <div className="a"><img src={"https://html.geekcodelab.com/holiday-planners/assets/images/white-logo.png"} alt="my alt" /></div>
                            </div>
                            <div className="footer-text">
                                 <p><b>Holiday Planners</b> sit amet consectetur adipisicing elit. Perferendis sapiente tenetur officiis explicabo fugit, sit mollitia eum atque excepturi quaerat autem.</p>
                            </div>
                            <div className="newsletter-form">
                                <form >
                                    <span className="form-control-span email-wrap">
                                        <input type="text" className="form-input" placeholder='Enter your Email' required/>
                                        <button className="sec-btn sm-btn"><span>Submit</span></button>
                                    </span>
                                </form>
                            </div>
                            <div className="payment-campanies-logo">
                                   <img src={"https://html.geekcodelab.com/holiday-planners/assets/images/payment-companies-logo.png"} alt="payment-companies-logo"/>   
                            </div>
                        </div>
                        <div className="row-right row-right5">
                            <div className="footer-nav-wap">
                                <div className="footer-title">
                                    <div className="h3-title">Navigation</div>
                                </div>
                                <div className="footer-menu">
                                    <ul>
                                        <li><span className='a'>Home</span></li>
                                        <li><span className='a'>Home</span></li>
                                        <li><span className='a'>Home</span></li>
                                        <li><span className='a'>Home</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row-rigt row-rigth5">
                            <div className="footer-contact-wp">
                                <div className="footer-title">
                                    <div className="h3-title">
                                         Need Help
                                
                                </div>
                                <div className="footer-contact">
                                    <ul>
                                        <li>
                                           <span className="contact-label">Call US</span>
                                          <div className="a">+250 782045468</div>
                                        </li>
                                        <li>
                                           <span className="contact-label">Email US</span>
                                          <div className="a">iradukundayves@gmail.com</div>
                                        </li>
                                        <li className='social-icons'>
                                           <span className="contact-label">Follow Us</span>
                                          <div className="a">+250 782045468</div>
                                          <ul>
                                             <li ><div className="a"><FaFacebookF /></div></li>
                                             <li ><div className="a"><FaInstagram /></div></li>
                                             <li ><div className="a"><FaTwitter /></div></li>
                                             <li ><div className="a"><FaFacebookF /></div></li>
                                          </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </div>
    
  
  )
}

export default Footer