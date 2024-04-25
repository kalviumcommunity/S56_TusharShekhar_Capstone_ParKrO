import React from 'react'
import Parkrologo from '../assets/Parkrologo.png'
import about1 from '../assets/about1.png'
import profile from '../assets/profile.png'
import carab from '../assets/carab.png'
import Instagram from '../assets/Instagram.png'
import Facebook from '../assets/Facebook.png'
import LinkedIn from '../assets/LinkedIn.png'
import YouTube from '../assets/YouTube.png'
import img from '../assets/img.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className='Navbar'><ul>
      <Link to='/'>
        <li><img src={Parkrologo} className='logo' alt='Parkro Logo'></img></li>
        </Link>
        <div className='home'>
        <Link to='/'>
        <li>Home</li>
        </Link>
        </div>
        <li>Popular</li>
        <li><Link to='/about'>About Us</Link></li>
        <li><Link to={'/faq'}>FAQ</Link></li>
        <li className='logins '><Link to='/login'>Login</Link></li>
      </ul>
      </div>
      <h1 className='about'>ABOUT US</h1>
      <hr className='line'></hr>
      <div >
        <img src={about1} className='about1'></img>
      </div>
      <div className='teparkro'>
        <h3 className='prkro'>"ParKrO revolutionizes 
        <br></br>parking with QR codes, 
        <br></br>offering privacy, efficient
        <br></br> problem resolution, and 
        <br></br>space reservation, making it
        <br></br> a pioneering platform for
        <br></br>hassle-free parking 
        <br></br>management."</h3>
      </div>
      <div>
        <img src={profile} className='profile'></img>
        <h4 className='name'>Tushar Shekhar</h4>
      </div>
      <div className='protext'>
        <h2 className='automaticall'>“Automatically generates a unique
        <br></br> QR code for each vehicle registered,
        <br></br> serving as the vehicle's digital 
        <br></br> identity.”</h2>
      </div>
      <div>
        <img src={carab} className='carab'></img>
      </div>
      <div className='footer'>
      <h1 className='phrase'>“Streamline your parking experience with our 
      <br></br>innovative solutions.”</h1>
      <h4 className='gmail'>parkro@gmail.com</h4>
      <div className='icons'>
        <img src={Instagram} className='ico1'></img>
        <img src={Facebook} className='ico2'></img>
        <img src={LinkedIn} className='ico3'></img>
        <img src={YouTube} className='ico4'></img>
      </div>
     </div>
     <div>
      <img src={img} className='desimg'></img>
     </div>
    </div>
  )
}

export default About
