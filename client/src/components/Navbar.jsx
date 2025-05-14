import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">Clyra</div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#features" className="hover:text-red-400 transition">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-red-400 transition">
            How it works
          </a>
          <a href="#capsules" className="hover:text-red-400 transition">
            Capsules
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="space-x-4 text-sm font-medium">
          <button className="hover:text-red-400 transition">Login</button>
          <button className="bg-red-500 px-4 py-1 rounded hover:bg-red-600 transition">
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
