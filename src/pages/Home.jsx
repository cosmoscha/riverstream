import React, { useEffect, useState } from "react";

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`transition-opacity duration-500 ease-in-out transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            } flex flex-col justify-center items-center min-h-screen mx-auto max-w-4xl px-6`}
        >
            <h1 className="text-5xl font-bold mb-6 text-center">
                Welcome to My Developer Portfolio
            </h1>
            <p className="text-gray-600 text-lg text-center">
                Hi, I’m River Cha, a software engineer with a passion for creating scalable and innovative solutions.
                With expertise in Python, JavaScript, Go, and Solidity, I specialize in building robust applications
                and infrastructure for crypto and financial services.
            </p>
            <p className="text-gray-600 text-lg text-center mt-4">
                My journey includes working with AWS, Terraform, Docker, and Kubernetes to streamline deployments
                and enhance application performance. I’m adept at designing data pipelines, enabling real-time and
                batch processing with tools like Apache Hudi and Apache Flink, and creating Infrastructure-as-Code
                solutions for seamless automation.
            </p>
            <p className="text-gray-600 text-lg text-center mt-4">
                In my current role, I’ve developed APIs, managed cloud-native applications, and built solutions
                that handle large-scale crypto data processing, ensuring reliability and scalability. My approach
                combines technical skills with collaboration and problem-solving to deliver impactful results.
            </p>
            <p className="text-gray-600 text-lg text-center mt-4">
                Explore my portfolio to see the projects I’ve worked on and the technologies I’m passionate about!
            </p>
        </div>
    );
};

export default Home;
