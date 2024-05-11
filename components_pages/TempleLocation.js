// TempleLocation.js
import React from 'react';
import './TempleLocation.css';

function TempleLocation({ location }) {
  return (
    <div className="TempleLocation">
      <h2>Temple Location</h2>
      <p>{location}</p>
    </div>
  );
}

export default TempleLocation;
