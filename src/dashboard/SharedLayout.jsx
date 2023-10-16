import Header from "./Header.jsx";
import MenuSection from "./MenuSection.jsx";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div className="bg-[#eceff1] gap-4 min-h-screen">
     <MenuSection />
      <div className="flex flex-col px-2">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayout;
