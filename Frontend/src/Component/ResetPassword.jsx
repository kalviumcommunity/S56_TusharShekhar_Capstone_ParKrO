import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state; // Get the email passed from OTP page

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password) {
      setErrorMessage('Please provide a new password.');
      return;
    }

    try {
      const response = await axios.put('http://localhost:3200/resetpassword', { email, password });
      setSuccessMessage('Password reset successfully. You can now log in.');
      setErrorMessage('');
      navigate('/login');
    } catch (error) {
      setErrorMessage('Error resetting password: ' + (error.response?.data?.error || 'Unknown error'));
    }
  };

  return (
    <div className='reset-password-container'>
      <h2>Reset Password</h2>
      {errorMessage && <p className='error-message'>{errorMessage}</p>}
      {successMessage && <p className='success-message'>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type='password'
          placeholder='Enter new password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
