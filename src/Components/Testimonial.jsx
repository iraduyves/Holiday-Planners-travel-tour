import './navbar/navbar.css'
import { FaStar } from 'react-icons/fa'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Blogs from './Blogs';

const Testimonial = () => {
    return (
        <>
        <div className="main-testimonial" style={{ marginTop: '' }}>
            <div className="container">
                <div className="row align-items-end">
                    <div className="colrow5">
                        <div className="testimonial-left-side pt-70">
                            <div className="sec-title">
                                <div className="line-title">
                                    <h4 className="h4-title">Testimonials</h4>
                                </div>
                                <h2 className="h2-title">
                                    Customer
                                    <span>Reviews</span>
                                </h2>
                            </div>
                            <div className="testimonial-quote">
                                <img src={"https://html.geekcodelab.com/holiday-planners/assets/images/testimonial-quote.svg"} alt="testimmonial qoute" />
                            </div>
                        </div>
                    </div>
                    <div className="colrow6 offset-lg-1">
                        <div className="testimonial-rigth-side">
                            <div className="testimonial-slider slick-initiated slick-slider slick-dotte">
                                <div className="slick-list">
                                    <div className="slick-track">
                                        <Swiper
                                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                            spaceBetween={50}
                                            slidesPerView={1}
                                            navigation
                                            pagination={{ clickable: true }}
                                            // scrollbar={{ draggable: true }}
                                            loop={true}
                                            autoplay={{ delay: 5000 }}
                                            onSwiper={(swiper) => console.log(swiper)}
                                            style={{
                                                "--swiper-pagination-color": "#C29D59",
                                                "--swiper-navigation-color": "white",
                                                "--swiper-pagination-bullet-inactive-color": "RGB(175, 179, 175)",
                                                "--swiper-pagination-bullet-inactive-opacity": "1",
                                                "--swiper-pagination-bullet-size": "10px",
                                                "--swiper-pagination-bullet-horizontal-gap": "10px",
                                                "--swiper-pagination-bullet-margin-left": "2rem",
                                                "--swiper-pagination-bullet-margin-right": "2rem"
                                            }}
                                        >
                                            <SwiperSlide>


                                                <div className="testimonial-slide slick-slide slick-cloned">
                                                    <div className="testimonial-stars">
                                                        <FaStar className='i' />
                                                        <FaStar className='i' />
                                                        <FaStar className='i' />
                                                        <FaStar className='i' />
                                                        <FaStar className='i' />
                                                    </div>
                                                    <div className="overflow-text">
                                                        <p>
                                                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                                                        </p>
                                                    </div>
                                                    <div className="testimonial-name">
                                                        <h3 className="h3-title">Simon piere</h3>
                                                        <p className="rated">Rated by Designer on facebook</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="testimonial-slide slick-slide slick-cloned">
                                                    <div className="testimonial-stars">
                                                        <FaStar className='i' />
                                                        <FaStar className='i' />
                                                        <FaStar className='i' />
                                                        <FaStar className='i' />
                                                        <FaStar className='i' />
                                                    </div>
                                                    <div className="overflow-text">
                                                        <p>
                                                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                                                        </p>
                                                    </div>
                                                    <div className="testimonial-name">
                                                        <h3 className="h3-title">KappyRwanda</h3>
                                                        <p className="rated">Rated by Programmer on Tiktok😊</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="testimonial-slide slick-slide slick-cloned">
                                                    <div className="testimonial-stars">
                                                        <FaStar className='i' />
                                                        <FaStar className='i' />
                                                        <FaStar className='i' />
                                                        <FaStar className='i' />
                                                        <FaStar className='i' />
                                                    </div>
                                                    <div className="overflow-text">
                                                        <p>
                                                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                                                        </p>
                                                    </div>
                                                    <div className="testimonial-name">
                                                        <h3 className="h3-title">Aveiro</h3>
                                                        <p className="rated">Rated by Engineer on instagram</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="testimonial-slide slick-slide slick-cloned">
                                                    <div className="testimonial-stars">
                                                        <FaStar className='i' />
                                                        <FaStar className='i' />
                                                        <FaStar className='i' />
                                                        <FaStar className='i' />
                                                        <FaStar className='i' />
                                                    </div>
                                                    <div className="overflow-text">
                                                        <p>
                                                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                                                        </p>
                                                    </div>
                                                    <div className="testimonial-name">
                                                        <h3 className="h3-title">IRADUKUNDA</h3>
                                                        <p className="rated">Rated by Engineer on twitter</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="testimonial-slide slick-slide slick-cloned">
                                                    <div className="testimonial-stars">
                                                        <FaStar className='i' />
                                                        <FaStar className='i' />
                                                        <FaStar className='i' />
                                                        <FaStar className='i' />
                                                        <FaStar className='i' />
                                                    </div>
                                                    <div className="overflow-text">
                                                        <p>
                                                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                                                        </p>
                                                    </div>
                                                    <div className="testimonial-name">
                                                        <h3 className="h3-title">Rene</h3>
                                                        <p className="rated">Rated by DJ on twitter</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="testimonial-slide slick-slide slick-cloned">
                                                    <div className="testimonial-stars">
                                                        <FaStar className='i' />
                                                        <FaStar className='i' />
                                                        <FaStar className='i' />
                                                        <FaStar className='i' />
                                                        <FaStar className='i' />
                                                    </div>
                                                    <div className="overflow-text">
                                                        <p>
                                                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                                                        </p>
                                                    </div>
                                                    <div className="testimonial-name">
                                                        <h3 className="h3-title">Keza</h3>
                                                        <p className="rated">Rated by Mechanics on instram</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="testimonial-slide slick-slide slick-cloned">
                                                    <div className="testimonial-stars">
                                                        <FaStar className='i' />
                                                        <FaStar className='i' />
                                                        <FaStar className='i' />
                                                        <FaStar className='i' />
                                                        <FaStar className='i' />
                                                    </div>
                                                    <div className="overflow-text">
                                                        <p>
                                                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                                                        </p>
                                                    </div>
                                                    <div className="testimonial-name">
                                                        <h3 className="h3-title">Yves IRADUKUNDA</h3>
                                                        <p className="rated">Rated by Engineer on Tiktok😊</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Blogs/>
        </>
    )
}

export default Testimonial