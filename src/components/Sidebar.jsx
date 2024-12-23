import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { styles } from '../styles/common';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  const navItems = [
    { icon: "🏠", label: "Home", path: "/" },
    { icon: "💼", label: "Projects", path: "/projects" },
    { icon: "👤", label: "About", path: "/about" }
  ];

  return (
    <aside className={`${styles.layout.sidebar} ${styles.components.glassEffect}
      ${isExpanded ? 'w-64' : 'w-16'}`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`absolute -right-10 top-4 p-2 rounded-r-lg
          ${styles.components.glassEffect} ${styles.components.glassBorder}`}>
        <div className="space-y-1.5">
          <span className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-200"></span>
          <span className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-200"></span>
          <span className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-200"></span>
        </div>
      </button>

      <div className="p-4 flex items-center justify-center">
        <Link to="/" className="text-gray-800 dark:text-white text-2xl font-semibold">
          {isExpanded ? 'MyDevSite' : 'M'}
        </Link>
      </div>

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
                    ${isExpanded ? 'pr-6' : 'justify-center'}`}>
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