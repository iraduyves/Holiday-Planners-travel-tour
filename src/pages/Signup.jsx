import Input from '../Components/input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessPawn, faEnvelope, faLock, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div style={{ paddingTop: '140px' }}>
      <div className='sign'>
        <h1>Sign up</h1>
        <form>
          <div>
            <Input icon={<><FontAwesomeIcon icon={faChessPawn} className='faicon'/></>} name='name' placeholder='name' />
          </div>
          <div>
            <Input icon={<><FontAwesomeIcon icon={faEnvelope} className='faicon'/></>} name='email' placeholder='email' />
            <Input icon={<><FontAwesomeIcon icon={faPhone} className='faicon' /></>} name='phone' placeholder='phone' />
          </div>
          <div>
            <Input icon={<><FontAwesomeIcon icon={faLock} className='faicon' /></>} name='password' placeholder='password' />
            <Input icon={<><FontAwesomeIcon icon={faLock}className='faicon' /></>} name='re-password' placeholder='retype password' />
          </div>
          <div>
            <button className='sec-btn'>Signup</button>
          </div>
          <Link to="/login"> <span style={{color:'blue'}}>  Login</span></Link>
        </form>
      </div>
    </div>
  )
}

export default Signup