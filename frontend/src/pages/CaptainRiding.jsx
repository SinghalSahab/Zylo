import React, { useRef, useState } from 'react'
import Logo from '../assets/Logo.png'
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import FinishRide from '../components/FinishRide';

 const CaptainRiding = () => {
    const [finishedRidePanel,setFinishedRidePanel] = useState(false);
    const finishedRidePanelRef = useRef(null);
    useGSAP(function () {
        if (finishedRidePanel) {
            gsap.to(finishedRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(finishedRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
      }, [ finishedRidePanel])
      
  return (
    <div className='h-screen w-full'>
    <div className='fixed p-3 top-0 flex items-center justify-between w-screen'>
      <img className=' w-20 object-cover' src={Logo} alt="Logo" />

      <Link to='/captains/logout' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <LogoutIcon />
    </Link>
    </div>
    <div className='h-4/5 w-full'>

        <img className='h-full object-cover w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABLUH3RR9WY4ogN9jIsbV0QTaQWXDvEWW1A&s" alt="" />

    </div>
    <div className='h-1/5 p-4 flex items-center justify-center bg-yellow-400 relative' onClick={() => {
        setFinishedRidePanel(true);
    }}>
    <h5 className='p-1 text-center w-[93%] absolute top-1' onClick={() => {
                
            }}><KeyboardArrowUpIcon /></h5>
         <h4 className='font-semibold text-xl'>4km Away</h4>
         <button className='w-full bg-green-500 py-3 rounded-full font-semibold text-xl text-white'>Complete ride</button>
    </div>

    <div ref={finishedRidePanelRef} className='fixed w-full z-10 translate-y-full h-screen bottom-0 bg-white px-3 py-6 pt-12'>
              <FinishRide setFinishedRidePanel={setFinishedRidePanel} />  
    </div>
</div>
  )
}

export default CaptainRiding