import React from "react";
import { useTheme } from "../ThemeContext";

const ThemeToggleButton = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="fixed bottom-4 right-4 px-4 py-2 rounded shadow-lg transition-all bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-400 dark:hover:bg-gray-600"
        >
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
    );
};

export default ThemeToggleButton;
