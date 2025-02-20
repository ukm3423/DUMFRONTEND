import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';


export default function Dashboard() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [mainToggle, setMainToggle] = useState(false);
  const [menuToggle, setMenuToggle] = useState(0);
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar menuToggle={menuToggle} setMenuToggle={setMenuToggle} 
      sidebarToggle={sidebarToggle} />

      {/* Main Content Wrapper */}
      <div className="flex flex-col flex-1 transition-all duration-300">
        {/* Navbar */}
        <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} 
        mainToggle={mainToggle} setMainToggle={setMainToggle} />

        {/* Main Content (Fixing Hidden Issue) */}
        <div className="flex-1 overflow-auto bg-gray-100 p-4 mt-16">
          <Main menuToggle={menuToggle} mainToggle={mainToggle} />
        </div>
      </div>
    </div>
  );
}


// export default function Dashboard() {
//   const [sidebarToggle, setSidebarToggle] = useState(false);
//   const [mainToggle, setMainToggle] = useState(false);
//   const [menuToggle, setMenuToggle] = useState(0); // ✅ Add setMenuToggle

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <Sidebar 
//         menuToggle={menuToggle} 
//         setMenuToggle={setMenuToggle}  // ✅ Pass it to Sidebar
//         sidebarToggle={sidebarToggle} 
//       />

//       {/* Main Content Wrapper */}
//       <div className="flex flex-col flex-1 transition-all duration-300">
//         {/* Navbar */}
//         <Navbar 
//           sidebarToggle={sidebarToggle} 
//           setSidebarToggle={setSidebarToggle} 
//           mainToggle={mainToggle} 
//           setMainToggle={setMainToggle} 
//         />

//         {/* Main Content (Updated to respect menuToggle) */}
//         <div className="flex-1 overflow-auto bg-gray-100 p-4 mt-16">
//           <Main menuToggle={menuToggle} mainToggle={mainToggle} />
//         </div>
//       </div>
//     </div>
//   );
// }
