import { FaAngleRight, FaArrowDown, FaArrowRight, FaCalendar, FaCaretDown, FaEnvelope, FaMapMarker, FaPhone } from 'react-icons/fa'
import { FaClock } from '@react-icons/all-files/fa/FaClock';
import { FaUserFriends } from '@react-icons/all-files/fa/FaUserFriends'
import { FaSearch } from '@react-icons/all-files/fa/FaSearch'
import '../../Components/navbar/navbar.css'
import '../../Components/navbar/navbar.css'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useCallback, useContext, useEffect, useState } from 'react';
import axios from '../../config/axios';
import { TourContent } from '../../context/Tour';





export const tourlistMock = [

       {
           
           name: "Kenya",
           img: "https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image1.jpg",
           title: "Holiday Planners is a World Leading Online Tour Booking Platform",
           Description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
           price: "$1200",
           discount: "15%",
           users: "15+ peoples",
           duration: "6Days 3Hours"
       },
       {
           name: "GREECE",
           img: "https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image2.jpg",
           title: "Holiday Planners is a World Leading Online Tour Booking Platform",
           Description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
           price: "$2500",
           discount: '45%',
           users: "65+ peoples",
           duration: "2Days 1Hour"
       },
       {
           name: "RWANDA",
           img: "https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image4.jpg",
           title: "Holiday Planners is a World Leading Online Tour Booking Platform",
           Description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
           price: "$1200",
           discount: '5%',
           users: "34+ peoples",
           duration: "1Day 12Hours"
       },
       {
           name: "SWITZLAND",
           img: "https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image1.jpg",
           title: "Holiday Planners is a World Leading Online Tour Booking Platform",
           Description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
           price: "$1200",
           discount: '8%',
           users: "23+ peoples",
           duration: " 7Hours"
       },
       {
           name: "USA",
           img: "https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image2.jpg",
           title: "Holiday Planners is a World Leading Online Tour Booking Platform",
           Description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
           price: "$1200",
           discount: '3%',
           users: "15+ peoples",
           duration: "8Days 2Hours"
       },
       {
           name: "CANADA",
           img: "https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image4.jpg",
           title: "Holiday Planners is a World Leading Online Tour Booking Platform",
           Description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
           price: "$1200",
           discount: '10%',
           users: "95+peoples",
           duration: "1Day 23Hours"
       },
   
   ];

   
   const Tourlist = () => {
    const { Tour, setTour } = useContext(TourContent)
 
    const FetchData = useCallback(async () => {
        try {
            const { data } = await axios.get('/api/v1/tour/')
            if (data) {
                console.log({ data });
                setTour(data)
            }
        } catch (error) {
            console.error({ error })
        }
    }, [setTour]);
 
    useEffect(() => {
        FetchData()
    }, [FetchData])

    return (
        <div className="main-tour-list pb-70">
            <div className="container">
                <div className="row">
                    <div className="row-left">
                        <div className="left-side">
                            <div className="tour-filter" style={{ marginBottom: '30px' }}>
                                <form >
                                    <div className="row no-gutters">
                                        <div className="row-right">
                                            <label className="form-input filter-label">Sort By:</label>
                                        </div>
                                        <div className="row-right">
                                            <span className="form-control-span release-wrap">
                                                <select className="form-input">
                                                    <option value="" >Release Date</option>
                                                    <option value="" >Tour Date</option>
                                                    <option value="" >title</option>
                                                    <option value="" >Price</option>
                                                    <option value="" >Popularity</option>
                                                    <option value="" >Rating</option>
                                                    <option value="" >Duration</option>
                                                </select>
                                                <span className="arrow">
                                                    <div className="i"><FaArrowDown /></div>
                                                </span>
                                            </span>
                                        </div>
                                        <div className="row-right">
                                            <span className="form-control-span order-wrap">
                                                <select className="form-input">
                                                    <option value="">Ascending</option>
                                                    <option value="" >Descending</option>
                                                </select>
                                                <span className="arrow">
                                                    <div className="i">
                                                        <FaArrowDown />
                                                    </div>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="tour-filter-result">
                                <div className="row">

                                    {Tour.map((item, index) => (
                                        <div className="colrow6" key={index}>
                                            <div className="tour-box">
                                                <div className="tour-box-image back-image" style={{ backgroundImage: `url("${item.backdropImage}")` }}><span className="discount-label">15%</span></div>
                                                <div className="tour-box-content">
                                                    <div className="tour-box-label">
                                                        <div className="tour-box-inner-label">
                                                            <h4 className="h4-title">{item.destination}</h4>
                                                        </div>
                                                    </div>
                                                    <div className="tour-box-title">
                                                        <h4 className="h4-title">{item.Title}</h4>
                                                    </div>
                                                    <div className="tour-box-description">
                                                        <p style={{ color: 'black', fontSize: 'small' }}>{item.Description ?? 'no description'}</p>
                                                    </div>
                                                    <div className="tour-info-box">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="tour-info">
                                                                    <div className="tour-info-icon">
                                                                        <div className="i"><FaClock /></div>
                                                                    </div>
                                                                    <div className="tour-info-content">
                                                                        <h5 className="h6-title">Duration</h5>
                                                                        <p style={{ color: 'black', fontSize: 'small' }}>{item.fromMonth}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="tour-info">
                                                                    <div className="tour-info-icon">
                                                                        <div className="i"><FaUserFriends /></div>
                                                                    </div>
                                                                    <div className="tour-info-content">
                                                                        <h5 className="h6-title">Group Size</h5>
                                                                        <p style={{ color: 'black', fontSize: 'small' }}>{item.GroupSize}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tour-box-bottom">
                                                        <div className="tour-price">
                                                            <h3 className="h3-title">$1200</h3>
                                                        </div>
                                                        <div className="book-now-button">
                                                            <div className="a"><Link to={`/tour/${item._id}`}><span className="sec-btn" >Book Now</span></Link></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    ))}
                                </div>
                                <div className="row">
                                    <div className="colrow12">
                                        <ul className="pagination" style={{ display: 'flex' }}>
                                            <li className="page-item active"><div className="page-link">1</div></li>
                                            <li className="page-item"><div className="page-link">2</div></li>
                                            <li className="page-item">
                                                <div className="a">
                                                    <div className="i">
                                                        <FaArrowRight style={{ fontSize: '2rem' }} />
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-right">
                        <div className="right-side">
                            <div className="widget ">
                                <div className="line-title">
                                    <h4 className="h4-title">Find Your Tour</h4>
                                </div>
                                <div className="find-tour-form">
                                    <form>
                                        <div className="row">
                                            <div className="colrow12">
                                                <span className="form-control-span">
                                                    <span className="icon"><div className="i"><FaSearch /></div></span>
                                                    <input type="text" placeholder="Search Tour" className="form-input" />
                                                </span>
                                            </div>
                                            <div className="colrow12">
                                                <span className="form-control-span">
                                                    <span className="icon"><div className="i"><FaMapMarker /></div></span>
                                                    <input type="text" placeholder="Where To?" className="form-input" />
                                                </span>
                                            </div>
                                            <div className="colrow12">
                                                <span className="form-control-span">
                                                    <span className="icon"><div className="i"><FaCalendar /></div></span>
                                                    <select className="form-input" >
                                                        <option>Month</option>
                                                        <option>January</option>
                                                        <option>February</option>
                                                        <option>March</option>
                                                        <option>April</option>
                                                        <option>May</option>
                                                        <option>June</option>
                                                        <option>July</option>
                                                        <option>August</option>
                                                        <option>September</option>
                                                        <option>October</option>
                                                        <option>November</option>
                                                        <option>December</option>
                                                    </select>
                                                    <span className="arrow"><div className="i"><FaCaretDown /></div></span>
                                                </span>
                                            </div>
                                            <div className="colrow12">
                                                <label className="label-input">Duration</label>
                                                <span className="form-control-span no-icon">
                                                    <select className="form-input" >
                                                        <option>Any</option>
                                                        <option>1 Day Tour</option>
                                                        <option>2-4 Days Tour</option>
                                                        <option>5-7 Days Tour</option>
                                                        <option>7+ Days Tour</option>
                                                    </select>
                                                    <span className="arrow"><div className="i"><FaCaretDown /></div></span>
                                                </span>
                                            </div>
                                            <div className="colrow6 ">
                                                <label className="label-input">Min Price</label>
                                                <span className="form-control-span no-icon no-arrow">
                                                    <input type="number" className="form-input" placeholder="1" />
                                                </span>
                                            </div>
                                            <div className="colrow6 ">
                                                <label className="label-input">Max Price</label>
                                                <span className="form-control-span no-icon no-arrow">
                                                    <input type="number" className="form-input" placeholder="100" />
                                                </span>
                                            </div>
                                            <div className="colrow12">
                                                <div className="checkbox-list">
                                                    <div className="checkbox-item">
                                                        <input type="checkbox" id="cultural" name="cultural" value="cultural" />
                                                        <label htmlFor="cultural" className="check-box-label">Cultural</label>
                                                    </div>
                                                    <div className="checkbox-item">
                                                        <input type="checkbox" id="adventure" name="adventure" value="adventure" />
                                                        <label htmlFor="adventure" className="check-box-label">Adventure</label>
                                                    </div>
                                                    <div className="checkbox-item">
                                                        <input type="checkbox" id="historical" name="historical" value="historical" />
                                                        <label htmlFor="historical" className="check-box-label">Historical</label>
                                                    </div>
                                                    <div className="checkbox-item">
                                                        <input type="checkbox" id="seaside" name="seaside" value="seaside" />
                                                        <label htmlFor="seaside" className="check-box-label">Seaside</label>
                                                    </div>
                                                    <div className="checkbox-item">
                                                        <input type="checkbox" id="discovery" name="discovery" value="discovery" />
                                                        <label htmlFor="discovery" className="check-box-label">Discovery</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="colrow12">
                                                <button className="sec-btn find-now-btn" ><span>Find Now</span></button>
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
                                    <li><div className="i"><FaAngleRight /></div> Best care Guarantee</li>
                                    <li><div className="i"><FaAngleRight /></div> Customer care available 24/7</li>
                                    <li><div className="i"><FaAngleRight /></div> Free Travel Insureance</li>
                                    <li><div className="i"><FaAngleRight /></div> Hand-picked Tours &amp; Activities</li>
                                </ul>
                            </div>
                            <div className="widget get-a-questions back-image " style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/get-a-questions-back.jpg")' }}>
                                <div className="line-title">
                                    <h4 className="h4-title">Get a Question?</h4>
                                </div>
                                <p>Do not hesitage to give us a call. We are an expert team and we are happy to talk to you.</p>
                                <ul className="gaq-list-item">
                                    <li>
                                        <div className="a"><div className="i"><FaEnvelope /></div>iradukundayves11@gmail.com</div>
                                    </li>
                                    <li>
                                        <div className="a"><div className="i"><FaPhone /></div>(+250) 782045468</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tourlist
fghfdsaASDF