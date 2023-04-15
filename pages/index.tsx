import React from 'react';
import PresentationForm from '../components/PresentationForm';

const HomePage = () => {
  const handleFormSubmit = (formData) => {
    // This is where you'll call the GPT-4 API and generate slides.
    console.log(formData);
  };

  return (
    <div>
      <h1>Generate Presentation Slides</h1>
      <PresentationForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default HomePage;