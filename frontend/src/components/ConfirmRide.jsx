import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const ConfirmRide = () => {
  return (
    <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setConfirmRidePanel(false)
            }}><KeyboardArrowDownIcon /></h5>
            <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>

            <div className='flex gap-2 justify-between flex-col items-center'>
                <img className='w-1/3' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
                <div className='w-full'>
                     <div>
                        <h1>562/11-A</h1>
                        <h2>Muradnagar,Ghaziabad ,U.P</h2>
                     </div>
                     <div></div>
                     <div></div>
                </div>
                <button className='w-full'>Confirm</button>
            </div>
</div>
  )
}

export default ConfirmRide