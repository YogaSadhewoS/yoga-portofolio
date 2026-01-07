import Link from 'next/link';
import styles from './Projects.module.css';
import { projects } from '@/data/projects';

export default function Projects() {
    return (
        <section id="projects" className="container section">
            <h2 className="section-title">Featured Projects</h2>
            <div className={styles.grid}>
                {projects.map((project) => (
                    <div key={project.id} className={`card ${styles.card}`}>
                        <div className={styles.image} style={{ backgroundImage: 'linear-gradient(45deg, #111, #222)' }} />
                        <h3 className={styles.title}>{project.title}</h3>
                        <span className={styles.role}>{project.role}</span>
                        <p className={styles.desc}>{project.desc}</p>
                        <div className={styles.stack}>
                            {project.stack.map(tech => (
                                <span key={tech} className={styles.tag}>{tech}</span>
                            ))}
                        </div>
                        <Link href={`/projects/${project.id}`} className="btn" style={{ width: '100%', textAlign: 'center' }}>
                            Learn More
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
