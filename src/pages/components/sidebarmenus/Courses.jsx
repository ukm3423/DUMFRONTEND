import React from 'react'

const Courses = () => {
  // Sample courses data
  const courses = [
    { id: 1, name: "Java", fee: 4500, description: "Learn Java from basics to advanced.", status: "IN-PROGRESS" },
    { id: 2, name: "PHP", fee: 5000, description: "Master PHP for web development.", status: "COMPLETED" },
    { id: 3, name: "C Programming", fee: 6500, description: "Foundational course for programming.", status: "IN-PROGRESS" },
    { id: 4, name: "React", fee: 7000, description: "Learn to build modern UI with React.", status: "UPCOMING" }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Available Courses</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-blue-600">{course.name}</h2>
            <p className="text-gray-700">{course.description}</p>
            <p className="mt-2 font-semibold">Fee: ₹{course.fee}</p>
            <p className={`mt-2 px-2 py-1 inline-block text-sm font-medium rounded ${course.status === "IN-PROGRESS" ? "bg-yellow-500 text-white" : course.status === "COMPLETED" ? "bg-green-500 text-white" : "bg-gray-500 text-white"}`}>
              {course.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
