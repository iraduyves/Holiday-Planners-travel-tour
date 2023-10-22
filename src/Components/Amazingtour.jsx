
import '@react-icons/all-files'
import { FaClock } from '@react-icons/all-files/fa/FaClock';
import { FaUserFriends } from '@react-icons/all-files/fa/FaUserFriends'
import './navbar/navbar.css'


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Testimonial from './Testimonial';
import Instagram from './Instagram';

const Amazingtour = () => {
    return (
            <>
                <div className="main-tour bg-f6 back-image" style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/wave-design.jpg")',marginBottom:'0' }}>
                    <div className="tour-services">
                        <div className="container">
                            <div className="tour-services-row">
                                <div className="row">
                                    <div className="row-right">
                                        <div className="tour-service-box">
                                            <div className="tour-service-icon">
                                                <img src={"https://html.geekcodelab.com/holiday-planners/assets/images/tour-service-icon1.svg"} alt="" />
                                            </div>
                                            <div className="tour-service-content">
                                                <h4 className="h4-title">700+ DESTINATION</h4>
                                                <p>Far far awy, behind the world mountains, far countries Vokalia</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row-right">
                                        <div className="tour-service-box">
                                            <div className="tour-service-icon">
                                                <img src={"https://html.geekcodelab.com/holiday-planners/assets/images/tour-service-icon2.svg"} alt="" />
                                            </div>
                                            <div className="tour-service-content">
                                                <h4 className="h4-title">BEST PRICE GUARANT</h4>
                                                <p>Far far awy, behind the world mountains, far countries Vokalia</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row-right">
                                        <div className="tour-service-box">
                                            <div className="tour-service-icon">
                                                <img src={"https://html.geekcodelab.com/holiday-planners/assets/images/tour-service-icon3.svg"} alt="" />
                                            </div>
                                            <div className="tour-service-content">
                                                <h4 className="h4-title">TOP NOTCH SUPPORT</h4>
                                                <p>Far far awy, behind the world mountains, far countries Vokalia</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tour-sec pt-70">
                        <div className="container">
                            <div className="row">
                                <div className="colright6">
                                    <div className="sec-title">
                                        <div className="line-title">
                                            <h4 className="h4-title">Amazing Tours</h4>
                                        </div>
                                        <h2 className="h2-title">
                                            Trending

                                            <span>Best selling Tours</span>

                                            And Fun Destination
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* <button className=".tour-slider slider-arrow prev-arrow">
                                <span>Prev</span>
                            </button> */}
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                    spaceBetween={50}
                                    // slidesPerView={3}
                                    navigation
                                    breakpoints={{
                                        0: {
                                          slidesPerView: 1,
                                        },
                                        700: {
                                          slidesPerView:2,
                                        },
                                  
                                      }}
                                    pagination={{ clickable: true }}
                                    // scrollbar={{ draggable: true }}
                                    loop={true}
                                    autoplay={{ delay: 2000 }}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    style={{
                                        "--swiper-pagination-color": "#C29D59",
                                        "--swiper-scrollbar-color": "#C29D59",
                                        "--swiper-navigation-color": "#C29D59",
                                        "--swiper-pagination-bullet-inactive-color": "RGB(175, 179, 175)",
                                        "--swiper-pagination-bullet-inactive-opacity": "1",

                                    }}
                                >

                                    <div className="slick-list">
                                        <div className="slick-track">
                                            <SwiperSlide>
                                                <div className=" slick-slide slick-cloned">
                                                    <div className="tour-box">
                                                        <div className="tour-box-image back-image" style={{ bac: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image2.jpg")' }}>
                                                            <span>15
                                                                $</span>
                                                        </div>
                                                        <div className="tour-box-content">
                                                            <div className="tour-box-label">
                                                                <div className="tour-box-inner-label">
                                                                    <h4 className="h4-title">Greece</h4>
                                                                </div>
                                                            </div>

                                                            <div className="tour-box-description">
                                                                <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                                                            </div>
                                                            <div className="tour-info-box">
                                                                <div className="row">
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaClock />
                                                                            </div>
                                                                            <div className="tour-box-title">
                                                                                <h4 className="h4-title">Holiday Planners is a World Leading Online Tour Booking Platform</h4>
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Duration</h5>
                                                                                <p>6 days 3 hours</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaUserFriends />
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Group Size</h5>
                                                                                <p>15+ people</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-bottom">
                                                                <div className="tour-price">
                                                                    <h3 className="h3-title">$2500</h3>
                                                                </div>
                                                                <div className="book-now-button">
                                                                    <div className="a">
                                                                        <span className="sec-btn">Book Now</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className=" slick-slide slick-cloned">
                                                    <div className="tour-box">
                                                        <div className="tour-box-image back-image" style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image2.jpg")' }}>
                                                            <span>15$</span>
                                                        </div>
                                                        <div className="tour-box-content">
                                                            <div className="tour-box-label">
                                                                <div className="tour-box-inner-label">
                                                                    <h4 className="h4-title">Greece</h4>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-title">
                                                                <h4 className="h4-title">Holiday Planners is a World Leading Online Tour Booking Platform</h4>
                                                            </div>

                                                            <div className="tour-box-description">
                                                                <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                                                            </div>
                                                            <div className="tour-info-box">
                                                                <div className="row">
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaClock />
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Duration</h5>
                                                                                <p>6 days 3 hours</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaUserFriends />
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Group Size</h5>
                                                                                <p>15+ people</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-bottom">
                                                                <div className="tour-price">
                                                                    <h3 className="h3-title">$2500</h3>
                                                                </div>
                                                                <div className="book-now-button">
                                                                    <div className="a">
                                                                        <span className="sec-btn">Book Now</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className=" slick-slide slick-cloned">
                                                    <div className="tour-box">
                                                        <div className="tour-box-image back-image" style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image2.jpg")' }}>
                                                            <span>15$</span>
                                                        </div>
                                                        <div className="tour-box-content">
                                                            <div className="tour-box-label">
                                                                <div className="tour-box-inner-label">
                                                                    <h4 className="h4-title">Greece</h4>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-title">
                                                                <h4 className="h4-title">Holiday Planners is a World Leading Online Tour Booking Platform</h4>
                                                            </div>

                                                            <div className="tour-box-description">
                                                                <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                                                            </div>
                                                            <div className="tour-info-box">
                                                                <div className="row">
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaClock />
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Duration</h5>
                                                                                <p>6 days 3 hours</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaUserFriends />
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Group Size</h5>
                                                                                <p>15+ people</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-bottom">
                                                                <div className="tour-price">
                                                                    <h3 className="h3-title">$2500</h3>
                                                                </div>
                                                                <div className="book-now-button">
                                                                    <div className="a">
                                                                        <span className="sec-btn">Book Now</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className=" slick-slide slick-cloned">
                                                    <div className="tour-box">
                                                        <div className="tour-box-image back-image" style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image2.jpg")' }}>
                                                            <span>15$</span>
                                                        </div>
                                                        <div className="tour-box-content">
                                                            <div className="tour-box-label">
                                                                <div className="tour-box-inner-label">
                                                                    <h4 className="h4-title">Greece</h4>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-title">
                                                                <h4 className="h4-title">Holiday Planners is a World Leading Online Tour Booking Platform</h4>
                                                            </div>

                                                            <div className="tour-box-description">
                                                                <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                                                            </div>
                                                            <div className="tour-info-box">
                                                                <div className="row">
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaClock />
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Duration</h5>
                                                                                <p>6 days 3 hours</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaUserFriends />
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Group Size</h5>
                                                                                <p>15+ people</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-bottom">
                                                                <div className="tour-price">
                                                                    <h3 className="h3-title">$2500</h3>
                                                                </div>
                                                                <div className="book-now-button">
                                                                    <div className="a">
                                                                        <span className="sec-btn">Book Now</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className=" slick-slide slick-cloned">
                                                    <div className="tour-box">
                                                        <div className="tour-box-image back-image" style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image2.jpg")' }}>
                                                            <span>15$</span>
                                                        </div>
                                                        <div className="tour-box-content">
                                                            <div className="tour-box-label">
                                                                <div className="tour-box-inner-label">
                                                                    <h4 className="h4-title">Greece</h4>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-title">
                                                                <h4 className="h4-title">Holiday Planners is a World Leading Online Tour Booking Platform</h4>
                                                            </div>

                                                            <div className="tour-box-description">
                                                                <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                                                            </div>
                                                            <div className="tour-info-box">
                                                                <div className="row">
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaClock />
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Duration</h5>
                                                                                <p>6 days 3 hours</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaUserFriends />
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Group Size</h5>
                                                                                <p>15+ people</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-bottom">
                                                                <div className="tour-price">
                                                                    <h3 className="h3-title">$2500</h3>
                                                                </div>
                                                                <div className="book-now-button">
                                                                    <div className="a">
                                                                        <span className="sec-btn">Book Now</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className=" slick-slide slick-cloned">
                                                    <div className="tour-box">
                                                        <div className="tour-box-image back-image" style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image2.jpg")' }}>
                                                            <span>15$</span>
                                                        </div>
                                                        <div className="tour-box-content">
                                                            <div className="tour-box-label">
                                                                <div className="tour-box-inner-label">
                                                                    <h4 className="h4-title">Greece</h4>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-title">
                                                                <h4 className="h4-title">Holiday Planners is a World Leading Online Tour Booking Platform</h4>
                                                            </div>

                                                            <div className="tour-box-description">
                                                                <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                                                            </div>
                                                            <div className="tour-info-box">
                                                                <div className="row">
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaClock />
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Duration</h5>
                                                                                <p>6 days 3 hours</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaUserFriends />
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Group Size</h5>
                                                                                <p>15+ people</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-bottom">
                                                                <div className="tour-price">
                                                                    <h3 className="h3-title">$2500</h3>
                                                                </div>
                                                                <div className="book-now-button">
                                                                    <div className="a">
                                                                        <span className="sec-btn">Book Now</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className=" slick-slide slick-cloned">
                                                    <div className="tour-box">
                                                        <div className="tour-box-image back-image" style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image2.jpg")' }}>
                                                            <span>15$</span>
                                                        </div>
                                                        <div className="tour-box-content">
                                                            <div className="tour-box-label">
                                                                <div className="tour-box-inner-label">
                                                                    <h4 className="h4-title">Greece</h4>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-title">
                                                                <h4 className="h4-title">Holiday Planners is a World Leading Online Tour Booking Platform</h4>
                                                            </div>

                                                            <div className="tour-box-description">
                                                                <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                                                            </div>
                                                            <div className="tour-info-box">
                                                                <div className="row">
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaClock />
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Duration</h5>
                                                                                <p>6 days 3 hours</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaUserFriends />
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Group Size</h5>
                                                                                <p>15+ people</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-bottom">
                                                                <div className="tour-price">
                                                                    <h3 className="h3-title">$2500</h3>
                                                                </div>
                                                                <div className="book-now-button">
                                                                    <div className="a">
                                                                        <span className="sec-btn">Book Now</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className=" slick-slide slick-cloned">
                                                    <div className="tour-box">
                                                        <div className="tour-box-image back-image" style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image2.jpg")' }}>
                                                            <span>15$</span>
                                                        </div>
                                                        <div className="tour-box-content">
                                                            <div className="tour-box-label">
                                                                <div className="tour-box-inner-label">
                                                                    <h4 className="h4-title">Greece</h4>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-title">
                                                                <h4 className="h4-title">Holiday Planners is a World Leading Online Tour Booking Platform</h4>
                                                            </div>

                                                            <div className="tour-box-description">
                                                                <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                                                            </div>
                                                            <div className="tour-info-box">
                                                                <div className="row">
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaClock />
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Duration</h5>
                                                                                <p>6 days 3 hours</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaUserFriends />
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Group Size</h5>
                                                                                <p>15+ people</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-bottom">
                                                                <div className="tour-price">
                                                                    <h3 className="h3-title">$2500</h3>
                                                                </div>
                                                                <div className="book-now-button">
                                                                    <div className="a">
                                                                        <span className="sec-btn">Book Now</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className=" slick-slide slick-cloned">
                                                    <div className="tour-box">
                                                        <div className="tour-box-image back-image" style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image2.jpg")' }}>
                                                            <span>15$</span>
                                                        </div>
                                                        <div className="tour-box-content">
                                                            <div className="tour-box-label">
                                                                <div className="tour-box-inner-label">
                                                                    <h4 className="h4-title">Greece</h4>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-title">
                                                                <h4 className="h4-title">Holiday Planners is a World Leading Online Tour Booking Platform</h4>
                                                            </div>

                                                            <div className="tour-box-description">
                                                                <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                                                            </div>
                                                            <div className="tour-info-box">
                                                                <div className="row">
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaClock />
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Duration</h5>
                                                                                <p>6 days 3 hours</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaUserFriends />
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Group Size</h5>
                                                                                <p>15+ people</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-bottom">
                                                                <div className="tour-price">
                                                                    <h3 className="h3-title">$2500</h3>
                                                                </div>
                                                                <div className="book-now-button">
                                                                    <div className="a">
                                                                        <span className="sec-btn">Book Now</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className=" slick-slide slick-cloned">
                                                    <div className="tour-box">
                                                        <div className="tour-box-image back-image" style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image2.jpg")' }}>
                                                            <span>15$</span>
                                                        </div>
                                                        <div className="tour-box-content">
                                                            <div className="tour-box-label">
                                                                <div className="tour-box-inner-label">
                                                                    <h4 className="h4-title">Greece</h4>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-title">
                                                                <h4 className="h4-title">Holiday Planners is a World Leading Online Tour Booking Platform</h4>
                                                            </div>

                                                            <div className="tour-box-description">
                                                                <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                                                            </div>
                                                            <div className="tour-info-box">
                                                                <div className="row">
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaClock />
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Duration</h5>
                                                                                <p>6 days 3 hours</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaUserFriends />
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Group Size</h5>
                                                                                <p>15+ people</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-bottom">
                                                                <div className="tour-price">
                                                                    <h3 className="h3-title">$2500</h3>
                                                                </div>
                                                                <div className="book-now-button">
                                                                    <div className="a">
                                                                        <span className="sec-btn">Book Now</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className=" slick-slide slick-cloned">
                                                    <div className="tour-box">
                                                        <div className="tour-box-image back-image" style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image2.jpg")' }}>
                                                            <span>15$</span>
                                                        </div>
                                                        <div className="tour-box-content">
                                                            <div className="tour-box-label">
                                                                <div className="tour-box-inner-label">
                                                                    <h4 className="h4-title">Greece</h4>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-title">
                                                                <h4 className="h4-title">Holiday Planners is a World Leading Online Tour Booking Platform</h4>
                                                            </div>

                                                            <div className="tour-box-description">
                                                                <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                                                            </div>
                                                            <div className="tour-info-box">
                                                                <div className="row">
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaClock />
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Duration</h5>
                                                                                <p>6 days 3 hours</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaUserFriends />
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Group Size</h5>
                                                                                <p>15+ people</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-bottom">
                                                                <div className="tour-price">
                                                                    <h3 className="h3-title">$2500</h3>
                                                                </div>
                                                                <div className="book-now-button">
                                                                    <div className="a">
                                                                        <span className="sec-btn">Book Now</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className=" slick-slide slick-cloned">
                                                    <div className="tour-box">
                                                        <div className="tour-box-image back-image" style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image2.jpg")' }}>
                                                            <span>15$</span>
                                                        </div>
                                                        <div className="tour-box-content">
                                                            <div className="tour-box-label">
                                                                <div className="tour-box-inner-label">
                                                                    <h4 className="h4-title">Greece</h4>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-title">
                                                                <h4 className="h4-title">Holiday Planners is a World Leading Online Tour Booking Platform</h4>
                                                            </div>

                                                            <div className="tour-box-description">
                                                                <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                                                            </div>
                                                            <div className="tour-info-box">
                                                                <div className="row">
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaClock />
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Duration</h5>
                                                                                <p>6 days 3 hours</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaUserFriends />
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Group Size</h5>
                                                                                <p>15+ people</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-bottom">
                                                                <div className="tour-price">
                                                                    <h3 className="h3-title">$2500</h3>
                                                                </div>
                                                                <div className="book-now-button">
                                                                    <div className="a">
                                                                        <span className="sec-btn">Book Now</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className=" slick-slide slick-cloned">
                                                    <div className="tour-box">
                                                        <div className="tour-box-image back-image" style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image2.jpg")' }}>
                                                            <span>15$</span>
                                                        </div>
                                                        <div className="tour-box-content">
                                                            <div className="tour-box-label">
                                                                <div className="tour-box-inner-label">
                                                                    <h4 className="h4-title">Greece</h4>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-title">
                                                                <h4 className="h4-title">Holiday Planners is a World Leading Online Tour Booking Platform</h4>
                                                            </div>

                                                            <div className="tour-box-description">
                                                                <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                                                            </div>
                                                            <div className="tour-info-box">
                                                                <div className="row">
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaClock />
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Duration</h5>
                                                                                <p>6 days 3 hours</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaUserFriends />
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Group Size</h5>
                                                                                <p>15+ people</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-bottom">
                                                                <div className="tour-price">
                                                                    <h3 className="h3-title">$2500</h3>
                                                                </div>
                                                                <div className="book-now-button">
                                                                    <div className="a">
                                                                        <span className="sec-btn">Book Now</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className=" slick-slide slick-cloned">
                                                    <div className="tour-box">
                                                        <div className="tour-box-image back-image" style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image2.jpg")' }}>
                                                            <span>15$</span>
                                                        </div>
                                                        <div className="tour-box-content">
                                                            <div className="tour-box-label">
                                                                <div className="tour-box-inner-label">
                                                                    <h4 className="h4-title">Greece</h4>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-title">
                                                                <h4 className="h4-title">Holiday Planners is a World Leading Online Tour Booking Platform</h4>
                                                            </div>

                                                            <div className="tour-box-description">
                                                                <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                                                            </div>
                                                            <div className="tour-info-box">
                                                                <div className="row">
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaClock />
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Duration</h5>
                                                                                <p>6 days 3 hours</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaUserFriends />
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Group Size</h5>
                                                                                <p>15+ people</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-bottom">
                                                                <div className="tour-price">
                                                                    <h3 className="h3-title">$2500</h3>
                                                                </div>
                                                                <div className="book-now-button">
                                                                    <div className="a">
                                                                        <span className="sec-btn">Book Now</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className=" slick-slide slick-cloned">
                                                    <div className="tour-box">
                                                        <div className="tour-box-image back-image" style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image2.jpg")' }}>
                                                            <span>15$</span>
                                                        </div>
                                                        <div className="tour-box-content">
                                                            <div className="tour-box-label">
                                                                <div className="tour-box-inner-label">
                                                                    <h4 className="h4-title">Greece</h4>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-title">
                                                                <h4 className="h4-title">Holiday Planners is a World Leading Online Tour Booking Platform</h4>
                                                            </div>

                                                            <div className="tour-box-description">
                                                                <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                                                            </div>
                                                            <div className="tour-info-box">
                                                                <div className="row">
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaClock />
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Duration</h5>
                                                                                <p>6 days 3 hours</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaUserFriends />
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Group Size</h5>
                                                                                <p>15+ people</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-bottom">
                                                                <div className="tour-price">
                                                                    <h3 className="h3-title">$2500</h3>
                                                                </div>
                                                                <div className="book-now-button">
                                                                    <div className="a">
                                                                        <span className="sec-btn">Book Now</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className=" slick-slide slick-cloned">
                                                    <div className="tour-box">
                                                        <div className="tour-box-image back-image" style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image2.jpg")' }}>
                                                            <span>15$</span>
                                                        </div>
                                                        <div className="tour-box-content">
                                                            <div className="tour-box-label">
                                                                <div className="tour-box-inner-label">
                                                                    <h4 className="h4-title">Greece</h4>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-title">
                                                                <h4 className="h4-title">Holiday Planners is a World Leading Online Tour Booking Platform</h4>
                                                            </div>

                                                            <div className="tour-box-description">
                                                                <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                                                            </div>
                                                            <div className="tour-info-box">
                                                                <div className="row">
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaClock />
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Duration</h5>
                                                                                <p>6 days 3 hours</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-row6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <FaUserFriends />
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Group Size</h5>
                                                                                <p>15+ people</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-bottom">
                                                                <div className="tour-price">
                                                                    <h3 className="h3-title">$2500</h3>
                                                                </div>
                                                                <div className="book-now-button">
                                                                    <div className="a">
                                                                        <span className="sec-btn">Book Now</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </div>
                                    </div>
                                </Swiper>


                                {/* <button className="slide-arrow prev-arrow">
                                <span>Prev</span>
                            </button> */}
                            </div>
                        </div>
                    </div>
                </div>
                <Testimonial />
                {/* <Instagram/> */}

            </>

    )
}

export default Amazingtour