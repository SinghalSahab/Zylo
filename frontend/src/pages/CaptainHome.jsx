import React, { useRef, useState } from 'react'

import { Link } from'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import Logo from '../assets/Logo.png'

import CaptainDetails from '../components/CaptainDetails';
import RidePopup from '../components/RidePopup';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ConfirmRidePopup from '../components/ConfirmRidePopup';

const CaptainHome = () => {

   const [RidePopupPanel, setRidePopupPanel] = useState(true)
   const [ConfirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)
   const RidePopupPanelRef = useRef(null)
   const ConfirmRidePopupPanelRef = useRef(null)


   useGSAP(function () {
    if (RidePopupPanel) {
        gsap.to(RidePopupPanelRef.current, {
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(RidePopupPanelRef.current, {
            transform: 'translateY(100%)'
        })
    }
}, [ RidePopupPanel])

useGSAP(function () {
  if (ConfirmRidePopupPanel) {
      gsap.to(ConfirmRidePopupPanelRef.current, {
          transform: 'translateY(0)'
      })
  } else {
      gsap.to(ConfirmRidePopupPanelRef.current, {
          transform: 'translateY(100%)'
      })
  }
}, [ ConfirmRidePopupPanel])
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
         <CaptainDetails />
    </div>

    <div ref={RidePopupPanelRef} className='fixed w-full z-10 translate-y-full bottom-0 bg-white px-3 py-6 pt-12'>
         <RidePopup setRidePopupPanel = {setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>       
    </div>

    <div ref={ConfirmRidePopupPanelRef} className='fixed w-full z-10 translate-y-full h-screen bottom-0 bg-white px-3 py-6 pt-12'>
         <ConfirmRidePopup setRidePopupPanel = {setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>       
    </div>
</div>
  )
}

export default CaptainHome