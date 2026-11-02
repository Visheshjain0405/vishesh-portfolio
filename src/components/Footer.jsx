import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-neutral-800/80 bg-background pt-16 pb-10 mt-20">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-2xl font-bold tracking-tight text-white mb-6">
                    Vishesh<span className="text-neutral-500">.</span>
                </h3>

                <div className="flex justify-center gap-8 mb-8">
                    <a
                        href="https://github.com/visheshjain0405"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-white transition-colors text-xs font-mono uppercase tracking-widest hover:underline decoration-white underline-offset-4"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/vishesh-jain0405"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-white transition-colors text-xs font-mono uppercase tracking-widest hover:underline decoration-white underline-offset-4"
                    >
                        LinkedIn
                    </a>
                </div>

                <p className="text-neutral-600 text-xs font-mono">
                    &copy; {new Date().getFullYear()} Vishesh Jain. Built with minimalist precision.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
