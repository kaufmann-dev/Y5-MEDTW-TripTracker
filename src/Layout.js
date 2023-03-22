import React from 'react';
import Navbar from './Navbar';
import { Outlet } from "react-router-dom";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="container my-3">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
