import React, { useEffect, useState } from "react";

const About = () => {
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
            {/* Centered container with consistent margins */}
            <div className="flex flex-col justify-center items-center min-h-screen mx-auto max-w-3xl px-4">
                <h1 className="text-4xl font-bold mb-4">About Me</h1>
                <p className="text-gray-600 text-lg text-center">
                    I am a passionate developer with expertise in Python, Solidity, and JavaScript. My career has been
                    dedicated to blockchain technology, specializing in smart contract development, decentralized
                    applications, and cross-chain solutions. I have a strong background in building backend systems
                    using frameworks like Flask and Node.js, as well as implementing microservices and RESTful APIs.
                </p>
                <p className="text-gray-600 text-lg text-center mt-4">
                    My work spans creating Ethereum-based solutions, developing cross-chain crypto portfolios, and
                    contributing to decentralized ecosystems. I'm proficient in DevOps practices, leveraging tools like
                    Docker, Kubernetes, and AWS to streamline deployment processes.
                </p>
                <p className="text-gray-600 text-lg text-center mt-4">
                    Outside of work, I enjoy exploring emerging blockchain technologies and contributing to open-source
                    projects. With a deep understanding of blockchain security and agile methodologies, I aim to drive
                    innovation in blockchain and AI technologies.
                </p>
            </div>
        </div>
    );
};

export default About;
