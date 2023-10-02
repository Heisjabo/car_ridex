import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex items-center w-full justify-between py-4 px-4 bg-white h-[70px] border-b border-slate-200 z-[100]">
      <input
        type="text"
        placeholder="Search here"
        className="border rounded-[5px] px-4 py-1 bg-transparent outline-blue-400"
      />
      <div className="">
        <FaUserCircle className=" text-4xl" />
      </div>
    </div>
  );
};

export default Header;
