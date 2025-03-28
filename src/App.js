import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function CollegeSearch() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState("home");

  const handleSearch = () => {
    alert(`Searching for: ${search}`);
  };

  const handleNavigation = (selectedPage) => {
    setPage(selectedPage);
  };

  if (page === "about") {
    return (
      <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4">
        <nav className="fixed top-0 w-full flex justify-between p-4 bg-black bg-opacity-90 shadow-md">
          <h1 className="text-xl font-bold cursor-pointer" onClick={() => handleNavigation("home")}>SYC</h1>
        </nav>
        <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold mb-4">About This Website</h2>
          <p className="text-gray-400 max-w-2xl">
            This website helps students find the best colleges based on their preferences. 
            Stay updated with the latest college news, rankings, scholarships, and events.
          </p>
          <button className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg" onClick={() => handleNavigation("home")}>Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4">
      {/* Navbar */}
      <nav className="fixed top-0 w-full flex justify-between p-4 bg-black bg-opacity-90 shadow-md">
        <h1 className="text-xl font-bold cursor-pointer" onClick={() => handleNavigation("home")}>SYC</h1>
        <ul className="flex space-x-6">
          <li className="hover:text-gray-400 cursor-pointer" onClick={() => handleNavigation("home")}>Home</li>
          <li className="hover:text-gray-400 cursor-pointer" onClick={() => handleNavigation("about")}>About</li>
          <li className="hover:text-gray-400 cursor-pointer" onClick={() => handleNavigation("colleges")}>Colleges</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center mt-20">
        <h2 className="text-4xl font-bold mb-6">Search Your College</h2>
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search Your College..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 pl-10 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-3 top-4 text-gray-400" />
        </div>
        <button 
          onClick={handleSearch} 
          className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg">
          Search
        </button>
        <p className="mt-4 text-gray-400 text-sm">
          Or browse through the curated list of colleges <span className="text-blue-500 cursor-pointer" onClick={() => handleNavigation("colleges list")}>here</span>
        </p>
      </div>

      {/* News Section */}
      <div className="mt-20 w-full max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-6">Latest College News</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">New Scholarship Programs Announced</h3>
            <p className="text-gray-400">Several universities are offering new scholarships for 2025 applicants.</p>
            <button className="mt-2 px-3 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg" onClick={() => alert("Read More about Scholarships")}>Read More</button>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Top Colleges in 2025 Rankings</h3>
            <p className="text-gray-400">Check out the newly released rankings for the best colleges this year.</p>
            <button className="mt-2 px-3 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg" onClick={() => alert("Read More about Rankings")}>Read More</button>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Tech Fest 2025 Registrations Open</h3>
            <p className="text-gray-400">Students can now register for the biggest college tech festival of the year.</p>
            <button className="mt-2 px-3 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg" onClick={() => alert("Register for Tech Fest")}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}



