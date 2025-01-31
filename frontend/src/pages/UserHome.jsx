import React, { useEffect, useRef, useState } from 'react'
import Logo from '../assets/Logo.png'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocationPanel from '../components/LocationPanel';
import { VehicleCard } from '../components/VehicleCard';
import PersonIcon from '@mui/icons-material/Person';

const UserHome = () => {
     const [pickup, setPickup] = useState('')
     const [destination, setDestination] = useState('')
     const [panelOpen, setPanelOpen] = useState(false)
     const PanelRef = useRef(null)
     const PanelCloseRef = useRef(null)
  const submithandler = (e) =>{
    e.preventDefault();
  }

    useGSAP(() => {
    
      if(panelOpen){
        gsap.to(PanelRef.current, {
      height: '70%',
      padding:24
        })
        gsap.to(PanelCloseRef.current, {
          opacity: 1
      })
      }
      else{
        gsap.to(PanelRef.current, {
      height: '0%',
      padding: 0
        })
        gsap.to(PanelCloseRef.current, {
          opacity: 0
      })
      }
    
  }, [panelOpen])
  
  const [isClicked, setIsClicked] = useState(false);
  
    const handleClick = () => {
      setIsClicked(!isClicked);
    };
  return (
    <div className='h-screen relative overflow-hidden'>
      <img src={Logo} className='w-16 absolute left-5 top-5' alt="" />

      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="data:image/jpeg;base64,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" alt="" />
      </div>
      <div className=' flex flex-col justify-end h-screen absolute w-full top-0 '>
        <div className='h-[30%] bg-white p-5 relative'>
          <h5 
          className='absolute right-7 top-3' 
          ref={PanelCloseRef}
          onClick={() => {setPanelOpen(false)}} >
            <KeyboardArrowDownIcon />
          </h5>
        <h4 className='text-3xl font-semibold py-2'>Find a trip</h4>
        <form onSubmit={(e) =>{
          submithandler(e)
        }}>
          <div className="line absolute top-[38%] h-16 left-9 w-1 bg-[#374151] rounded-full"></div>
          <input 
           value={pickup}
           onChange={(e) => setPickup(e.target.value)}
           onClick={() => setPanelOpen(true)}
           className='bg-[#EEEEEE] text-lg rounded-lg px-12 py-2 w-full mb-3'
            type="text"
             placeholder='Add a pickup location'/>
          <input
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          onClick={() => setPanelOpen(true)}
          className='bg-[#EEEEEE] text-lg rounded-lg px-12 py-2 w-full '
           type="text"
           placeholder='Enter a drop location' />
        </form>
        <button className='bg-black text-white  w-full py-2 px-2 mt-6 rounded-lg mb-1 font-semibold'>
          Find Trip
        </button>
        </div>
        <div ref={PanelRef} className=' bg-white '>
            <LocationPanel />
        </div>
      </div>
       
      <div className='z-10  flex flex-col fixed px-3 py-6 translate-y-full bg-white top-[38%] space-y-4'>
        <div className=''>
        <h1 className='text-xl font-semibold'>Choose A Ride</h1>
        </div>
        <div className='flex flex-col gap-4'>
          <VehicleCard
            img="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png"
            name="Zylo Go"
            capacity="4"
            time="2 mins away"
            description="Affordable, compact rides"
            price="₹69.69"
          />
          <VehicleCard
            img="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            name="Zylo Auto"
            capacity="3"
            time="5 mins away"
            description="Affordable auto rides"
            price="₹49.49"
          />
          <VehicleCard
            img="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png"
            name="Zylo Moto"
            capacity="1"
            time="3 mins away"
            description="Quick motorcycle rides"
            price="₹39.39"
          />
        </div>
     </div>
     
    </div>
  )
}

export default UserHome