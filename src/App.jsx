import React from "react";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { useTheme } from "./ThemeContext";
import AnimatedBackground from "./components/AnimatedBackground";
import { styles } from "./styles/common";

const App = () => {
    const { isDarkMode } = useTheme();

    return (
        <Router>
            <div className={`${isDarkMode ? "dark" : ""}`}>
                <div className="fixed inset-0 z-0">
                    <AnimatedBackground />
                </div>

                <div className="relative min-h-screen flex bg-transparent">
                    <Sidebar />

                    <main className={styles.layout.mainContent}>
                        <div className={styles.layout.contentContainer}>
                            <div className="flex items-center justify-center h-[calc(100vh-8rem)]">
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="/projects" element={<Projects />} />
                                </Routes>
                            </div>
                        </div>
                        <div className="h-16"></div>
                        <Footer />
                    </main>
                </div>
            </div>
        </Router>
    );
};

export default App;