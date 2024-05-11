import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className="booking-card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
