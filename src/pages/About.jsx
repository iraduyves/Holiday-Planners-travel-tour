import logowhite from '/logo-icon-white.svg'
import  '../Components/navbar/navbar.css'
import Destination from '../Components/Destination'
const About = () => {
  return (
    <>
    <div className="main-about common-sec">
        <div className="logo-icon">
            <img src={logowhite} alt="white logo" />
        </div>
        <div className="sec-wp">
            <div className="container">
                <div className="row">
                    <div className="colrow6">
                        <div className="about-image-wp">
                            <div className="about-image-box big">
                                <div className="about-image back-image" style={{backgroundImage:'url("https://html.geekcodelab.com/holiday-planners/assets/images/about-big-image.jpg")'}}>

                                </div>

                            </div>
                            <div className="about-image-box small">
                                <div className="about-image back-image" style={{backgroundImage:'url("https://html.geekcodelab.com/holiday-planners/assets/images/about-small-image.jpg")'}}>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="colrow6">
                        <div className="about-content">
                            <div className="line-title">
                                <h4 className="h4-title">About us</h4>
                            </div>
                            <h2 className="h2-title">
                                Plan Your
                                <span>Trip</span>
                                with
                                <span>Us</span>

                            </h2>
                            <div className="about-content-text">
                                <p style={{color:'black',fontSize:'small'}}>
                                   far far awy , behind the world mountains, far from the countries Rwanda 
                                   and Canada , there live the blind texts. \separated  they live in Kigali at 
                                   the south cost of the semantics, a large language ocen . A small liver named nile
                                   flows by their paradisematic country, in which roasted parts of sentences fly
                                   into Your mounth. Even the all-powerful pointing has no control about the blind 
                                   texts, it si an almost unnorthoggraphic. Italic Mountains, she had Vieuw back on the 
                                   skyline 
                                </p>
                            </div>
                            <div className="a">
                                <span className="sec-btn">Read More</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Destination/>
    </>
  )
}

export default About