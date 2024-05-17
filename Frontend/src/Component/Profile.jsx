import React from 'react'
import profile from '../assets/profile.png'

const Profilei = () => {
  return (
    <div>
      <div>
        <h1>Hello Tushar !</h1>
      </div>
      <div className=''>
        <img src={profile}></img>
        <h3>Tushar</h3>
      </div>
      <div className='firstbox'>
        <img src={profile}>
          
        </img>
      </div>
    </div>
  )
}

export default Profilei
