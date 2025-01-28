import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
export const VehicleCard = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div 
      onClick={handleClick} 
      className={`p-4 transition-all duration-300  fixed z-10 bottom-10 left-10  border-4 bg-white shadow-lg rounded-xl ${isClicked ? 'border border-gray-900 rounded-lg' : 'border-white'}`}
    >
      <div className="flex gap-2">
        <div className='w-[30%] flex  items-center'>
          <img className="w-full h-20 object-cover" src={props.img} alt="" />
        </div>
        <div className=' w-1/2'>
          <h3 className="font-bold text-lg">{props.name} <span className=''><PersonIcon />4</span></h3>
          <h4 className='font-medium text-gray-600'>2 mins away</h4>
          <p className='text-gray-600'>Affordable ,compact rides</p>
        </div>
        <div className='w-[20%]'>
          <p className="text-xl font-semibold">{props.price}</p>
        </div>
      </div>
    </div>
  );
};
