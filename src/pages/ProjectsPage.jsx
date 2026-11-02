import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import {
    FiArrowLeft,
    FiExternalLink,
    FiSearch,
    FiCheckCircle,
    FiCode,
    FiCpu,
    FiGlobe,
    FiShoppingCart,
    FiFilm,
    FiArrowRight,
    FiSmartphone
} from 'react-icons/fi';

const categories = [
    { name: "All", icon: <FiGlobe className="w-4 h-4" /> },
    { name: "AI & Automation", icon: <FiCpu className="w-4 h-4" /> },
    { name: "Full Stack Web", icon: <FiCode className="w-4 h-4" /> },
    { name: "Mobile Apps", icon: <FiSmartphone className="w-4 h-4" /> },
    { name: "E-Commerce", icon: <FiShoppingCart className="w-4 h-4" /> },
    { name: "Media & Portals", icon: <FiFilm className="w-4 h-4" /> },
];

const ProjectsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
            const matchesSearch =
                project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
                project.clientType.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <div className="min-h-screen bg-background text-textMain pt-28 pb-20">
            {/* Header / Hero */}
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-10">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors group mb-6"
                    >
                        <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Home</span>
                    </Link>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-800 pb-10">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono mb-4">
                                <span>Freelance Client Portfolio</span>
                                <span>•</span>
                                <span>{projects.length} Case Studies & Deliveries</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
                                Crafted Projects & Solutions
                            </h1>
                            <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                                A curated showcase of custom web apps, real-time automation pipelines, AI agent architectures, and enterprise platforms engineered for clients worldwide.
                            </p>
                        </div>

                        {/* Metric Highlights */}
                        <div className="grid grid-cols-2 gap-4 sm:flex sm:gap-6 bg-surface p-4 rounded-xl border border-neutral-800">
                            <div>
                                <div className="text-2xl font-bold text-white font-mono">{projects.length}+</div>
                                <div className="text-xs text-neutral-400">Shipped Projects</div>
                            </div>
                            <div className="border-l border-neutral-800 pl-4 sm:pl-6">
                                <div className="text-2xl font-bold text-emerald-400 font-mono">100%</div>
                                <div className="text-xs text-neutral-400">Client Satisfaction</div>
                            </div>
                            <div className="border-l border-neutral-800 pl-4 sm:pl-6 col-span-2 sm:col-span-1">
                                <div className="text-2xl font-bold text-white font-mono">End-to-End</div>
                                <div className="text-xs text-neutral-400">Full Architecture</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters & Search Bar */}
                <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-12">
                    {/* Category Tabs */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => {
                            const count = cat.name === "All"
                                ? projects.length
                                : projects.filter(p => p.category === cat.name).length;

                            const isActive = selectedCategory === cat.name;

                            return (
                                <button
                                    key={cat.name}
                                    onClick={() => setSelectedCategory(cat.name)}
                                    className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all flex items-center gap-2 cursor-pointer ${
                                        isActive
                                            ? 'bg-white text-black font-semibold shadow-sm'
                                            : 'bg-surface text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700'
                                    }`}
                                >
                                    {cat.icon}
                                    <span>{cat.name}</span>
                                    <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                                        isActive ? 'bg-black/15 text-black font-mono' : 'bg-neutral-800 text-neutral-400 font-mono'
                                    }`}>
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Search Input */}
                    <div className="relative min-w-[260px] md:w-80">
                        <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 w-4 h-4" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search by tech or keyword..."
                            className="w-full pl-10 pr-4 py-2 rounded-lg bg-surface border border-neutral-800 text-white text-sm focus:outline-none focus:border-white transition-colors placeholder-neutral-500"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white text-xs"
                            >
                                Clear
                            </button>
                        )}
                    </div>
                </div>

                {/* Projects Grid */}
                {filteredProjects.length === 0 ? (
                    <div className="text-center py-24 bg-surface rounded-2xl border border-neutral-800">
                        <FiSearch className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">No projects matched your criteria</h3>
                        <p className="text-neutral-400 text-sm max-w-md mx-auto mb-6">
                            Try adjusting your search query or selecting a different category to view more work.
                        </p>
                        <button
                            onClick={() => {
                                setSelectedCategory("All");
                                setSearchQuery("");
                            }}
                            className="btn btn-outline text-xs"
                        >
                            Reset All Filters
                        </button>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 gap-8">
                        <AnimatePresence>
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id || index}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.35, delay: index * 0.05 }}
                                    className="group flex flex-col justify-between p-8 rounded-2xl bg-surface border border-neutral-800/80 hover:border-neutral-600 transition-all duration-300 hover:shadow-xl hover:shadow-black/40"
                                >
                                    <div>
                                        {/* Card Top Meta */}
                                        <div className="flex items-center justify-between gap-4 mb-4">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-mono text-neutral-300 bg-neutral-900 px-2.5 py-1 rounded border border-neutral-800">
                                                    {project.category}
                                                </span>
                                                <span className="text-xs font-mono text-neutral-500">
                                                    {project.year}
                                                </span>
                                            </div>

                                            {project.isLive ? (
                                                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                                    Live Product
                                                </span>
                                            ) : (
                                                <span className="text-xs font-mono text-neutral-500 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800/60">
                                                    Internal Solution
                                                </span>
                                            )}
                                        </div>

                                        {/* Title & Client Focus */}
                                        <div className="mb-3">
                                            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-1">
                                                {project.clientType}
                                            </span>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-neutral-200 transition-colors">
                                                {project.title}
                                            </h3>
                                        </div>

                                        {/* Description */}
                                        <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                                            {project.fullDescription || project.description}
                                        </p>

                                        {/* Deliverables / Highlights */}
                                        {project.highlights && project.highlights.length > 0 && (
                                            <div className="mb-6 pt-4 border-t border-neutral-800/80 space-y-2">
                                                <span className="text-xs font-mono uppercase text-neutral-500 block">
                                                    Key Deliverables:
                                                </span>
                                                {project.highlights.map((h, i) => (
                                                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                                                        <FiCheckCircle className="w-3.5 h-3.5 text-neutral-400 mt-0.5 flex-shrink-0" />
                                                        <span>{h}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Tech Tags */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tags.map(tag => (
                                                <span
                                                    key={tag}
                                                    className="text-xs font-mono text-neutral-300 bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Footers */}
                                    <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                                        {project.link && project.link.startsWith('http') ? (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-primary text-xs py-2 px-4 group/btn"
                                            >
                                                <span>Visit Live Website</span>
                                                <FiExternalLink className="w-3.5 h-3.5 ml-1 group-hover/btn:scale-110 transition-transform" />
                                            </a>
                                        ) : (
                                            <span className="text-xs font-mono text-neutral-500">
                                                Client Confidential / Internal
                                            </span>
                                        )}

                                        <Link
                                            to="/#contact"
                                            className="text-xs font-medium text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1"
                                        >
                                            <span>Inquire Similar</span>
                                            <FiArrowRight className="w-3 h-3" />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}

                {/* Freelance Work Inquiries CTA */}
                <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-surface border border-neutral-800 relative overflow-hidden shadow-2xl shadow-black/50">
                    <div className="relative z-10 max-w-2xl">
                        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2 block">
                            Direct Collaboration
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                            Have a custom product or project in mind?
                        </h2>
                        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
                            Whether you need an MVP built from scratch, real-time AI automation agents, or a performance-optimized web platform, I'm ready to help you execute.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/#contact" className="btn btn-primary">
                                Discuss Your Project
                                <FiArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                            <Link to="/" className="btn btn-outline">
                                View Full Profile
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
