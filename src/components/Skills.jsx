import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
    FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaHtml5, FaCss3Alt, FaGitAlt, FaJava
} from 'react-icons/fa';
import {
    SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss, SiNextdotjs,
    SiExpress, SiNginx, SiOpenai, SiN8N, SiMake, SiKotlin, SiFlutter, SiMysql,
    SiExpo, SiSocketdotio, SiWebrtc, SiRedis, SiThreedotjs, SiGreensock, SiGooglegemini, SiGooglecloud
} from 'react-icons/si';
import { TbBrandVscode, TbSql, TbRobot, TbStack2 } from 'react-icons/tb';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ACCENT = '#8EA4FF';
const DOT_IDLE = '#171717';
const DOT_BORDER = '#404040';
const DISPLAY_FONT = { fontFamily: "'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif" };

// Official brand logos, shown in their real brand colours
const STACK = [
    {
        category: 'Frontend & 3D web',
        short: 'Frontend',
        items: [
            { name: 'React', Icon: FaReact, color: '#61DAFB' },
            { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF' },
            { name: 'Three.js', Icon: SiThreedotjs, color: '#FFFFFF' },
            { name: 'GSAP', Icon: SiGreensock, color: '#88CE02' },
            { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
            { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
            { name: 'HTML5', Icon: FaHtml5, color: '#E34F26' },
            { name: 'CSS3', Icon: FaCss3Alt, color: '#2965F1' },
        ],
    },
    {
        category: 'Backend & databases',
        short: 'Backend',
        items: [
            { name: 'Node.js', Icon: FaNodeJs, color: '#339933' },
            { name: 'Express', Icon: SiExpress, color: '#FFFFFF' },
            { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
            { name: 'Redis', Icon: SiRedis, color: '#DC382D' },
            { name: 'BullMQ', Icon: TbStack2, color: '#F59E0B' },
            { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
            { name: 'Socket.io', Icon: SiSocketdotio, color: '#FFFFFF' },
            { name: 'WebRTC', Icon: SiWebrtc, color: '#9CA3AF' },
            { name: 'Python', Icon: FaPython, color: '#3776AB' },
            { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
            { name: 'SQL', Icon: TbSql, color: '#E5E5E5' },
            { name: 'Java', Icon: FaJava, color: '#ED8B00' },
        ],
    },
    {
        category: 'Mobile apps',
        short: 'Mobile',
        items: [
            { name: 'React Native', Icon: FaReact, color: '#61DAFB' },
            { name: 'Expo', Icon: SiExpo, color: '#FFFFFF' },
            { name: 'Flutter', Icon: SiFlutter, color: '#54C5F8' },
            { name: 'Kotlin', Icon: SiKotlin, color: '#7F52FF' },
        ],
    },
    {
        category: 'AI, vision & automation',
        short: 'AI',
        items: [
            { name: 'Gemini API', Icon: SiGooglegemini, color: '#4E88D4' },
            { name: 'OpenAI', Icon: SiOpenai, color: '#00A67E' },
            { name: 'AI Agents', Icon: TbRobot, color: ACCENT },
            { name: 'n8n', Icon: SiN8N, color: '#FF6584' },
            { name: 'Make.com', Icon: SiMake, color: '#A47BFF' },
        ],
    },
    {
        category: 'DevOps & cloud',
        short: 'DevOps',
        items: [
            { name: 'Google Cloud', Icon: SiGooglecloud, color: '#4285F4' },
            { name: 'AWS S3 / EC2', Icon: FaAws, color: '#FF9900' },
            { name: 'Docker', Icon: FaDocker, color: '#2496ED' },
            { name: 'Nginx', Icon: SiNginx, color: '#009639' },
            { name: 'Git', Icon: FaGitAlt, color: '#F05032' },
            { name: 'VS Code', Icon: TbBrandVscode, color: '#007ACC' },
        ],
    },
];

const TOTAL_TOOLS = STACK.reduce((n, g) => n + g.items.length, 0);
const LAST = STACK.length - 1;
const pos = (i) => `${(i / LAST) * 100}%`;

function Chip({ name, Icon, color }) {
    return (
        <li className="stack-chip">
            <div
                className="group relative h-full overflow-hidden rounded-2xl border border-neutral-800 bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--brand-border)] lg:p-5"
                style={{ '--brand-border': `${color}66` }}
            >
                {/* soft brand-coloured glow on hover */}
                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: `radial-gradient(120% 90% at 0% 0%, ${color}26, transparent 65%)` }}
                />
                <span
                    className="relative flex h-12 w-12 items-center justify-center rounded-xl lg:h-14 lg:w-14"
                    style={{ backgroundColor: `${color}1A` }}
                >
                    <Icon
                        aria-hidden="true"
                        className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 lg:h-8 lg:w-8"
                        style={{ color }}
                    />
                </span>
                <span className="relative mt-3 block truncate text-[15px] font-medium text-neutral-200 transition-colors duration-300 group-hover:text-white lg:mt-4 lg:text-base">
                    {name}
                </span>
            </div>
        </li>
    );
}

const TechStack = () => {
    const sectionRef = useRef(null);
    const pinRef = useRef(null);
    const viewportRef = useRef(null);
    const trackRef = useRef(null);
    const fillRef = useRef(null);
    const activeRef = useRef(0);
    const [active, setActive] = useState(0);

    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            mm.add(
                {
                    isDesktop: '(min-width: 768px)',
                    motionOK: '(prefers-reduced-motion: no-preference)',
                },
                (ctx) => {
                    const { isDesktop, motionOK } = ctx.conditions;
                    if (!motionOK) return;

                    gsap.from('.stack-heading-inner', {
                        yPercent: 110,
                        duration: 1.1,
                        ease: 'expo.out',
                        scrollTrigger: { trigger: '.stack-heading', start: 'top 85%', once: true },
                    });

                    const panels = gsap.utils.toArray('.stack-panel');

                    /* ---------- Mobile: panels stack vertically and reveal on scroll ---------- */
                    if (!isDesktop) {
                        panels.forEach((panel) => {
                            gsap.from(panel.querySelectorAll('.stack-panel-head, .stack-chip'), {
                                autoAlpha: 0,
                                y: 20,
                                duration: 0.7,
                                ease: 'power3.out',
                                stagger: 0.04,
                                scrollTrigger: { trigger: panel, start: 'top 85%', once: true },
                            });
                        });
                        return;
                    }

                    /* ---------- Desktop: pin and scroll the stack sideways ---------- */
                    const track = trackRef.current;
                    const distance = () => Math.max(0, track.scrollWidth - viewportRef.current.clientWidth);

                    const horizontal = gsap.to(track, {
                        x: () => -distance(),
                        ease: 'none',
                        scrollTrigger: {
                            trigger: pinRef.current,
                            start: 'top top',
                            end: () => `+=${distance()}`,
                            pin: true,
                            scrub: 0.6,
                            anticipatePin: 1,
                            invalidateOnRefresh: true,
                            onUpdate: (self) => {
                                const i = Math.round(self.progress * LAST);
                                if (i !== activeRef.current) {
                                    activeRef.current = i;
                                    setActive(i);
                                }
                            },
                        },
                    });

                    // The section's own scrollbar fills in step with the sideways scroll
                    gsap.fromTo(
                        fillRef.current,
                        { scaleX: 0 },
                        {
                            scaleX: 1,
                            ease: 'none',
                            scrollTrigger: {
                                trigger: pinRef.current,
                                start: 'top top',
                                end: () => `+=${distance()}`,
                                scrub: 0.6,
                                invalidateOnRefresh: true,
                            },
                        }
                    );

                    // Chips pop in as each panel slides into view
                    panels.forEach((panel, i) => {
                        gsap.from(panel.querySelectorAll('.stack-chip'), {
                            autoAlpha: 0,
                            y: 24,
                            duration: 0.7,
                            ease: 'power3.out',
                            stagger: 0.04,
                            scrollTrigger:
                                i === 0
                                    ? { trigger: pinRef.current, start: 'top 70%', once: true }
                                    : {
                                          trigger: panel,
                                          containerAnimation: horizontal,
                                          start: 'left 85%',
                                          toggleActions: 'play none none reverse',
                                      },
                        });
                    });
                },
                sectionRef
            );

            return () => mm.revert();
        },
        { scope: sectionRef }
    );

    return (
        <section id="skills" ref={sectionRef} className="section">
            <div ref={pinRef} className="md:flex md:h-screen md:flex-col md:justify-center md:pt-20">
                {/* Header + section scrollbar */}
                <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h2
                            className="stack-heading overflow-hidden pb-[0.1em] text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-none tracking-[-0.04em] text-white"
                            style={DISPLAY_FONT}
                        >
                            <span className="stack-heading-inner block">Technical stack</span>
                        </h2>
                        <p className="mt-3 text-neutral-500">
                            {TOTAL_TOOLS} tools across {STACK.length} areas
                        </p>
                    </div>

                    <div className="hidden w-full max-w-md md:block motion-reduce:hidden" aria-hidden="true">
                        <div className="mb-4 flex items-baseline justify-between text-sm">
                            <span className="text-white">{STACK[active].category}</span>
                            <span className="tabular-nums text-neutral-500">
                                {active + 1} / {STACK.length}
                            </span>
                        </div>

                        <div className="relative h-px w-full bg-neutral-800">
                            <div
                                ref={fillRef}
                                className="absolute inset-0 origin-left"
                                style={{ backgroundColor: ACCENT, transform: 'scaleX(0)' }}
                            />
                            {STACK.map((g, i) => (
                                <span
                                    key={g.short}
                                    className="absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-colors duration-300"
                                    style={{
                                        left: pos(i),
                                        backgroundColor: i <= active ? ACCENT : DOT_IDLE,
                                        borderColor: i <= active ? ACCENT : DOT_BORDER,
                                    }}
                                />
                            ))}
                        </div>

                        <div className="relative mt-3 h-5 text-xs">
                            {STACK.map((g, i) => (
                                <span
                                    key={g.short}
                                    className={`absolute whitespace-nowrap transition-colors duration-300 ${
                                        i === 0 ? '' : i === LAST ? '-translate-x-full' : '-translate-x-1/2'
                                    } ${i === active ? 'text-neutral-100' : 'text-neutral-500'}`}
                                    style={{ left: pos(i) }}
                                >
                                    {g.short}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Panels */}
                <div ref={viewportRef} className="mt-10 md:overflow-hidden md:motion-reduce:overflow-x-auto">
                    <div ref={trackRef} className="flex flex-col gap-14 md:w-max md:flex-row md:gap-0">
                        {STACK.map((group) => (
                            <article
                                key={group.category}
                                className="stack-panel md:w-[min(80vw,780px)] md:shrink-0 md:border-l md:border-neutral-800 md:px-12 md:first:border-l-0 md:first:pl-0"
                            >
                                <header className="stack-panel-head mb-6 flex items-baseline justify-between gap-4 border-b border-neutral-800 pb-4 md:border-0 md:pb-0">
                                    <h3
                                        className="text-2xl font-medium tracking-[-0.02em] text-white md:text-3xl lg:text-4xl"
                                        style={DISPLAY_FONT}
                                    >
                                        {group.category}
                                    </h3>
                                    <span className="shrink-0 text-sm tabular-nums text-neutral-500 lg:text-base">
                                        {group.items.length} tools
                                    </span>
                                </header>

                                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                                    {group.items.map((tech) => (
                                        <Chip key={tech.name} {...tech} />
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;