'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './ImageCarousel.module.css';

export default function ImageCarousel({ images, interval = 3000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        if (!isPaused && images.length > 1) {
            timeoutRef.current = setTimeout(
                () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length),
                interval
            );
        }
        return () => resetTimeout();
    }, [currentIndex, isPaused, images.length, interval]);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    if (!images || images.length === 0) return null;

    return (
        <div
            className={styles.carousel}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div
                className={styles.slideContainer}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div className={styles.slide} key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>

            {images.length > 1 && (
                <>
                    <button className={`${styles.arrow} ${styles.left}`} onClick={goToPrevious}>
                        &#10094;
                    </button>
                    <button className={`${styles.arrow} ${styles.right}`} onClick={goToNext}>
                        &#10095;
                    </button>

                    <div className={styles.dotsContainer}>
                        {images.map((_, index) => (
                            <div
                                key={index}
                                className={`${styles.dot} ${currentIndex === index ? styles.active : ''}`}
                                onClick={() => goToSlide(index)}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
