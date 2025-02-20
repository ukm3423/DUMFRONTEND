import React from 'react';
import { ImMenu } from "react-icons/im";
import { MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaBell } from "react-icons/fa";

const Navbar = ({ sidebarToggle, setSidebarToggle,mainToggle,setMainToggle }) => {
  return (
    <main>
      <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white flex justify-between px-3 py-3 shadow-md z-50">
        <section className="flex items-center gap-6">
          {/* Menu Button */}
          <ImMenu
            className="text-3xl cursor-pointer"
            onClick={() => {setSidebarToggle(!sidebarToggle),setMainToggle(!mainToggle)}}
          />
          {/* Logo */}
          <Link to={"/dashboard"} className="text-5xl font-mono">
            logo
          </Link>
        </section>
        
        <section className="flex items-center gap-4">
          {/* Bell and Account Icons */}
          <FaBell className="text-4xl" />
          <MdAccountCircle className="text-5xl" />
        </section>
      </nav>
      <hr />
    </main>
  );
};

export default Navbar;
