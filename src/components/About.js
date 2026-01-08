import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className={`section ${styles.about}`}>
            <div className={`container ${styles.content}`}>
                <div className={styles.imageWrapper}>
                    {/* Placeholder image - user should replace this */}
                    <Image
                        src="/globe.svg"
                        alt="Yoga Profile"
                        fill
                        className={styles.image}
                        style={{ objectFit: 'cover', padding: '2rem', background: '#051512' }}
                    />
                </div>

                <div className={styles.textWrapper}>
                    <div>
                        <span className={styles.subtitle}>About Me</span>
                        <h2 className={styles.title}>Yoga Sadhewo Shalahudin</h2>
                    </div>

                    <p className={styles.description}>
                        Hello! I'm Yoga, a Computer Engineering graduate with a strong focus on Backend Development.
                        I love solving complex problems and turning them into simple, elegant solutions.
                        My journey in tech has been driven by curiosity and a desire to build things that matter.
                    </p>

                    <p className={styles.description}>
                        Currently, I specialize in building robust web applications using Laravel and C#.
                        When I'm not coding, I'm usually exploring new technologies or refining my existing skills.
                    </p>

                    <div className={styles.techStack}>
                        <p className={styles.techTitle}>Tech Stack & Tools</p>
                        <div className={styles.techGrid}>
                            {[
                                { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
                                { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
                                { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
                                { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg' },
                                { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
                                { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
                                { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
                                { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
                            ].map((tech) => (
                                <div key={tech.name} className={styles.techItem} title={tech.name}>
                                    <img src={tech.icon} alt={tech.name} className={styles.techIcon} />
                                    <span className={styles.techName}>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
