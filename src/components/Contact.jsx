import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section pb-32">
            <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                    <h2 className="text-3xl font-bold text-white mb-8">Let's Talk</h2>
                    <div className="space-y-4">
                        <a
                            href="https://github.com/visheshjain0405"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                        >
                            <span className="text-sm font-mono uppercase tracking-widest">GitHub</span>
                            <span className="w-12 h-px bg-gray-800 transition-all group-hover:w-20 group-hover:bg-blue-500"></span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/vishesh-jain0405"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                        >
                            <span className="text-sm font-mono uppercase tracking-widest">LinkedIn</span>
                            <span className="w-12 h-px bg-gray-800 transition-all group-hover:w-20 group-hover:bg-blue-500"></span>
                        </a>
                    </div>
                </div>

                <div className="md:col-span-8">
                    <form className="space-y-6 max-w-xl">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-gray-500 uppercase">Name</label>
                                <input type="text" className="w-full bg-transparent border-b border-gray-800 focus:border-white py-2 text-white outline-none transition-colors rounded-none placeholder-gray-700" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-gray-500 uppercase">Email</label>
                                <input type="email" className="w-full bg-transparent border-b border-gray-800 focus:border-white py-2 text-white outline-none transition-colors rounded-none placeholder-gray-700" placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="space-y-2 pt-4">
                            <label className="text-xs font-mono text-gray-500 uppercase">Message</label>
                            <textarea rows="4" className="w-full bg-transparent border-b border-gray-800 focus:border-white py-2 text-white outline-none transition-colors resize-none rounded-none placeholder-gray-700" placeholder="Tell me about your project..."></textarea>
                        </div>

                        <div className="pt-8">
                            <button type="submit" className="btn btn-primary">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
