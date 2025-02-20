import React, { useState } from "react";


const Form = () => {
    const data = [
        { id: 1, name: "Java", courseFee: 4500, description: "Java Description" ,status :"IN-PROGRESS"},
        { id: 2, name: "Php", courseFee: 5000, description: "Php Description" ,status :"IN-PROGRESS"},
        { id: 3, name: "C", courseFee: 6500, description: "C Description" ,status :"IN-PROGRESS"}
      ];
    const [course, setCourse] = useState({
      name: '',
      fee: '',
      description: ''
    });
  
    const handleChange = (e) => {
      setCourse({ ...course, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Course Details:', course);
      alert('Course Submitted Successfully!');
    };
  
    return (
        <main >
             <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Add Course</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Course Name</label>
            <input type="text" name="name" value={course.name} onChange={handleChange} 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-700">Course Fee</label>
            <input type="number" name="fee" value={course.fee} onChange={handleChange} 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea name="description" value={course.description} onChange={handleChange} 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
  
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Submit</button>
        </form>
        </div>
        <div className={`transition-all duration-300 p-4 bg-gray-100 min-h-screen ml-64'}`}>
      <h1 className="text-2xl font-bold mb-4">Courses Table</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4 border">CourseId</th>
              <th className="py-2 px-4 border">Course Name</th>
              <th className="py-2 px-4 border">Course Fee</th>
              <th className="py-2 px-4 border">Course Description</th>
              <th className="py-2 px-4 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((course) => (
              <tr key={course.id} className="text-center border-b hover:bg-gray-200">
                <td className="py-2 px-4 border">{course.id}</td>
                <td className="py-2 px-4 border">{course.name}</td>
                <td className="py-2 px-4 border">{course.courseFee}</td>
                <td className="py-2 px-4 border">{course.description}</td>
                <td className="py-2 px-4 border">{course.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
        </main>
     
     
    );
  };

export default Form;
