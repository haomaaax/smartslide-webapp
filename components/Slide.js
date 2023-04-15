import React from 'react';

const Slide = ({ title, content }) => (
  <div className="slide">
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);

export default Slide;