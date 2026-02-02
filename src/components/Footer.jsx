import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-white/5 bg-dark-900 pt-16 pb-8 mt-20">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-2xl font-display font-bold text-white mb-6">Vishesh.</h3>

                <div className="flex justify-center gap-8 mb-8">
                    <a
                        href="https://github.com/visheshjain0405"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest hover:underline decoration-primary underline-offset-4"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/vishesh-jain0405"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest hover:underline decoration-primary underline-offset-4"
                    >
                        LinkedIn
                    </a>
                </div>

                <p className="text-gray-600 text-sm">
                    &copy; {new Date().getFullYear()} Vishesh. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
