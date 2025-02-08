import React from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SquareIcon from '@mui/icons-material/Square';
import CreditCardIcon from '@mui/icons-material/CreditCard';

// Import images
import ZyloGoImage from '../assets/Zylo_Go.webp';
import ZyloAutoImage from '../assets/Zylo_Auto.webp';
import ZyloMotoImage from '../assets/Zylo_Moto.webp';

const ConfirmRide = (props) => {
  // Determine which image to use based on props.rideType
  let rideImage;
  switch (props.rideType) {
    case 'Zylo Go':
      rideImage = ZyloGoImage;
      break;
    case 'Zylo Auto':
      rideImage = ZyloAutoImage;
      break;
      case 'Zylo Moto':
        rideImage = ZyloMotoImage;
    default: 
      rideImage = ZyloMotoImage; // Default to Zylo Go if no type is provided
  }

  return (
    <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setConfirmRidePanel(false)
            }}><KeyboardArrowDownIcon /></h5>
            <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>

            <div className='flex flex-col md:flex-row gap-2 justify-between items-center'>
                <img className='w-1/3 md:w-1/2' src={rideImage} alt="Ride" />
                <div className='w-full md:w-1/2 m-2 flex flex-col gap-4'>
                     <div className='flex items-center gap-2'>
                     <div>
                           <PlaceIcon />
                       </div>
                       <div>
                       <h1 className='text-xl font-semibold'>562/11-A</h1>
                       <h2 className='text-base text-gray-600'>Muradnagar,Ghaziabad ,U.P</h2>
                       </div>
                     </div>

                     <div className='flex items-center gap-2'>
                       <div>
                        <SquareIcon />
                       </div>
                       <div>
                       <h1 className='text-xl font-semibold'>Third Wave Coffee</h1>
                       <h2 className='text-base text-gray-600'>Muradnagar,Ghaziabad ,U.P</h2>
                       </div>
                     </div>

                     <div className='flex items-center gap-2'>
                     <div>
                            <CreditCardIcon />
                     </div>
                       <div>
                       <h1 className='text-xl font-semibold'>₹193.20</h1>
                       <h2 className='text-base text-gray-600'>Cash</h2>
                       </div>
                     </div>

                     <button onClick={() =>{props.setVehicleFound(true)}} className='w-full bg-[#0DB361] py-3 rounded-full font-semibold text-xl text-white'>Confirm</button>
                </div>
                
            </div>
</div>
  )
}

export default ConfirmRide