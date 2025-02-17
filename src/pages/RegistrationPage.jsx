import React, { useState } from 'react';

const PremiumRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};
    const { name, email, phone, password, confirmPassword } = formData;

    // Name validation
    if (!name) newErrors.name = 'Name is required';

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    // Password validation
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6)
      newErrors.password = 'Password should be at least 6 characters';

    // Confirm password validation
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirm password is required';
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted successfully', formData);
      // Here, you can send the form data to the backend
      alert("Registration Successfully! ")
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen  bg-gray-50">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 bg-white text-black px-8 py-2 flex flex-col justify-center">
        {/* Top Image */}
        <div className="mb-2">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/training-manager-developing-programs-for-the-team-illustration-download-in-svg-png-gif-file-formats--marketing-plan-office-work-giving-presentation-business-pack-illustrations-7099619.png" // Replace this with your vector image URL
            alt="Learning Image"
            className="w-100 h-50 mx-auto mb-6"
          />
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Join Umeedey Today! </h2>
        <h2 className='text-3xl md:text-4xl font-bold mb-2 text-center'></h2>
        {/* Description */}
        <p className="text-base md:text-lg mb-8 text-center">
          Unlock a world of learning with our industry-relevant IT courses. Boost your skills, connect with experts, and start your career transformation.
        </p>

        {/* List of Features */}
        <ul className="space-y-4">
          <li className="flex items-center">
            <span className="mr-3 text-xl">&#10003;</span>
            Learn from industry experts.
          </li>
          <li className="flex items-center">
            <span className="mr-3 text-xl">&#10003;</span>
            Flexible course options.
          </li>
          <li className="flex items-center">
            <span className="mr-3 text-xl">&#10003;</span>
            24/7 access to course materials.
          </li>
          <li className="flex items-center">
            <span className="mr-3 text-xl">&#10003;</span>
            Get certified and boost your career.
          </li>
        </ul>
      </div>


      {/* Right Section (Registration Form) */}
      <div className="w-full lg:w-1/1 bg-white px-8 py-2 flex justify-center items-center">
        <div className="w-full ">
          <h2 className="text-2xl sm:text-3xl text-center text-left text-gray-700 mb-6">

            🧑🏻‍🎓 <span className='border-b-2 border-gray-300 font-semibold pb-1'>Student Registration Form :- </span>
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Name */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.firstName ? 'border-red-500' : ''}`}
                />
                {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
              </div>

              {/* Middle Name */}
              <div>
                <label htmlFor="middleName" className="block text-sm font-medium text-gray-700">Middle Name</label>
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.middleName ? 'border-red-500' : ''}`}
                />
                {errors.middleName && <p className="text-sm text-red-500">{errors.middleName}</p>}
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`mt-1   block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.lastName ? 'border-red-500' : ''}`}
                />
                {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
              </div>


              {/* Date of Birth */}
              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.dob ? 'border-red-500' : ''}`}
                />
                {errors.dob && <p className="text-sm text-red-500">{errors.dob}</p>}
              </div>

              {/* Gender Dropdown */}
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.gender ? 'border-red-500' : ''}`}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender && <p className="text-sm text-red-500">{errors.gender}</p>}
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Street Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.address ? 'border-red-500' : ''}`}
                />
                {errors.address && <p className="text-sm text-red-500">{errors.address}</p>}
              </div>

              {/* City */}
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.city ? 'border-red-500' : ''}`}
                />
                {errors.city && <p className="text-sm text-red-500">{errors.city}</p>}
              </div>

              {/* State */}
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.state ? 'border-red-500' : ''}`}
                />
                {errors.state && <p className="text-sm text-red-500">{errors.state}</p>}
              </div>

              {/* Pincode */}
              <div>
                <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">Pincode</label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.pincode ? 'border-red-500' : ''}`}
                />
                {errors.pincode && <p className="text-sm text-red-500">{errors.pincode}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.phone ? 'border-red-500' : ''}`}
                />
                {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
              </div>

              {/* Course Dropdown */}
              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course</label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.course ? 'border-red-500' : ''}`}
                >
                  <option value="">Select Course</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Cyber Security">Cyber Security</option>
                </select>
                {errors.course && <p className="text-sm text-red-500">{errors.course}</p>}
              </div>

              {/* Additional Comment */}
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Additional Comments</label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.comment ? 'border-red-500' : ''}`}
                ></textarea>
                {errors.comment && <p className="text-sm text-red-500">{errors.comment}</p>}
              </div>
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              >
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default PremiumRegistration;
