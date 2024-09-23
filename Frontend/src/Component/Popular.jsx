import React, { useState } from 'react';
import Parkrologo from '../assets/Parkrologo.png';
import profilei from '../assets/profilei.png';
import Instagram from '../assets/Instagram.png';
import Facebook from '../assets/Facebook.png';
import LinkedIn from '../assets/LinkedIn.png';
import YouTube from '../assets/YouTube.png';
import Line5 from '../assets/Line5.png';
import { Link } from 'react-router-dom';

const Popular = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className='Navbar'>
        <ul>
          <Link to='/'>
            <li><img src={Parkrologo} className='logo' alt="logo" /></li>
          </Link>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <li>Popular</li>
          <li><Link to='/about'>About Us</Link></li>
          <li>FAQ</li>
          <li className='logins'><Link to='/login'>Login</Link></li>
          <Link to='/profiles'>
            <img src={profilei} className='profilei' alt="profile" />
          </Link>
        </ul>
      </div>
      <div className='popular'>POPULAR</div>
      {/* <hr className='popularline' /> */}
      <div className='popularparking' onClick={toggleDropdown}>
        Parking-Related Issue Reporting
        <div className='dropwdown'>
        {isDropdownOpen ? (
          <span className="dropdown-symbol">&#9660;</span> // Down arrow
        ) : (
          <span className="dropdown-symbol">&#9654;</span> // Up arrow
        )}
        </div>
        </div>

      {isDropdownOpen && (
        <div className='dropdown-content'>
          <p>Unique QR Code Generation: Automatically generates a unique QR code for each vehicle registered, serving as the vehicle's digital identity.</p>
          {/* <p>More content...</p> */}
        </div>
      )}

      <div className='footer'>
        <h1 className='phrase'>Streamline your parking experience  
          <br />with our innovative solutions.
        </h1>
        <div className='contactusfooter'>
          <Link to='https://www.linkedin.com/in/tushar-shekhar-920272283/'>
            <button className='footerbtn2'>Contact Us</button>
          </Link>
        </div>
        <img src={Line5} className='line5' />
        <div className='Company'>
          <h1>Company</h1><br />
          <li>About us</li>
          <li>Careers/Jobs</li>
          <li>Contact Us</li>
          <li>Contact Details</li>
          <li>Sitemap</li>
          <li>How to</li>
        </div>
        <div className='legal'>
          <h1>Legal</h1><br />
          <li>Link policy</li>
          <li>Advertising</li>
          <li>Disclaimer</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>My privacy</li>
        </div>
        <div className='icons'>
          <Link to='https://www.youtube.com'>
            <img src={YouTube} className='ico4' alt="YouTube" />
          </Link>
          <Link to='https://www.youtube.com'>
            <h1>Youtube</h1>
          </Link>
          <Link to='https://www.instagram.com/tusharshekhar_/'>
            <img src={Instagram} className='ico1' alt="Instagram" />
          </Link>
          <Link to='https://www.instagram.com/tusharshekhar_/'>
            <h1>Instagram</h1>
          </Link>
          <Link to='https://www.facebook.com'>
            <img src={Facebook} className='ico2' alt="Facebook" />
          </Link>
          <Link to='https://www.facebook.com'>
            <h1>Facebook</h1>
          </Link>
          <Link to='https://www.linkedin.com/in/tushar-shekhar-920272283/'>
            <img src={LinkedIn} className='ico3' alt="LinkedIn" />
          </Link>
          <Link to='https://www.linkedin.com/in/tushar-shekhar-920272283/'>
            <h1>Linkedin</h1>
          </Link>
        </div>
        <h4 className='copyright'>© [ParKrO] [2024]</h4>
        <h4 className='gmail'>parkro@gmail.com</h4>
      </div>
    </div>
  );
};

export default Popular;
