import { BsSpeedometer } from "react-icons/bs";
import { IoCarSportSharp } from "react-icons/io5";
import { GiSpanner } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";
import { NavLink } from "react-router-dom";
const MenuSection = () => {
  return (
    <div className="lg:flex hidden fixed flex-col rounded-xl px-2 bg-white translate-x-0 inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 transition-transform duration-300 xl:translate-x-0">
      <div className="flex items-center justify-center w-full border-b border-slate-500">
        <h1 className="text-2xl py-8 text-slate-700 font-bold md:2xl cursor-pointer">GAGA</h1>
      </div>
      <ul className="flex flex-col mt-10 w-full text-slate-700 gap-[10px] list-none">
        <NavLink to="/dashboard" activeClassName="active" end>
          <li className="font-semibold flex items-center gap-2 px-10 py-2 w-full cursor-pointer hover:bg-[#eceff180] rounded-[8px]">
            <BsSpeedometer />
            Dashboard
          </li>
        </NavLink>
        <NavLink to="/dashboard/cars">
          <li className="font-semibold flex items-center gap-2 px-10 py-2 w-full cursor-pointer hover:bg-[#eceff180] rounded-[8px]">
            <IoCarSportSharp />
            Cars
          </li>
        </NavLink>
        <li className="font-semibold flex items-center gap-2 px-10 py-2 w-full cursor-pointer hover:bg-[#eceff180] rounded-[8px]">
          <GiSpanner />
          Spareparts
        </li>
        <li className="font-semibold flex items-center gap-2 px-10 py-2 w-full cursor-pointer hover:bg-[#eceff180] rounded-[8px]">
          <FiUsers />
          Orderings
        </li>
      </ul>
    </div>
  );
};

export default MenuSection;
