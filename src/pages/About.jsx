import React, { useEffect, useState } from "react";

const About = () => {
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
                About Me
            </h1>
            <div className="space-y-4 px-6">
                <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg text-center">
                    I am a passionate developer with expertise in Python, Solidity, and JavaScript. My career has been
                    dedicated to blockchain technology, specializing in smart contract development, decentralized
                    applications, and cross-chain solutions.
                </p>
                <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg text-center">
                    My work spans creating Ethereum-based solutions, developing cross-chain crypto portfolios, and
                    contributing to decentralized ecosystems.
                </p>
                <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg text-center pb-6">
                    Outside of work, I enjoy exploring emerging blockchain technologies and contributing to open-source
                    projects.
                </p>
            </div>
        </div>
    );
};

export default About;