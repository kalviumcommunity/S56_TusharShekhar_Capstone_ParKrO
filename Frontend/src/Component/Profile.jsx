import React, { useState } from 'react';
import profile from '../assets/profile.png';
import img from '../assets/img.png';
import axios from 'axios';

const Profilei = () => {
  const [formData, setFormData] = useState({
    fullname: 'Tushar Shekhar',
    age: '',
    licenseNo: '',
    vehicleType: '',
    contactNo: '',
    vehicleNo: '',
    location: '',
    vehicleImg: null, // For storing vehicle image
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, vehicleImg: e.target.files[0] });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = async () => {
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await axios.post('http://localhost:3200/profile/update', data);
      alert('Profile updated successfully!');
      setIsEditing(false);
    } catch (error) {
      console.error(error);
      alert('Failed to update profile');
    }
  };

  return (
    <div>
      <div>
        <h1 className='Hello'>Hello Tushar!</h1>
      </div>
      <div className='firstbox'>
        <img src={profile} className='firstimg' alt="Profile" />
        <h3 className='firstboxname'>Tushar</h3>
      </div>
      <div className='secondbox'>
        <img src={profile} className='secondimg' alt="Profile" />
        <div className='secondboxinput'>
          <h3>{formData.fullname}</h3>
          <h3>Vehicle No.- {formData.vehicleNo}</h3>
          <h3>Age- {formData.age}</h3>
          <h3>License No.- {formData.licenseNo}</h3>
        </div>
      </div>
      {isEditing ? (
        <div className='thirdbox'>
          <input type='text' name='fullname' placeholder='FullName' value={formData.fullname} onChange={handleInputChange} />
          <input type='text' name='age' placeholder='Age' value={formData.age} onChange={handleInputChange} />
          <input type='text' name='licenseNo' placeholder='License No.' value={formData.licenseNo} onChange={handleInputChange} />
          <input type='text' name='vehicleType' placeholder='Vehicle Type' value={formData.vehicleType} onChange={handleInputChange} />
          <input type='text' name='contactNo' placeholder='Contact No.' value={formData.contactNo} onChange={handleInputChange} />
          <input type='text' name='vehicleNo' placeholder='Vehicle No.' value={formData.vehicleNo} onChange={handleInputChange} />
          <input type='text' name='location' placeholder='Location' value={formData.location} onChange={handleInputChange} />
          <input type="file" onChange={handleImageChange} />
          <button type='button' className='profileupdate' onClick={handleUpdate}>Update</button>
          <button type='button' className='profilecancel' onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <button className='editBtn' onClick={handleEdit}>Edit Profile</button>
      )}
      <div>
        <img src={img} className='desimg' alt="Other" />
      </div>
    </div>
  );
};

export default Profilei;
