"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'projects', 'contact'];
            let current = '';

            // Check if at top
            if (window.scrollY === 0) {
                current = 'home';
            } else {
                // Check sections
                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        // If section is roughly in view (allowing for some header offset)
                        if (rect.top <= 100 && rect.bottom >= 100) {
                            current = section;
                            break; // Found the top-most visible section
                        }
                    }
                }
            }

            // Fallback: Check if near bottom for Contact
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
                current = 'contact';
            }

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    Yoga<span style={{ color: 'var(--accent)' }}>.dev</span>
                </Link>

                <button
                    className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <div className={styles.line} />
                    <div className={styles.line} />
                    <div className={styles.line} />
                </button>

                <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
                    <li>
                        <Link
                            href="/"
                            className={activeSection === 'home' || activeSection === '' ? styles.active : ''}
                            onClick={() => { setActiveSection('home'); closeMenu(); }}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#about"
                            className={activeSection === 'about' ? styles.active : ''}
                            onClick={() => { setActiveSection('about'); closeMenu(); }}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#projects"
                            className={activeSection === 'projects' ? styles.active : ''}
                            onClick={() => { setActiveSection('projects'); closeMenu(); }}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#contact"
                            className={activeSection === 'contact' ? styles.active : ''}
                            onClick={() => { setActiveSection('contact'); closeMenu(); }}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
