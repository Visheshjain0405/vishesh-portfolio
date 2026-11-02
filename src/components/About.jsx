import React from 'react';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                    <h2 className="text-3xl font-bold text-white sticky top-24 tracking-tight">About Me</h2>
                </div>

                <div className="md:col-span-8 space-y-12">
                    <div className="prose prose-invert max-w-none text-neutral-400 text-lg leading-relaxed space-y-4">
                        <p>
                            I am <span className="text-white font-medium">Vishesh Jain</span>, an independent Full Stack Developer & AI Consultant. I specialize in building custom, high-velocity web applications, autonomous AI agents, and business automation pipelines.
                        </p>
                        <p>
                            As a freelance engineer, I handle end-to-end delivery—from architectural scoping and database modeling to polished UI/UX and production deployment. My approach is practical: I build tools that solve genuine business bottlenecks, whether that means turning manual spreadsheet workflows into real-time dashboards or engineering AI-powered voice and interview platforms.
                        </p>
                    </div>

                    {/* Freelance Services Grid */}
                    <div className="grid sm:grid-cols-3 gap-6 pt-4">
                        <div className="p-5 rounded-xl bg-surface border border-neutral-800 hover:border-neutral-600 transition-all">
                            <div className="w-10 h-10 rounded-lg bg-white/5 text-white border border-neutral-800 flex items-center justify-center font-bold mb-3 text-sm font-mono">
                                01
                            </div>
                            <h4 className="text-white font-medium mb-1">Full-Stack Apps</h4>
                            <p className="text-neutral-400 text-sm">
                                Scalable React & Node.js web platforms with seamless real-time features.
                            </p>
                        </div>
                        <div className="p-5 rounded-xl bg-surface border border-neutral-800 hover:border-neutral-600 transition-all">
                            <div className="w-10 h-10 rounded-lg bg-white/5 text-white border border-neutral-800 flex items-center justify-center font-bold mb-3 text-sm font-mono">
                                02
                            </div>
                            <h4 className="text-white font-medium mb-1">AI & Automation</h4>
                            <p className="text-neutral-400 text-sm">
                                Autonomous AI agents, LLM integrations, and WhatsApp/Twilio bot pipelines.
                            </p>
                        </div>
                        <div className="p-5 rounded-xl bg-surface border border-neutral-800 hover:border-neutral-600 transition-all">
                            <div className="w-10 h-10 rounded-lg bg-white/5 text-white border border-neutral-800 flex items-center justify-center font-bold mb-3 text-sm font-mono">
                                03
                            </div>
                            <h4 className="text-white font-medium mb-1">Direct Delivery</h4>
                            <p className="text-neutral-400 text-sm">
                                1-on-1 collaboration, rapid turnaround, clean code, and zero middlemen.
                            </p>
                        </div>
                    </div>

                    <div className="border-t border-neutral-800 pt-8">
                        <h3 className="text-white font-bold mb-6 tracking-tight">Work Experience & Track Record</h3>
                        <div className="grid gap-8">
                            <div>
                                <div className="flex justify-between items-baseline mb-2">
                                    <h4 className="text-xl text-white font-medium">Independent Full Stack & AI Developer</h4>
                                    <span className="text-sm text-neutral-500 font-mono">2023 — Present</span>
                                </div>
                                <div className="text-neutral-300 text-sm mb-2 font-medium">Freelance Software Consultant & Engineer</div>
                                <p className="text-neutral-400 text-sm max-w-2xl leading-relaxed">
                                    Partnering with businesses and founders to engineer custom SaaS products, internal automation systems, and client-facing platforms across HRTech, EdTech, E-Commerce, and Logistics.
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
