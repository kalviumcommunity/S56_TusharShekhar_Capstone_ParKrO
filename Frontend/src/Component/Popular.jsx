import React from 'react'
import Parkrologo from '../assets/Parkrologo.png'
import profilei from '../assets/profilei.png'
import Instagram from '../assets/Instagram.png'
import Facebook from '../assets/Facebook.png'
import LinkedIn from '../assets/LinkedIn.png'
import YouTube from '../assets/YouTube.png'
import Line5  from '../assets/Line5.png';
import { Link } from 'react-router-dom';

const Popular = () => {
  return (
    <div>
           <div className='Navbar'>
        <ul>
          <Link to='/'>
            <li><img src={Parkrologo} className='logo' alt="logo"></img></li>
          </Link>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <li>Popular</li>
          <li><Link to='/about'>About Us</Link></li>
          <li>FAQ</li>
          <li className='logins'><Link to='/login'>Login</Link></li>
          <Link to='/profiles'>
            <img src={profilei} className='profilei' alt="profile"></img>
          </Link>
        </ul>
      </div>
      <div className='popular'>POPULAR</div>
      <hr className='popularline'></hr>
      <div className='popularparking'>Parking-Related Issue Reporting</div>
        


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

export default Popular
