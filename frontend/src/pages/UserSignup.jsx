import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import {Link} from 'react-router-dom'

const UserSignup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});
  const submitHandler = (e) => {
     e.preventDefault();

     setUserData({
       username:{
        firstname: firstname,
       lastname: lastname,
       },
       email: email,
       password: password
     })
     
     
     setFirstname('');
     setLastname('');
     setPassword('');
     setEmail('');
  }
  return (
    <div className=''>
        
        <img className='w-28 mb-10 ml-5' src={Logo} alt="" />
        <div className='flex flex-col justify-between h-[43vw] items-center'>
        <div>
        <form onSubmit={(e) =>{
          submitHandler(e);
        }} className='flex flex-col justify-start'>

            <h3 className='text-3xl font-medium mb-3'>What's your name</h3>
            <div className='gap-2 flex mb-5'>
            <input
            required 
            value={firstname}
            onChange={(e)=>{
              setFirstname(e.target.value)
            }}
            type="text"
            className='bg-[#eeeeee] rounded-xl text-lg placeholder:text-base px-4 py-2 w-40 border-2 border-[#eeeeee] focus:border-zinc-950 focus:outline-none'
             placeholder='First name' />
             <input
            required 
            value={lastname}
            onChange={(e)=>{
              setLastname(e.target.value)
            }}
            type="text"
            className='bg-[#eeeeee] rounded-xl text-lg placeholder:text-base px-4 py-2  w-40 border-2 border-[#eeeeee] focus:border-zinc-950 focus:outline-none'
             placeholder='Last name' />
            </div>
            <h3 className='text-3xl font-medium mb-3'>What's your email adress</h3>
            <input 
            required 
            value={email}
            onChange = {(e) =>{
              setEmail(e.target.value);
            }}
            type="email"
            className='bg-[#eeeeee] mb-5 rounded-xl text-lg placeholder:text-base px-4 py-2  w-80 border-2 border-[#eeeeee] focus:border-zinc-950 focus:outline-none '
             placeholder='Enter your email '/>
            <h3 className='text-3xl font-medium mb-3'>Enter your password</h3>
            <input
            required 
            value={password}
            onChange = {(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className='bg-[#eeeeee] mb-5 rounded-xl text-lg placeholder:text-base px-4 py-2  w-80 border-2 border-[#eeeeee] focus:border-zinc-950 focus:outline-none'
             placeholder='password' />
            <button 
            className='bg-[#111] mb-1 rounded-xl text-white font-semibold placeholder:text-base px-4 py-2  w-80 '
            >
                Sign Up
            </button>
        </form>
        
        <div>
          <p className='text-center'>Already have an account? <Link to='/users/login' className='text-blue-600  font-medium'>Login here!</Link></p>
        </div>
        </div>
        <div>
        <p className='text-xs leading-tight'>
          By proceeding, you consent to get emails, including by automated means, from Zylo and its affiliates to the number provided.
        </p>
        </div>
        
        </div>
        
    </div>
  )
}

export default UserSignup