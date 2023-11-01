import React, { useState } from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'
import { MdMenu } from 'react-icons/md';
import carsales from './Carsales'
const Nav = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className={`  w-screen h-20 pt-6 lg:bg-slate-200 bg-slate-200 flex md-top-6 md:justify-around fixed top-0 z-[99] shadow-sm`}>
            <h1 className=' absolute sm:static text-2xl pl-8 sm:pl-16 text-slate-700 font-bold md:2xl'>CAR RIDEX</h1>
            <ul className={`${open ? " mt-14 sm:h-0 sm:m-0 absolute md:static bg-slate-200 sm:pl-0 h-[50%] flex flex-col gap-5 pb-[65%] border-2 sm:border-0 border-white w-[100%] sm:flex md:w-auto py-4 sm:py-0 text-center" : "hidden md:flex"} flex duration-700 delay-200 lg:gap-9 md:gap-3 lg:text-lg md:text-md text-slate-800 font-semibold`}>
                <li><Link to='/' element={<Home />}>Home</Link></li>
                <li className='cursor-pointer'><Link to="/carsales" element={<carsales />} >Car sales</Link>
                </li>
                <li><Link to='/rent' element={<Home />}>Car rent</Link>
                </li>
                <li><Link to='/spare-parts' element={<Home />}>Spare parts</Link>
                </li>
                <li><Link to='/contact' element={<Home />}>Contact us</Link></li>
            </ul>
            <div className='text-slate-400 font-semibold'>
            </div>
            <MdMenu onClick={() => setOpen(!open)} className=' text-4xl absolute right-7 sm:hidden' />
        </div>
    )
}

export default Nav
