import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from '../Components/input'
import './navbar/navbar.css'
import { faCalendar, faCaretDown, faEnvelope, faFlag, faLocationDot, faLock } from '@fortawesome/free-solid-svg-icons'
import About from '../pages/About'
const MainForm = () => {
  return (
    <>
    <div className="main-banner-bottom-from">
        <div className="sec-wp">
            <div className="container">
                <div className="row">
                    <div className="row-left12">
                        <div className="banner-form">
                        <div className='sign1'>
                            <form>
                                 <div>
                                      <Input icon={<><FontAwesomeIcon icon={faLocationDot} className='faicon' /></>} name='name' placeholder='WhereTo?'/>
                                      <Input icon={<><FontAwesomeIcon icon={faCalendar} className='faicon' /></>} name='name' placeholder='When?'icons={<><FontAwesomeIcon icon={faCaretDown} className='faiconn' /></>}/>
                                      <Input icon={<><FontAwesomeIcon icon={faFlag} className='faicon' /></>} name='name' placeholder='TrvType?'icons={<><FontAwesomeIcon icon={faCaretDown} className='faiconn' /></>}/>
                                      
                                      <button className='sec-btn'>Find Now</button>
                                 </div>                 
                           </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <About/>
    </>
   )
}

export default MainForm

