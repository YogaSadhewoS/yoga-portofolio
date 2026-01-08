'use client';
import { useEffect, useRef, useState } from 'react';

export default function FadeIn({ children }) {
    const domRef = useRef();
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setVisible(entry.isIntersecting);
            });
        }, { threshold: 0.1 });

        const current = domRef.current;
        if (current) observer.observe(current);

        return () => {
            if (current) observer.unobserve(current);
        };
    }, []);

    return (
        <div
            ref={domRef}
            className={`fade-in ${isVisible ? 'visible' : ''}`}
        >
            {children}
        </div>
    );
}
