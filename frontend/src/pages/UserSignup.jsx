import React, { useState ,useContext} from 'react'
import Logo from '../assets/Logo.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'



const UserSignup = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ userData, setUserData ] = useState({})

  const navigate = useNavigate()



  const { user, setUser } = useContext(UserDataContext)




  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    }
    

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
    
    
    if (response.status === 201) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }


    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')

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
            value={firstName}
            onChange={(e)=>{
              setFirstName(e.target.value)
            }}
            type="text"
            className='bg-[#eeeeee] rounded-xl text-lg placeholder:text-base px-4 py-2 w-40 border-2 border-[#eeeeee] focus:border-zinc-950 focus:outline-none'
             placeholder='First name' />
             <input
            required 
            value={lastName}
            onChange={(e)=>{
              setLastName(e.target.value)
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