import React, { useState } from 'react';
import { FaCrown, FaHome, FaListAlt, FaTable, FaFile, FaLifeRing, FaAngleDown } from 'react-icons/fa';

const Sidebar = () => {
  const [dashboardDropdownOpen, setDashboardDropdownOpen] = useState(false);
  const [formDropdownOpen, setFormDropdownOpen] = useState(false);
  const [selectedDashboardOption, setSelectedDashboardOption] = useState('');
  const [selectedFormOption, setSelectedFormOption] = useState('');

  const toggleDashboardDropdown = () => {
    setDashboardDropdownOpen(!dashboardDropdownOpen);
    if (formDropdownOpen) {
      setFormDropdownOpen(false); // Close form dropdown if dashboard dropdown opens
    }
  };

  const toggleFormDropdown = () => {
    setFormDropdownOpen(!formDropdownOpen);
    if (dashboardDropdownOpen) {
      setDashboardDropdownOpen(false); // Close dashboard dropdown if form dropdown opens
    }
  };

  const handleDashboardOptionClick = (option) => {
    setSelectedDashboardOption(option);
    setDashboardDropdownOpen(false); // Close dropdown after selecting an option
  };

  const handleFormOptionClick = (option) => {
    setSelectedFormOption(option);
    setFormDropdownOpen(false); // Close dropdown after selecting an option
  };

  return (
    <aside className="bg-gray-800 text-white w-64 fixed top-0 left-0 h-screen flex flex-col z-50">
      <div className="p-4 flex items-center justify-start">
        <FaCrown className="text-4xl" />
        <span className="ml-2 font-bold text-2xl">TailAdmin</span>
      </div>
      <nav className="flex flex-col flex-1 overflow-y-auto">
        <ul>
          <li className="p-4 relative">
            <div className="flex items-center justify-between text-lg cursor-pointer" onClick={toggleDashboardDropdown}>
              <div className="flex items-center">
                <FaHome className="mr-2" />
                Dashboard
              </div>
              <FaAngleDown className={`transform ${dashboardDropdownOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`} />
            </div>
            {dashboardDropdownOpen && (
              <ul className="absolute left-0 w-64 bg-gray-800 text-white mt-1 py-1 z-10">
                <li
                  onClick={() => handleDashboardOptionClick('eCommerce')}
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                >
                  eCommerce
                </li>
                <li
                  onClick={() => handleDashboardOptionClick('CRM')}
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                >
                  CRM
                </li>
                <li
                  onClick={() => handleDashboardOptionClick('Stocks')}
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                >
                  Stocks
                </li>
              </ul>
            )}
          </li>
          <li className={`p-4 ${dashboardDropdownOpen ? 'mt-12' : ''}`}>
            <div className="flex items-center justify-between text-lg cursor-pointer" onClick={toggleFormDropdown}>
              <div className="flex items-center">
                <FaListAlt className="mr-2" />
                Forms
              </div>
              <FaAngleDown className={`transform ${formDropdownOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`} />
            </div>
            {formDropdownOpen && (
              <ul className="absolute left-0 w-64 bg-gray-800 text-white mt-1 py-1 z-10">
                <li
                  onClick={() => handleFormOptionClick('formElements')}
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                >
                  Form Elements
                </li>
                <li
                  onClick={() => handleFormOptionClick('formLayout')}
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                >
                  Form Layout
                </li>
              </ul>
            )}
          </li>
          <li className="p-4 flex items-center text-lg">
            <FaTable className="mr-2" />
            Tables
          </li>
          <li className="p-4 flex items-center text-lg">
            <FaFile className="mr-2" />
            Pages
          </li>
          <li className="p-4 flex items-center text-lg">
            <FaLifeRing className="mr-2" />
            Support
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
