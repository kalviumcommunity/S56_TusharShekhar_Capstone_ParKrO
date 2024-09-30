import React from 'react'
import main from '../assets/main.png'
import car from '../assets/car.png'
import img from '../assets/img.png'
import Instagram from '../assets/Instagram.png'
import Facebook from '../assets/Facebook.png'
import LinkedIn from '../assets/LinkedIn.png'
import YouTube from '../assets/YouTube.png'
import Parkrologo from '../assets/Parkrologo.png'
import profilei from '../assets/profilei.png'
import Line5  from '../assets/Line5.png';
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <div className='Navbar'><ul>
        <img src={Parkrologo} className='logo'></img>
        <li>Home</li>
        <li><Link to='/popular'>Popular</Link></li>
        <li><Link to='/about'>About Us</Link></li>
        <li><Link to='/faq'>FAQ</Link></li>
        <li className='logins '><Link to='/login'>Login</Link></li>
        <Link to='/profiles'>
          <img src={profilei} className='profilei'></img>
          </Link>
      </ul>
      </div>
      <div className='intro'>
      <h1 className='one'>One stop solution  for
      <br></br>
      your Parking 
      <br></br>issues !</h1>
      <h3 className='most'>most unique and fastest way
        <br></br> of resolving parking problems 
        <br></br>in cities</h3>
      </div>
      <div>
        <img src={main} className='img1'></img>
      </div>
     <div className='btn'>
      <Link to='/generate'>
      <button className='btn1'>Generate QR Code</button>
      </Link>
      <Link to='https://www.linkedin.com/in/tushar-shekhar-920272283/'><button className='btn2'>Contact Us </button></Link>
     </div>
     <div className='unlock'>
      <h2 className='puzzle'>Unlocking the puzzle with problem-solving
        <br></br>
        prowess.
      </h2>
     </div>
     <div className='cont1'>
      <img src={car} className='img2'></img>
     </div>
     <div className='Stream'>
     <h1 className='QR'>"Streamlining parking 
     <br></br>
     solutions, one QR code at a 
     <br></br>
     time."
     </h1>
     <h3 className='scan'>Scan a QR code, transform parking
      <br></br>into a seamless, hassle-free 
      <br></br>experience</h3>
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
     <div>
      {/* <img src={img} className='desimg'></img> */}
     </div>
    </div>
  )
}

export default Home
