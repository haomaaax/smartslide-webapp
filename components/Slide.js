import React from 'react';
import styles from './Slide.module.css';

const Slide = ({ title, content }) => (
    <div className={styles.slide}>
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
);

export default Slide;