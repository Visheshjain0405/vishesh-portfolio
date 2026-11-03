import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { SiGooglecloud } from 'react-icons/si';
import { FiAward, FiCheck } from 'react-icons/fi';
import { ABOUT_STATEMENT, ABOUT_BODY, CERTIFICATIONS, EXPERIENCE } from '../data/about';
import Services from './Services';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ACCENT = '#8EA4FF';
const DISPLAY_FONT = { fontFamily: "'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif" };

/* Masked heading that rises in when it scrolls into view */
function RevealHeading({ as: Tag = 'h2', className = '', children }) {
    return (
        <Tag className={`reveal-heading overflow-hidden pb-[0.1em] ${className}`} style={DISPLAY_FONT}>
            <span className="reveal-heading-inner block">{children}</span>
        </Tag>
    );
}

function CertificationCard({ cert }) {
    return (
        <div className="cert-card relative overflow-hidden rounded-2xl border border-neutral-800 bg-surface p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900">
                    <SiGooglecloud className="h-8 w-8" style={{ color: '#4285F4' }} aria-hidden="true" />
                </div>
                <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-xs text-emerald-400">
                        <FiAward className="h-3 w-3" aria-hidden="true" />
                        {cert.issuer}
                    </span>
                    <h3
                        className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-white md:text-3xl"
                        style={DISPLAY_FONT}
                    >
                        {cert.title}
                    </h3>
                    <p className="mt-2 max-w-2xl leading-relaxed text-neutral-400">{cert.description}</p>
                </div>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2 border-t border-neutral-800/80 pt-6" aria-label="Verified skills">
                {cert.skills.map((skill) => (
                    <li
                        key={skill}
                        className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-sm text-neutral-300"
                    >
                        <FiCheck className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
}

const About = () => {
    const sectionRef = useRef(null);

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

                    gsap.utils.toArray('.reveal-heading').forEach((heading) => {
                        if (!heading.offsetParent) return; // hidden on this screen size
                        gsap.from(heading.querySelector('.reveal-heading-inner'), {
                            yPercent: 110,
                            duration: 1.1,
                            ease: 'expo.out',
                            scrollTrigger: { trigger: heading, start: 'top 85%', once: true },
                        });
                    });

                    // Intro block only shows on mobile (desktop plays it inside the hero)
                    if (!isDesktop) {
                        gsap.fromTo(
                            '.about-word',
                            { color: '#404040' },
                            {
                                color: '#f5f5f5',
                                ease: 'none',
                                stagger: 0.08,
                                scrollTrigger: { trigger: '.about-statement', start: 'top 80%', end: 'bottom 50%', scrub: true },
                            }
                        );
                        gsap.from('.about-fade', {
                            autoAlpha: 0,
                            y: 24,
                            duration: 0.9,
                            ease: 'power3.out',
                            stagger: 0.1,
                            scrollTrigger: { trigger: '.about-fade', start: 'top 85%', once: true },
                        });
                    }

                    gsap.from('.cert-card', {
                        autoAlpha: 0,
                        y: 30,
                        duration: 0.9,
                        ease: 'power3.out',
                        scrollTrigger: { trigger: '.cert-card', start: 'top 85%', once: true },
                    });
                },
                sectionRef
            );

            return () => mm.revert();
        },
        { scope: sectionRef }
    );

    return (
        <section id="about" ref={sectionRef} className="section">
            {/* Intro + experience. On desktop this plays inside the hero, so here it only shows
                on mobile (and for visitors who turned animations off). */}
            <div className="mb-24 md:hidden md:motion-reduce:block">
                <RevealHeading className="text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-none tracking-[-0.04em] text-white">
                    About me
                </RevealHeading>

                <p
                    className="about-statement mt-8 text-[clamp(1.5rem,2.6vw,2.2rem)] font-medium leading-[1.25] tracking-[-0.025em] text-neutral-100"
                    style={DISPLAY_FONT}
                >
                    {ABOUT_STATEMENT.split(' ').map((word, i) => (
                        <React.Fragment key={i}>
                            <span className="about-word">{word}</span>{' '}
                        </React.Fragment>
                    ))}
                </p>
                <p className="about-fade mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">{ABOUT_BODY}</p>

                <div className="about-fade mt-12 border-t border-neutral-800 pt-8">
                    <div className="flex items-center gap-3 text-sm">
                        <span className="tabular-nums text-neutral-500">{EXPERIENCE.start}</span>
                        <span className="h-px w-16" style={{ backgroundColor: ACCENT }} />
                        <span style={{ color: ACCENT }}>{EXPERIENCE.end}</span>
                    </div>
                    <h3 className="mt-4 text-2xl font-medium tracking-[-0.02em] text-white" style={DISPLAY_FONT}>
                        {EXPERIENCE.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-neutral-300">{EXPERIENCE.role}</p>
                    <p className="mt-3 leading-relaxed text-neutral-400">{EXPERIENCE.text}</p>
                    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Industries">
                        {EXPERIENCE.industries.map((name) => (
                            <li key={name} className="rounded-full border border-neutral-800 px-3 py-1 text-sm text-neutral-300">
                                {name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Services: 3D ring on large screens, card grid elsewhere */}
            <Services />

            {/* Certifications */}
            {CERTIFICATIONS.length > 0 && (
                <div className="mt-24">
                    <RevealHeading
                        as="h3"
                        className="mb-8 text-[clamp(1.8rem,3vw,2.5rem)] font-semibold leading-none tracking-[-0.03em] text-white"
                    >
                        Certifications
                    </RevealHeading>
                    <div className="grid gap-4">
                        {CERTIFICATIONS.map((cert) => (
                            <CertificationCard key={cert.title} cert={cert} />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default About;