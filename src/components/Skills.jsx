import React from 'react';
import {
    FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaHtml5, FaCss3Alt, FaGitAlt, FaJava
} from 'react-icons/fa';
import {
    SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss, SiNextdotjs,
    SiExpress, SiNginx, SiOpenai, SiN8N, SiMake, SiKotlin, SiFlutter, SiMysql,
    SiExpo, SiSocketdotio, SiWebrtc, SiRedis, SiThreedotjs, SiGreensock, SiGooglegemini
} from 'react-icons/si';
import { TbBrandVscode, TbSql } from 'react-icons/tb';

const TechStack = () => {
    const stack = [
        {
            category: "Frontend & 3D Web",
            items: [
                { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
                { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
                { name: "Three.js", icon: <SiThreedotjs className="text-white" /> },
                { name: "GSAP", icon: <SiGreensock className="text-[#88CE02]" /> },
                { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
                { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
                { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
                { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
            ]
        },
        {
            category: "Backend & Databases",
            items: [
                { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
                { name: "Express", icon: <SiExpress className="text-white" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
                { name: "Redis", icon: <SiRedis className="text-[#DC382D]" /> },
                { name: "BullMQ", icon: <span className="text-base font-bold font-mono text-amber-400">🐂</span> },
                { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
                { name: "Socket.io", icon: <SiSocketdotio className="text-white" /> },
                { name: "WebRTC", icon: <SiWebrtc className="text-gray-400" /> },
                { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
                { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
                { name: "SQL", icon: <TbSql className="text-[#003B57]" /> },
                { name: "Java", icon: <FaJava className="text-[#007396]" /> },
            ]
        },
        {
            category: "Mobile App Development",
            items: [
                { name: "React Native", icon: <FaReact className="text-[#61DAFB]" /> },
                { name: "Expo", icon: <SiExpo className="text-white" /> },
                { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" /> },
                { name: "Kotlin", icon: <SiKotlin className="text-[#7F52FF]" /> },
            ]
        },
        {
            category: "AI, Vision & Automation",
            items: [
                { name: "Gemini API", icon: <SiGooglegemini className="text-[#4E88D4]" /> },
                { name: "OpenAI", icon: <SiOpenai className="text-[#00A67E]" /> },
                { name: "AI Agents", icon: <span className="text-xl">🤖</span> },
                { name: "n8n", icon: <SiN8N className="text-[#FF6584]" /> },
                { name: "Make.com", icon: <SiMake className="text-[#6415ff]" /> },
            ]
        },
        {
            category: "DevOps & Cloud Tools",
            items: [
                { name: "AWS S3 / EC2", icon: <FaAws className="text-[#FF9900]" /> },
                { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
                { name: "Nginx", icon: <SiNginx className="text-[#009639]" /> },
                { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
                { name: "VS Code", icon: <TbBrandVscode className="text-[#007ACC]" /> },
            ]
        },
    ];

    return (
        <section id="skills" className="section">
            <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                    <h2 className="text-3xl font-bold text-white sticky top-24 tracking-tight">Technical Stack</h2>
                </div>

                <div className="md:col-span-8">
                    <div className="grid gap-12">
                        {stack.map((group, idx) => (
                            <div key={idx}>
                                <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-6 flex items-center gap-4">
                                    <span className="whitespace-nowrap">{group.category}</span>
                                    <div className="h-[1px] w-full bg-neutral-800"></div>
                                </h3>

                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                    {group.items.map((tech) => (
                                        <div
                                            key={tech.name}
                                            className="group flex items-center gap-3 p-3 rounded-lg bg-surface border border-neutral-800/70 hover:border-neutral-600 transition-all duration-300"
                                        >
                                            <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                                                {tech.icon}
                                            </span>
                                            <span className="text-xs font-medium text-neutral-400 group-hover:text-white transition-colors">
                                                {tech.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
