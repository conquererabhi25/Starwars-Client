import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Header';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const { token } = useParams();
  const navigate = useNavigate();

 // console.log(token)
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handlePasswordResetSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const resetPasswordBackendAPi = `https://starwarsserver.onrender.com/reset-password/${token}`
    try {
      const response = await axios.post(resetPasswordBackendAPi, { password: newPassword });
      setMessage(response.data);
      if (response.data === "Password has been reset.") {
       // setTimeout(() => navigate('/signin'), 2000); // Redirect to login page after 2 seconds
       console.log("Successfull")
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      setMessage('Error resetting password.');
    }
  };

  return (
    <div>

      <div className="min-h-screen flex items-center justify-center bg-gray-100 bgimgcontainer">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Reset Password</h2>
        <form onSubmit={handlePasswordResetSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">New Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="newPassword"
              placeholder="Enter new password"
              value={newPassword}
              onChange={handleNewPasswordChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={togglePasswordVisibility}
              className="mr-2"
            />
            <label htmlFor="showPassword" className="text-gray-700">Show Password</label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Reset Password
          </button>
        </form>
        {message && <p className="mt-4 text-center text-green-600 font-semibold">{message}</p>}
      </div>
    </div>
    </div>
  );
};

export default ResetPassword;
