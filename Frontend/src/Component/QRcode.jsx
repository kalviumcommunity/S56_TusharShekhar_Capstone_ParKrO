import React, { useState } from 'react'
import genqrcode from '../assets/genqrcode.png'
import mansitting from '../assets/mansitting.png'
import img from '../assets/img.png'

const QRcode = () => {
    const[fullname,setFullname] = useState('') 
    const[vehicle,setVehicle] = useState('') 
    const[mobile,setMobile] = useState('') 
    const[vehicleNo,setVehicleNo] = useState('') 
    const[location,setLocation] = useState('') 
    const[generatebtn,setgeneratebtn] = useState('') 

    const generateQRCode = () => {
        const data = `Full Name: ${fullname}, Vehicle Type: ${vehicle}, Mobile Number: ${mobile}, Vehicle Number: ${vehicleNo}, Location: ${location}`;
        const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(data)}`;
        setgeneratebtn(qrCodeApiUrl);
      };
    
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
                <input type='text' placeholder='Your Full Name'value={fullname} onChange={(e)=>setFullname(e.target.value)}></input>
                <input type='text' placeholder='Vechicle type'value={vehicle} onChange={(e)=>setVehicle(e.target.value)}></input>
                <input type='text' placeholder='Your Mobile Number'value={mobile} onChange={(e)=>setMobile(e.target.value)}></input>
                <input type='text' placeholder='Vehicle Number'value={vehicleNo} onChange={(e)=>setVehicleNo(e.target.value)}></input>
                <input type='text' placeholder='Location'value={location} onChange={(e)=>setLocation(e.target.value)}></input>
                <button text='text' className='generatebtn' onClick={generateQRCode}>Generate</button>
            </div>


        </div>
        {generatebtn && <img src={generatebtn} alt="QR Code" className='generatedQRCode' />}
        <img src={img} alt="img" className='genimg'/> 
      
    </div>
  )
}

export default QRcode
