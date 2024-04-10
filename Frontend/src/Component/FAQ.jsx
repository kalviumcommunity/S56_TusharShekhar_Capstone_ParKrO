import React from 'react'
import Parkrologo from '../assets/Parkrologo.png'
import faq1 from '../assets/faq1.png'
import faq2 from '../assets/faq2.png'
import carlogin from '../assets/carlogin.png'
import Instagram from '../assets/Instagram.png'
import Facebook from '../assets/Facebook.png'
import LinkedIn from '../assets/LinkedIn.png'
import YouTube from '../assets/YouTube.png'
import img from '../assets/img.png'
import { Link } from 'react-router-dom'

const FAQ = () => {
  return (
    <div>
      <div className='Navbar'><ul>
      <Link to='/'>
        <li><img src={Parkrologo} className='logo'></img></li>
        </Link>
        <Link to='/'>
        <li>Home</li>
        </Link>
        <li>Popular</li>
        <li><Link to='/about'>About Us</Link></li>
        <li>FAQ</li>
        <li className='logins '><Link to='/login'>Login/SignUp</Link></li>
      </ul>
      </div>
      <div>
        <h1 className='faq'>FAQ’s</h1>
        <hr className='faqline'></hr>
      </div>
      <div>
        <h3 className='que1'>Q.What is ParkrO ?</h3>
        <div>
          <div className='bans1'>
            <h3 className='ans1'>"ParKrO: A web-based platform 
              <br></br>leveraging QR code technology to
              <br></br> revolutionize parking 
              <br></br>management, ensuring privacy, 
              <br></br>seamless space reservation, and 
              <br></br>effective resolution of parking 
              <br></br>issues."</h3>
          </div>
        </div>
      </div>
      <div>
        <img src={faq1} className='faq1' alt='faq1'></img>
      </div>
      
      <div>
        <h3 className='que2'>Q.  What are the main features of ParKro ?</h3>
        <div>
          <div className='bans2'>
            <h3 className='ans2'>Unique QR Code Generation for each 
            <br></br>registered vehicle.
            <br></br>Parking-related issue reporting via QR 
            <br></br>code scanning for prompt resolutions.</h3>
          </div>
        </div>
      </div>
      <div>
        <img src={faq2} className='faq2'></img>
      </div>
      
      <div className='query'>
        
      <h3 className='got'>Got a ParKrO Query  ?</h3>
      <div>
        <img src={carlogin} className='faq3'></img>
      </div>
      <div className='querbox'>
      <div><img src={Parkrologo} className='faq4'></img></div>
        <input type='text' placeholder='Your Full Name'></input>
        <input type='text' placeholder='Your Email address '></input>
        <input type='text' placeholder='Your Mobile Number'></input>
        <input type='text' placeholder='Your City'></input>
        <input type='text' placeholder='Your Query'></input>
        <button type='text' className='sendbtn'>Send</button>
      </div>
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

export default FAQ
