"use client";

import React,{ useState } from "react";

export default function CodingEvent() {
  // State for showing the registration form
  const [showForm, setShowForm] = useState(false);

  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college_name: "",
    branch: "",
    year: "",
    mobile_no: "",
  });

  // Handle form input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // Add your form submission logic here
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between p-6 lg:p-16 gap-8">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h1 className="text-4xl lg:text-5xl font-bold text-white text-center">
          GCE College Presents{" "}
          <span className="text-yellow-200">
            {" "}
            <br />
            CODE FEST 2025
          </span>
        </h1>
        <p className="text-base text-red-300 text-center">
          Where Innovation Meets Programming!
        </p>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Event Highlights:
          </h2>
          <ul className="list-disc pl-6 text-white">
            <li>Hackathon Challenge: Solve real-world problems.</li>
            <li>Code Wars: Compete in lightning-fast coding battles.</li>
            <li>Tech Talks: Learn from industry experts.</li>
            <li>Workshops: Upskill with hands-on coding sessions.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            🎁 Exciting Prizes & Rewards:
          </h2>
          <ul className="list-disc pl-6 text-white">
            <li>Winner: ₹50,000 Cash Prize + Goodies!</li>
            <li>Runner-up: ₹25,000 + Merchandise!</li>
            <li>Participation Certificates for All!</li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 bg-yellow-200 p-6 lg:p-12 rounded-2xl shadow-lg space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            📅 Event Details:
          </h2>
          <p className="text-gray-700">Date: February 15th, 2025</p>
          <p className="text-gray-700">Venue: GCE College Auditorium</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            👨‍💻 Who Can Participate?
          </h2>
          <p className="text-gray-700">
            Open to all CSE branch students from colleges across the state who
            are passionate about coding and innovation!
          </p>
        </div>

        {/* Register Now Button */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowForm(true)} // Show the form when clicked
            className="inline-block px-12 py-2 text-lg font-semibold text-white bg-red-300 rounded-full shadow-lg hover:bg-red-500 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Register Now
          </button>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            📞 Contact Us:
          </h2>
          <p className="text-gray-700">Email: codefest@gce.com</p>
          <p className="text-gray-700">Phone: +91 099 888 1111</p>
          <p className="text-gray-700">Site: www.gcecodefest.com</p>
        </div>
      </div>

      {/* Registration Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center text-slate-700">
          <div className="bg-yellow-200 p-8 rounded-lg shadow-lg w-full max-w-lg relative">
            {/* Close Button (X) */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Registration Form
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="college_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  College Name
                </label>
                <input
                  type="text"
                  id="college_name"
                  name="college_name"
                  value={formData.college_name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your college name"
                />
              </div>

              {/* Branch - dropdwon */}
              <div>
                <label
                  htmlFor="branch"
                  className="block text-sm font-medium text-gray-700"
                >
                  Branch
                </label>
                <select
                  id="branch"
                  name="branch"
                  value={formData.branch}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Select Branch</option>
                  <option value="CSE">CSE</option>
                  <option value="E&TC">E&TC</option>
                  <option value="ME">ME</option>
                  <option value="EE">EE</option>
                  <option value="MN">MN</option>
                </select>
              </div>

              {/* Year - Dropdown */}
              <div>
                <label
                  htmlFor="year"
                  className="block text-sm font-medium text-gray-700"
                >
                  Year
                </label>
                <select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Select Year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="Final Year">Final Year</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="mobile_no"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="mobile_no"
                  name="mobile_no"
                  value={formData.mobile_no}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your mobile number"
                />
              </div>

              {/* Centered Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="inline-block px-20 py-2 text-lg font-semibold text-white bg-red-300 rounded-full shadow-lg hover:bg-red-500 hover:shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-1 focus:ring-red-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
