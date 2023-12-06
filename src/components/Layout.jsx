import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
const Layout = (props) => {
  return (
    <div>
    <Nav />
      <div className="bg-slate-200 mt-20 md:mt-16 pb-6">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
