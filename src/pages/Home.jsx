import React, { useEffect, useState } from "react";
import { styles } from "../styles/common";

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`${styles.pageContainer} ${styles.pageTransition.base}
            ${isVisible ? styles.pageTransition.visible : styles.pageTransition.hidden}`}>
            <h1 className={styles.typography.headerPrimary}>
                Welcome to My Developer Portfolio
            </h1>
            <div className={styles.contentSection}>
                <p className={styles.typography.textBase}>
                    Hi, I'm River Cha, a software engineer with a passion for creating scalable and innovative solutions.
                    With expertise in Python, JavaScript, Go, and Solidity, I specialize in building robust applications
                    and infrastructure for crypto and financial services.
                </p>
                <p className={styles.typography.textBase}>
                    My journey includes working with AWS, Terraform, Docker, and Kubernetes to streamline deployments
                    and enhance application performance.
                </p>
                <p className={styles.typography.textBase}>
                    In my current role, I've developed APIs, managed cloud-native applications, and built solutions
                    that handle large-scale crypto data processing, ensuring reliability and scalability.
                </p>
                <p className={styles.typography.textBase}>
                    Explore my portfolio to see the projects I've worked on and the technologies I'm passionate about!
                </p>
            </div>
        </div>
    );
};

export default Home;