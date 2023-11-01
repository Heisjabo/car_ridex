import React from 'react';
import Header from './Header';
import MenuSection from './MenuSection';
import { SidebarItem } from './MenuSection';
import { IoCarSharp } from "react-icons/io5";
import { BiSolidDashboard } from "react-icons/bi";
import { MdRequestQuote } from "react-icons/md";
import { PiCubeTransparentFill } from "react-icons/pi";
import { createContext, useState, useEffect, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AppContext } from '../context/AppProvider';



const Layout = ({ children }) => {
  const { expanded, setExpanded } = useContext(AppContext);

  const [activePath, setActivePath] = useState("/dashboard");
  const location = useLocation();
  
  const handleItemClick = (path) => {
    setActivePath(path);
  };

  useEffect(() => {
    handleItemClick(location.pathname);
  }, [activePath]);

  return (
    <div className="flex  w-[100%] bg-[#eceff1] min-h-screen">
      <div>
        <MenuSection>
        <SidebarItem icon={<BiSolidDashboard className='text-xl'/>} text="Dashboard" path="/dashboard" 
          active={activePath === "/dashboard"} // Check if it's active
          onItemClick={handleItemClick}
          />
          <SidebarItem icon={<IoCarSharp className='text-xl' />} path="/dashboard/cars" text="Cars" 
          active={activePath === "/dashboard/cars"}
          onItemClick={handleItemClick}
          />
          <SidebarItem icon={<PiCubeTransparentFill className='text-xl'/>} text="spareparts" />
          <SidebarItem icon={<MdRequestQuote className='text-xl'/>} text="Bookings" />
        </MenuSection>
      </div>
      <div className={`px-6 h-full md:ml-[4rem] lg:ml-[18rem] ${!expanded? "w-[100%]" : "min-w-[100%] md:min-w-[80%]"}`}>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
