import React, { useState } from 'react';

const Footer = () => {
    const [showPrivacy, setShowPrivacy] = useState(false);

    return (
        <footer className="border-t border-neutral-800/80 bg-background pt-16 pb-10 mt-20">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-2xl font-bold tracking-tight text-white mb-6">
                    Vishesh<span className="text-neutral-500">.</span>
                </h3>

                <div className="flex justify-center items-center gap-6 mb-8 flex-wrap">
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
                    <button
                        onClick={() => setShowPrivacy(true)}
                        className="text-neutral-500 hover:text-neutral-300 transition-colors text-xs font-mono uppercase tracking-widest cursor-pointer"
                    >
                        Privacy Policy
                    </button>
                </div>

                <p className="text-neutral-600 text-xs font-mono">
                    &copy; {new Date().getFullYear()} Vishesh Jain. Built with minimalist precision.
                </p>
            </div>

            {/* Privacy Policy Modal (Required for Meta Ads Compliance) */}
            {showPrivacy && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
                    onClick={() => setShowPrivacy(false)}
                >
                    <div
                        className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-lg w-full p-6 text-left shadow-2xl relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                            <h4 className="text-lg font-bold text-white">Privacy Policy</h4>
                            <button
                                onClick={() => setShowPrivacy(false)}
                                className="text-neutral-400 hover:text-white text-lg font-mono p-1"
                                aria-label="Close"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="mt-4 space-y-3 text-xs text-neutral-400 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
                            <p>
                                <strong>Information Collected:</strong> When you submit an inquiry through this website, we collect your name, email address, project requirements, and budget details solely to communicate with you about your request.
                            </p>
                            <p>
                                <strong>Analytics & Advertising:</strong> We may use privacy-compliant analytics and the Meta Pixel to evaluate website performance and optimize marketing campaigns.
                            </p>
                            <p>
                                <strong>Data Retention:</strong> Your information is never sold or shared with unauthorized third parties. It is retained only for direct freelance consulting correspondence.
                            </p>
                            <p>
                                <strong>Contact:</strong> For inquiries regarding your data, contact{' '}
                                <a href="mailto:visheshjain0405@gmail.com" className="text-white underline">
                                    visheshjain0405@gmail.com
                                </a>.
                            </p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-neutral-800 text-right">
                            <button
                                onClick={() => setShowPrivacy(false)}
                                className="btn btn-outline text-xs px-4 py-2"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );
};

export default Footer;

