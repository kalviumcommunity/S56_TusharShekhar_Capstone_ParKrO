import React from 'react'
import Parkrologo from '../assets/Parkrologo.png'
import carlogin from '../assets/carlogin.png'
import line from '../assets/line.png'
import GooglePlus from '../assets/GooglePlus.png'
import Facebook from '../assets/Facebook.png'
import Apple from '../assets/Apple.png'
import img from '../assets/img.png'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Login = () => {
  return (
    <div className='mainlogin'>
     <div className='login'>
        <Link to='/'>
        <img src={Parkrologo} className='parkrologo'></img>
        </Link>
        <h3 className='access'>Access your world with a single
            <br></br> click Login Now.</h3>
        <img src={carlogin} className='carlogin'></img>
        <div className='lobox'>
            <h2 className='welcome'>Welcome Back !</h2>
            <h3 className='simplify'>Simplify your parking experience and 
                <br></br>elevate your efficiency with Parkro's 
                <br></br>solution. Start for free.</h3>
            <input type='text' placeholder='Username' className='username'></input>
            <input type='password' placeholder='Password'></input>
            <h5 className='forgot'>Forgot Password?</h5>
            <button type='text' className='logbtn'> Login</button>
            <div className='left'><img src={line}></img></div>
            <div className='right'><img src={line}></img></div>
            <h6 className='or'>Or Continue with</h6>
            <div className='loginicon'>
                <img src={GooglePlus} className='gplus'></img>
                <img src={Apple} className='apple'></img>
                <img src={Facebook} className='logface'></img>
            </div>
            <h5 className='not'>Not a member ? </h5>
            <Link to='/signup'>
            <h5 className='sign'>Sign Up</h5>
            </Link>
        </div>
        <img src={img} className='logimg'></img>
     </div>

  
    </div>
  )
}

export default Login
