import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  const navItems = [
    { icon: "🏠", label: "Home", path: "/" },
    { icon: "💼", label: "Projects", path: "/projects" },
    { icon: "👤", label: "About", path: "/about" }
  ];

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-white dark:bg-gray-900
        transition-all duration-300 ease-in-out flex flex-col
        ${isExpanded ? 'w-64' : 'w-16'}`}
      style={{
        boxShadow: '0px 0 30px rgba(0,0,0,0.1)'
      }}
    >
      {/* Hamburger Menu */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute -right-10 top-4 p-2 bg-white dark:bg-gray-900 rounded-r-lg
          shadow-lg border-r border-t border-b border-gray-200 dark:border-gray-700"
      >
        <div className="space-y-1.5">
          <span className="block w-6 h-0.5 bg-gray-600 dark:bg-gray-300"></span>
          <span className="block w-6 h-0.5 bg-gray-600 dark:bg-gray-300"></span>
          <span className="block w-6 h-0.5 bg-gray-600 dark:bg-gray-300"></span>
        </div>
      </button>

      {/* Logo Section */}
      <div className="p-4 flex items-center justify-center">
        <Link
          to="/"
          className="text-gray-800 dark:text-white text-2xl font-semibold"
        >
          {isExpanded ? 'MyDevSite' : 'M'}
        </Link>
      </div>

      {/* Search Bar - Only visible when expanded */}
      {isExpanded && (
        <div className="px-4 mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white placeholder-white/70
                focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <span className="absolute right-3 top-2.5 text-white">🔍</span>
          </div>
        </div>
      )}

      {/* Navigation Items */}
      <nav className="flex-1">
        <ul className="px-2">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={index} className="mb-2">
                <Link
                  to={item.path}
                  className={`flex items-center px-3 py-3 rounded-lg transition-all duration-300
                    ${isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-400'}
                    ${isExpanded ? 'pr-6' : 'justify-center'}`}
                >
                  <span className="text-xl">{item.icon}</span>
                  {isExpanded && (
                    <span className="ml-4 whitespace-nowrap transition-opacity duration-300">
                      {item.label}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;