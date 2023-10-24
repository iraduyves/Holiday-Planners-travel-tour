import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from '../Components/input'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from '../config/axios';
import { useContext, useState } from 'react';
import { UserContent } from '../context/user';
import PropTypes from 'prop-types';






const Login = () => {
  //  const [profileuser ,Setprofileuser]  =useState([""])
  const { loginMutation } = useContext(UserContent);



  // const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState('');
  // const [dataMessage, setDataMessage] = useState('');

  // const { setUser } = useContext(UserContent)
  // const navigate = useNavigate()
  const [load, setLoad] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm();

  // const { loggedUser } = useContext(UserContent)
  const onSubmit = async (body) => {


    try {

      loginMutation.mutate(body)
    
    } catch (error) {
      console.log(error);

    }

    // setLoad(() => true)
    // try {
    //   const { data } = await axios.post('/api/v1/auth/login', body)
    //   if (data) {
    //     localStorage.setItem("access_token", data.access_token)
    //     console.log({ data });
    //     setUser(data.loggedUser)

    //     // reset();
    //     setIsLoggedIn(true);
    //     // console.log({isLoggedIn});
    //     (data.loggedUser.role == 'admin') ? navigate('/dashboard') : navigate('/')

    //     // const dataResponse = data.response.data;
    //     // const dataMessage = dataResponse.message;
    //     // setDataMessage(dataMessage);
    //   }
    // } catch (error) {
    //   if (error.response && error.response.data) {
    //     const errorResponse = error.response.data;
    //     const errorMessage = errorResponse.message;

    //     // Update the error message in the state
    //     setErrorMessage(errorMessage);
    //   }
    // }
    // setLoad(() => false)




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
          <div>{errors.password && <p style={{ color: 'red', fontSize: 'large' }}>Password is required</p>}</div>
          <div>
            {/* {dataMessage&& <div><p  style={{ color: 'red', fontSize: 'large' }}>{dataMessage}</p></div>} */}
            {errorMessage && <div><p style={{ color: 'red', fontSize: 'large' }}>{errorMessage}</p></div>}

            <Link to="/signup"> <span style={{ color: 'blue' }}>forgot Password?</span></Link>
            <Link to="/signup"> <span style={{ color: 'blue' }}> or Signup?</span></Link>
          </div>

          <div>
            <button className='sec-btn' disabled={load} >{load ? "loading..." : "login"}</button>


          </div>
        </form>
      </div>
    </div>
  )
}
Login.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};
Login.propTypes = {
  isLoggedIn: PropTypes.func.isRequired,
};
export default Login

