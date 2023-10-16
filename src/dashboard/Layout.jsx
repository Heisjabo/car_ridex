import React from 'react';
import Header from './Header';
import MenuSection from './MenuSection';

const Layout = ({ children }) => {
  return (
    <div className="flex w-full bg-[#eceff1] min-h-screen">
      <div className="w-1/4 relative">
        <MenuSection />
      </div>
      <div className="w-3/4 h-full pr-6">
        < Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
