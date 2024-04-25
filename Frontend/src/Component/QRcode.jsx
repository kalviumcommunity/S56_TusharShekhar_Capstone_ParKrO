import React from 'react'
import genqrcode from '../assets/genqrcode.png'
import mansitting from '../assets/mansitting.png'
import img from '../assets/img.png'

const QRcode = () => {
  return (
    <div>
        <div className='generatebox'>
            <div className='Generate'>
            Generate Your Own QR code ?
            </div>
            <div>
                <img src={genqrcode} alt="genqrocode" className='genqrcode'/>
            </div>
            <div>
                <img src={mansitting} alt="mansitting" className='mansitting'/>
            </div>
            <div className='genbox'>
                <input type='text' placeholder='Your Full Name'></input>
                <input type='text' placeholder='Vechicle type'></input>
                <input type='text' placeholder='Your Mobile Number'></input>
                <input type='text' placeholder='Vehicle Number'></input>
                <input type='text' placeholder='Location'></input>
                <button text='text' className='generatebtn'>Generate</button>
            </div>


        </div>
        <img src={img} alt="img" className='genimg'/> 
      
    </div>
  )
}

export default QRcode
