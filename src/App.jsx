import React from "react";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { useTheme } from "./ThemeContext";
import AnimatedBackground from "./components/AnimatedBackground";

const App = () => {
    const { isDarkMode } = useTheme();
    return (
        <Router>
            <div className={`${isDarkMode ? "dark" : ""}`}>
                {/* Background Layer */}
                <div className="fixed inset-0 z-0">
                    <AnimatedBackground />
                </div>

                {/* Layout Container */}
                <div className="relative min-h-screen flex bg-transparent">
                    {/* Sidebar */}
                    <Sidebar />

                    {/* Main Content Area */}
                    <main className="flex-1 flex flex-col min-h-screen ml-16">
                        {/* Content with padding for footer */}
                        <div className="flex-grow py-16 px-4">
                            {/* Centered content container */}
                            <div className="flex items-center justify-center min-h-full">
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="/projects" element={<Projects />} />
                                </Routes>
                            </div>
                        </div>

                        {/* Footer */}
                        <Footer />
                    </main>
                </div>
            </div>
        </Router>
    );
};

export default App;