import { MdMenu } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [colorChange, setColorChange] = useState(false);
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const changeNavColor = () => {
    if(window.scrollY >= 80){
        setColorChange(true);
    } else {
        setColorChange(false);
    }
  }
    window.addEventListener("scroll", changeNavColor);

  return (
    <nav className="fixed top-0 z-[100] w-screen">
      <div className={`${colorChange ? "bg-slate-200 text-slate-700 shadow-lg" : " bg-slate-100 text-gray-500"} flex justify-between items-center px-8 md:px-24 p-6 text-sm font-bold`}>
        <div>
          <Link to="/"><h1 className="text-xl">CAR RIDEX</h1></Link>
        </div>
        <div className="hidden lg:inline ">
          <ul className="flex justify-center hover:cursor-pointer">
            <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">
              <Link to="/">Home</Link>
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">
              <Link to="/rent">Car Rent</Link>
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">
              <Link to="/carsales">Car Sales</Link>
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">
              <Link to="/contact">Contact</Link>
            </li>
            
          </ul>
        </div>

        <div className="hidden lg:inline">
          <ul className="flex justify-center hover:cursor-pointer">
            <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">
              Login
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">
              Sign up
            </li>
          </ul>
        </div>

        <div className="lg:hidden">
          <button
            onClick={handleNav}
            className="inline-flex items-center rounded-md py-2 px-4 text-sm font-medium bg-black/5 shadow-sm hover:bg-black/10"
          >
            Menu
          </button>
        </div>
        <div
          className={
            nav
              ? "bg-white absolute right-0 top-0 w-80 h-screen text-gray-600 z-20"
              : "fixed right-[-100%] bg-white"
          }
        >
          <div className="flex justify-end pr-8 pt-8">
            <TfiClose
              onClick={handleNav}
              className="rounded p-1 hover:black/5 hover:cursor-pointer"
              size={24}
            />
          </div>
          <div className=" flex flex-col justify-between h-[80px]">
          <ul className="pt-8 px-6">
          <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">
              <Link to="/">Home</Link>
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">
              <Link to="/rent">Car Rent</Link>
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">
              <Link to="/carsales">Car Sales</Link>
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <ul className="flex justify-center flex-col hover:cursor-pointer">
            <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">
              Login
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">
              Sign up
            </li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
