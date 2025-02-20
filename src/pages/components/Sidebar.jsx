import { IoHome } from "react-icons/io5";
import { TbCertificate } from "react-icons/tb";
import Courses from "./sidebarmenus/Courses";
import React, { useState } from 'react';

const Sidebar = ({ sidebarToggle , menuToggle ,setMenuToggle }) => {
    const [coursesToggle, setCoursesToggle] = useState(false);

    
  return (
    <div
      className={`fixed top-16 left-0 h-full w-64 bg-gray-800 p-4 transform  ${
        sidebarToggle ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div>
        <h1 className="text-2xl text-white text-bold text-center p-3">Dashboard</h1>
      </div>
      <hr />
      <ul className="mt-3 text-white font-bold">
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="#" onClick={()=>setMenuToggle(1)}  >
            <IoHome className="inline-block w-6 h-6 mr-2 -mt-2" />
            Home
          </a>
        </li>
        <li className="cursor-pointer mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="#" onClick={()=>setMenuToggle(2)} >
            <TbCertificate className="inline-block w-6 h-6 mr-2 -mt-2" />
            Courses
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
