import { FaUserCircle } from "react-icons/fa";
import { IoSettingsSharp, IoNotificationsSharp} from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border 
    border-white/80 lg:ml-[25%] items-center w-[100%] lg:w-[74%] 
    justify-between rounded-xl py-2 px-4 bg-white
    shadow-md transition-all sticky top-4 z-40 shadow-blue-gray-500/5 ">
      <div className="flex flex-col gap-2">
        <h2>Dashboard / <span></span></h2>
        <p>Home</p>
      </div>
      <div className="flex items-center justify-around gap-4">
        <input type="text" 
        className="bg-transparent rounded-[5px] border-2 border-[#eceff180] py-1 px-2
        focus:outline-none focus:border-blue-500" 
        placeholder="Type here" />

        <div className="flex items-center justify-center hover:bg-[#eceff180] cursor-pointer px-2 py-2 rounded-[5px]">
          <FaUserCircle className="text-gray-500 text-2xl" />
          <span className="text-gray-500 ml-2">username</span>
        </div>
        <div className="hover:bg-[#eceff180] cursor-pointer rounded-[5px] py-2 px-2">
          <IoSettingsSharp className="text-xl text-gray-500" />
        </div>
        <div className="hover:bg-[#eceff180] cursor-pointer rounded-[5px] py-2 px-2">
          <IoNotificationsSharp className="text-xl text-gray-500" />
        </div>
        
      </div>
    </div>
  );
};

export default Header;
