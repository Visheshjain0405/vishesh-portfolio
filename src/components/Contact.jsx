import React, { useState } from 'react';
import { FiMail, FiSend, FiCheck, FiClock, FiGlobe } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const projectTypes = [
    "Web App / Website",
    "Mobile Application",
    "Autonomous AI Agent",
    "AI Voice Agent",
    "AI Chatbot & RAG",
    "AWS & Cloud Deployment"
];

const Contact = () => {
    const [selectedType, setSelectedType] = useState(projectTypes[0]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        budget: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Freelance Project Inquiry: ${selectedType} - ${formData.name}`);
        const body = encodeURIComponent(
            `Hi Vishesh,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${selectedType}\nBudget/Timeline: ${formData.budget || 'Flexible'}\n\nProject Details:\n${formData.message}\n`
        );
        window.open(`mailto:visheshjain0405@gmail.com?subject=${subject}&body=${body}`, '_blank');
        setIsSubmitted(true);
    };

    return (
        <section id="contact" className="section pb-32">
            <div className="grid md:grid-cols-12 gap-12 items-start">
                {/* Left Column: Freelance Value & Direct Channels */}
                <div className="md:col-span-5 space-y-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono mb-4">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span>Currently Available for Freelance Contracts</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                            Let's Build Something Exceptional
                        </h2>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Have an idea for a web platform, need an AI pipeline automated, or looking for an independent developer to take your project from 0 to 1? Let's discuss scope, timeline, and architecture.
                        </p>
                    </div>

                    {/* Freelance Fast Facts */}
                    <div className="space-y-3 pt-2">
                        <div className="flex items-center gap-3 text-sm text-neutral-300">
                            <FiClock className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                            <span>Fast turnaround & typical response within 24 hours</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-neutral-300">
                            <FiGlobe className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                            <span>Flexible across US, European & Asian timezones</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-neutral-300">
                            <FiMail className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                            <a
                                href="mailto:visheshjain0405@gmail.com"
                                className="text-white hover:underline underline-offset-4"
                            >
                                visheshjain0405@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Social & Code Profiles */}
                    <div className="pt-4 border-t border-neutral-800 space-y-4">
                        <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block">
                            Direct Profiles
                        </span>
                        <div className="flex flex-col gap-3">
                            <a
                                href="https://github.com/visheshjain0405"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-3.5 rounded-xl bg-surface border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white transition-all group"
                            >
                                <span className="flex items-center gap-3 text-sm font-medium">
                                    <FaGithub className="w-4 h-4 text-white" />
                                    <span>GitHub Repository & Code</span>
                                </span>
                                <span className="text-xs text-neutral-500 group-hover:text-white transition-colors">↗</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/vishesh-jain0405"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-3.5 rounded-xl bg-surface border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white transition-all group"
                            >
                                <span className="flex items-center gap-3 text-sm font-medium">
                                    <FaLinkedin className="w-4 h-4 text-white" />
                                    <span>LinkedIn Professional Profile</span>
                                </span>
                                <span className="text-xs text-neutral-500 group-hover:text-white transition-colors">↗</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column: Freelance Project Inquiry Form */}
                <div className="md:col-span-7 bg-surface p-8 sm:p-10 rounded-2xl border border-neutral-800 shadow-2xl shadow-black/50">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Project Type Picker */}
                        <div>
                            <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-3">
                                What type of project are you looking to build?
                            </label>
                            <div className="flex flex-wrap gap-2">
                                {projectTypes.map((type) => (
                                    <button
                                        type="button"
                                        key={type}
                                        onClick={() => setSelectedType(type)}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                                            selectedType === type
                                                ? 'bg-white text-black font-semibold shadow-sm'
                                                : 'bg-background text-neutral-400 border border-neutral-800 hover:border-neutral-700 hover:text-white'
                                        }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Name & Email Fields */}
                        <div className="grid sm:grid-cols-2 gap-6 pt-2">
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-background border border-neutral-800 focus:border-white px-4 py-3 text-white text-sm outline-none rounded-lg transition-colors placeholder-neutral-600"
                                    placeholder="Jane Smith"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-background border border-neutral-800 focus:border-white px-4 py-3 text-white text-sm outline-none rounded-lg transition-colors placeholder-neutral-600"
                                    placeholder="jane@company.com"
                                />
                            </div>
                        </div>

                        {/* Budget / Timeline */}
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                                Approximate Budget or Timeline (Optional)
                            </label>
                            <input
                                type="text"
                                value={formData.budget}
                                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                className="w-full bg-background border border-neutral-800 focus:border-white px-4 py-3 text-white text-sm outline-none rounded-lg transition-colors placeholder-neutral-600"
                                placeholder="e.g. $2k - $5k, or 2-4 weeks delivery"
                            />
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                                Project Overview & Goals *
                            </label>
                            <textarea
                                rows="4"
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full bg-background border border-neutral-800 focus:border-white p-4 text-white text-sm outline-none transition-colors resize-none rounded-lg placeholder-neutral-600"
                                placeholder="Tell me about your product requirements, target audience, or current technical bottlenecks..."
                            ></textarea>
                        </div>

                        {/* Submit button */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                className="btn btn-primary w-full py-3.5 flex items-center justify-center gap-2 group"
                            >
                                {isSubmitted ? (
                                    <>
                                        <FiCheck className="w-4 h-4 text-black" />
                                        <span>Message Ready — Opening Email</span>
                                    </>
                                ) : (
                                    <>
                                        <FiSend className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                        <span>Send Project Inquiry</span>
                                    </>
                                )}
                            </button>
                            <p className="text-[11px] text-neutral-500 text-center mt-3">
                                No obligations. We will discuss project feasibility, scope, and technical roadmap.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
