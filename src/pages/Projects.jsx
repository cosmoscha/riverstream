import React, { useEffect, useState } from "react";

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`transition-opacity duration-500 ease-in-out transform
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                w-full max-w-3xl mx-auto
                backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 rounded-lg shadow-lg
                relative z-10`}
        >
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center pt-6">
                My Projects
            </h1>
            <div className="space-y-6 px-6">
                {/* Project 1 */}
                <div className="bg-white/30 dark:bg-gray-800/30 p-4 rounded-lg">
                    <h2 className="text-xl font-bold mb-2">Project 1: A cool app I built</h2>
                    <p className="text-gray-800 dark:text-gray-200">
                        Description of the cool app and its features.
                    </p>
                </div>

                {/* Project 2 */}
                <div className="bg-white/30 dark:bg-gray-800/30 p-4 rounded-lg mb-6">
                    <h2 className="text-xl font-bold mb-2">Project 2: Another great project</h2>
                    <p className="text-gray-800 dark:text-gray-200">
                        Description of the second project and its features.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Projects;