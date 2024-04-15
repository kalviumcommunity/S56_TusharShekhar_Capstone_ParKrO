import React from 'react'
import main from '../assets/main.png'
import car from '../assets/car.png'
import img from '../assets/img.png'
import Instagram from '../assets/Instagram.png'
import Facebook from '../assets/Facebook.png'
import LinkedIn from '../assets/LinkedIn.png'
import YouTube from '../assets/YouTube.png'
import Parkrologo from '../assets/Parkrologo.png'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <div className='Navbar'><ul>
        <img src={Parkrologo} className='logo'></img>
        <li>Home</li>
        <li>Popular</li>
        <li><Link to='/about'>About Us</Link></li>
        <li><Link to='/faq'>FAQ</Link></li>
        <li className='logins '><Link to='/login'>Login</Link></li>
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
      <button className='btn1'>Generate QR Code</button>
      <button className='btn2'>Contact Us </button>
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

export default Home
