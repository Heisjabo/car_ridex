import { NavLink } from "react-router-dom";
import { RiExpandLeftLine, RiExpandRightLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineMore } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import useWindowDimensions from "../helpers/WindowDimensions";
import { AppContext } from "../context/AppProvider";


const MenuSection = ({children}) => {
  const { width, height } = useWindowDimensions();
  const { expanded, setExpanded } = useContext(AppContext);
  

  useEffect(() => {
    if(width <= 768) {
      setExpanded(false);
    } else if(width >= 768){
      setExpanded(true);
    }
  }, [width]);

  return (
    <aside className={`h-screen fixed`}>
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="px-4 py-6 flex justify-between items-center">
          <h1 className={`text-slate-800 font-bold text-xl
          overflow-hidden transition-all ${expanded? "w-32" : "hidden"}
          `}>CAR RIDEX</h1>
          <button onClick={() => setExpanded(!expanded)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
            {expanded? <RiExpandLeftLine className="text-xl"/> : <RiExpandRightLine className="text-xl"/>}
          </button>
        </div>
        
        <ul className="flex-1 px-3">
          {children}
        </ul>

        <div className="border-t flex p-3">
          <FaUserCircle className="w-8 h-8 text-gray-500"/>
          <div className={`flex justify-between items-center w-52 ml-3
           overflow-hidden transition-all ${expanded? "w-52 ml-3" : "w-0 hidden"}
          `}>
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <AiOutlineMore className="text-xl"/>
          </div>
        </div>
      </nav>
    </aside>
  );
};



export const SidebarItem = ({icon, text, active, alert, path, onItemClick}) => {
  const { expanded } = useContext(AppContext);
  return (
    <NavLink to={path} onClick={() => onItemClick(path)}>
    <li className={`
    relative flex items-center py-2 px-3 my-1
    font-semibold rounded-md cursor-pointer text-md group 
    transition-colors ${active ? "bg-indigo-400 text-white"
  : "hover:bg-indigo-50 text-slate-700"}
    `}>
      {icon}
      <span className={`overflow-hidden transition-all ${
        expanded ? "w-52 ml-3" : "w-0" 
      }`}>{text}</span>
      {alert && <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded? "" : "top-2" }`}></div>}
      {!expanded && <div className={`
        absolute left-full rounded-md ml-6 px-2 py-1
       invisible opacity-20 bg-indigo-100 text-slate-800 text-sm
         -transition-x-3 transition-all group-hover:visible 
         group-hover:opacity-100 z-[1000]
      `}>{text}</div>} 
    </li>
    </NavLink>
  )
}



export default MenuSection;
