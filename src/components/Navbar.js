import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    Yoga<span style={{ color: 'var(--accent)' }}>.dev</span>
                </Link>
                <ul className={styles.navLinks}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="#projects">Projects</Link></li>
                    <li><Link href="#contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}
