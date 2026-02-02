import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "AI Hiring Platform",
        category: "HR Tech",
        description: "HR tech solution customized with AI agents. Generates JDs, parses resumes in bulk, and conducts automated interviews with real-time audio/video and transcript analysis.",
        tags: ["React", "LiveKit", "AI Agents", "OpenAI"],
        year: "2024",
        link: "#"
    },
    {
        title: "EdTech Automation",
        category: "Automation System",
        description: "An automated training session management system. Users upload Excel data, and the backend schedules reminders via Meta API & Twilio. Features real-time response tracking.",
        tags: ["Node.js", "WhatsApp API", "Socket.IO", "Twilio"],
        year: "2024",
        link: "#"
    },
    {
        title: "Rivoogen",
        category: "AI & IT Services",
        description: "Professional corporate website for an AI and IT solutions firm, focusing on digital transformation and innovative technology services. Built with modern UI/UX principles and performance optimization.",
        tags: ["Next.js", "AI Solutions", "Tailwind CSS", "Corporate"],
        year: "2024",
        link: "https://www.rivoogen.com/"
    },
    {
        title: "Eteon International",
        category: "Logistics & Trade",
        description: "A comprehensive import and export business website designed for international trade logistics. Features product catalogs, global trade tracking, and inquiry management.",
        tags: ["React", "Global Trade", "Logistics", "Business Solutions"],
        year: "2024",
        link: "https://vishesh-ashwin.vercel.app/"
    },
    {
        title: "Panisho E-Commerce",
        category: "Retail Platform",
        description: "A comprehensive e-commerce platform featuring a custom admin panel for analytics. Tracks daily sales, orders, and revenue with a high-performance interactive UI.",
        tags: ["React", "Node.js", "MongoDB", "Redux"],
        year: "2024",
        link: "https://www.panisho.in/"
    },
    {
        title: "Health Nexus",
        category: "Healthcare Platform",
        description: "Modern hospital management and patient information website, featuring service listings, appointment bookings, and healthcare resources for patients and staff.",
        tags: ["React", "Healthcare Tech", "UI/UX", "Management"],
        year: "2024",
        link: "https://health-nexus-five.vercel.app/"
    },
    {
        title: "Filmy Bowl",
        category: "Media & Entertainment",
        description: "A dynamic entertainment news and media platform providing latest updates, reviews, and insights from the film industry with high traffic capacity.",
        tags: ["CMS", "SEO Optimization", "Media Content", "News"],
        year: "2024",
        link: "https://filmybowl.com/"
    },
    {
        title: "South Filmy Nagri",
        category: "Entertainment Portal",
        description: "Specialized media portal focused on South Indian cinema, delivering trending news, celebrity updates, and movie reviews to a dedicated audience.",
        tags: ["Web Design", "CMS", "High Traffic", "Analytics"],
        year: "2024",
        link: "https://southfilmynagri.wuaze.com/?i=2"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="flex items-end justify-between mb-16 border-b border-gray-800 pb-8">
                <h2 className="text-4xl font-bold text-white">Selected Work</h2>
                <span className="hidden md:block text-gray-500">2023 — Present</span>
            </div>

            <div className="space-y-20">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true, margin: "-10%" }}
                        className="group grid md:grid-cols-12 gap-8 items-start hover:bg-[#0a0a0a] p-6 rounded-2xl transition-colors duration-300 -mx-6"
                    >
                        {/* Project Info */}
                        <div className="md:col-span-4 flex flex-col justify-between h-full">
                            <div>
                                <span className="text-xs font-mono text-gray-500 mb-2 block">{project.category}</span>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                            </div>
                            <div className="hidden md:block">
                                <a
                                    href={project.link}
                                    target={project.link.startsWith('http') ? "_blank" : "_self"}
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors inline-block"
                                >
                                    {project.link.startsWith('http') ? 'Visit Website' : 'View Case Study'}
                                </a>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="md:col-span-5 text-gray-400 leading-relaxed">
                            <p className="mb-6">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs text-gray-500 bg-gray-900 border border-gray-800 px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Year/Link Mobile */}
                        <div className="md:col-span-3 text-right hidden md:block text-gray-600 font-mono text-sm">
                            {project.year}
                        </div>
                        <div className="md:hidden mt-4 w-full">
                            <a
                                href={project.link}
                                target={project.link.startsWith('http') ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className="text-sm font-medium text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors"
                            >
                                {project.link.startsWith('http') ? 'Visit Website' : 'View Case Study'}
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
