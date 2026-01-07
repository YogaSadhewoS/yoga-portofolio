import Link from 'next/link';
import { projects } from '@/data/projects';
import Navbar from '@/components/Navbar';

export function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id.toString(),
    }));
}

export default function ProjectDetail({ params }) {
    const project = projects.find((p) => p.id.toString() === params.id);

    if (!project) {
        return (
            <>
                <Navbar />
                <div className="container section" style={{ textAlign: 'center' }}>
                    <h1>Project Not Found</h1>
                    <Link href="/" className="btn">Back Home</Link>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <main className="container section">
                <Link href="/#projects" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                    &larr; Back to Projects
                </Link>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{
                        width: '100%',
                        height: '300px',
                        backgroundColor: '#222',
                        borderRadius: '12px',
                        marginBottom: '2rem',
                        backgroundImage: 'linear-gradient(45deg, #111, #333)'
                    }} />

                    <h1 className="section-title" style={{ textAlign: 'left' }}>{project.title}</h1>
                    <p style={{ color: 'var(--accent)', fontWeight: '600', marginBottom: '1rem', textTransform: 'uppercase' }}>{project.role}</p>

                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
                        {project.stack.map(tech => (
                            <span key={tech} style={{
                                fontSize: '0.8rem',
                                background: 'rgba(255,255,255,0.1)',
                                padding: '0.3rem 0.8rem',
                                borderRadius: '20px'
                            }}>
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div style={{ lineHeight: '1.8', color: '#ccc', whiteSpace: 'pre-line' }}>
                        {project.longDesc}
                    </div>
                </div>
            </main>
        </>
    );
}
