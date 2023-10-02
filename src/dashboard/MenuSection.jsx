import { BsSpeedometer } from "react-icons/bs";
import { IoCarSportSharp } from "react-icons/io5";
import { GiSpanner } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";
import { NavLink } from "react-router-dom";
const MenuSection = () => {
  return (
    <div className="flex flex-col h-[100vh] items-start bg-slate-50 w-[20%]">
      <div className="flex items-center justify-center w-full">
        <h1 className="text-2xl py-8 text-slate-700 font-bold md:2xl">GAGA</h1>
      </div>
      <ul className="flex flex-col mt-10 w-full text-slate-700 gap-[10px] list-none">
        <NavLink to="/dashboard" activeClassName="active" end>
          <li className="flex items-center gap-2 px-10 py-2 w-full cursor-pointer hover:text-blue-600">
            <BsSpeedometer />
            Dashboard
          </li>
        </NavLink>
        <NavLink to="/dashboard/cars">
          <li className="flex items-center gap-2 px-10 py-2 w-full cursor-pointer hover:text-blue-600">
            <IoCarSportSharp />
            Cars
          </li>
        </NavLink>
        <li className="flex items-center gap-2 px-10 py-2 w-full cursor-pointer hover:text-blue-600">
          <GiSpanner />
          Spareparts
        </li>
        <li className="flex items-center gap-2 px-10 py-2 w-full cursor-pointer hover:text-blue-600">
          {" "}
          <FiUsers />
          Orderings
        </li>
      </ul>
    </div>
  );
};

export default MenuSection;
