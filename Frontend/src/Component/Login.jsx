import React, { useState } from 'react';
import Parkrologo from '../assets/Parkrologo.png';
import carlogin from '../assets/carlogin.png';
import line from '../assets/line.png';
import GooglePlus from '../assets/GooglePlus.png';
import Facebook from '../assets/Facebook.png';
import Apple from '../assets/Apple.png';
import img from '../assets/img.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3200/login', {
        email,
        password
      });
      localStorage.setItem('token', response.data.token);
      setErrorMessage('');
      navigate('/');
      window.location.reload('');
    } catch (error) {
      setErrorMessage('Error logging in: ' + error.response.data.message);
    }
  };

  return (
    <div className='mainlogin'>
      <div className='login'>
        <Link to='/'>
          <img src={Parkrologo} className='parkrologo' alt='Parkro Logo' />
        </Link>
        <h3 className='access'>
          Access your world with a single
          <br />
          click Login Now.
        </h3>
        <img src={carlogin} className='carlogin' alt='Car Login' />
        <div className='lobox'>
          <h2 className='welcome'>Welcome Back !</h2>
          <h3 classNa me='simplify'>
            Simplify your parking experience and
            <br />
            elevate your efficiency with Parkro's
            <br />
            solution. Start for free.
          </h3>
          {errorMessage && <p className='error-message'>{errorMessage}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type='email'
              placeholder='Email'
              className='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Password'
              className='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <h5 className='forgot'>Forgot Password?</h5>
            <button type='submit' className='logbtn'>
              Login
            </button>
          </form>
          <div className='left'>
            <img src={line} alt='Line' />
          </div>
          <div className='right'>
            <img src={line} alt='Line' />
          </div>
          <h6 className='or'>Or Continue with</h6>
          <div className='loginicon'>
            <img src={GooglePlus} className='gplus' alt='Google Plus' />
            <img src={Apple} className='apple' alt='Apple' />
            <img src={Facebook} className='logface' alt='Facebook' />
          </div>
          <h5 className='not'>Not a member ? </h5>
          <Link to='/signup'>
            <h5 className='sign'>Sign Up</h5>
          </Link>
        </div>
        <img src={img} className='logimg' alt='Image' />
      </div>
    </div>
  );
};

export default Login;
