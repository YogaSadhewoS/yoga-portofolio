import { projects } from '@/data/projects';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ImageCarousel from '@/components/ImageCarousel';
import styles from './project.module.css';

export function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id.toString(),
    }));
}

export default async function ProjectDetail({ params }) {
    const { id } = await params;
    const project = projects.find((p) => p.id.toString() === id);

    if (!project) {
        notFound();
    }

    return (
        <main className="container section">
            <article className={`fade-in visible ${styles.article}`}>
                <Link href="/#projects" className={`btn ${styles.backLink}`}>
                    ← Back to Projects
                </Link>

                <h1 className={`${styles.title} section-title`}>{project.title}</h1>
                <p className={styles.role}>{project.role}</p>

                <div className={styles.carouselWrapper}>
                    <ImageCarousel
                        images={project.images || (project.image ? [project.image] : [])}
                    />
                </div>

                <div className={styles.stack}>
                    {project.stack.map(tech => (
                        <span key={tech} className={styles.stackItem}>
                            {tech}
                        </span>
                    ))}
                </div>

                <div className={styles.description}>
                    {(project.longDesc || project.desc).split('**').map((part, index) =>
                        index % 2 === 1 ? <strong key={index} className={styles.highlight}>{part}</strong> : part
                    )}
                </div>
            </article>
        </main>
    );
}
