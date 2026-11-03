import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FiArrowUpRight, FiLayers } from 'react-icons/fi';
import { projects } from '../data/projects';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ACCENT = '#8EA4FF';
const DISPLAY_FONT = { fontFamily: "'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif" };
const STACK_TOP = 96; // px from the top where the first card sticks (clears the navbar)
const STACK_STEP = 24; // each next card sticks a little lower, so the stack edges stay visible

const isExternal = (link) => Boolean(link && link.startsWith('http'));

function ProjectAction({ project }) {
    if (isExternal(project.link)) {
        return (
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 text-base font-medium text-white"
            >
                <span className="underline-offset-4 group-hover/link:underline">Visit live site</span>
                <FiArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </a>
        );
    }
    return (
        <Link
            to="/projects"
            className="group/link inline-flex items-center gap-2 text-base font-medium text-neutral-300 transition-colors hover:text-white"
        >
            <span className="underline-offset-4 group-hover/link:underline">View case study</span>
            <FiArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
        </Link>
    );
}

const DOT_IDLE = '#171717';
const DOT_BORDER = '#404040';

const getDomain = (link) => {
    try {
        return new URL(link).hostname.replace(/^www\./, '');
    } catch {
        return null;
    }
};

/* A mini browser window that "runs" the project's build pipeline:
   the stack is shown as connected steps that light up one after another */
function FlowPanel({ project }) {
    const domain = isExternal(project.link) ? getDomain(project.link) : null;
    const steps = [...project.tags.slice(0, 4), project.isLive ? 'Live' : 'Delivered'];

    return (
        <div className="flow-panel flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/70">
            {/* Window bar */}
            <div className="flex items-center gap-3 border-b border-neutral-800 px-4 py-3">
                <span className="flex gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                </span>
                <span className="min-w-0 flex-1 truncate rounded-md bg-neutral-900 px-3 py-1 text-xs text-neutral-400">
                    {domain || 'Private client build'}
                </span>
            </div>

            {/* Build flow */}
            <div className="flex flex-1 flex-col justify-between gap-6 p-6">
                <ol className="relative space-y-4" aria-label="How it was built">
                    <span aria-hidden="true" className="absolute bottom-[7px] left-[5px] top-[7px] w-px bg-neutral-800">
                        <span
                            className="flow-signal invisible absolute -left-[2px] h-[5px] w-[5px] rounded-full"
                            style={{ backgroundColor: ACCENT, top: 0 }}
                        />
                    </span>
                    {steps.map((step, i) => {
                        const isLast = i === steps.length - 1;
                        return (
                            <li key={step + i} className="relative flex items-center gap-4">
                                <span
                                    className="flow-dot relative z-10 h-[11px] w-[11px] shrink-0 rounded-full border"
                                    style={{ backgroundColor: DOT_IDLE, borderColor: DOT_BORDER }}
                                />
                                <span
                                    className={`flow-label text-[15px] ${
                                        isLast ? 'font-medium text-neutral-200' : 'text-neutral-400'
                                    }`}
                                >
                                    {step}
                                </span>
                            </li>
                        );
                    })}
                </ol>

                <p className="text-sm text-neutral-500">Built for {project.clientType}</p>
            </div>
        </div>
    );
}

function ProjectCard({ project, index }) {
    return (
        <article
            className="project-card relative overflow-hidden rounded-3xl border border-neutral-800 bg-surface transition-colors duration-500 hover:border-neutral-700 md:sticky md:top-[var(--stack-top)] md:min-h-[460px]"
            style={{ '--stack-top': `${STACK_TOP + index * STACK_STEP}px`, transformOrigin: 'center top' }}
        >
            {/* Darkens the card as the next one stacks on top of it */}
            <div className="card-shade pointer-events-none absolute inset-0 z-20 bg-black opacity-0" aria-hidden="true" />

            <div className="relative z-10 grid h-full gap-10 p-6 sm:p-8 md:grid-cols-12 md:p-10 lg:p-12">
                {/* Main info */}
                <div className="flex flex-col md:col-span-7">
                    <div className="card-reveal flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-neutral-800 px-3 py-1 text-sm text-neutral-300">
                            {project.category}
                        </span>
                        {project.isLive && (
                            <span className="inline-flex items-center gap-1.5 text-sm text-emerald-400">
                                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                                Live
                            </span>
                        )}
                    </div>

                    <h3
                        className="card-reveal mt-6 text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1] tracking-[-0.035em] text-white"
                        style={DISPLAY_FONT}
                    >
                        {project.title}
                    </h3>

                    <p className="card-reveal mt-5 max-w-xl text-lg leading-relaxed text-neutral-400">
                        {project.description}
                    </p>

                    <ul className="card-reveal mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <li
                                key={tag}
                                className="rounded-md border border-neutral-800 bg-neutral-900/60 px-2.5 py-1 text-sm text-neutral-300"
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>

                    <div className="card-reveal mt-auto pt-10">
                        <ProjectAction project={project} />
                    </div>
                </div>

                {/* Visual: project image if you add one, otherwise a client/year panel */}
                <div className="card-reveal md:col-span-5">
                    {project.image ? (
                        <div className="h-full min-h-[240px] overflow-hidden rounded-2xl border border-neutral-800">
                            <img
                                src={project.image}
                                alt={`${project.title} preview`}
                                loading="lazy"
                                onLoad={() => ScrollTrigger.refresh()}
                                className="project-img h-full w-full object-cover"
                            />
                        </div>
                    ) : (
                        <FlowPanel project={project} />
                    )}
                </div>
            </div>
        </article>
    );
}

const Projects = () => {
    const sectionRef = useRef(null);
    const featuredProjects = projects.filter((p) => p.featured);

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

                    gsap.from('.projects-heading-inner', {
                        yPercent: 110,
                        duration: 1.1,
                        ease: 'expo.out',
                        scrollTrigger: { trigger: '.projects-heading', start: 'top 85%', once: true },
                    });

                    const cards = gsap.utils.toArray('.project-card');

                    // Content of each card slides in when the card arrives
                    cards.forEach((card) => {
                        gsap.from(card.querySelectorAll('.card-reveal'), {
                            autoAlpha: 0,
                            y: 30,
                            duration: 0.9,
                            ease: 'power3.out',
                            stagger: 0.08,
                            scrollTrigger: { trigger: card, start: 'top 80%', once: true },
                        });

                        const img = card.querySelector('.project-img');
                        if (img) {
                            gsap.fromTo(
                                img,
                                { scale: 1.18 },
                                {
                                    scale: 1,
                                    ease: 'none',
                                    scrollTrigger: { trigger: card, start: 'top bottom', end: 'top top', scrub: true },
                                }
                            );
                        }
                    });

                    // Build-flow windows: a signal runs down the stack and lights each step
                    gsap.utils.toArray('.flow-panel').forEach((panel) => {
                        const dots = panel.querySelectorAll('.flow-dot');
                        const labels = panel.querySelectorAll('.flow-label');
                        const signal = panel.querySelector('.flow-signal');
                        const run = 1.6;
                        const last = dots.length - 1;

                        const loop = gsap.timeline({ repeat: -1, repeatDelay: 0.6, paused: true });
                        loop.set(signal, { autoAlpha: 1, top: '0%' })
                            .to(signal, { top: '100%', duration: run, ease: 'none' }, 0);

                        dots.forEach((dot, i) => {
                            const at = (i / last) * run;
                            loop.to(dot, {
                                backgroundColor: ACCENT,
                                borderColor: ACCENT,
                                boxShadow: '0 0 0 5px rgba(142,164,255,0.18)',
                                duration: 0.2,
                            }, at)
                                .to(labels[i], { color: '#ffffff', duration: 0.2 }, at);
                        });

                        loop.set(signal, { autoAlpha: 0 }, run)
                            .to(dots, { backgroundColor: DOT_IDLE, borderColor: DOT_BORDER, boxShadow: '0 0 0 0px rgba(142,164,255,0)', duration: 0.5 }, run + 1.4)
                            .to(labels, { clearProps: 'color', duration: 0.5 }, run + 1.4);

                        ScrollTrigger.create({
                            trigger: panel,
                            start: 'top 85%',
                            end: 'bottom top',
                            onToggle: (self) => (self.isActive ? loop.play() : loop.pause()),
                        });
                    });

                    // Desktop: as the next card slides up, the one underneath shrinks back and dims
                    if (isDesktop) {
                        cards.forEach((card, i) => {
                            const next = cards[i + 1];
                            if (!next) return;
                            const nextTop = STACK_TOP + (i + 1) * STACK_STEP;

                            gsap.timeline({
                                scrollTrigger: {
                                    trigger: next,
                                    start: 'top bottom',
                                    end: `top ${nextTop}px`,
                                    scrub: true,
                                },
                            })
                                .to(card, { scale: 0.93, ease: 'none' }, 0)
                                .to(card.querySelector('.card-shade'), { opacity: 0.55, ease: 'none' }, 0);
                        });
                    }

                    // Bottom call-to-action rises in
                    gsap.from('.projects-cta-inner', {
                        yPercent: 100,
                        duration: 1.1,
                        ease: 'expo.out',
                        scrollTrigger: { trigger: '.projects-cta', start: 'top 90%', once: true },
                    });
                },
                sectionRef
            );

            return () => mm.revert();
        },
        { scope: sectionRef }
    );

    return (
        <section id="projects" ref={sectionRef} className="section">
            {/* Header */}
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                    <h2
                        className="projects-heading overflow-hidden pb-[0.1em] text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-none tracking-[-0.04em] text-white"
                        style={DISPLAY_FONT}
                    >
                        <span className="projects-heading-inner block">Selected client work</span>
                    </h2>
                    <p className="mt-3 text-neutral-500">
                        {featuredProjects.length} featured projects, 2023 to present
                    </p>
                </div>

                <Link to="/projects" className="btn btn-outline inline-flex items-center gap-2 self-start md:self-auto">
                    <FiLayers className="h-4 w-4" />
                    View all projects ({projects.length})
                </Link>
            </div>

            {/* Stacking cards */}
            <div className="flex flex-col gap-8 md:gap-[12vh]">
                {featuredProjects.map((project, index) => (
                    <ProjectCard key={project.id || index} project={project} index={index} />
                ))}
            </div>

            {/* Bottom call-to-action */}
            <Link
                to="/projects"
                className="projects-cta group mt-24 flex items-center justify-between gap-6 border-t border-neutral-800 pt-10"
            >
                <span className="block overflow-hidden">
                    <span className="projects-cta-inner block">
                        <span className="block text-neutral-500">Looking for more examples of my work?</span>
                        <span
                            className="mt-2 block pb-[0.1em] text-[clamp(2rem,5vw,4.25rem)] font-semibold leading-none tracking-[-0.04em] text-white"
                            style={DISPLAY_FONT}
                        >
                            See all {projects.length} projects
                        </span>
                    </span>
                </span>
                <span
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-neutral-700 text-white transition-all duration-500 group-hover:rotate-45 group-hover:border-[#8EA4FF] group-hover:bg-[#8EA4FF] group-hover:text-neutral-950 md:h-24 md:w-24"
                    aria-hidden="true"
                >
                    <FiArrowUpRight className="h-7 w-7 md:h-9 md:w-9" />
                </span>
            </Link>
        </section>
    );
};

export default Projects;