import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setErrorMessage('Please provide your email.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3200/forgetpassword', { email });
      setSuccessMessage('OTP has been sent to your email.');
      setErrorMessage('');
      // Pass email to the next page for OTP verification
      navigate('/verify-otp', { state: { email } });
    } catch (error) {
      setErrorMessage('Error sending OTP: ' + (error.response?.data?.error || 'Unknown error'));
    }
  };

  return (
    <div className='forgot-container'>
      <h2>Forgot Password</h2>
      {errorMessage && <p className='error-message'>{errorMessage}</p>}
      {successMessage && <p className='success-message'>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type='submit'>Send OTP</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
