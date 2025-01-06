import React from 'react'
import Logo from '../assets/Logo.png'

const UserLogin = () => {
  return (
    <div className=''>
        <div>
        <img className='w-28 mb-10 ml-5' src={Logo} alt="" />
        <form className='flex flex-col justify-start items-center'>
            <h3 className='text-3xl mb-3'>What's your email adress</h3>
            <input 
            required 
            type="email"
            className='bg-[#eeeeee] mb-5 rounded-xl text-lg placeholder:text-base px-4 py-2  w-80 border-2 border-[#eeeeee] focus:border-zinc-950 focus:outline-none '
             placeholder='Enter your email '/>
            <h3 className='text-3xl mb-3 pl-0 ml-0'>Enter your Password</h3>
            <input
            required 
            type="password"
            className='bg-[#eeeeee] mb-5 rounded-xl text-lg placeholder:text-base px-4 py-2  w-80 border-2 border-[#eeeeee] focus:border-zinc-950 focus:outline-none'
             placeholder='password' />
            <button 
            className='bg-[#111] mb-5 rounded-xl text-white font-semibold placeholder:text-base px-4 py-2  w-80'
            >
                Login
            </button>
        </form>
        </div>
    </div>
  )
}

export default UserLogin