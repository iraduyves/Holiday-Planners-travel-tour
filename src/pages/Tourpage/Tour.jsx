import '../../Components/navbar/navbar.css'
import Tourlist from './Tourlist'
const Tour = () => {
  return (
    <>

    <div className="main-banner inner-banner overlay back-image" style={{ backgroundImage: 'url("	https://html.geekcodelab.com/holiday-planners/assets/images/tour-banner.jpg',marginTop:'0rem' }}>
      <div className="sec-wp">
        <div className="container">
          <div className="row">
            <div className="colrow12">
              <div className="banner-content">
                <h1 className="h1-title">TourList</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Tourlist/>
    </>
  )
}

export default Tour