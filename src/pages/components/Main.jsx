import React from 'react';
import Form from '../components/sidebarmenus/Form';
import Courses from './sidebarmenus/Courses';

const Main = ({ mainToggle, menuToggle }) => {
  console.log("Here is the menu "+ menuToggle);
  return (
    <div className={`transition-all duration-300 p-4 ${mainToggle ? 'ml-64' : 'ml-0'}`}>
      {menuToggle === 1 && <Form />}
      {menuToggle === 2 && <Courses />}
      {/* Add more components as needed */}
    </div>
  );
};

export default Main;