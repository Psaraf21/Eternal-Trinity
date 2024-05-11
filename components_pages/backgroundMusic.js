import React, { useEffect } from 'react';
import backgroundMusic from '../music/Background.mp3'; 

const BackgroundMusicComponent = () => {
  useEffect(() => {
    const audio = document.getElementById('backgroundMusic');
    audio.play(); 
  }, []); 
  return (
    <div>
      <audio id="backgroundMusic" autoPlay loop>
        <source src={backgroundMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default BackgroundMusicComponent;
