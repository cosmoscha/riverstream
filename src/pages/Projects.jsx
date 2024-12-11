import React, { useEffect, useState } from "react";

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);
    return (
        <div
            className={`transition-opacity duration-500 ease-in-out transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
        >
            <h1>My Projects</h1>
            <ul>
                <li>Project 1: A cool app I built</li>
                <li>Project 2: Another great project</li>
            </ul>
        </div>
    );
};

export default Projects;
