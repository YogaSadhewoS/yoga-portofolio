'use client';
import { useEffect, useRef, useState } from 'react';

export default function FadeIn({ children }) {
    const domRef = useRef();
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    // Optional: Unobserve after triggering to prevent re-triggering?
                    // observer.unobserve(entry.target); 
                    // Actually usually better to just keep state true.
                }
            });
        });

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
