import Input from '../Components/input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessPawn, faEnvelope, faLocation, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import axios from '../config/axios';
import Select from '../Components/input/select';
import { useState } from 'react';

const Signup = () => {
  const navigate = useNavigate()
  const [load, setLoad] = useState(false)
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();

  const onSubmit = async (body) => {
    setLoad(() => true)
    try {
      const { data } = await axios.post('/api/v1/auth/signup', body)
      if (data) {
        reset()
        navigate('/login')
      }
    } catch (error) {
      console.error({ error })
    }
    setLoad(() => false)
  };


  return (
    <div style={{ paddingTop: '140px' }}>
      <div className='sign'>
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input icon={<><FontAwesomeIcon icon={faChessPawn} className='faicon' /></>} name='name' placeholder='name' register={register("name", { required: true })} />
            {errors.name && <p style={{ color: 'red', fontSize: 'small' }} >Your  is required and must be a Full name</p>}
          </div>
          <div>
            <Input icon={<><FontAwesomeIcon icon={faEnvelope} className='faicon' /></>} name='email' placeholder='email' register={register("email", { required: true, pattern: /^\S+@\S+$/i })} />
            {errors.email && <p style={{ color: 'red', fontSize: 'small' }} >Email is required and must be valid</p>}
            <Input icon={<><FontAwesomeIcon icon={faPhone} className='faicon' /></>} name='phone' placeholder='phone' register={register("phone", { required: true })} />
            {errors.phone && <p style={{ color: 'red', fontSize: 'small' }} > Phone number is required and must be valid</p>}
          </div>
          <div>
            <Input name='location' placeholder='location' icon={<><FontAwesomeIcon icon={faLocation} className='faicon' /></>} register={register("location", { required: true })} />

            {errors.location && <p style={{ color: 'red', fontSize: 'small' }} >Your Location is required and must be valid</p>}
            <Select name='roles' options={['admin', 'user']} icon={<><FontAwesomeIcon icon={faUser} className='faicon' /></>} className='faicon' register={register("role", { required: true })} />

            {errors.roles && <p style={{ color: 'red', fontSize: 'small' }} >Role is required and must be valid</p>}
          </div>
          <div>
            <Input type='password' icon={<><FontAwesomeIcon icon={faLock} className='faicon' /></>} name='password' placeholder='password' register={register("password", { required: true })} />
            {errors.password && <p style={{ color: 'red', fontSize: 'small' }} > Password is required and must be Strong</p>}
            <Input type='password' icon={<><FontAwesomeIcon icon={faLock} className='faicon' /></>} name='repassword' placeholder='retype password' register={register("repassword", { required: true, validate: (val) => { if (watch('password') != val) { return "Password Does not Match" } } })} />
            {errors.repassword && <p style={{ color: 'red', fontSize: 'small' }} >Password Does not Match</p>}
          </div>
          <div>
            <button className='sec-btn' disabled={load}>{load ? "loading..." : "Signup"}</button>
          </div>
          <Link to="/login"> <span style={{ color: 'blue' }}>  Login</span></Link>
        </form>
      </div>
    </div>
  )
}

export default Signup