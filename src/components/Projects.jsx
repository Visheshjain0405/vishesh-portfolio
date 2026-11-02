import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { FiArrowUpRight, FiLayers } from 'react-icons/fi';

const Projects = () => {
    // Show top featured projects on home page
    const featuredProjects = projects.filter(p => p.featured);

    return (
        <section id="projects" className="section">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-neutral-800 pb-8 gap-4">
                <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2 block">
                        Portfolio Highlights
                    </span>
                    <h2 className="text-4xl font-bold text-white tracking-tight">Selected Client Work</h2>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-neutral-500 font-mono hidden sm:inline-block">2023 — Present</span>
                    <Link
                        to="/projects"
                        className="btn btn-outline text-xs sm:text-sm py-2 px-4 group flex items-center gap-2"
                    >
                        <FiLayers className="w-4 h-4 text-neutral-300" />
                        <span>View All Projects ({projects.length})</span>
                        <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                    </Link>
                </div>
            </div>

            <div className="space-y-16">
                {featuredProjects.map((project, index) => (
                    <motion.div
                        key={project.id || index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true, margin: "-10%" }}
                        className="group grid md:grid-cols-12 gap-8 items-start hover:bg-surface/80 p-6 rounded-2xl transition-all duration-300 -mx-6 border border-transparent hover:border-neutral-800"
                    >
                        {/* Project Info */}
                        <div className="md:col-span-4 flex flex-col justify-between h-full">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xs font-mono text-neutral-300 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                                        {project.category}
                                    </span>
                                    {project.isLive && (
                                        <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                            Live
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neutral-200 transition-colors">
                                    {project.title}
                                </h3>
                            </div>
                            <div className="hidden md:flex items-center gap-4 mt-4">
                                {project.link && project.link.startsWith('http') ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-medium text-white hover:text-neutral-300 transition-colors inline-flex items-center gap-1 group/link underline-offset-4 hover:underline"
                                    >
                                        <span>Visit Live Site</span>
                                        <FiArrowUpRight className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                    </a>
                                ) : (
                                    <Link
                                        to={`/projects`}
                                        className="text-sm font-medium text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1"
                                    >
                                        <span>View Case Study</span>
                                        <span>→</span>
                                    </Link>
                                )}
                            </div>
                        </div>

                        {/* Description & Tags */}
                        <div className="md:col-span-5 text-neutral-400 leading-relaxed">
                            <p className="mb-6">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs text-neutral-300 bg-surface border border-neutral-800 px-2.5 py-1 rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Year & Details */}
                        <div className="md:col-span-3 text-right hidden md:flex flex-col justify-between items-end h-full">
                            <span className="text-neutral-500 font-mono text-sm">{project.year}</span>
                            <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">{project.clientType}</span>
                        </div>

                        {/* Mobile Action Link */}
                        <div className="md:hidden mt-2 w-full flex items-center justify-between pt-3 border-t border-neutral-900">
                            <span className="text-xs text-neutral-500 font-mono">{project.year} • {project.clientType}</span>
                            {project.link && project.link.startsWith('http') ? (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium text-white inline-flex items-center gap-1"
                                >
                                    <span>Visit Site</span>
                                    <FiArrowUpRight />
                                </a>
                            ) : (
                                <Link
                                    to={`/projects`}
                                    className="text-sm font-medium text-neutral-300"
                                >
                                    <span>Details →</span>
                                </Link>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Full Projects CTA */}
            <div className="mt-16 p-8 rounded-2xl bg-surface border border-neutral-800 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-black/20">
                <div className="text-left">
                    <h3 className="text-xl font-bold text-white mb-1">Looking for more examples of my work?</h3>
                    <p className="text-neutral-400 text-sm">
                        Explore all live client platforms, automated systems, and enterprise case studies.
                    </p>
                </div>
                <Link
                    to="/projects"
                    className="btn btn-primary whitespace-nowrap"
                >
                    Explore All Projects ({projects.length}) →
                </Link>
            </div>
        </section>
    );
};

export default Projects;
