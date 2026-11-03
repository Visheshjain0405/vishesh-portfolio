// Shared About content: used by the hero's full-screen About panel (desktop)
// and by the About & Services section. Edit text here once.

export const ABOUT_STATEMENT =
    "I'm Vishesh Jain, an independent full stack developer and AI consultant. I build custom, high-velocity web apps, autonomous AI agents, and business automation pipelines.";

export const ABOUT_BODY =
    'As a freelance engineer, I handle end-to-end delivery, from architectural scoping and database modeling to polished UI/UX and production deployment. I build tools that solve genuine business bottlenecks, whether that means turning manual spreadsheet workflows into real-time dashboards or engineering AI-powered voice and interview platforms.';

export const SERVICES = [
    {
        title: 'Websites & Web Apps',
        short: 'Web Dev',
        text: 'Custom web applications, responsive corporate sites, and high-performance SaaS platforms built with Next.js, React, Tailwind CSS, and interactive 3D/GSAP motion.',
        tags: ['Next.js', 'React', 'Three.js', 'GSAP', 'Tailwind CSS'],
    },
    {
        title: 'Mobile Applications',
        short: 'Mobile',
        text: 'Cross-platform iOS and Android apps engineered with React Native and Expo, featuring real-time WebSockets, push notifications, and offline-first data sync.',
        tags: ['React Native', 'Expo', 'iOS & Android', 'WebSockets'],
    },
    {
        title: 'Autonomous AI Agents',
        short: 'AI Agents',
        text: 'Intelligent multi-agent systems that autonomously reason, research, parse documents, and execute multi-step workflows using Gemini API, BullMQ & Redis queues.',
        tags: ['Gemini API', 'AI Agents', 'BullMQ', 'Redis'],
    },
    {
        title: 'AI Voice Agents',
        short: 'Voice AI',
        text: 'Ultra-low latency conversational voice agents powered by WebRTC (LiveKit) and audio models for automated phone calls, interview screenings, and support agents.',
        tags: ['LiveKit', 'WebRTC', 'Voice AI', 'OpenAI Audio'],
    },
    {
        title: 'AI Chatbots & RAG',
        short: 'Chatbots',
        text: 'Context-aware conversational assistants with semantic vector retrieval (RAG) integrated into custom web widgets, WhatsApp Cloud API, and internal knowledge bases.',
        tags: ['RAG Systems', 'WhatsApp Cloud API', 'Vector DB', 'LLMs'],
    },
    {
        title: 'AWS & Cloud Deployment',
        short: 'Cloud & DevOps',
        text: 'Production-ready cloud architecture, Docker containerization, AWS S3/EC2 deployments, Nginx reverse proxy, CI/CD pipelines, and secure infrastructure.',
        tags: ['AWS S3/EC2', 'Docker', 'CI/CD', 'Nginx', 'GCP'],
    },
];

export const CERTIFICATIONS = [
    {
        title: 'Associate Cloud Engineer',
        issuer: 'Google Cloud Certified',
        credentialName: 'Google Cloud Certified: Associate Cloud Engineer',
        description:
            'Certified expertise in deploying applications, monitoring operations, managing enterprise cloud resources, configuring networking, and maintaining infrastructure security.',
        skills: ['Cloud Architecture', 'Compute & Storage', 'Docker & Kubernetes', 'IAM Security', 'Monitoring & Operations'],
        badgeText: 'Official Certification',
        active: true,
    },
];

export const EXPERIENCE = {
    start: '2023',
    end: 'Present',
    title: 'Independent Full Stack & AI Developer',
    role: 'Freelance software consultant & engineer',
    text: 'Partnering with businesses and founders to engineer custom SaaS products, internal automation systems, and client-facing platforms.',
    industries: ['HRTech', 'EdTech', 'E-Commerce', 'Logistics'],
};