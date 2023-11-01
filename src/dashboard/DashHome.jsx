import React from 'react';
import { FaCar, FaWrench, FaShoppingCart, FaHandHoldingUsd, FaUserCircle } from 'react-icons/fa';
import { IoCarSharp } from "react-icons/io5";
import useWindowDimensions from "../helpers/WindowDimensions";
import { PiCubeTransparentFill } from "react-icons/pi";
import { MdRequestQuote } from "react-icons/md";
import { faker } from "@faker-js/faker";
import { AiOutlineMore } from "react-icons/ai";
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
import Momo from "../assets/momo.png";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Monthly Sales'
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 100, max: 500 })),
      borderColor: "#9263A5",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 100, max: 500 })),
      borderColor: "#0CE2F7",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};


const DashHome = () => {
  const { width, height } = useWindowDimensions();


  return (
    <section className={`flex flex-col min-h-[calc(100vh-4rem)] mt-8 w-full ${width < 620 ? "ml-12 w-[79%] mx-auto" : "w-full"}`}>
      <h1 className="font-[500] user-select-none text-3xl text-slate-800">Overview</h1>
      <div className="grid grid-cols-1 w-[80%] md:w-full md:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
        
            <div className="w-full">
              <div className="flex items-center justify-around bg-gradient-to-tr from-red-300 to-indigo-500 text-white rounded-xl p-4 shadow-md w-full">
                  <span className='p-2 rounded-lg bg-indigo-400'><IoCarSharp className='text-white text-2xl'/></span>
                <div className="flex flex-col"> 
                  <p className="text-2xl font-semibold">
                    50
                  </p>
                  <h2 className="text-md font-medium ">Cars for Rent</h2>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="flex items-center justify-around bg-white  text-slate-700 rounded-xl p-4 shadow-md w-full">
                  <span className='p-2 rounded-lg bg-indigo-400'><FaHandHoldingUsd className='text-white text-2xl'/></span>
                <div className="flex flex-col"> 
                  <p className="text-2xl font-semibold">
                    80
                  </p>
                  <h2 className="text-md font-medium ">Cars for Sale</h2>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="flex items-center justify-around bg-indigo-400  text-white rounded-xl p-4 shadow-md w-full">
                  <span className='p-2 rounded-lg bg-gradient-to-tr from-red-300 to-indigo-500'><PiCubeTransparentFill className='text-white text-2xl'/></span>
                <div className="flex flex-col"> 
                  <p className="text-2xl font-semibold">
                    150
                  </p>
                  <h2 className="text-md font-medium ">Spare Parts</h2>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="flex items-center justify-around bg-white  text-slate-700 rounded-xl p-4 shadow-md w-full">
                  <span className='p-2 rounded-lg bg-indigo-400'><MdRequestQuote className='text-white text-2xl'/></span>
                <div className="flex flex-col"> 
                  <p className="text-2xl font-semibold">
                    25
                  </p>
                  <h2 className="text-md font-medium ">Orders</h2>
                </div>
              </div>
            </div>
         
      </div>
      {/* home actions */}
      <div className='flex w-[100%] relative'>
      <aside className="w-[100%] grow flex flex-col gap-4">
        <div className="bg-white rounded-lg p-4 shadow-md w-3/4 h-[228px]">
          {/* <h2 className="text-lg font-semibold text-slate-700">Monthly Sales</h2> */}
          <Line options={options} data={data} />
        </div>
        <div className="bg-white rounded-xl flex flex-col py-4 px-4 w-3/4 mb-4">
          <h2 className="text-slate-700 font-semibold text-lg pb-2">Transactions</h2>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 w-full justify-between border-b py-2">
              <div className="flex items-center gap-3">
                <img src="https://ui-avatars.com/api/?name=John+Doe" alt="" className='rounded-full h-10 w-10'/>
                <div>
                  <h2 className="font-semibold text-slate-700 text-md">John Doe</h2>
                  <p className="text-gray-500 text-[12px] font-semibold">22 DEC 11 AM</p>
                </div>
              </div>
              <span className='text-gray-500 text-[14px] font-normal'>car rent</span>
              <p className='text-gray-500 text-[14px] font-normal'>12/02/22</p>
              <p className='text-gray-500 text-[14px] font-normal'>10:37:19 AM</p>
              <span className='text-red-500 text-[14px] font-normal'>Pending</span>
              <button><AiOutlineMore /></button>
            </div>
            <div className="flex items-center gap-2 w-full justify-between border-b py-2">
              <div className="flex items-center gap-3">
                <img src={`https://ui-avatars.com/api/?name=John+Doe`} alt="" className='rounded-full h-10 w-10'/>
                <div>
                  <h2 className="font-semibold text-slate-700 text-md">John Doe</h2>
                  <p className="text-gray-500 text-[12px] font-semibold">22 DEC 11 AM</p>
                </div>
              </div>
              <span className='text-gray-500 text-[14px] font-normal'>car rent</span>
              <p className='text-gray-500 text-[14px] font-normal'>12/02/22</p>
              <p className='text-gray-500 text-[14px] font-normal'>10:37:19 AM</p>
              <span className='text-green-500 text-[14px] font-normal'>Completed</span>
              <button><AiOutlineMore /></button>
            </div>

          </div>
        </div>
      </aside>

      <aside className='bg-white w-[23%] rounded-xl right-0 absolute'>
        <div className='p-2 flex flex-col'>
          <h2 className='text-medium font-semibold text-slate-700 text-center'>Payment channels</h2>
          <div>
            <img src={Momo} alt='' />
          </div>
          <button className='rounded bg-indigo-100 py-1 text-indigo-600
          font-semibold cursor-pointer hover:bg-indigo-200'>+ Add New</button>
        </div>
      </aside>
      </div>
    </section>
  );
};

export default DashHome;
