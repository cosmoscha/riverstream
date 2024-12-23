import React from "react";
import { useTheme } from '../ThemeContext';

const Footer = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <footer className="w-full py-4 mt-auto fixed bottom-0 left-0 right-0 z-30
            backdrop-blur-md bg-white/30 dark:bg-gray-900/30
            text-gray-800 dark:text-gray-200 transition-colors duration-300 ease-in-out
            border-t border-white/20 dark:border-gray-700/50">
            <div className="container mx-auto relative px-4">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                    {/* Copyright */}
                    <p className="text-sm md:text-base mb-2 sm:mb-0">
                        © 2024 <span className="font-semibold">RiverCha.dev</span> | Built with React & Tailwind
                    </p>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/cosmoscha"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600/90 dark:hover:text-blue-400/90 transition-colors duration-300"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/river-cha"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600/90 dark:hover:text-blue-400/90 transition-colors duration-300"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="mailto:cosmos.cha1997@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600/90 dark:hover:text-blue-400/90 transition-colors duration-300"
                        >
                            Email
                        </a>

                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/50
                                     transition-colors duration-300 ml-2"
                            aria-label="Toggle theme"
                        >
                            {isDarkMode ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;