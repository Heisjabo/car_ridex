import React from 'react';
import { FaCar, FaWrench, FaShoppingCart, FaHandHoldingUsd, FaUserCircle } from 'react-icons/fa';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Monthly Sales',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      data: [65, 59, 80, 81, 56, 55],
    },
  ],
};

const statisticCards = [
  {
    title: 'Cars for Rent',
    value: 50,
    icon: <FaCar size={32} color="#ff6b6b" />,
  },
  {
    title: 'Cars for Sale',
    value: 80,
    icon: <FaHandHoldingUsd size={32} color="#6be6ff" />,
  },
  {
    title: 'Spare Parts',
    value: 150,
    icon: <FaWrench size={32} color="#ffd166" />,
  },
  {
    title: 'Orders',
    value: 25,
    icon: <FaShoppingCart size={32} color="#87c3c3" />,
  },
];

const DashHome = () => {
  return (
    <div className="flex flex-col h-full lg:ml-[25%] mt-8 bg-[#eceff1] w-full lg:w-[74%] ">
      <h1 className="font-[500] user-select-none text-3xl ml-8 text-slate-800">Overview</h1>
      <div className="flex flex-col md:flex-row">
        {statisticCards.map((card, index) => (
          <div key={index} className="md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-[#fff] rounded-lg p-4 shadow-md w-full">
              <h2 className="text-lg font-semibold text-slate-700">{card.title}</h2>
              <div className="flex items-center justify-between mt-2">
                {card.icon}
                <p className="text-2xl font-bold" style={{ color: card.icon.props.color }}>
                  {card.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

        <div className="w-full md:w-1/2 lg:w-full  p-4 flex gap-2">
          <div className="bg-white rounded-lg p-4 shadow-md w-1/2">
            <h2 className="text-lg font-semibold text-slate-700">Monthly Sales</h2>
            <Line data={data} />
          </div>
          <div className='bg-white rounded-xl flex flex-col py-2 px-4 w-1/2 h-[45vh]'>
            <h2 className='text-slate-700 font-semibold text-lg pb-3'>Recent orders</h2>
            <div className='flex flex-col gap-2 overflow-y-scroll'>
              <div className='flex items-center gap-2 w-full justify-between'>
                <div className='flex items-center gap-3 '>
                  <FaUserCircle className='text-gray-400 text-3xl' />
                  <div>
                    <h2 className='font-semibold text-slate-700 text-md'>Car rent</h2>
                    <p className='text-gray-500 text-[12px] font-semibold'>22 DEC 11 AM</p>
                  </div>  
                </div>
                <div>
                  <button className='text-sm text-blue-600 cursor-pointer mr-4'>view more</button>
                </div>
              </div>
              <div className='flex items-center gap-2 w-full justify-between'>
                <div className='flex items-center gap-3 '>
                  <FaUserCircle className='text-gray-400 text-3xl' />
                  <div>
                    <h2 className='font-semibold text-slate-700 text-md'>Spare part order</h2>
                    <p className='text-gray-500 text-[12px] font-semibold'>22 DEC 11 AM</p>
                  </div>  
                </div>
                <div>
                  <button className='text-sm text-blue-600 cursor-pointer mr-4'>view more</button>
                </div>
              </div>
              <div className='flex items-center gap-2 w-full justify-between'>
                <div className='flex items-center gap-3 '>
                  <FaUserCircle className='text-gray-400 text-3xl' />
                  <div>
                    <h2 className='font-semibold text-slate-700 text-md'>Car purchase</h2>
                    <p className='text-gray-500 text-[12px] font-semibold'>22 DEC 11 AM</p>
                  </div>  
                </div>
                <div>
                  <button className='text-sm text-blue-600 cursor-pointer mr-4'>view more</button>
                </div>
              </div>
              <div className='flex items-center gap-2 w-full justify-between'>
                <div className='flex items-center gap-3 '>
                  <FaUserCircle className='text-gray-400 text-3xl' />
                  <div>
                    <h2 className='font-semibold text-slate-700 text-md'>Car rent</h2>
                    <p className='text-gray-500 text-[12px] font-semibold'>22 DEC 11 AM</p>
                  </div>  
                </div>
                <div>
                  <button className='text-sm text-blue-600 cursor-pointer mr-4'>view more</button>
                </div>
              </div>
              <div className='flex items-center gap-2 w-full justify-between'>
                <div className='flex items-center gap-3 '>
                  <FaUserCircle className='text-gray-400 text-3xl' />
                  <div>
                    <h2 className='font-semibold text-slate-700 text-md'>Car rent</h2>
                    <p className='text-gray-500 text-[12px] font-semibold'>22 DEC 11 AM</p>
                  </div>  
                </div>
                <div>
                  <button className='text-sm text-blue-600 cursor-pointer mr-4'>view more</button>
                </div>
              </div>
              <div className='flex items-center gap-2 w-full justify-between'>
                <div className='flex items-center gap-3 '>
                  <FaUserCircle className='text-gray-400 text-3xl' />
                  <div>
                    <h2 className='font-semibold text-slate-700 text-md'>Car rent</h2>
                    <p className='text-gray-500 text-[12px] font-semibold'>22 DEC 11 AM</p>
                  </div>  
                </div>
                <div>
                  <button className='text-sm text-blue-600 cursor-pointer mr-4'>view more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default DashHome;
