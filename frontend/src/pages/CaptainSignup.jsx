import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import {Link} from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const CaptainSignup = () => {

  const navigate = useNavigate()

  const { captain, setCaptain } = React.useContext(CaptainDataContext)

  const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [ vehicleColor, setVehicleColor ] = useState('')
    const [ vehiclePlate, setVehiclePlate ] = useState('')
    const [ vehicleCapacity, setVehicleCapacity ] = useState('')
    const [ vehicleType, setVehicleType ] = useState('')

    const submitHandler = async (e) => {
       e.preventDefault();
  
       const captainData = {
        fullname:{
          firstname: firstname,
         lastname: lastname,
         },
         email: email,
         password: password,
         vehicle:{
           color: vehicleColor,
           plate: vehiclePlate,
           capacity: vehicleCapacity,
           vehicleType: vehicleType,
         }
       }
       
       const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

       if (response.status === 201) {
         const data = response.data
         setCaptain(data.captain)
         localStorage.setItem('token', data.token)
         navigate('/captains/home')
       }


       setFirstname('');
       setLastname('');
       setPassword('');
       setEmail('');
       setVehicleColor('');
       setVehiclePlate('');
       setVehicleCapacity('');
       setVehicleType('');
    }
  return (
    
    <div className=''>
        
        <img className='w-28 mb-10 ml-5' src={Logo} alt="" />
        <div className='flex flex-col justify-between h-[43vw] items-center'>
        <div>
        <form onSubmit={(e) =>{
          submitHandler(e);
        }} className='flex flex-col justigy-center'>

            <h3 className='text-xl font-medium mb-3'>What's your name</h3>
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
            <h3 className='text-xl font-medium mb-3'>What's your email adress</h3>
            <input 
            required 
            value={email}
            onChange = {(e) =>{
              setEmail(e.target.value);
            }}
            type="email"
            className='bg-[#eeeeee] mb-5 rounded-xl text-lg placeholder:text-base px-4 py-2  w-80 border-2 border-[#eeeeee] focus:border-zinc-950 focus:outline-none '
             placeholder='Enter your email '/>
            <h3 className='text-xl font-medium mb-3'>Enter your password</h3>
            <input
            required 
            value={password}
            onChange = {(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className='bg-[#eeeeee] mb-5 rounded-xl text-lg placeholder:text-base px-4 py-2  w-80 border-2 border-[#eeeeee] focus:border-zinc-950 focus:outline-none'
             placeholder='password' />

            <h3 className='text-xl font-medium mb-3'>What's your vehicles's information</h3>
             <div>
                <div className='gap-4 flex'>
                <input 
            required 
            value={vehicleColor}
            onChange = {(e) =>{
              setVehicleColor(e.target.value);
            }}
            type="text"
            className='bg-[#eeeeee] mb-5 rounded-xl text-lg placeholder:text-base px-4 py-2  w-80 border-2 border-[#eeeeee] focus:border-zinc-950 focus:outline-none '
             placeholder='Vehicle Colour '/>  
             
             <input 
            required 
            value={vehiclePlate}
            onChange = {(e) =>{
              setVehiclePlate(e.target.value);
            }}
            type="text"
            className='bg-[#eeeeee] mb-5 rounded-xl text-lg placeholder:text-base px-4 py-2  w-80 border-2 border-[#eeeeee] focus:border-zinc-950 focus:outline-none '
             placeholder='Vehicle Plate '/>  
                </div>

                <div className='gap-4 flex'>
                <input 
            required 
            type="number"
            placeholder='Vehicle Capacity'
            value={vehicleCapacity}
            onChange={(e) => {
              setVehicleCapacity(e.target.value)
            }}
            className='bg-[#eeeeee] mb-5 rounded-xl text-lg placeholder:text-base px-4 py-2  w-80 border-2 border-[#eeeeee] focus:border-zinc-950 focus:outline-none '
            />  

              <select
              required
              className='bg-[#eeeeee] mb-5 rounded-xl text-gray-400 text-base  px-4 py-2  w-80 border-2 border-[#eeeeee] focus:border-zinc-950 focus:outline-none'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option  value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Motorcycle</option>
            </select> 
                </div>
             </div>

            <button 
            className='bg-[#111] mb-1 rounded-xl text-white font-semibold placeholder:text-base px-4 py-2  w-80 '
            >
                Sign Up
            </button>
        </form>
        
        <div>
        <p className='text-center'>Already have an account? <Link to='/captains/login' className='text-blue-600  font-medium'>Login here!</Link></p>
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

export default CaptainSignup