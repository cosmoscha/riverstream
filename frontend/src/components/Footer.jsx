import React from "react";
import { useTheme } from '../ThemeContext';
import { styles } from '../styles/common';

const Footer = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <footer className={`${styles.layout.footer} ${styles.components.glassEffect} ${styles.components.glassBorder}`}>
            <div className="container mx-auto relative px-4">
                <div className={`${styles.typography.textBase} flex flex-col sm:flex-row items-center justify-between`}>
                    <p className="text-sm md:text-base mb-2 sm:mb-0">
                        © 2024 <span className="font-semibold">RiverCha.dev</span> | Built with React, Vite, CSS, and AWS Cognito and Boto3
                    </p>

                    <div className={`${styles.typography.textBase} flex items-center gap-4`}>
                        <a href="https://github.com/cosmoscha"
                           target="_blank"
                           rel="noopener noreferrer"
                           className={styles.components.navLink}>
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/river-cha"
                           target="_blank"
                           rel="noopener noreferrer"
                           className={styles.components.navLink}>
                            LinkedIn
                        </a>
                        <a href="mailto:cosmos.cha1997@gmail.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           className={styles.components.navLink}>
                            Email
                        </a>

                        <button
                            onClick={toggleTheme}
                            className={`${styles.components.themeButton} ml-2`}
                            aria-label="Toggle theme">
                            {isDarkMode ? (
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="h-5 w-5"
                                     fill="none"
                                     viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="h-5 w-5"
                                     fill="none"
                                     viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
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