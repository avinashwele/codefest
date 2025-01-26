'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

const initialUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    college_name: "ABC College",
    branch: "CSE",
    year: "2025",
    mobile_no: "1234567890",
    registration_date: "2025-01-01",
    allowed: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    college_name: "XYZ College",
    branch: "ECE",
    year: "2024",
    mobile_no: "9876543210",
    registration_date: "2025-01-15",
    allowed: false,
  },
];

export default function AdminDashboard() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [filterBranch, setFilterBranch] = useState("");
  const [filterYear, setFilterYear] = useState("");

  const router = useRouter();

  // Hardcoded admin credentials
  const adminUsername = "admin";
  const adminPassword = "admin123";

  const handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    if (username.value === adminUsername && password.value === adminPassword) {
      setIsAdminLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Invalid username or password.");
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleFilterBranch = (e) => {
    setFilterBranch(e.target.value);
  };

  const handleFilterYear = (e) => {
    setFilterYear(e.target.value);
  };

  const toggleAllow = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, allowed: !user.allowed } : user
      )
    );
  };

  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search) ||
      user.college_name.toLowerCase().includes(search);

    const matchesBranch = filterBranch ? user.branch === filterBranch : true;
    const matchesYear = filterYear ? user.year === filterYear : true;

    return matchesSearch && matchesBranch && matchesYear;
  });

  if (!isAdminLoggedIn) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-lg shadow-md space-y-4"
        >
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Admin Login
          </h2>
          <div>
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          {loginError && (
            <p className="text-red-500 text-sm">{loginError}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">Admin Dashboard</h1>
      <div className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Search by name, email, or college"
          value={search}
          onChange={handleSearch}
          className="px-4 py-2 border rounded-md w-full lg:w-1/3"
        />
        <div className="flex gap-4">
          <select
            value={filterBranch}
            onChange={handleFilterBranch}
            className="px-4 py-2 border rounded-md"
          >
            <option value="">Filter by Branch</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
          </select>
          <select
            value={filterYear}
            onChange={handleFilterYear}
            className="px-4 py-2 border rounded-md"
          >
            <option value="">Filter by Year</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>
      </div>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2">Name</th>
            <th className="border border-gray-200 px-4 py-2">Email</th>
            <th className="border border-gray-200 px-4 py-2">College</th>
            <th className="border border-gray-200 px-4 py-2">Branch</th>
            <th className="border border-gray-200 px-4 py-2">Year</th>
            <th className="border border-gray-200 px-4 py-2">Allowed</th>
            <th className="border border-gray-200 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-200 px-4 py-2">{user.name}</td>
              <td className="border border-gray-200 px-4 py-2">{user.email}</td>
              <td className="border border-gray-200 px-4 py-2">
                {user.college_name}
              </td>
              <td className="border border-gray-200 px-4 py-2">{user.branch}</td>
              <td className="border border-gray-200 px-4 py-2">{user.year}</td>
              <td className="border border-gray-200 px-4 py-2">
                {user.allowed ? "Yes" : "No"}
              </td>
              <td className="border border-gray-200 px-4 py-2 space-x-2">
                <button
                  onClick={() => toggleAllow(user.id)}
                  className={`px-4 py-1 rounded-md text-white ${
                    user.allowed ? "bg-red-500" : "bg-green-500"
                  }`}
                >
                  {user.allowed ? "Disallow" : "Allow"}
                </button>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="px-4 py-1 bg-red-600 text-white rounded-md"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
