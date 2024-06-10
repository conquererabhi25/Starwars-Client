import React, { useState,useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import Header from '../Header';
import "./index.css"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate =useNavigate()


  useEffect(()=>{
    const authorization = localStorage.getItem("userDetails")
    if(authorization){
        navigate("/")
    }
  },[])

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  const handleEmailChange =(e)=>{
    setEmail(e.target.value)
  }

  const handlePasswordChange =(e)=>{
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginApi = "https://starwarsserver.onrender.com/login"
    const options = {
        method: "post",
        body: JSON.stringify({email,password}),
        headers: {
          "Content-Type": "application/json",
        },
      };
    const serverResponse = await fetch(loginApi,options)
    const jsonData = await serverResponse.json()
    if(jsonData.auth){
        localStorage.setItem("userDetails",JSON.stringify(jsonData))
        localStorage.setItem("token",JSON.stringify(jsonData.auth))
        navigate("/")
      }
      else{
        alert("Please enter valid email id or password")
      }
  };

  return (
    <div>
      <Header/>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 bgimgcontainer">
   
   <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
     <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h2>
     <form onSubmit={handleSubmit}>
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
       <div className="mb-4">
         <label className="block text-gray-700">Password</label>
         <input
           type={showPassword ? 'text' : 'password'}
           name="password"
           placeholder="Enter your password"
           value={password}
           onChange={handlePasswordChange}
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
       <div className="mb-4 text-right">
         <Link className="text-blue-500 hover:underline" to="/forgot-password">Forgot Password?</Link>
         
       </div>
       <button
         type="submit"
         className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
       >
         Login
       </button>
     </form>
   </div>
 </div>
    </div>
  );
};

export default Login;
