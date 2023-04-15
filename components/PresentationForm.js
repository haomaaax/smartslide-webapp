import React, { useState } from 'react';

const PresentationForm = ({ onSubmit }) => {
  const [topic, setTopic] = useState('');
  const [ideas, setIdeas] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ topic, ideas, duration });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="topic">Presentation Topic:</label>
      <input
        type="text"
        id="topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        required
      />

      <label htmlFor="ideas">Presentation Ideas:</label>
      <textarea
        id="ideas"
        value={ideas}
        onChange={(e) => setIdeas(e.target.value)}
        required
      />

      <label htmlFor="duration">Scheduled Presentation Time (minutes):</label>
      <input
        type="number"
        id="duration"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        required
      />

      <button type="submit">Generate Slides</button>
    </form>
  );
};

export default PresentationForm;