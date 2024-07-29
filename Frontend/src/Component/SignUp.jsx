import React, { useState } from 'react';
import Parkrologo from '../assets/Parkrologo.png';
import carlogin from '../assets/carlogin.png';
import line from '../assets/line.png';
import GooglePlus from '../assets/GooglePlus.png';
import Facebook from '../assets/Facebook.png';
import Apple from '../assets/Apple.png';
import img from '../assets/img.png';
import { Link } from 'react-router-dom';
import axios from 'axios'; 

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!/(?=.*[a-zA-Z])(?=.*\d).{8,}/.test(password)) {
      setErrorMessage('Password must contain at least 1 letter, 1 number, and be at least 8 characters long.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3200/signup', {
        email,
        password
      });
      setSuccessMessage('User signed up successfully!');
      setErrorMessage('');
      window.location.reload();
    } catch (error) {
      if (error.response && error.response.status === 400 && error.response.data.message === 'Email is already registered') {
        setErrorMessage('This email is already registered.');
      } else {
        setErrorMessage('Error signing up user: ' + error.message);
      }
      setSuccessMessage('');
    }
  };

  return (
    <div className='mainlogin'>
      <h3> 
        {successMessage && <p className='success-message'>{successMessage}</p>}
        {errorMessage && <p className='error-message'>{errorMessage}</p>}
      </h3>
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
          <h2 className='welcome'>Welcome !</h2>
          <h3 className='simplify'>
            Simplify your parking experience and
            <br />
            elevate your efficiency with Parkro's
            <br />
            solution. Start for free.
          </h3>
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <h5 className='forgot'>Forgot Password?</h5>
            <button type='submit' className='logbtn'>
              Sign Up
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
        </div>
        <img src={img} className='logimg' alt='Image' />
      </div>
    </div>
  );
};

export default SignUp;
