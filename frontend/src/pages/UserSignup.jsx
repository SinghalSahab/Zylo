import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import {Link} from 'react-router-dom'

const UserSignup = () => {
  return (
    <div className=''>
        
        <img className='w-28 mb-10 ml-5' src={Logo} alt="" />
        <div className='flex flex-col justify-between h-[43vw] items-center'>
        <div>
        <form className='flex flex-col justify-start'>

            <h3 className='text-3xl font-medium mb-3'>What's your name</h3>
            <div className='gap-4 flex mb-5'>
            <input
            required 
            
            type="text"
            className='bg-[#eeeeee] rounded-xl text-lg placeholder:text-base px-4 py-2 w-1/2 border-2 border-[#eeeeee] focus:border-zinc-950 focus:outline-none'
             placeholder='First name' />
             <input
            required 
            
            type="password"
            className='bg-[#eeeeee] rounded-xl text-lg placeholder:text-base px-4 py-2  w-1/2 border-2 border-[#eeeeee] focus:border-zinc-950 focus:outline-none'
             placeholder='Last name' />
            </div>
            <h3 className='text-3xl font-medium mb-3'>What's your email adress</h3>
            <input 
            required 
            
            type="text"
            className='bg-[#eeeeee] mb-5 rounded-xl text-lg placeholder:text-base px-4 py-2  w-80 border-2 border-[#eeeeee] focus:border-zinc-950 focus:outline-none '
             placeholder='Enter your email '/>
            <h3 className='text-3xl font-medium mb-3'>Enter your password</h3>
            <input
            required 
            
            type="password"
            className='bg-[#eeeeee] mb-5 rounded-xl text-lg placeholder:text-base px-4 py-2  w-80 border-2 border-[#eeeeee] focus:border-zinc-950 focus:outline-none'
             placeholder='password' />
            <button 
            className='bg-[#111] mb-1 rounded-xl text-white font-semibold placeholder:text-base px-4 py-2  w-80 '
            >
                Login
            </button>
        </form>
        
        <div>
          New here? <Link to='/users/register' className='text-blue-600  font-medium'>Create new account</Link>
        </div>
        </div>
        <div>
        <Link
          to='/captains/login'
          className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-80 text-lg placeholder:text-base'
        >Sign in as Captain</Link>
        </div>
        
        </div>
        
    </div>
  )
}

export default UserSignup