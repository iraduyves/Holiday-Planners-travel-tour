import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Input from "../Components/input"
import { faBook, faEnvelope, faLock, faPhone, faUser } from "@fortawesome/free-solid-svg-icons"
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaAngleRight, FaAt, FaEnvelope, FaMapMarkerAlt, FaPhone, FaServicestack } from "react-icons/fa";


const ContactUs = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <>
      <div className="main-banner inner-banner overlay back-image" style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/contact-banner.jpg")', marginTop: '0rem' }}>
        <div className="sec-wp">
          <div className="container">
            <div className="row">
              <div className="colrow12">
                <div className="banner-content">
                  <h1 className="h1-title">CONTACT US</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-contact-sec pb-70">
        <div className="conatiner">
          <div className="row">
            <div className="row-left">
              <div className="left-side">
                {/* <div className="left-side-box"> */}
                  <div className="sign">

                    <form >
                      <div>
                        <Input icon={<><FontAwesomeIcon icon={faUser} className='faicon' /></>} name='name' placeholder='Full Name*' register={register("name", { required: true })} />
                        <Input icon={<><FontAwesomeIcon icon={faEnvelope} className='faicon' /></>} name='email' placeholder='Email*' register={register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                      </div>


                      <div>
                        <Input icon={<><FontAwesomeIcon icon={faPhone} className='faicon' /></>} name='phone' placeholder='phone*' register={register("phone", { required: true })} />
                        <Input icon={<><FontAwesomeIcon icon={faBook} className='faicon' /></>} name='service' placeholder='Service*' register={register("service", { required: true })} />
                        {/* {dataMessage&& <div><p  style={{ color: 'red', fontSize: 'large' }}>{dataMessage}</p></div>} */}
                        {/* {errorMessage && <div><p style={{ color: 'red', fontSize: 'large' }}>{errorMessage}</p></div>} */}
                      </div>
                      <div>
                        <textarea className="form-input" placeholder="Message...." cols="30" rows="4"></textarea>
                      </div>

                      <div>
                        <button className='sec-btn' >send</button>


                      </div>
                    </form>
                  {/* </div> */}
                </div>
              </div>
            </div>
            <div className="row-right">
              <div className="right-side">
                <div className="widget why-book-with-us " >
                  <div className="line-title">
                    <h4 className="h4-title">Why Book With Us?</h4>
                  </div>
                  <ul className="book-with-list">
                    <li><div className="i" ><FaAngleRight /></div>Best Price Guarantee</li>
                    <li><div className="i" ><FaAngleRight /></div>Customer care available 24/7</li>
                    <li><div className="i" ><FaAngleRight /></div>Free Travel Insureance</li>
                    <li><div className="i" ><FaAngleRight /></div> Hand-picked Tours &amp; Activities</li>
                  </ul>
                </div>

                <div className="widget get-a-questions back-image " style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/get-a-questions-back.jpg")' }}>
                  <div className="line-title">
                    <h4 className="h4-title">Get a Question?</h4>
                  </div>
                  <p style={{fontSize:'medium'}}>Do not hesitage to give us a call. We are an expert team and we are happy to talk to you.</p>
                  <ul className="gaq-list-item">
                    <li>
                      
                        <div style={{color:'black',display:'flex',gap:'1rem'}}><FaEnvelope />iradukundayves11@gmail.com</div> 
                     
                    </li>
                    <li>
                      
                        <div style={{color:'black',display:'flex',gap:'1rem'}} ><FaPhone/>  +(250)782045468</div>  
                      
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-contact-map-sec">
        <div className="conatiner">
          <div className="row">
            <div className="colrow5">
              <div className="contact-box-wrap common-sec">
                <div className="contact-box">
                  <div className="line-title">
                    <h4 className="h4-title">India Office</h4>
                  </div>
                  <ul>
                    <li>
                      <div className="a">

                        54, Bumbogo, Kigali.
                      </div>
                    </li>
                    <li>
                      <div className="a">

                        (+250) 782045468
                      </div>
                    </li>
                    <li>
                      <div className="a">

                        iradukundayves11@gmail.com
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="contact-box">
                  <div className="line-title">
                    <h4 className="h4-title">Usa Office</h4>
                  </div>
                  <ul>
                    <li>
                      <div className="a">
                        
                        54, Bumbogo, Kigali.
                      </div>
                    </li>
                    <li>
                      <div className="a">
                        (+250) 782045468
                      </div>
                    </li>
                    <li>
                      <div className="a">
                        iradukundayves11@gmail.com
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="contact-box">
                  <div className="line-title">
                    <h4 className="h4-title">Victoria Office</h4>
                  </div>
                  <ul>
                    <li>
                      <div className="a">
                        54, Bumbogo, Kigali.
                      </div>
                    </li>
                    <li>
                      <div className="a">
                        (+250) 782045468
                      </div>
                    </li>
                    <li>
                      <div className="a">
                        iradukundayves11@gmail.com
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="colrow7">
              <div className="contact-map-box">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214554.14066772402!2d-96.94818381851621!3d32.83443552723513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1f9c41935363%3A0xa2fb29edb2384fae!2sUS%20Tours%20%26%20Travel%20Corp!5e0!3m2!1sen!2sin!4v1629182421020!5m2!1sen!2sin"
                  width="100"
                  height="100"
                  style={{ border: 'none !important' }}
                  allowFullScreen
                  loading="lazy"
                  title="Google Maps"
                >
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default ContactUs