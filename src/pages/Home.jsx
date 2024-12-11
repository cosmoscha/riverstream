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
            }`}
        >
            <h1 className="text-4xl font-bold mb-4">Welcome to My Developer Portfolio</h1>
            <p className="text-gray-600 text-lg">Discover my projects and skills as a web developer.</p>
        </div>
    );
};

export default Home;
