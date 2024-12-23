import React, { useEffect, useState } from "react";
import { styles } from "../styles/common";

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`${styles.pageContainer} ${styles.pageTransition.base}
            ${isVisible ? styles.pageTransition.visible : styles.pageTransition.hidden}`}>
            <h1 className={styles.typography.headerPrimary}>About Me</h1>
            <div className={styles.contentSection}>
                <p className={styles.typography.textBase}>
                    I am a passionate developer with expertise in Python, Solidity, and JavaScript. My career has been
                    dedicated to blockchain technology, specializing in smart contract development, decentralized
                    applications, and cross-chain solutions.
                </p>
                <p className={styles.typography.textBase}>
                    My work spans creating Ethereum-based solutions, developing cross-chain crypto portfolios, and
                    contributing to decentralized ecosystems.
                </p>
                <p className={styles.typography.textBase}>
                    Outside of work, I enjoy exploring emerging blockchain technologies and contributing to open-source
                    projects.
                </p>
            </div>
        </div>
    );
};

export default About;