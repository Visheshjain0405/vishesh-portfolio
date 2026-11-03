import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { projects } from '../data/projects';
import { scrollToTop } from '../lib/scroll';

// "#section" links are handled site-wide by <SmoothScroll />:
// smooth scroll on the home page, or go home first from other pages.
const SECTION_LINKS = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
];
const AFTER_PROJECTS = [{ id: 'skills', label: 'Tech Stack' }];

function NavLinkUnderline({ active = false }) {
    return (
        <span
            className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${
                active ? 'w-full' : 'w-0 group-hover:w-full'
            }`}
        />
    );
}

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();
    const isProjectsPage = pathname === '/projects';

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close the mobile menu whenever the page changes
    useEffect(() => setIsOpen(false), [pathname]);

    const onLogoClick = (e) => {
        if (pathname === '/') {
            e.preventDefault();
            scrollToTop({ immediate: false });
        }
    };

    const desktopHashLink = ({ id, label }) => (
        <li key={id}>
            <a
                href={`/#${id}`}
                className="group relative text-sm font-medium text-neutral-400 transition-colors hover:text-white"
            >
                {label}
                <NavLinkUnderline />
            </a>
        </li>
    );

    const mobileHashLink = ({ id, label }) => (
        <a
            key={id}
            href={`/#${id}`}
            className="block py-2 text-sm text-neutral-300 hover:text-white"
            onClick={() => setIsOpen(false)}
        >
            {label}
        </a>
    );

    return (
        <nav
            className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
                scrolled || isOpen
                    ? 'border-b border-neutral-800/80 bg-[#09090b]/90 py-4 backdrop-blur-md'
                    : 'bg-transparent py-6'
            }`}
        >
            <div className="container mx-auto flex max-w-7xl items-center justify-between px-6">
                <Link
                    to="/"
                    onClick={onLogoClick}
                    className="text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-80"
                >
                    Vishesh<span className="text-neutral-500">.</span>
                </Link>

                {/* Mobile menu button */}
                <button
                    className="text-neutral-400 hover:text-white focus:outline-none md:hidden"
                    onClick={() => setIsOpen((open) => !open)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Desktop menu */}
                <ul className="hidden items-center gap-8 md:flex">
                    {SECTION_LINKS.map(desktopHashLink)}
                    <li>
                        <Link
                            to="/projects"
                            className={`group relative flex items-center gap-1.5 text-sm font-medium transition-colors ${
                                isProjectsPage ? 'font-semibold text-white' : 'text-neutral-400 hover:text-white'
                            }`}
                        >
                            Projects
                            <span className="rounded-full border border-neutral-700 bg-neutral-800 px-1.5 py-0.5 text-[10px] text-neutral-300">
                                {projects.length}
                            </span>
                            <NavLinkUnderline active={isProjectsPage} />
                        </Link>
                    </li>
                    {AFTER_PROJECTS.map(desktopHashLink)}
                    <li>
                        <a
                            href="/#contact"
                            className="ml-4 rounded-md border border-neutral-700 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white hover:text-black"
                        >
                            Hire Me
                        </a>
                    </li>
                </ul>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="absolute left-0 right-0 top-full flex flex-col gap-4 border-b border-neutral-800 bg-[#09090b] p-5 shadow-2xl md:hidden">
                        {SECTION_LINKS.map(mobileHashLink)}
                        <Link
                            to="/projects"
                            className="flex items-center justify-between py-2 text-sm text-neutral-300 hover:text-white"
                        >
                            <span>Projects</span>
                            <span className="rounded-full border border-neutral-700 bg-neutral-800 px-2 py-0.5 text-xs text-neutral-300">
                                {projects.length} projects
                            </span>
                        </Link>
                        {AFTER_PROJECTS.map(mobileHashLink)}
                        <a
                            href="/#contact"
                            className="mt-2 rounded-md bg-white px-4 py-2.5 text-center text-sm font-semibold text-black"
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