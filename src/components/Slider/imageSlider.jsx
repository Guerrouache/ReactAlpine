import React, { useState, useEffect } from 'react';
import './imageSlider.css';
import voiture1 from '../../Assets-TP-Alpine/images/sources-homepage/galerie/A110_PE_1.jpg';
import voiture2 from '../../Assets-TP-Alpine/images/sources-homepage/galerie/A110_LEGENDE_9.jpg';
import voiture3 from '../../Assets-TP-Alpine/images/sources-homepage/galerie/A110_LEGENDE_5.jpg';

const ImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [voiture1, voiture2, voiture3];

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='slider bg-dark '> 
            <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)} style={{ width: '80%', height: '94vh' }} />
        </div>
    );
};

export default ImageSlider;