import React from 'react';

const Home = () => {
  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 py-24 px-4 md:px-12 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Unlock Your Future with Professional IT Courses at Umeedey
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Get trained by industry experts and boost your career with our diverse range of IT training courses.
          </p>
          <a 
            href="/courses" 
            className="bg-white text-blue-600 py-3 px-6 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
          >
            Explore Courses
          </a>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">Featured Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="course-card bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://i0.wp.com/www.admecindia.co.in/wp-content/uploads/2020/01/web-developer-standard.jpg?fit=390%2C355&ssl=1" alt="Web Development" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
                <p className="text-gray-700 mb-4">Learn how to build dynamic, responsive websites with modern tools.</p>
                <a href="/courses" className="text-blue-600 font-semibold hover:text-blue-800">Learn More</a>
              </div>
            </div>
            
            <div className="course-card bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSId33poDQBhzSeAAPIYQpdfcivsfbgRMNDB6iZLu8bmq0j5laVPCWJgE3fJfnfDDJQEos&usqp=CAU" alt="Cyber Security" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Cyber Security</h3>
                <p className="text-gray-700 mb-4">Become an expert in safeguarding networks and systems from cyber threats.</p>
                <a href="/courses" className="text-blue-600 font-semibold hover:text-blue-800">Learn More</a>
              </div>
            </div>
            <div className="course-card bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://www.techandmanage.com/images/DataScience.jpg" alt="Data Science" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Data Science</h3>
                <p className="text-gray-700 mb-4">Master data analysis and machine learning with hands-on projects.</p>
                <a href="/courses" className="text-blue-600 font-semibold hover:text-blue-800">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready to Take Your Skills to the Next Level?</h2>
        <p className="text-lg md:text-xl mb-6">Join our community of learners and start your journey towards success with Umeedey.</p>
        <a 
          href="/courses" 
          className="bg-white text-blue-600 py-3 px-6 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
        >
          Start Learning Now
        </a>
      </section>
    </div>
  );
};

export default Home;
