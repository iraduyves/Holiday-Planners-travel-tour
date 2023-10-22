import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from '../Components/input'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../config/axios';
import { useContext, useState } from 'react';
import { UserContent } from '../context/user';





const Login = () => {

  // const { register, handleSubmit, formState: { errors } } = useForm();

  const { setUser } = useContext(UserContent)
  const navigate = useNavigate()
  const [load, setLoad] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (body) => {
    setLoad(() => true)
    try {
      const { data } = await axios.post('/api/v1/auth/login', body)
      if (data) {
        localStorage.setItem("access_token", data.access_token)
        console.log({ data });
        setUser(data.user)
        reset();
        (data.user.role == 'admin') ? navigate('/dashboard') : navigate('/')
      }
    } catch (error) {
      console.error({ error })
    }
    setLoad(() => false)
  };



  return (
    <div style={{ paddingTop: '140px' }}>
      <div className='sign'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input icon={<><FontAwesomeIcon icon={faEnvelope} className='faicon' /></>} name='email' placeholder='email' register={register("email", { required: true, pattern: /^\S+@\S+$/i })} />
          </div>
          <div >{errors.email && <p style={{ color: 'red', fontSize: 'small' }} >Email is required and must be valid</p>} </div>
          <div>
            <Input icon={<><FontAwesomeIcon icon={faLock} className='faicon' /></>} name='name' placeholder='Password' register={register("password", { required: true })} />
          </div>
          <div>{errors.password && <p>Password is required</p>}</div>
          <div>

            <Link to="/signup"> <span style={{ color: 'blue' }}> or Signup?</span></Link>
            <Link to="/signup"> <span style={{ color: 'blue' }}>forgot Password?</span></Link>
          </div>

          <div>
            <button className='sec-btn' disabled={load}>{load ? "loading..." : "login"}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login

hgfffffffffffffffffffffffff