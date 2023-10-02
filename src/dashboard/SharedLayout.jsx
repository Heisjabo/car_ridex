import Header from "./Header.jsx";
import MenuSection from "./MenuSection.jsx";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div className="flex w-full">
      <MenuSection />
      <div className="flex flex-col w-full">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayout;
