import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

export default function Dashboard() {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
      
      <div className="flex-1 ml-64">
        {/* Navbar */}
        <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
      </div>
    </div>
  );
}
