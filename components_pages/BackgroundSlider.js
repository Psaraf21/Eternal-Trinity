import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const BackgroundSlider = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      autoplay: {
        delay: 5000,
      },
      loop: true,
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide" style={{ backgroundImage: 'url(https://example.com/image1.jpg)' }}></div>
        <div className="swiper-slide" style={{ backgroundImage: 'url(https://example.com/image2.jpg)' }}></div>
        {/* Add more swiper slides as needed */}
      </div>
    </div>
  );
};

export default BackgroundSlider;
