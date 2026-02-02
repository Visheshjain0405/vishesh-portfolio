import React from 'react';
import { motion } from 'framer-motion';
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
                        className="mb-6 flex items-center gap-3"
                    >
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-green-500 font-medium text-sm tracking-wide uppercase">Available for new projects</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-8 text-white tracking-tight"
                    >
                        Full Stack Developer <br />
                        <span className="text-gray-500">specializing in Automation & AI.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
                    >
                        I help businesses build scalable web applications and automate complex workflows using React, Node.js, and AI agents. Currently engineering solutions at <span className="text-white font-medium">Blue Data Consulting</span>.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a href="#projects" className="btn btn-primary">
                            View Selected Work
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Get in Touch
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
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl transform rotate-6"></div>
                    <img
                        src={profile}
                        alt="Vishesh Jain"
                        className="relative z-10 w-64 h-64 md:w-full md:h-auto object-cover mx-auto rounded-2xl border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
