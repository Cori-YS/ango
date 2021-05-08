import React from "react";
import { Outlet } from "react-router-dom";
import DesktopHeader from '../components/DesktopHeader';
import MobileHeader from '../components/MobileHeader'
export default function Home() {
  return (
    <>
  
      <div className="main-content" id="panel">
        <Outlet />
      </div>
    </>
  );
}
