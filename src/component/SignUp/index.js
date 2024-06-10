import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
import Header from '../Header';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const navigate = useNavigate()


  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post('https://starwarsserver.onrender.com/signup', formData);
      console.log(response.data);
      // Handle successful response
     navigate("/signin")
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div>
      <Header/>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 bgimgcontainer">
     
     <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
       <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Sign Up</h2>
       <form onSubmit={handleSubmit}>
         <div className="mb-4">
           <label className="block text-gray-700">Name</label>
           <input
             type="text"
             name="name"
             placeholder="Enter your name"
             value={formData.name}
             onChange={handleChange}
             className="mt-1 p-2 w-full border rounded-md"
             required
           />
         </div>
         <div className="mb-4">
           <label className="block text-gray-700">Email</label>
           <input
             type="email"
             name="email"
             placeholder="Enter your email"
             value={formData.email}
             onChange={handleChange}
             className="mt-1 p-2 w-full border rounded-md"
             required
           />
         </div>
         <div className="mb-4">
           <label className="block text-gray-700">Password</label>
           <input
             type={showPassword ? 'text' : 'password'}
             name="password"
             placeholder="Enter your password"
             value={formData.password}
             onChange={handleChange}
             className="mt-1 p-2 w-full border rounded-md"
             required
           />
         </div>
         <div className="mb-4">
           <label className="block text-gray-700">Confirm Password</label>
           <input
             type={showPassword ? 'text' : 'password'}
             name="confirmPassword"
             placeholder="Confirm your password"
             value={formData.confirmPassword}
             onChange={handleChange}
             className="mt-1 p-2 w-full border rounded-md"
             required
           />
         </div>
         <div className="mb-4 flex items-center">
           <input
             type="checkbox"
             id="showPassword"
             checked={showPassword}
             onChange={() => setShowPassword(!showPassword)}
             className="mr-2"
           />
           <label htmlFor="showPassword" className="text-gray-700">Show Password</label>
         </div>
         <button
           type="submit"
           className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
         >
           Sign Up
         </button>
       </form>
     </div>
   </div>
    </div>
  );
};

export default SignUp;
