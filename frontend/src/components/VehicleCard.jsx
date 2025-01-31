import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';

export const VehicleCard = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div onClick={handleClick} className={`p-4 flex justify-between gap-2 transition-all duration-300 border-4 bg-white shadow-lg rounded-xl ${isClicked ? 'border-gray-900' : 'border-white'}`}>
      <div className='w-[30%] flex items-center'>
        <img className="w-full h-20 object-cover" src={props.img} alt="" />
      </div>
      <div className='w-1/2'>
        <h3 className="font-bold text-lg">{props.name}<span className=''><PersonIcon />{props.capacity}</span></h3>
        <h4 className='font-medium text-gray-600'>{props.time}</h4>
        <p className='text-gray-600'>{props.description}</p>
      </div>
      <div className='w-[20%]'>
        <p className="text-xl font-semibold">{props.price}</p>
      </div>
    </div>
  );
};
