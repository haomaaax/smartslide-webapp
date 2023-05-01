import React, { useState } from 'react';
import styles from './PresentationForm.module.css';

const PresentationForm = ({ onSubmit, isLoading }) => {

  const [formData, setFormData] = useState({
    topic: '',
    ideas: '',
    duration: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="topic" className={styles.label}>
        Topic
      </label>
      <input
        type="text"
        id="topic"
        name="topic"
        value={formData.topic}
        onChange={handleChange}
        className={styles.input}
        required
      />

      <label htmlFor="ideas" className={styles.label}>
        Main Ideas
      </label>
      <textarea
        id="ideas"
        name="ideas"
        value={formData.ideas}
        onChange={handleChange}
        className={styles.textarea}
        required
      />

      <label htmlFor="duration" className={styles.label}>
        Presentation Duration (minutes)
      </label>
      <input
        type="number"
        id="duration"
        name="duration"
        value={formData.duration}
        onChange={handleChange}
        className={styles.input}
        required
      />

      <button type="submit" className={styles.button} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Generate Slides'}
      </button>
    </form>
  );
};

export default PresentationForm;