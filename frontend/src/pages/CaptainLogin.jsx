import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import {Link} from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const CaptainLogin = () => {
  const navigate = useNavigate()
  
    const { captain, setCaptain } = React.useContext(CaptainDataContext)

    const [email,setEmail] = useState(''); 
  const [password,setPassword] = useState('');
  const submitHandler = async (e) =>{
   e.preventDefault();
   
   const captain = {
     email: email,
     password: password
   }

   const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,captain)
    if(response.status === 200)
    {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captains/home') 
    }
   
   setEmail('');
   setPassword('');
  }
  return (
    <div className=''>
        
        <img className='w-28 mb-10 ml-5' src={Logo} alt="" />
        <div className='flex flex-col justify-between h-[43vw] items-center'>
        <div>
        <form onSubmit={(e) =>{
          submitHandler(e);
          
        }} className='flex flex-col justify-start'>

            <h3 className='text-3xl font-medium mb-3'>What's your email adress</h3>
            <input 
            required 
            value = {email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            type="email"
            className='bg-[#eeeeee] mb-5 rounded-xl text-lg placeholder:text-base px-4 py-2  w-80 border-2 border-[#eeeeee] focus:border-zinc-950 focus:outline-none '
             placeholder='Enter your email '/>
            <h3 className='text-3xl font-medium mb-3'>Enter your password</h3>
            <input
            required 
            value = {password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
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
        <p className='text-center'>Want join a fleet? <Link to='/captains/register' className='text-blue-600  font-medium'>Register as a captain</Link></p>
        </div>
        </div>
        <div>
        <Link
          to='/users/login'
          className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-80 text-lg placeholder:text-base'
        >Sign in as User</Link>
        </div>
        
        </div>
        
    </div>
  )
}

export default CaptainLogin