import React from "react";

function Navbar() {
  return (
    <nav
      className="bg-gray-900 text-white px-6 py-4 shadow-md"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide" aria-label="Clyra Home">
          Clyra
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium" role="menubar" aria-label="Primary">
          <li role="none">
            <a
              href="#features"
              className="hover:text-red-400 transition"
              role="menuitem"
              aria-label="Features section"
            >
              Features
            </a>
          </li>
          <li role="none">
            <a
              href="#how-it-works"
              className="hover:text-red-400 transition"
              role="menuitem"
              aria-label="How it works section"
            >
              How it works
            </a>
          </li>
          <li role="none">
            <a
              href="#capsules"
              className="hover:text-red-400 transition"
              role="menuitem"
              aria-label="Capsules section"
            >
              Capsules
            </a>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="space-x-4 text-sm font-medium">
          <button
            className="hover:text-red-400 transition"
            aria-label="Login to your account"
          >
            Login
          </button>
          <button
            className="bg-red-500 px-4 py-1 rounded hover:bg-red-600 transition"
            aria-label="Sign up for an account"
          >
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
