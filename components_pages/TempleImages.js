// TempleImages.js
import React from 'react';
import './TempleImages.css';

function TempleImages({ images }) {
  return (
    <div className="TempleImages">
      <h2>Temple Images</h2>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Temple ${index + 1}`} />
      ))}
    </div>
  );
}

export default TempleImages;
