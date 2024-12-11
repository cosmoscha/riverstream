import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { useTheme } from "./ThemeContext";
import ThemeToggleButton from "./components/ThemeToggleButton";
import RouteWrapper from "./components/RouteWrapper";

const App = () => {
    const { isDarkMode } = useTheme();

    return (
        <Router>
            {/* Apply dark class globally */}
            <div className={`${isDarkMode ? "dark" : ""}`}>
                <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 ease-in-out">
                    {/* Navbar */}
                    <Navbar />

                    {/* Main Content */}
                    <main className="flex-grow flex items-center justify-center">
                        <RouteWrapper>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/projects" element={<Projects />} />
                                <Route path="/contact" element={<Contact />} />
                            </Routes>
                        </RouteWrapper>
                    </main>

                    {/* Footer */}
                    <Footer />

                    {/* Theme Toggle Button */}
                    <ThemeToggleButton />
                </div>
            </div>
        </Router>
    );
};

export default App;
