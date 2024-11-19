import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ theme, toggleTheme, categories }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 dark:from-gray-800 dark:to-gray-900 text-white shadow-lg">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-2xl font-semibold tracking-wide">
          <span className="hover:text-yellow-400 transition">News Aggregator</span>
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:underline hover:text-yellow-300 transition">Home</Link>
          <Link to="/signup" className="hover:underline hover:text-yellow-300 transition">Sign Up</Link>
          <Link to="/login" className="hover:underline hover:text-yellow-300 transition">Login</Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:text-yellow-300 transition focus:outline-none"
            >
              Categories
            </button>
            {showDropdown && (
              <div className="absolute bg-white dark:bg-gray-700 text-gray-800 dark:text-white shadow-lg rounded-lg mt-2 w-40 py-2 z-50">
                <ul className="space-y-1">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <Link
                        to={category.path}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded transition"
                        onClick={() => setShowDropdown(false)}
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <Link to="/bookmarks" className="hover:underline hover:text-yellow-300 transition">Bookmarks</Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? '🌞' : '🌜'}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
