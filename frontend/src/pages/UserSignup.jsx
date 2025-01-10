import React from 'react'
import Logo from '../assets/Logo.png'

const UserSignup = () => {
  return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
           <img className='w-28 mb-10 ml-5' src={Logo} alt="" />
           <form >
            <h3 className='text-2xl w-1/2  font-medium mb-2'>What's your name</h3>
            <div className='flex gap-4 mb-6'>
              <input 
              type="text"
              required
              placeholder='Enter your first name'
              className='bg-[#eeeeee] rounded-xl  w-52 px-3 py-2 placeholder:text-base border-2 border-[#eeeeee] focus:border-zinc-950 focus:outline-none' />
              <input
               type="text"
               placeholder='Enter your last name'
               className='bg-[#eeeeee] rounded-xl w-52 px-3 py-2 placeholder:text-base border-2 border-[#eeeeee] focus:border-zinc-950 focus:outline-none' />
            </div>
            <h3 className='text-2xl w-1/2  font-medium mb-2'>What's your email address</h3>
            <input 
            type="email"
            required
            placeholder='Enter your email'
            className='bg-[#eeeeee] rounded-xl w-52 mb-6 px-3 py-2 placeholder:text-base border-2 border-[#eeeeee] focus:border-zinc-950 focus:outline-none' />
            <h3 className='text-2xl w-1/2  font-medium mb-2'>Enter your password</h3>
            <input 
            type="password"
            required
            placeholder='Enter your password'
            className='bg-[#eeeeee] rounded-xl w-52 mb-6 px-3 py-2 placeholder:text-base border-2 border-[#eeeeee] focus:border-zinc-950 focus:outline-none' />
<br/>
           <button className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-80 text-lg placeholder:text-base'>
            Create account
            </button>
           </form>
        </div>
      </div>
    </div>
  )
}

export default UserSignup