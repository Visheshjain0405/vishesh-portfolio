import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import profile from '../assets/profilepic.jpg';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20">
            <div className="container mx-auto px-6 max-w-7xl grid md:grid-cols-2 gap-12 items-center">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800"
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="text-neutral-300 font-medium text-xs tracking-wide uppercase font-mono">
                            Available for Freelance Projects
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-8 text-white tracking-tight"
                    >
                        Full Stack Developer <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-500">
                            & AI Automation Specialist.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl leading-relaxed"
                    >
                        I partner with founders, businesses, and startups worldwide to build scalable web applications, autonomous AI agents, and custom workflow automations. Available for freelance contracts and end-to-end product development.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link to="/projects" className="btn btn-primary">
                            View All Projects
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                        <a href="#contact" className="btn btn-outline">
                            Hire Me / Let's Talk
                        </a>
                    </motion.div>
                </div>

                {/* Profile Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative max-w-sm mx-auto mt-12 md:mt-0"
                >
                    <div className="absolute inset-0 bg-white/5 rounded-2xl blur-2xl transform rotate-3"></div>
                    <img
                        src={profile}
                        alt="Vishesh Jain"
                        className="relative z-10 w-64 h-64 md:w-full md:h-auto object-cover mx-auto rounded-2xl border border-neutral-800 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
