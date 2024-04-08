import React from 'react'
import Parkrologo from '../assets/Parkrologo.png'
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
    </div>
  )
}

export default FAQ
