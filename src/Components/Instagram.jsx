import { FaInstagram } from 'react-icons/fa'
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

const Instagram = () => {
  return (
    <>
      <div className="main-instagram bg-f6 pb-70">
        <div className="instagram-icon">
            <div className="i"><FaInstagram/></div>
        </div>
        <div className="sec-wp">
            <div className="container">
                <div className="row">
                    <div className="colrow12">
                        <div className="sec-title">
                            <div className="line-title">
                                <h4 className="h4-title">Instagram</h4>
                            </div>
                            <h2 className="h2-title">
                                <span>
                                    <div className="a">HolidayPlanners</div>
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row instagram-slider">
                    <div className="slick-list">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={10}
                            slidesPerView={2}
                            navigation
                            pagination={{ clickable: true }}
                            // scrollbar={{ draggable: true }}
                            loop={true}
                            autoplay={{ delay: 5000 }}
                            onSwiper={(swiper) => console.log(swiper)}
                            style={{
                                "--swiper-pagination-color": "#C29D59",
                                "--swiper-navigation-color": "#C29D59",
                                "--swiper-pagination-bullet-inactive-color": "RGB(175, 179, 175)",
                                "--swiper-pagination-bullet-inactive-opacity": "1",
                                "--swiper-pagination-bullet-size": "10px",
                                "--swiper-pagination-bullet-horizontal-gap": "10px",
                                "--swiper-pagination-bullet-margin-left": "2rem",
                                "--swiper-pagination-bullet-margin-right": "2rem"
                            }}
                        >
                        <div className="slick-track">
                            <SwiperSlide>

                            <div className="colrow2 slick-slide slick-cloned">
                                <div className="instagram-side-box">
                                    <div className="instagram-slide-image back-image">
                                        <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image2.jpg"} alt="" />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>

                            <div className="colrow2 slick-slide slick-cloned">
                                <div className="instagram-side-box">
                                    <div className="instagram-slide-image back-image">
                                        <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image2.jpg"} alt="" />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>

                            <div className="colrow2 slick-slide slick-cloned">
                                <div className="instagram-side-box">
                                    <div className="instagram-slide-image back-image">
                                        <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image2.jpg"} alt="" />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>

                            <div className="colrow2 slick-slide slick-cloned">
                                <div className="instagram-side-box">
                                    <div className="instagram-slide-image back-image">
                                        <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image2.jpg"} alt="" />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>

                            <div className="colrow2 slick-slide slick-cloned">
                                <div className="instagram-side-box">
                                    <div className="instagram-slide-image back-image">
                                        <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image2.jpg"} alt="" />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>

                            <div className="colrow2 slick-slide slick-cloned">
                                <div className="instagram-side-box">
                                    <div className="instagram-slide-image back-image">
                                        <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image2.jpg"} alt="" />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>

                            <div className="colrow2 slick-slide slick-cloned">
                                <div className="instagram-side-box">
                                    <div className="instagram-slide-image back-image">
                                        <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image2.jpg"} alt="" />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>

                            <div className="colrow2 slick-slide slick-cloned">
                                <div className="instagram-side-box">
                                    <div className="instagram-slide-image back-image">
                                        <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image2.jpg"} alt="" />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>

                            <div className="colrow2 slick-slide slick-cloned">
                                <div className="instagram-side-box">
                                    <div className="instagram-slide-image back-image">
                                        <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image2.jpg"} alt="" />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>

                            <div className="colrow2 slick-slide slick-cloned">
                                <div className="instagram-side-box">
                                    <div className="instagram-slide-image back-image">
                                        <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image2.jpg"} alt="" />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>

                            <div className="colrow2 slick-slide slick-cloned">
                                <div className="instagram-side-box">
                                    <div className="instagram-slide-image back-image">
                                        <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image2.jpg"} alt="" />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>

                            <div className="colrow2 slick-slide slick-cloned">
                                <div className="instagram-side-box">
                                    <div className="instagram-slide-image back-image">
                                        <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image2.jpg"} alt="" />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>

                            <div className="colrow2 slick-slide slick-cloned">
                                <div className="instagram-side-box">
                                    <div className="instagram-slide-image back-image">
                                        <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image2.jpg"} alt="" />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>

                            <div className="colrow2 slick-slide slick-cloned">
                                <div className="instagram-side-box">
                                    <div className="instagram-slide-image back-image">
                                        <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image2.jpg"} alt="" />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>

                            <div className="colrow2 slick-slide slick-cloned">
                                <div className="instagram-side-box">
                                    <div className="instagram-slide-image back-image">
                                        <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image2.jpg"} alt="" />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>

                            <div className="colrow2 slick-slide slick-cloned">
                                <div className="instagram-side-box">
                                    <div className="instagram-slide-image back-image">
                                        <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image2.jpg"} alt="" />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>

                            <div className="colrow2 slick-slide slick-cloned">
                                <div className="instagram-side-box">
                                    <div className="instagram-slide-image back-image">
                                        <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image2.jpg"} alt="" />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>

                            <div className="colrow2 slick-slide slick-cloned">
                                <div className="instagram-side-box">
                                    <div className="instagram-slide-image back-image">
                                        <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image2.jpg"} alt="" />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>

                            <div className="colrow2 slick-slide slick-cloned">
                                <div className="instagram-side-box">
                                    <div className="instagram-slide-image back-image">
                                        <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image2.jpg"} alt="" />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>

                            <div className="colrow2 slick-slide slick-cloned">
                                <div className="instagram-side-box">
                                    <div className="instagram-slide-image back-image">
                                        <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image2.jpg"} alt="" />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            
                           
                           
                                                      
                           
                           
                          
                        </div>
                            </Swiper>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Instagram