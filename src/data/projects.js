export const projects = [
    {
        id: 1,
        title: "EcoTracker",
        role: "Frontend Developer",
        desc: "A mobile-responsive web app for tracking daily carbon footprint with interactive charts. Users can input their daily activities and get real-time feedback on their environmental impact. Features include a dashboard, goal setting, and gamification elements.",
        stack: ["React", "Chart.js", "Firebase"],
        longDesc: "EcoTracker addresses the growing need for personal environmental accountability. \n\n**My Contributions:**\n- Developed the interactive dashboard using Chart.js to visualize user data across different timeframes.\n- Implemented responsive UI components ensuring seamless experience on mobile devices.\n- Integrated Firebase Authentication and Firestore for real-time data syncing.\n\n**Key Challenges:**\nOptimizing the chart rendering performance for mobile devices with large datasets.",
        image: "/ecotracker-placeholder.jpg"
    },
    {
        id: 2,
        title: "ShopEasy",
        role: "Fullstack",
        desc: "E-commerce platform with cart functionality, payment gateway integration, and admin dashboard.",
        stack: ["Next.js", "Stripe", "MongoDB"],
        longDesc: "ShopEasy is a comprehensive e-commerce solution designed for small businesses.\n\n**Features:**\n- Secure user authentication and profile management.\n- Stripe payment integration for credit card processing.\n- Admin dashboard for product and order management.\n\n**Tech Stack:**\nBuilt with Next.js App Router for server-side rendering and SEO benefits. MongoDB tracks inventory in real-time.",
        image: "/shopeasy-placeholder.jpg"
    },
    {
        id: 3,
        title: "AI Note Taker",
        role: "Backend Developer",
        desc: "Service that summarizes meeting notes using OpenAI API and stores them securely.",
        stack: ["Python", "FastAPI", "PostgreSQL"],
        longDesc: "A backend service exposing RESTful APIs for a meeting assistant application.\n\n**Architecture:**\n- FastAPI for high-performance async endpoints.\n- Celery workers for handling long-running AI summarization tasks.\n- PostgreSQL for structured storage of transcripts and summaries.\n\n**Security:**\nImplemented JWT authentication and role-based access control.",
        image: "/ainote-placeholder.jpg"
    }
];
