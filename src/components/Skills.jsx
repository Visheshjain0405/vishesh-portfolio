import React from 'react';
import {
    FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaHtml5, FaCss3Alt, FaGitAlt, FaChrome, FaJava
} from 'react-icons/fa';
import {
    SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss, SiNextdotjs,
    SiExpress, SiNginx, SiOpenai, SiN8N, SiMake, SiKotlin, SiFlutter, SiMysql, SiExpo, SiSocketdotio, SiWebrtc
} from 'react-icons/si';
import { TbBrandVscode, TbSql } from 'react-icons/tb';

const TechStack = () => {
    const stack = [
        {
            category: "Frontend",
            items: [
                { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
                { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
                { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
                { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
                { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
                { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
            ]
        },
        {
            category: "Backend & Database",
            items: [
                { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
                { name: "Express", icon: <SiExpress className="text-white" /> },
                { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
                { name: "Java", icon: <FaJava className="text-[#007396]" /> },
                { name: "Socket.io", icon: <SiSocketdotio className="text-white" /> },
                { name: "WebRTC", icon: <SiWebrtc className="text-gray-400" /> },
                { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
                { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
                { name: "SQL", icon: <TbSql className="text-[#003B57]" /> },
            ]
        },
        {
            category: "Mobile App Dev",
            items: [
                { name: "React Native", icon: <FaReact className="text-[#61DAFB]" /> },
                { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" /> },
                { name: "Kotlin", icon: <SiKotlin className="text-[#7F52FF]" /> },
                { name: "Expo", icon: <SiExpo className="text-white" /> },
            ]
        },
        {
            category: "AI & Automation",
            items: [
                { name: "n8n", icon: <SiN8N className="text-[#FF6584]" /> },
                { name: "Make.com", icon: <SiMake className="text-[#6415ff]" /> },
                { name: "OpenAI", icon: <SiOpenai className="text-[#00A67E]" /> },
                { name: "AI Agents", icon: <span className="text-xl">🤖</span> },
            ]
        },
        {
            category: "DevOps & Tools",
            items: [
                { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
                { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
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
                    <h2 className="text-3xl font-bold text-white sticky top-24">Technical Stack</h2>
                </div>

                <div className="md:col-span-8">
                    <div className="grid gap-12">
                        {stack.map((group, idx) => (
                            <div key={idx}>
                                <h3 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-8 flex items-center gap-4">
                                    <span className="whitespace-nowrap">{group.category}</span>
                                    <div className="h-[1px] w-full bg-gray-800"></div>
                                </h3>

                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    {group.items.map((tech) => (
                                        <div
                                            key={tech.name}
                                            className="group flex items-center gap-3 p-3 rounded-lg bg-surface border border-transparent hover:border-gray-800 transition-all duration-300"
                                        >
                                            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                                {tech.icon}
                                            </span>
                                            <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
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
