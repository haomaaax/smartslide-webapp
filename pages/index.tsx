import React, { useState } from 'react';
import PresentationForm from '../components/PresentationForm';
import Slide from '../components/Slide';
import { parseSlides } from '../utils/parseSlides';

const HomePage = () => {
  const [slides, setSlides] = useState([]);

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
      const parsedSlides = parseSlides(data.slideContent);
      setSlides(parsedSlides);
    } catch (error) {
      console.error('Failed to generate slides:', error);
    }
  };

  return (
    <div>
      <h1>Generate Presentation Slides</h1>
      <PresentationForm onSubmit={handleFormSubmit} />
      {slides.length > 0 && (
        <div>
          <h2>Generated Slides</h2>
          {slides.map((slide, index) => (
            <Slide key={index} title={slide.title} content={slide.content} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;