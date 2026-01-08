import { projects } from '@/data/projects';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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
            <Link href="/#projects" className="btn" style={{ marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                ← Back to Projects
            </Link>

            <article className="fade-in visible">
                <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>{project.title}</h1>
                <p style={{ color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '2rem', fontWeight: 600 }}>{project.role}</p>

                <div style={{
                    width: '100%',
                    height: '300px',
                    backgroundColor: '#222',
                    borderRadius: '12px',
                    marginBottom: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundImage: 'linear-gradient(45deg, #111, #222)',
                    border: '1px solid var(--border)'
                }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Project Image Placeholder</span>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                    {project.stack.map(tech => (
                        <span key={tech} style={{
                            background: 'rgba(255,255,255,0.1)',
                            padding: '0.4rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.9rem'
                        }}>
                            {tech}
                        </span>
                    ))}
                </div>

                <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#ccc', whiteSpace: 'pre-line' }}>
                    {project.longDesc || project.desc}
                </div>
            </article>
        </main>
    );
}
