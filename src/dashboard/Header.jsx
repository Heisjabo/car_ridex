import { FaUserCircle } from "react-icons/fa";
import { IoSettingsSharp, IoNotificationsSharp} from "react-icons/io5";
import useWindowDimensions from "../helpers/WindowDimensions";

const Header = () => {
  const {width, height } = useWindowDimensions();

  return (
    <div className={`flex backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border 
    border-white/80 items-center w-[100%]
    justify-between rounded-xl py-2 px-4 bg-white
    shadow-md transition-all sticky top-4 z-40 shadow-blue-gray-500/5 
    ${width < 620 ? "ml-12 w-[80%]" : ""}`}>
      <div className="flex flex-col leading-6">
        <h2>Dashboard / <span></span></h2>
        <p>Home</p>
      </div>
      <div className="flex items-center justify-around gap-4">
        <input type="text" 
        className=" hidden md:block bg-transparent rounded-[5px] border-2 border-[#eceff180] py-1 px-2
        focus:outline-none focus:border-blue-500" 
        placeholder="Type here" />
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
