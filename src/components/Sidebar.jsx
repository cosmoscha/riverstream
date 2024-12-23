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
      className={`fixed top-0 left-0 h-screen z-30
        transition-all duration-300 ease-in-out flex flex-col
        backdrop-blur-md bg-white/30 dark:bg-gray-900/30
        ${isExpanded ? 'w-64' : 'w-16'}`}
    >
      {/* Hamburger Menu */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute -right-10 top-4 p-2 backdrop-blur-md
          bg-white/30 dark:bg-gray-900/30 rounded-r-lg
          border-r border-t border-b border-white/20 dark:border-gray-700/50"
      >
        <div className="space-y-1.5">
          <span className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-200"></span>
          <span className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-200"></span>
          <span className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-200"></span>
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
                      ? 'bg-blue-600/80 text-white'
                      : 'text-gray-800 hover:bg-white/20 dark:text-gray-100 dark:hover:bg-gray-800/50'}
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