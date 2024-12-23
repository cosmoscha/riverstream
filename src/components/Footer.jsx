import React from "react";

const Footer = () => {
    return (
        <footer className="w-full py-4 mt-auto fixed bottom-0 left-0 right-0 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300 ease-in-out">
            <div className="container mx-auto text-center">
                <p className="text-sm md:text-base">
                    © 2024 <span className="font-semibold">RiverCha.dev</span> | Built with React & Tailwind
                </p>
                <div className="flex justify-center gap-4 mt-2">
                    <a
                        href="https://github.com/cosmoscha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/river-cha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:cosmos.cha1997@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
