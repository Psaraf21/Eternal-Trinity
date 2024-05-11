// TempleInfo.js
import React from 'react';
import './TempleInfo.css';

function TempleInfo({ name, info }) {
  return (
    <div className="TempleInfo">
      <h2>{name}</h2>
      <p>{info}</p>
    </div>
  );
}

export default TempleInfo;
