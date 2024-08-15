'use client';
import React, { useState } from 'react';
import styles from './page.module.css';

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className={styles.slider}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${
            index === currentIndex ? styles.active : ''
          }`}>
          {slide.content}
        </div>
      ))}
      <button className={styles.slider_button} onClick={prevSlide}>
        <img src="./arrow_blackL.png" alt="" width={30} />
      </button>
      <button className={styles.slider_button} onClick={nextSlide}>
        <img src="./arrow_hide_greenR.png" alt="" width={30} />
      </button>
    </div>
  );
};

export default Slider;
