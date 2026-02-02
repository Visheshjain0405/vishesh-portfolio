import React from 'react';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                    <h2 className="text-3xl font-bold text-white sticky top-24">About Me</h2>
                </div>

                <div className="md:col-span-8 space-y-12">
                    <div className="prose prose-invert max-w-none text-gray-400 text-lg leading-relaxed">
                        <p className="mb-4">
                            I am <span className="text-white font-medium">Vishesh Jain</span>, a Full Stack Developer focusing on real-time systems and AI integration. I believe software should not just function but actively save time and improve operational efficiency.
                        </p>
                        <p>
                            At <strong className="text-white">Blue Data Consulting</strong>, I handle end-to-end development, from architectural decisions to deployment. My approach is practical: I build tools that solve genuine business problems, whether that involves automating a manual spreadsheet task or building a complex hiring platform with AI agents.
                        </p>
                    </div>

                    <div className="border-t border-gray-800 pt-8">
                        <h3 className="text-white font-bold mb-6">Experience</h3>
                        <div className="grid gap-8">
                            <div>
                                <div className="flex justify-between items-baseline mb-2">
                                    <h4 className="text-xl text-white font-medium">Full Stack Developer</h4>
                                    <span className="text-sm text-gray-600 font-mono">2023 — Present</span>
                                </div>
                                <div className="text-gray-500 mb-2">Blue Data Consulting</div>
                                <p className="text-gray-400 text-sm max-w-2xl">
                                    Leading development for internal automation tools and client-facing EdTech/HRTech products.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
