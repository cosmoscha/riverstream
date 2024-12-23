import React from 'react';
import { styles } from '../styles/common';

const PageHeader = ({ title }) => (
  <div className="sticky top-0 z-20 mb-8">
    <div className={`${styles.components.glassEffect} rounded-lg p-4 shadow-lg border ${styles.components.glassBorder}`}>
      <h1 className={styles.typography.headerPrimary}>{title}</h1>
    </div>
  </div>
);

export default PageHeader;