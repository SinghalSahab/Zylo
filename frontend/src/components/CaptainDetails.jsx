import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const CaptainDetails = () => {
  return (
    <div>
      <div className='flex items-center justify-between py-4'>
          <div className='flex items-center gap-4'>
             <img className='rounded-full w-16 h-16 object-cover' src="https://sb.kaleidousercontent.com/67418/1920x1281/0e9f02a048/christian-buehner-ditylc26zvi-unsplash.jpg" alt="" />

             <div>
              <h4 className = 'text-xl font-semibold'>Mike Ross</h4>
              <p className='txt-sm text-gray-600'>Senior Partner</p>
             </div>
          </div>
          <div className=''>
           
            <p className = 'text-xl font-semibold'> ₹6969</p>
            <p className=' txt-sm text-gray-600'>Earned</p>
          </div>

          </div>
 
         <div>
          <div className='flex justify-between gap-4 bg-gray-100 py-8 px-4 rounded-lg items-start'>
            <div className='flex flex-col items-center'>
            <h5 className='text-3xl'>
              <AccountBalanceWalletIcon fontSize='large' />
            </h5>
            <h4 className='font-medium text-lg'>₹69.69</h4>
            <p className=' text-md text-gray-600'>View all your Earnings</p>
            </div>

            <div className='flex flex-col items-center'>
              <AccessTimeIcon fontSize='large'/>
              <h4 className='font-medium text-lg'>Total riding time</h4>
              <p className=' text-md text-gray-600'>View all your Trips</p>
            </div>

            <div className='flex flex-col items-center'>
            <AccountBalanceWalletIcon fontSize='large'/>
            <h4 className='font-medium text-lg'>₹69.69</h4>
            <p className=' text-md text-gray-600'>View all your Earnings</p>
            </div>
          </div>
         </div>
    </div>
  )
}

export default CaptainDetails