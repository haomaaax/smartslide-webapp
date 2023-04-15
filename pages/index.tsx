import React, { useState } from 'react';
import PresentationForm from '../components/PresentationForm';

const HomePage = () => {
  const [slideContent, setSlideContent] = useState('');

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch('/api/generateSlides', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setSlideContent(data.slideContent);
    } catch (error) {
      console.error('Failed to generate slides:', error);
    }
  };

  return (
    <div>
      <h1>Generate Presentation Slides</h1>
      <PresentationForm onSubmit={handleFormSubmit} />
      {slideContent && (
        <div>
          <h2>Generated Slides</h2>
          <p>{slideContent}</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;