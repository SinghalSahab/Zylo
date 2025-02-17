import React from 'react'
import Logo from '../assets/Logo.png'
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

const CaptainRiding = () => {
  return (
    <div className='h-screen w-full'>
    <div className='fixed p-3 top-0 flex items-center justify-between w-screen'>
      <img className=' w-20 object-cover' src={Logo} alt="Logo" />

      <Link to='/captains/logout' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <LogoutIcon />
    </Link>
    </div>
    <div className='h-3/5 w-full'>
        <img className='h-full object-cover w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABLUH3RR9WY4ogN9jIsbV0QTaQWXDvEWW1A&s" alt="" />

    </div>
    <div className='h-2/5 p-4'>
         
    </div>

    
</div>
  )
}

export default CaptainRiding