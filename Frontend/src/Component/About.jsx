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
import profilei from '../assets/profilei.png'
import Line5  from '../assets/Line5.png';
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
        <Link to='/profiles'>
          <img src={profilei} className='profilei'></img>
          </Link>
      </ul>
      </div>
      <h1 className='about'>ABOUT US</h1>
      <hr className='line'></hr>
      <div >
      <img src={about1} className='about1' alt='About Image' />
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
      <h1 className='phrase'>Streamline your parking experience  
      <br></br>with our innovative solutions.</h1>
      <div className='contactusfooter'>
      <Link to='https://www.linkedin.com/in/tushar-shekhar-920272283/'><button className='footerbtn2'>Contact Us </button></Link>
      </div>
      <img src={Line5} className='line5'></img>
      <div className='Company'>
      <h1>Company</h1><br></br>
      {/* <ul className='companyul'> */}
        <li>About us</li>
        <li>Careers/Jobs</li>
        <li>Contact Us</li>
        <li>Contact Details</li>
        <li>Sitemap</li>
        <li>How to</li>
      {/* </ul> */}
      </div>
      <div className='legal'>
        <h1>Legal</h1><br></br>
      {/* <ul> */}
        <li>Link policy</li>
        <li>Advertising</li>
        <li>Disclaimer</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
        <li>My privacy</li>
      {/* </ul> */}
      </div>
      <div className='icons'>
       <Link to='https://www.youtube.com'><img src={YouTube} className='ico4'></img></Link><Link to='https://www.youtube.com'><h1>Youtube</h1></Link>
       <Link to='https://www.instagram.com/tusharshekhar_/'><img src={Instagram} className='ico1'></img></Link><Link to='https://www.instagram.com/tusharshekhar_/'><h1>Instagram</h1></Link>
       <Link to='https://www.facebook.com'><img src={Facebook} className='ico2'></img></Link><Link to='https://www.facebook.com'><h1>Facebook</h1></Link>
       <Link to='https://www.linkedin.com/in/tushar-shekhar-920272283/'><img src={LinkedIn} className='ico3'></img></Link><Link to='https://www.linkedin.com/in/tushar-shekhar-920272283/'><h1>Linkedin</h1></Link>
      </div>
      <h4 className='copyright'>© [ParKrO] [2024]</h4>
      <h4 className='gmail'>parkro@gmail.com</h4>
     </div>
    </div>
   
  )
}

export default About
