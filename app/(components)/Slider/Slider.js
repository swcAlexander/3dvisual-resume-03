"use client";
import { useState } from 'react';
import styles from './styles.module.scss';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/1.jpg",
        "/2.jpg",
        "/3.jpg",
        "/4.jpg"
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className={styles.block_for_slider}>
            <div className={styles.viewport}>
                <ul className={styles.slidewrapper} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <li key={index} className={styles.slide}>
                            <img src={slide} alt={`Slide ${index + 1}`} className={styles.slide_img} />
                        </li>
                    ))}
                </ul>
            </div>
            <button className={styles.prev} onClick={prevSlide}><img src="./arrow_blackL.png" alt='⭠' width="30"/></button>
            <button className={styles.next} onClick={nextSlide}><img src="./arrow_hide_greenR.png" alt='⭢' width="30"/></button>
        </div>
    );
};

export default Slider;