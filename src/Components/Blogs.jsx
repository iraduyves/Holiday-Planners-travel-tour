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
import Instagram from './Instagram';
import Parterner from './Parterner';

const Blogs = () => {
    return (
        <>
            <div className="main-blog pt-70 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="row-right">
                            <div className="sec-title">
                                <div className="line-title">
                                    <h4 className="h4-title">Latest News</h4>
                                </div>
                                <h2 className="h2-title">
                                    Learn More
                                    <span>About Tours</span>
                                </h2>
                            </div>
                        </div>
                        <div className="row-right">
                            <div className="blog-learn-btn for-des">
                                <div className="a">
                                    <span className="sec-btn">
                                        Learn More
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-blog-slider" style={{ marginTop: '30px' }}>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={50}
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
                            <SwiperSlide>
                                <div className="row-right">
                                    <div className="blog-box">
                                        <div className="blog-image back-image overlay" style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/blog-image1.jpg")' }}>

                                        </div>
                                        <div className="blog-box-content">
                                            <h3 className="h3-title">
                                                <div className="a">Things to see and Do When Visiting Japan</div>
                                            </h3>
                                            <p className="date">
                                                <div className="a">October 16, 2023</div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="row-right">
                                    <div className="blog-box">
                                        <div className="blog-image back-image overlay" style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/blog-image2.jpg")' }}>

                                        </div>
                                        <div className="blog-box-content">
                                            <h3 className="h3-title">
                                                <div className="a">Travel the Most Beautiful Places in the World</div>
                                            </h3>
                                            <p className="date">
                                                <div className="a">February 12, 2002</div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="row-right">
                                    <div className="blog-box">
                                        <div className="blog-image back-image overlay" style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/blog-image3.jpg")' }}>

                                        </div>
                                        <div className="blog-box-content">
                                            <h3 className="h3-title">
                                                <div className="a">Journeys are Best Measured in New Friends</div>
                                            </h3>
                                            <p className="date">
                                                <div className="a">April 5, 2020</div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="row">
                        <div className="rowleft12">
                            <div className="blog-learn-btn for-mob">
                                <div className="a">
                                    <span className="sec-btn">Learn More</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Instagram/>
            <Parterner/>
        </>
    )
}
hh
export default Blogs