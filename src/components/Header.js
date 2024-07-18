import React, { useState } from 'react';
import { FaBell, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark'); // Toggle dark mode class on the root element
  };

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center ml-64 ">
      <input
        type="text"
        placeholder="Type to search..."
        className="px-4 py-2 w-96"
      />
      <div className="flex items-center space-x-4">
        <button onClick={toggleTheme} className="focus:outline-none">
          {darkMode ? (
            <FaSun className="text-yellow-500" aria-label="Switch to light mode" />
          ) : (
            <FaMoon className="text-gray-800" aria-label="Switch to dark mode" />
          )}
        </button>
        <FaBell className="text-gray-600 cursor-pointer" aria-label="Notifications" />
        <FaEnvelope className="text-gray-600 cursor-pointer" aria-label="Messages" />
        <div className="flex flex-col items-center">
          <span className="ml-2">Thomas Anree</span>
          <span className="text-xs text-gray-500">UI/UX Designer</span>
          
        </div>
        <img
            src="/logo192.png" // Directly referencing the image in the public folder
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
      </div>
    </header>
  );
};

export default Header;