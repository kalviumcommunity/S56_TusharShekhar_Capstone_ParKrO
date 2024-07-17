import React from 'react'
import profile from '../assets/profile.png'

const Profilei = () => {
  return (
    <div>
      <div>
        <h1 className='Hello'>Hello Tushar !</h1>
      </div>
      <div className='firstbox'>
        <img src={profile} className='firstimg'></img>
        <h3>Tushar</h3>
      </div>
      <div className='secondbox'>
        <img src={profile} className='secondimg'>
        </img>
          <h3>Tushar Shekhar</h3>
          <h3>Vehicle No.-</h3>
          <h3>Age</h3>
          <h3>Licence No.-</h3>
      </div>
      <div className='thirdbox'>
        <input type='text' placeholder='FullName'></input>
        <input type='text' placeholder='Age'></input>
        <input type='text' placeholder='License No.'></input>
        <input type='text' placeholder='Vehicle Type'></input>
        <input type='text' placeholder='Contact No.'></input>
        <input type='text' placeholder='Vehicle No.'></input>
        <input type='text' placeholder='Location'></input>
       <button type='update'>Update</button>
       <button>Cancel</button>
      </div>
    </div>
  )
}

export default Profilei
