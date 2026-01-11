import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={`container section ${styles.hero}`}>
            <div className={styles.content}>
                <div className={styles.imageWrapper}>
                    {/* Using a placeholder service or local file. For now, empty or generic */}
                    <Image
                        src="/FotoProfil.jpg"
                        alt="Profile"
                        width={250}
                        height={250}
                        className={styles.profileImage}
                    />
                </div>
                <h1 className={styles.title}>
                    Hi, I'm <span className={styles.highlight}>Yoga</span>
                </h1>
                <p className={styles.bio}>
                    Graduate in Computer Engineering passionate about Backend Development (Laravel, C#).
                    I build modern, responsive, and user-friendly web applications.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <Link href="#projects" className="btn">
                        View My Work
                    </Link>
                    <Link href="#contact" className="btn" style={{ background: 'transparent', border: '1px solid var(--border)' }}>
                        Contact Me
                    </Link>
                </div>
            </div>
        </section>
    );
}
