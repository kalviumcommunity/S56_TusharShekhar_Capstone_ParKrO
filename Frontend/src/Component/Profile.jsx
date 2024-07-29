import React from 'react'
import profile from '../assets/profile.png'
import img from '../assets/img.png'

const Profilei = () => {
  return (
    <div>
      <div>
        <h1 className='Hello'>Hello Tushar !</h1>
      </div>
      <div className='firstbox'>
        <img src={profile} className='firstimg'></img>
        <h3 className='firstboxname'>Tushar</h3>
      </div>
      <div className='secondbox'>
        <img src={profile} className='secondimg'>
        </img>
        <div className='secondboxinput'>
          <h3>Tushar Shekhar</h3>
          <h3>Vehicle No.-</h3>
          <h3>Age</h3>
          <h3>Licence No.-</h3>
          </div>
      </div>
      <div className='thirdbox'>
        <input type='text' placeholder='FullName'></input>
        <input type='text' placeholder='Age'></input>
        <input type='text' placeholder='License No.'></input>
        <input type='text' placeholder='Vehicle Type'></input>
        <input type='text' placeholder='Contact No.'></input>
        <input type='text' placeholder='Vehicle No.'></input>
        <input type='text' placeholder='Location'></input>
       <button type='update' className='profileupdate'>Update</button>
       <button type='cancel' className='profilecancel'>Cancel</button>
      </div>
      <div>
      <img src={img} className='desimg'></img>
     </div>
    </div>
  )
}

export default Profilei
