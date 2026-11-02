import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { projects } from '../data/projects';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isProjectsPage = location.pathname === '/projects';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getHref = (hash) => {
        return isProjectsPage ? `/${hash}` : hash;
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-neutral-800/80 py-4' : 'bg-transparent py-6'
        }`}>
            <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
                <Link to="/" className="text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
                    Vishesh<span className="text-neutral-500">.</span>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-neutral-400 hover:text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Navigation Menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 items-center">
                    <li>
                        <a
                            href={getHref('#about')}
                            className="relative text-sm font-medium text-neutral-400 hover:text-white transition-colors group"
                        >
                            About
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <li>
                        <Link
                            to="/projects"
                            className={`relative text-sm font-medium transition-colors group flex items-center gap-1.5 ${
                                isProjectsPage ? 'text-white font-semibold' : 'text-neutral-400 hover:text-white'
                            }`}
                        >
                            Projects
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700">
                                {projects.length}
                            </span>
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${
                                isProjectsPage ? 'w-full' : 'w-0 group-hover:w-full'
                            }`}></span>
                        </Link>
                    </li>
                    <li>
                        <a
                            href={getHref('#skills')}
                            className="relative text-sm font-medium text-neutral-400 hover:text-white transition-colors group"
                        >
                            Tech Stack
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <a
                        href={getHref('#contact')}
                        className="ml-4 px-4 py-2 text-sm font-medium text-white border border-neutral-700 rounded-md hover:bg-white hover:text-black transition-all"
                    >
                        Hire Me
                    </a>
                </ul>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 bg-[#09090b] border-b border-neutral-800 p-5 md:hidden flex flex-col gap-4 shadow-2xl">
                        <a
                            href={getHref('#about')}
                            className="text-neutral-300 hover:text-white py-2 block text-sm"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </a>
                        <Link
                            to="/projects"
                            className="text-neutral-300 hover:text-white py-2 flex items-center justify-between text-sm"
                            onClick={() => setIsOpen(false)}
                        >
                            <span>Projects</span>
                            <span className="text-xs bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded-full border border-neutral-700">
                                {projects.length} projects
                            </span>
                        </Link>
                        <a
                            href={getHref('#skills')}
                            className="text-neutral-300 hover:text-white py-2 block text-sm"
                            onClick={() => setIsOpen(false)}
                        >
                            Tech Stack
                        </a>
                        <a
                            href={getHref('#contact')}
                            className="text-center py-2.5 px-4 bg-white text-black font-semibold rounded-md text-sm mt-2"
                            onClick={() => setIsOpen(false)}
                        >
                            Hire Me / Contact
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
