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

const Parterner = () => {
  return (
    <div className="main-partners common-sec">
        <div className="sec-wp">
            <div className="container">
                <div className="row">
                    <div className="colrow12">
                        <div className="sec-title">
                            <div className="line-title">
                                <h4 className="h4-title">partrners</h4>
                            </div>
                            <h2 className="h2-title">
                                Our
                                <span>Members</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row partners-slider">
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
                    <div className="slick-list">
                        <div className="slick-track">
                                    <SwiperSlide>
                            <div className="colrow3 slick-slide slick-cloned">
                                <div className="partners-logo-box">
                                    <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/partners-logo2.png"} alt="" />
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="colrow3 slick-slide slick-cloned">
                                <div className="partners-logo-box">
                                    <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/partners-logo2.png"} alt="" />
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="colrow3 slick-slide slick-cloned">
                                <div className="partners-logo-box">
                                    <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/partners-logo2.png"} alt="" />
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="colrow3 slick-slide slick-cloned">
                                <div className="partners-logo-box">
                                    <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/partners-logo2.png"} alt="" />
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="colrow3 slick-slide slick-cloned">
                                <div className="partners-logo-box">
                                    <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/partners-logo2.png"} alt="" />
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="colrow3 slick-slide slick-cloned">
                                <div className="partners-logo-box">
                                    <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/partners-logo2.png"} alt="" />
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="colrow3 slick-slide slick-cloned">
                                <div className="partners-logo-box">
                                    <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/partners-logo2.png"} alt="" />
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="colrow3 slick-slide slick-cloned">
                                <div className="partners-logo-box">
                                    <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/partners-logo2.png"} alt="" />
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="colrow3 slick-slide slick-cloned">
                                <div className="partners-logo-box">
                                    <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/partners-logo2.png"} alt="" />
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="colrow3 slick-slide slick-cloned">
                                <div className="partners-logo-box">
                                    <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/partners-logo2.png"} alt="" />
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="colrow3 slick-slide slick-cloned">
                                <div className="partners-logo-box">
                                    <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/partners-logo2.png"} alt="" />
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="colrow3 slick-slide slick-cloned">
                                <div className="partners-logo-box">
                                    <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/partners-logo2.png"} alt="" />
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="colrow3 slick-slide slick-cloned">
                                <div className="partners-logo-box">
                                    <img src={"	https://html.geekcodelab.com/holiday-planners/assets/images/partners-logo2.png"} alt="" />
                                </div>
                            </div>
                            </SwiperSlide>
                        </div>
                    </div>
                         </Swiper>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Parterner