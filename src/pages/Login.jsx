import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from '../Components/input'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'



const Login = () => {
  return (
    <div style={{ paddingTop: '140px' }}>
      <div className='sign'>
        <h1>Login</h1>
        <form>
          <div>
            <Input icon={<><FontAwesomeIcon icon={faEnvelope} className='faicon' /></>} name='name' placeholder='name' />
          </div>
          <div>
            <Input icon={<><FontAwesomeIcon icon={faLock} className='faicon' /></>} name='name' placeholder='name' />
          </div>
         
          <div>
            <button className='sec-btn'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login