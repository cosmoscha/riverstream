import React, { useEffect, useState } from "react";

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`transition-opacity duration-500 ease-in-out transform
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                w-full max-w-4xl mx-auto
                backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 rounded-lg shadow-lg
                relative z-10`}
        >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center pt-6">
                Welcome to My Developer Portfolio
            </h1>
            <div className="space-y-4 px-6">
                <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg text-center">
                    Hi, I'm River Cha, a software engineer with a passion for creating scalable and innovative solutions.
                    With expertise in Python, JavaScript, Go, and Solidity, I specialize in building robust applications
                    and infrastructure for crypto and financial services.
                </p>
                <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg text-center">
                    My journey includes working with AWS, Terraform, Docker, and Kubernetes to streamline deployments
                    and enhance application performance.
                </p>
                <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg text-center">
                    In my current role, I've developed APIs, managed cloud-native applications, and built solutions
                    that handle large-scale crypto data processing, ensuring reliability and scalability.
                </p>
                <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg text-center pb-6">
                    Explore my portfolio to see the projects I've worked on and the technologies I'm passionate about!
                </p>
            </div>
        </div>
    );
};

export default Home;