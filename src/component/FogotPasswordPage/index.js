import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate()

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const forgotPasswordBackendAPI = "https://starwarsserver.onrender.com/forgot-password"
    try {
      const response = await axios.post(forgotPasswordBackendAPI, { email });
      setMessage(response.data);
      setTimeout(() => navigate('/signin'), 10000);

    } catch (error) {
      console.error('Error sending email:', error);
      setMessage('Error sending email.');
    }
  };

  return (
    <div>
      <Header/>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 bgimgcontainer">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Forgot Password</h2>
        <form onSubmit={handleEmailSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Send Reset Email
          </button>
        </form>
        {message && <p className="mt-4 text-center text-green-600 font-semibold">{message}</p>}
    
      </div>
    </div>
    </div>
  );
};

export default ForgotPassword;
