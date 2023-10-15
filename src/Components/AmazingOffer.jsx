// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const AmazingOffer = () => {

  return (



    <div className="main-tour-offer" style={{ marginBottom: '2rem' }}>



      <div className="tour-offer-top pt-70 bg-f6">
        <div className="container">
          <div className="row">
            <div className="colrow6">
              <div className="sec-title">
                <div className="line-title">
                  <h4 className="h4-title">Amazing Offfers</h4>
                </div>
                <h2 className="h2-title">
                  Special
                  <span>Deals</span>
                  And Last Minute
                  <span>Amazing Offers</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tour-offer-slider-wp pb-70">
        <div className="container">
          <div className="row tour-offer-slider">
            <button className="slider-arrow prev-arrow " >
              <div className="prev-arrow">

                <span>Prev</span>
              </div>
            </button>
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
                "--swiper-pagination-color": "#C29D59",
                "--swiper-scrollbar-color": "#C29D59",
                "--swiper-navigation-color": "#C29D59",
                "--swiper-pagination-bullet-inactive-color": "RGB(175, 179, 175)",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bullet-size": "10px",
                "--swiper-pagination-bullet-horizontal-gap": "10px",
                "--swiper-pagination-bullet-margin-left": "2rem",
                "--swiper-pagination-bullet-margin-right": "2rem"
            }}
            >
              <div className="slick-list draggable">
                <SwiperSlide>

                  <div className="slick-track">
                    <div className="slick-slider slick-cloned">
                      <div className="tour-offer-box">
                        <div className="a">
                          <div className="tour-offer-box-image back-image" style={{ backgroundImage: 'url("	https://html.geekcodelab.com/holiday-planners/assets/images/offer-img3.jpg")' }}>
                            <span className="discount-label">38% off</span>
                          </div>
                          <div className="tour-offer-box-content">
                            <h4 className="h4-title">Jaisalmer Fort , Jaisalmer</h4>
                            <span className="price-lable">$750</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>

                  <div className="slick-track">
                    <div className="slick-slider slick-cloned">
                      <div className="tour-offer-box">
                        <div className="a">
                          <div className="tour-offer-box-image back-image" style={{ backgroundImage: 'url("	https://html.geekcodelab.com/holiday-planners/assets/images/offer-img3.jpg")' }}>
                            <span className="discount-label">38% off</span>
                          </div>
                          <div className="tour-offer-box-content">
                            <h4 className="h4-title">Jaisalmer Fort , Jaisalmer</h4>
                            <span className="price-lable">$750</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>

                  <div className="slick-track">
                    <div className="slick-slider slick-cloned">
                      <div className="tour-offer-box">
                        <div className="a">
                          <div className="tour-offer-box-image back-image" style={{ backgroundImage: 'url("	https://html.geekcodelab.com/holiday-planners/assets/images/offer-img3.jpg")' }}>
                            <span className="discount-label">38% off</span>
                          </div>
                          <div className="tour-offer-box-content">
                            <h4 className="h4-title">Jaisalmer Fort , Jaisalmer</h4>
                            <span className="price-lable">$750</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slick-track">
                    <div className=" slick-slider slick-cloned">
                      <div className="tour-offer-box">
                        <div className="a">
                          <div className="tour-offer-box-image back-image" style={{ backgroundImage: 'url("	https://html.geekcodelab.com/holiday-planners/assets/images/offer-img3.jpg")' }}>
                            <span className="discount-label">38% off</span>
                          </div>
                          <div className="tour-offer-box-content">
                            <h4 className="h4-title">Jaisalmer Fort , Jaisalmer</h4>
                            <span className="price-lable">$750</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slick-track">
                    <div className="slick-slider slick-cloned">
                      <div className="tour-offer-box">
                        <div className="a">
                          <div className="tour-offer-box-image back-image" style={{ backgroundImage: 'url("	https://html.geekcodelab.com/holiday-planners/assets/images/offer-img3.jpg")' }}>
                            <span className="discount-label">38% off</span>
                          </div>
                          <div className="tour-offer-box-content">
                            <h4 className="h4-title">Jaisalmer Fort , Jaisalmer</h4>
                            <span className="price-lable">$750</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slick-track">
                    <div className="slick-slider slick-cloned">
                      <div className="tour-offer-box">
                        <div className="a">
                          <div className="tour-offer-box-image back-image" style={{ backgroundImage: 'url("	https://html.geekcodelab.com/holiday-planners/assets/images/offer-img3.jpg")' }}>
                            <span className="discount-label">38% off</span>
                          </div>
                          <div className="tour-offer-box-content">
                            <h4 className="h4-title">Jaisalmer Fort , Jaisalmer</h4>
                            <span className="price-lable">$750</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>

            <button className="slider-arrow next-arrow">
              <span>Next</span>
            </button>

          </div>
        </div>
      </div>
    </div>

  )
}

export default AmazingOffer