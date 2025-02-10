import React from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SquareIcon from '@mui/icons-material/Square';
import CreditCardIcon from '@mui/icons-material/CreditCard';
const WaitingForDriver = (props) => {
  return (
    <div>
    <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
        props.setWaitingForDriver(false)
    }}><KeyboardArrowDownIcon /></h5>

<div className='flex items-center justify-between'>
        <img className='h-12' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
        <div className='text-right'>
          <h2 className='text-lg font-medium capitalize'>abcd</h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1'>UP14</h4>
          <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
          <h1 className='text-lg font-semibold'>  1234 </h1>
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

        </div>
        
    </div>
</div>
  )
}

export default WaitingForDriver