import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
            }`}>
            <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
                <a href="#" className="text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
                    Vishesh<span className="text-blue-500">.</span>
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-400 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="sr-only">Menu</span>
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
                    {['About', 'Work', 'Skills'].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase() === 'work' ? 'projects' : item.toLowerCase()}`}
                                className="relative text-sm font-medium text-gray-400 hover:text-white transition-colors group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                    <a href="#contact" className="ml-4 px-4 py-2 text-sm font-medium text-white border border-white/20 rounded-md hover:bg-white hover:text-black transition-all">
                        Contact
                    </a>
                </ul>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 bg-[#050505] border-b border-white/5 p-4 md:hidden flex flex-col gap-4 shadow-2xl">
                        {['About', 'Work', 'Skills', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase() === 'work' ? 'projects' : item.toLowerCase()}`}
                                className="text-gray-300 hover:text-white py-2 block text-sm"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
