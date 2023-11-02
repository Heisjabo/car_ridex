import React from 'react';
import { IoPeopleOutline } from 'react-icons/io5';
import { IoSpeedometerOutline } from 'react-icons/io5';
import { IoFlashOutline } from 'react-icons/io5';
import { FaHeart } from 'react-icons/fa';
import { IoApertureOutline } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppProvider';
import CarSkeletonLoader from './CarSkeletonLoader'; // Import the skeleton loader
import { Link } from 'react-router-dom';

const Cards = () => {
  const location = useLocation();
  const { cars, error } = useContext(AppContext);

  if (error) {
    // Display an error message if there's an error state
    return <div>Error: {error}</div>;
  }

  return (
    <div className='grid gap-10 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid lg:gap-10 md:gap-6 mt-8'>
      {cars.length > 0 ? (
        cars.map((item, index) => {
          return (
            <div className='h-fit pb-5 bg-slate-200 shadow-xl shadow-slate-300 border-2 border-white rounded-2xl' key={index}>
              <Link to={`${item._id}`}><img src={item.images[0]} className='rounded-3xl px-3 pt-3 w-full h-[300px] object-cover'></img></Link>
              <div className='px-6'>
                <div className='flex justify-between mt-5'>
                  <h1 className='md:text-lg lg:text-2xl'>{item.name}</h1>
                  <h1 className='lg:text-xl md:text-lg outline-dashed px-3 rounded-xl outline-blue-500'>{item.year}</h1>
                </div>
                <div className='grid grid-cols-2 gap-4 mt-5'>
                  <div className='flex gap-3 items-center'>
                    <IoPeopleOutline className='text-blue-400 md:text-ld lg:text-2xl' />
                    <h1>{item.seats} people</h1>
                  </div>
                  <div className='flex gap-3 items-center'>
                    <IoSpeedometerOutline className='text-blue-400 md:text-ld lg:text-2xl' />
                    <h1>{item.fuelConsumption}</h1>
                  </div>
                  <div className='flex gap-3 items-center'>
                    <IoFlashOutline className='text-blue-400 md:text-ld lg:text-2xl' />
                    <h1>{item.fuelType}</h1>
                  </div>
                  <div className='flex gap-3 items-center'>
                    <IoApertureOutline className='text-blue-400 md:text-ld lg:text-2xl' />
                    <h1>{item.gearType}</h1>
                  </div>
                </div>
                <div className='h-[2px] w-full bg-slate-950 mt-4'></div>
                <div className='flex justify-between mt-5'>
                  <h1 className='text-xl text-slate-950'>{item.price}</h1>
                  <div className='flex gap-3'>
                    <div className='w-[40px] h-[40px] flex items-center justify-center bg-blue-200 sm:py-3 md:py-2 lg:py-4 rounded-full'>
                      <FaHeart className='text-blue-400 font-normal' />
                    </div>
                    <button className='lg:rounded-2xl rounded-lg px-2 py-2 md:rounded-xl sm:rounded-lg bg-blue-400 lg:px-7 md:px-3 sm:px-3 sm:py-2 md:py-1 lg:py-2 font-semibold text-white'>
                      {location.pathname == '/rent' ? 'Rent now' : 'Buy now'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
          <CarSkeletonLoader /> 
      )}
    </div>
  );
};

export default Cards;
