import React, { useState } from 'react';
import PresentationForm from '../components/PresentationForm';
import Slide from '../components/Slide';
import { parseSlides } from '../utils/parseSlides';

interface FormData {
  topic: string;
  ideas: string;
  duration: string;
}

interface SlideData {
  title: string;
  content: string;
}

const HomePage = () => {
  const [slides, setSlides] = useState<SlideData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (formData: FormData) => {
    try {
      setIsLoading(true); // Set loading state to true before the API call
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
    } finally {
      setIsLoading(false); // Set loading state to false after the API call is complete
    }
  };

  return (
    <div className="container">
      <h1>SmartSlide</h1>
      <h3>Create presentation slides in 1 click</h3>
      <PresentationForm onSubmit={handleFormSubmit} isLoading={isLoading} />
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