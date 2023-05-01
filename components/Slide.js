import React from 'react';
import styles from './Slide.module.css';

const Slide = ({ title, content }) => (
  <div className={styles.slide}>
    <h3 className={styles.title}>{title}</h3>
    <div
      className={styles.content}
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  </div>
);

export default Slide;