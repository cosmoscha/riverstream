import React, { useEffect, useState } from "react";
import { styles } from "../styles/common";

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`${styles.pageContainer} ${styles.pageTransition.base}
            ${isVisible ? styles.pageTransition.visible : styles.pageTransition.hidden}`}>
            <h1 className={styles.typography.headerPrimary}>My Projects</h1>
            <div className={styles.contentSection}>
                <div className={styles.components.card}>
                    <h2 className={styles.typography.headerSecondary}>Project 1: A cool app I built</h2>
                    <p className={styles.typography.textBase}>
                        Description of the cool app and its features.
                    </p>
                </div>

                <div className={styles.components.card}>
                    <h2 className={styles.typography.headerSecondary}>Project 2: Another great project</h2>
                    <p className={styles.typography.textBase}>
                        Description of the second project and its features.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Projects;