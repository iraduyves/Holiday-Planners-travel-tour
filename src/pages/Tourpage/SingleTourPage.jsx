import { FaAngleRight, FaBookOpen, FaCalendar, FaCameraRetro, FaCheck, FaClock, FaEnvelope, FaInfoCircle, FaMapMarker, FaPhone, FaSun, FaTimes, FaUser, FaUserFriends, FaUserPlus, FaUserTag } from 'react-icons/fa'
import '../../Components/navbar/navbar.css'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import PropTypes from 'prop-types';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { TourContent } from '../../context/Tour';


// import { useParams } from 'react-router-dom';



const SingleTourPage = () => {
    const { Tour, setTour } = useContext(TourContent)
    //    console.log({tourlist});
    const { name } = useParams();
    console.log(Tour,name);
    // const tour = tourlist[name];
    const single = Tour.find((item) => item._id  == name);
    // console.log(single);
    if (!single) {
        return <div>Sorry, this tour does not exist.</div>;
    }
return (
        <>
            <div className="main-banner inner-banner overlay back-image" style={{ backgroundImage: `url("${single.backdropImage}")` }}>
                <div className="sec-wp">
                    <div className="container">
                        <div className="row">
                            <div className="colrow12">
                                <div className="banner-content">
                                    <h1 className="h1-title">{single.Title  }</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-tour-detail pb-70">
                <div className="container">
                    <div className="row">
                        <div className="row-left">
                            <div className="left-side">
                                <div className="tour-detail-tabbing">
                                    <ul className="nav nav-tabs">
                                        <li className="nav-item">
                                            <div className="a">
                                                <div className="i"><FaInfoCircle />Information</div>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <div className="a">
                                                <div className="i"><FaBookOpen /> Tour Plan</div>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <div className="a">
                                                <div className="i"><FaMapMarker />Location</div>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <div className="a">
                                                <div className="i"><FaCameraRetro />Gallery</div>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <div className="a">
                                                <div className="i"><FaUser />Review</div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane show" style={{ display: 'block', transition: ' opacity .15s linear' }}>
                                            <div className="tab-box-information-tab-box">
                                                <span className="dicount-label">15%</span>
                                                <div className="row">
                                                    <div className="colx" style={{ flex: '0 0 75%', maxwidth: '75%' }}>
                                                        <div className="tour-title">
                                                            <h2 className="h2-title">A wonderful serenity has taken possesion of myy entire soul</h2>
                                                        </div>
                                                    </div>
                                                    <div className="cox1" style={{ flex: '0 0 25%', maxwidth: '25%' }}>
                                                        <div className="tour-price-wp">
                                                            <div className="tour-price">
                                                                <h3 className="h3-title">$1200</h3>
                                                                <p style={{ color: 'black' }}>Per person</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tour-short-info-box">
                                                    <ul >
                                                        <li>
                                                            <div className="i"><FaClock /></div>
                                                            <span className="text">{single.fromMonth}</span>
                                                        </li>
                                                        <li>
                                                            <div className="i"><FaUserFriends /></div>
                                                            <span className="text">{single.Groupsize}</span>
                                                        </li>
                                                        <li>
                                                            <div className="i"><FaMapMarker /></div>
                                                            <span className="text">{single.destination}</span>
                                                        </li>
                                                        <li>
                                                            <div className="i"><FaSun /></div>
                                                            <span className="text">Discovery</span>
                                                        </li>

                                                    </ul>
                                                </div>
                                                <div className="tour-description">
                                                    <p style={{ color: '#2B2B2B' }}> {single.description}</p>
                                                    <p style={{ color: '#2B2B2B' }}> I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian
                                                        sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as
                                                        I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and
                                                        flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath</p>
                                                </div>
                                                <div className="tour-video " style={{ marginTop: '40px' }}>
                                                    <video controls loop muted autoPlay>
                                                        <source src={"https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/SfgTbYmNJXjhkhi5b7/videoblocks-aerial-view-of-the-koolau-mountains-windward-oahu-hawaii_bduy5kpwd__e2189811e1a8073cef0a7662e255242c__P360.mp4"} type="video/mp4" />
                                                    </video>
                                                    <a href="javascript:void(0);" title="Play Video" className="play-btn"></a>
                                                </div>
                                                <div className="tour-timetable-schedule " style={{ marginTop: '40px', marginBottom: '40px' }}>
                                                    <ul>
                                                        <li>
                                                            <div className="tts-label">
                                                                <h4 className="h4-title">Destination</h4>
                                                            </div>
                                                            <div className="tts-description">
                                                                <div className="a">{single.destination}</div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="tts-label">
                                                                <h4 className="h4-title">Departure</h4>
                                                            </div>
                                                            <div className="tts-description">
                                                                Lorem Ipsum
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="tts-label">
                                                                <h4 className="h4-title">Departure Time</h4>
                                                            </div>
                                                            <div className="tts-description">
                                                                9:15 AM To 9:30 AM.
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="tts-label">
                                                                <h4 className="h4-title">Return Time</h4>
                                                            </div>
                                                            <div className="tts-description">
                                                                Approximately 10:30 PM.
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="tts-label">
                                                                <h4 className="h4-title">Dress Code</h4>
                                                            </div>
                                                            <div className="tts-description">
                                                                comfortable clothing and light jacket.
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="tts-label">
                                                                <h4 className="h4-title">Price Included</h4>
                                                            </div>
                                                            <div className="tts-description">
                                                                <ul className="included">

                                                                    <li><FaCheck />5 Star Accommodation</li>
                                                                    <li><FaCheck />Air fases</li>
                                                                    <li><FaCheck />3 Nights Hotel Accomodation</li>
                                                                    <li><FaCheck />All transportation in destination location</li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="tts-label">
                                                                <h4 className="h4-title">Price Not Included</h4>
                                                            </div>
                                                            <div className="tts-description">
                                                                <ul className="not-included">

                                                                    <li><FaTimes />Guide Service Fee</li>
                                                                    <li><FaTimes />Any Private Expenses</li>
                                                                    <li><FaTimes />Room Service Fees</li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="row no-gutters tour-gallery-slider slick-initialized slick-slider">
                                                    <button className="slide-arrow prev-arrow slick-arrow" ><span>Prev</span></button>
                                                    <Swiper
                                                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                                        spaceBetween={50}
                                                        slidesPerView={3}
                                                        navigation
                                                        pagination={{ clickable: true }}
                                                        scrollbar={{ draggable: true }}
                                                        loop={true}
                                                        autoplay={{ delay: 1000 }}
                                                        onSwiper={(swiper) => console.log(swiper)}
                                                        style={{
                                                            "--swiper-pagination-color": "white",
                                                            "--swiper-scrollbar-color": "white",
                                                            "--swiper-navigation-color": "white",
                                                            "--swiper-pagination-bullet-inactive-color": "white",
                                                            "--swiper-pagination-bullet-inactive-opacity": "1",
                                                            "--swiper-pagination-bullet-size": "0px",
                                                            "--swiper-pagination-bullet-horizontal-gap": "000px",
                                                            "--swiper-pagination-bullet-margin-left": "0rem",
                                                            "--swiper-pagination-bullet-margin-right": "0rem"
                                                        }}
                                                    >
                                                        <div className="slick-list ">
                                                            <div className="slick-track" >
                                                                <SwiperSlide>
                                                                    <div className="col-lg-4 p-0 slick-slide slick-cloned"  >
                                                                        <div className="tour-gallery-slide-image back-image" style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/tour-gallery-slide-image1.jpg")' }}></div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="col-lg-4 p-0 slick-slide slick-cloned" >
                                                                        <div className="tour-gallery-slide-image back-image" style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/tour-gallery-slide-image2.jpg")' }} ></div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="col-lg-4 p-0 slick-slide" >
                                                                        <div className="tour-gallery-slide-image back-image" style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/tour-gallery-slide-image3.jpg")' }}></div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="col-lg-4 p-0 slick-slide" >
                                                                        <div className="tour-gallery-slide-image back-image" style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/tour-gallery-slide-image4.jpg")' }}></div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="col-lg-4 p-0 slick-slide" >
                                                                        <div className="tour-gallery-slide-image back-image" style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/tour-gallery-slide-image1.jpg")' }}></div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="col-lg-4 p-0 slick-slide slick-current slick-active" >
                                                                        <div className="tour-gallery-slide-image back-image" style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/tour-gallery-slide-image2.jpg")' }} ></div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="col-lg-4 p-0 slick-slide slick-cloned slick-active" >
                                                                        <div className="tour-gallery-slide-image back-image" style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/tour-gallery-slide-image3.jpg")' }}></div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="col-lg-4 p-0 slick-slide slick-cloned slick-active" >
                                                                        <div className="tour-gallery-slide-image back-image" style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/tour-gallery-slide-image4.jpg")' }}></div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="col-lg-4 p-0 slick-slide slick-cloned" >
                                                                        <div className="tour-gallery-slide-image back-image" style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/tour-gallery-slide-image1.jpg")' }}></div>
                                                                    </div>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <div className="col-lg-4 p-0 slick-slide slick-cloned" >
                                                                        <div className="tour-gallery-slide-image back-image" style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/tour-gallery-slide-image2.jpg")' }} ></div>
                                                                    </div>
                                                                </SwiperSlide>
                                                            </div>
                                                        </div>
                                                    </Swiper>
                                                </div>
                                                <button className="slide-arrow next-arrow slick-arrow" ><span>Next</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="row-right">
                            <div className="right-side">
                                <div className="widget " >
                                    <div className="line-title">
                                        <h4 className="h4-title">Book This Tour</h4>
                                    </div>
                                    <div className="find-tour-form">
                                        <form>
                                            <div className="row">
                                                <div className="colrow12">
                                                    <span className="form-control-span">
                                                        <span className="icon"><div className="i"><FaUser /></div></span>
                                                        <input type="text" placeholder="Full Name *" className="form-input" required />
                                                    </span>
                                                </div>
                                                <div className="colrow12">
                                                    <span className="form-control-span">
                                                        <span className="icon"><div className="i"><FaEnvelope /></div></span>
                                                        <input type="email" placeholder="Email *" className="form-input" required />
                                                    </span>
                                                </div>
                                                <div className="colrwo12">
                                                    <span className="form-control-span">
                                                        <span className="icon"><div className="i"><FaEnvelope /></div></span>
                                                        <input type="email" placeholder="Confirm Email *" className="form-input" required />
                                                    </span>
                                                </div>
                                                <div className="colrow12">
                                                    <span className="form-control-span">
                                                        <span className="icon"><div className="i"><FaPhone /></div></span>
                                                        <input type="text" placeholder="Phone *" className="form-input" required />
                                                    </span>
                                                </div>
                                                <div className="colrow12">
                                                    <span className="form-control-span">
                                                        <span className="icon"><div className="i"><FaCalendar /></div></span>
                                                        <input type="date" className="form-input" required />
                                                    </span>
                                                </div>
                                                <div className="colrow12">
                                                    <span className="form-control-span">
                                                        <span className="icon"><div className="i"><FaUserTag /></div></span>
                                                        <input type="number" className="form-input" placeholder="Numbers Of Tickets" />
                                                    </span>
                                                </div>
                                                <div className="colrow12">
                                                    <span className="form-control-span">
                                                        <textarea className="form-input" placeholder="Message" cols="30" rows="10"></textarea>
                                                    </span>
                                                </div>
                                                <div className="colrow12">
                                                    <div className="checkbox-item">
                                                        <input type="checkbox" id="check-availability" name="check-availability" value="check-availability" />
                                                        <label htmlFor="check-availability" className="check-box-label">Check Availability</label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <button className="sec-btn find-now-btn"><span>Book Now</span></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="widget why-book-with-us">
                                    <div className="line-title">
                                        <h4 className="h4-title">Why Book With Us?</h4>
                                    </div>
                                    <ul className="book-with-list">
                                        <li><div className="i"><FaAngleRight /></div>Best Price Guarantee</li>
                                        <li><div className="i"><FaAngleRight /></div>Customer care available 24/7</li>
                                        <li><div className="i"><FaAngleRight /></div>Free Travel Insureance</li>
                                        <li><div className="i"><FaAngleRight /></div>Hand-picked Tours &amp; Activities</li>
                                    </ul>
                                </div>
                                <div className="widget get-a-questions back-image " style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/get-a-questions-back.jpg")' }}>
                                    <div className="line-title">
                                        <h4 className="h4-title">Get a Question?</h4>
                                    </div>
                                    <p>Do not hesitage to give us a call. We are an expert team and we are happy to talk to you.</p>
                                    <ul className="gaq-list-item">
                                        <li>
                                            <div className="a"><div className="i"><FaEnvelope />iradukundayves11@gmail.com</div></div>
                                        </li>
                                        <li>
                                            <div className="a"><div className="i"><FaPhone />(+250) 782045468</div></div>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default SingleTourPage
lmnnmdsssssssssss
