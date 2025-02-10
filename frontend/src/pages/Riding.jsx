import React from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Link } from'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
const Riding = () => {
  return (
    <div className='h-screen'>
    <Link to='/users/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <HomeIcon />
    </Link>
    <div className='h-1/2'>
        <img src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />

    </div>
    <div className='h-1/2 p-4'>
        <div className='flex items-center justify-between'>
            <img className='h-12' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
            <div className='text-right'>
                <h2 className='text-lg font-medium capitalize'>Name</h2>
                <h4 className='text-xl font-semibold -mt-1 -mb-1'>UP14</h4>
                <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>

            </div>
        </div>

        <div className='flex gap-2 justify-between flex-col items-center'>
            <div className='w-full mt-5'>

                <div className='flex items-center gap-5 p-3 border-b-2'>
                <div>
                   <PlaceIcon />
               </div>
               <div>
               <h1 className='text-xl font-semibold'>562/11-A</h1>
               <h2 className='text-base text-gray-600'>Muradnagar,Ghaziabad ,U.P</h2>
               </div>
                </div>
                <div className='flex items-center gap-5 p-3'>
                <div>
                    <CreditCardIcon />
             </div>
               <div>
               <h1 className='text-xl font-semibold'>₹193.20</h1>
               <h2 className='text-base text-gray-600'>Cash</h2>
               </div>
                </div>
            </div>
        </div>
        <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>
    </div>
</div>
  )
}

export default Riding