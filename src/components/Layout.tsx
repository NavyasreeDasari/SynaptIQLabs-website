import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToHashElement from './ScrollToHashElement';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollToHashElement />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
