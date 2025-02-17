// src/pages/Courses.js
import React from 'react';

// Example data for the courses
const courses = [
  {
    id: 1,
    name: 'Web Development',
    description: 'Learn HTML, CSS, JavaScript, and React to build modern websites.',
    duration: '12 Weeks',
    price: '$599',
  },
  {
    id: 2,
    name: 'Data Science',
    description: 'Learn Python, data analysis, machine learning, and visualization.',
    duration: '14 Weeks',
    price: '$699',
  },
  {
    id: 3,
    name: 'Cybersecurity',
    description: 'Understand networking, ethical hacking, and security principles.',
    duration: '16 Weeks',
    price: '$799',
  },
  {
    id: 4,
    name: 'App Development',
    description: 'Create mobile applications using Flutter and Dart for Android and iOS.',
    duration: '10 Weeks',
    price: '$649',
  },
  {
    id: 5,
    name: 'Artificial Intelligence',
    description: 'Dive into machine learning algorithms, neural networks, and deep learning.',
    duration: '12 Weeks',
    price: '$749',
  },
  {
    id: 6,
    name: 'Digital Marketing',
    description: 'Master SEO, SEM, social media, and email marketing strategies.',
    duration: '8 Weeks',
    price: '$399',
  },
  {
    id: 7,
    name: 'Cloud Computing',
    description: 'Learn how to use cloud platforms like AWS, Azure, and Google Cloud.',
    duration: '10 Weeks',
    price: '$699',
  },
  {
    id: 9,
    name: 'UI/UX Design',
    description: 'Learn the principles of user interface and user experience design.',
    duration: '8 Weeks',
    price: '$499',
  },
  {
    id: 10,
    name: 'Blockchain Development',
    description: 'Understand blockchain technology and how to create decentralized apps.',
    duration: '12 Weeks',
    price: '$899',
  },
];

const Courses = () => {
  return (
    <div className="py-10 px-8 bg-gray-100">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">Our Premium Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white p-2 rounded-2xl shadow-xl transform transition-all hover:shadow-2xl hover:scale-105 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-yellow-500 to-orange-400 text-white p-4 rounded-t-2xl text-xl font-semibold">
              {course.name}
            </div>
            <div className="p-6">
              <p className="text-gray-700 text-base mb-6">{course.description}</p>
              <div className="flex justify-between items-center text-gray-600 text-sm">
                <span className="font-semibold">Duration: {course.duration}</span>
                <span className="font-semibold">Price: {course.price}</span>
              </div>
              <button className="w-full mt-8 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-xl hover:bg-gradient-to-l hover:from-indigo-700 hover:to-indigo-800 transition-all ease-in-out">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
