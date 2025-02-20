import React from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SquareIcon from '@mui/icons-material/Square';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Link } from 'react-router-dom';

const FinishRide = (props) => {
  return (
    <div className=''>
            <h5 className='p-1 text-center w-[93%] absolute top-1' onClick={() => {
                props.setFinishedRidePanel(false)
            }}><KeyboardArrowDownIcon /></h5>
            <h3 className='text-2xl font-semibold mb-5'>Finish this ride</h3>

            <div className='flex items-center gap-4'>
            <img className='rounded-full w-16 h-16 object-cover' src="https://sb.kaleidousercontent.com/67418/1920x1281/0e9f02a048/christian-buehner-ditylc26zvi-unsplash.jpg" alt="" />

            <div>
                <h2 className='font-md text-lg'>Mike Ross</h2>
                <h5 className='text-md text-gray-400'>2.2Km</h5>
            </div>
            </div>

            <div className='flex flex-col md:flex-row gap-2 justify-between items-center'>
                
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

                     <div className='mt-6'>
                     
                     <Link to='/captains/home' className='w-full bg-[#0DB361] py-3 rounded-xl font-semibold text-xl text-white flex justify-center mb-2'>Finish Ride</Link>

                     <p className='text-red-500 mt-6 text-sm'>CLick on finish ride button if you have completed the payment</p>
                     
                     </div>
                </div>
                
            </div>

    </div>
  )
}

export default FinishRide