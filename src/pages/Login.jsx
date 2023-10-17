import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from '../Components/input'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';





const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };



  return (
    <div style={{ paddingTop: '140px' }}>
      <div className='sign'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onsubmit)}>
          <div>
            <Input icon={<><FontAwesomeIcon icon={faEnvelope} className='faicon' /></>} name='name' placeholder='name'  {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
          </div>
          <div >{errors.email && <p style={{ color: 'red', fontSize: 'small' }} >Email is required and must be valid</p>} </div>
          <div>
            <Input icon={<><FontAwesomeIcon icon={faLock} className='faicon' /></>} name='name' placeholder='Password' {...register("password", { required: true })} />
          </div>
          <div>{errors.password && <p>Password is required</p>}</div>
          <div>

            <Link to="/signup"> <span style={{ color: 'blue' }}> or Signup?</span></Link>
            <Link to="/signup"> <span style={{ color: 'blue' }}>forgot Password?</span></Link>
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
hhhhhhhh
