import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { SiGooglecloud } from 'react-icons/si';
import profile from '../assets/profilepic.jpg';
import { ABOUT_STATEMENT, ABOUT_BODY, SERVICES, CERTIFICATIONS, EXPERIENCE } from '../data/about';
import { registerScrollTarget } from '../lib/scroll';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ACCENT = '#8EA4FF';
const PANEL = '#050505';
const DOT_IDLE = '#171717';
const DOT_BORDER = '#404040';
const LABEL_IDLE = '#737373';
const DISPLAY_FONT = { fontFamily: "'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif" };

const HEADLINE = ['Full stack developer', '& AI automation', 'specialist.'];
const PIPELINE = ['Trigger', 'AI agent', 'Your app', 'Database', 'Live'];
const ABOUT_STEPS = ['Intro', 'Experience', 'What I do'];
const CERT = CERTIFICATIONS[0];

// Timeline positions of the three About steps (inside the pinned scroll)
const STEP_A = 1.0;
const STEP_B = 2.9;
const STEP_C = 4.4;

/* Splits a line into masked characters so each one can rise in / lift out */
function SplitLine({ text }) {
    const words = text.split(' ');
    return (
        <span aria-hidden="true" className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
            {words.map((word, wi) => (
                <React.Fragment key={wi}>
                    <span className="hero-word inline-block whitespace-nowrap">
                        {Array.from(word).map((ch, ci) => (
                            <span key={ci} className="hero-char inline-block will-change-transform">
                                {ch}
                            </span>
                        ))}
                    </span>
                    {wi < words.length - 1 && ' '}
                </React.Fragment>
            ))}
        </span>
    );
}

/* Buttons gently follow the cursor (desktop only) */
function Magnetic({ children, strength = 0.3 }) {
    const ref = useRef(null);

    useGSAP(() => {
        const el = ref.current;
        if (!window.matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches) return;

        const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' });
        const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' });

        const onMove = (e) => {
            const r = el.getBoundingClientRect();
            xTo((e.clientX - (r.left + r.width / 2)) * strength);
            yTo((e.clientY - (r.top + r.height / 2)) * strength);
        };
        const onLeave = () => {
            xTo(0);
            yTo(0);
        };

        el.addEventListener('pointermove', onMove);
        el.addEventListener('pointerleave', onLeave);
        return () => {
            el.removeEventListener('pointermove', onMove);
            el.removeEventListener('pointerleave', onLeave);
        };
    }, { scope: ref });

    return (
        <div ref={ref} className="inline-block">
            {children}
        </div>
    );
}

/* Position of an element inside an ancestor, ignoring transforms (tilt, scale) */
function boxWithin(el, ancestor) {
    let x = 0;
    let y = 0;
    let node = el;
    while (node && node !== ancestor) {
        x += node.offsetLeft;
        y += node.offsetTop;
        node = node.offsetParent;
    }
    return { x, y, w: el.offsetWidth, h: el.offsetHeight };
}

const Hero = () => {
    const sectionRef = useRef(null);

    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            mm.add(
                {
                    isDesktop: '(min-width: 768px)',
                    motionOK: '(prefers-reduced-motion: no-preference)',
                    canHover: '(hover: hover)',
                },
                (ctx) => {
                    const { isDesktop, motionOK, canHover } = ctx.conditions;
                    if (!motionOK) return; // reduced motion: everything stays static and visible

                    const section = sectionRef.current;
                    const frame = section.querySelector('.portrait-frame');
                    const cleanups = [];
                    let story = null;

                    /* ---------- 1. Scroll story (desktop) ----------
                       The portrait card grows to fill the screen, then the About
                       section plays out in the free space in three steps. */
                    if (isDesktop) {
                        const layer = section.querySelector('.hero-expand');
                        const card = () => boxWithin(frame, section);

                        gsap.set('.portrait-img, .expand-img', { filter: 'grayscale(1)' });
                        gsap.set('.ab-head, .ab-panel-a, .ab-panel-b, .ab-panel-c', { autoAlpha: 0 });
                        gsap.set('.ab-word', { color: '#3a3a3a' });

                        const tl = gsap.timeline({
                            defaults: { ease: 'none', immediateRender: false },
                            scrollTrigger: {
                                trigger: section,
                                start: 'top top',
                                end: '+=420%',
                                pin: true,
                                scrub: 0.8,
                                anticipatePin: 1,
                                invalidateOnRefresh: true,
                            },
                        });
                        story = tl.scrollTrigger;

                        // Hero leaves, photo card grows to full screen
                        tl.fromTo('.hero-word', { yPercent: 0 }, { yPercent: -120, ease: 'power2.in', duration: 0.6, stagger: 0.04 }, 0)
                            .fromTo('.hero-fade', { autoAlpha: 1, y: 0 }, { autoAlpha: 0, y: -24, duration: 0.4, stagger: 0.04 }, 0)
                            .set(layer, { autoAlpha: 1 }, 0.001)
                            .fromTo(
                                layer,
                                {
                                    left: () => card().x,
                                    top: () => card().y,
                                    width: () => card().w,
                                    height: () => card().h,
                                    borderRadius: 20,
                                    borderColor: 'rgba(38,38,38,1)',
                                },
                                {
                                    left: 0,
                                    top: 0,
                                    width: () => section.clientWidth,
                                    height: () => window.innerHeight,
                                    borderRadius: 0,
                                    borderColor: 'rgba(38,38,38,0)',
                                    ease: 'power2.inOut',
                                    duration: 1.2,
                                },
                                0
                            )
                            .fromTo('.expand-img', { filter: 'grayscale(1)' }, { filter: 'grayscale(0)', duration: 1.2 }, 0.3)
                            .fromTo('.expand-fade', { opacity: 0 }, { opacity: 1, duration: 0.6 }, 0.5);

                        // About heading + step indicator
                        tl.addLabel('about', STEP_A + 0.3)
                            .fromTo('.ab-head', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, ease: 'power3.out', duration: 0.4 }, 0.8);

                        const stepDots = gsap.utils.toArray('.ab-step-dot');
                        const stepLabels = gsap.utils.toArray('.ab-step-label');
                        [STEP_A, STEP_B, STEP_C].forEach((t, i) => {
                            tl.fromTo(stepDots[i], { backgroundColor: DOT_IDLE, borderColor: DOT_BORDER }, { backgroundColor: ACCENT, borderColor: ACCENT, duration: 0.15 }, t)
                                .fromTo(stepLabels[i], { color: LABEL_IDLE }, { color: '#f5f5f5', duration: 0.15 }, t);
                            if (i > 0) tl.to(stepLabels[i - 1], { color: LABEL_IDLE, duration: 0.15 }, t);
                        });

                        // Step A: intro statement reads itself word by word
                        tl.fromTo('.ab-panel-a', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, ease: 'power3.out', duration: 0.4 }, STEP_A)
                            .fromTo('.ab-word', { color: '#3a3a3a' }, { color: '#f5f5f5', duration: 0.1, stagger: { amount: 1.0 } }, STEP_A + 0.3)
                            .fromTo('.ab-body', { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, ease: 'power3.out', duration: 0.3 }, STEP_A + 1.1)
                            .to('.ab-panel-a', { autoAlpha: 0, y: -40, ease: 'power2.in', duration: 0.35 }, STEP_B - 0.4);

                        // Step B: experience, the 2023 to Present line fills in
                        tl.fromTo('.ab-panel-b', { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, ease: 'power3.out', duration: 0.4 }, STEP_B)
                            .fromTo('.ab-exp-fill', { scaleX: 0 }, { scaleX: 1, duration: 0.6 }, STEP_B + 0.1)
                            .fromTo('.ab-b-item', { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, ease: 'power3.out', duration: 0.35, stagger: 0.08 }, STEP_B + 0.15)
                            .to('.ab-panel-b', { autoAlpha: 0, y: -40, ease: 'power2.in', duration: 0.35 }, STEP_C - 0.4);

                        // Step C: what I do, dividers draw across
                        tl.fromTo('.ab-panel-c', { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, ease: 'power3.out', duration: 0.4 }, STEP_C)
                            .fromTo('.ab-svc-line', { scaleX: 0 }, { scaleX: 1, ease: 'power3.inOut', duration: 0.4, stagger: 0.08 }, STEP_C)
                            .fromTo('.ab-svc-content', { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, ease: 'power3.out', duration: 0.35, stagger: 0.08 }, STEP_C + 0.15)
                            .to({}, { duration: 0.6 }); // short hold before the pin releases

                        // "#about" links (navbar etc.) land on the About step inside this pinned hero
                        cleanups.push(registerScrollTarget('about', () => story.labelToScroll('about')));
                    }

                    /* ---------- 2. Page-load intro ---------- */
                    const intro = gsap.timeline({ defaults: { ease: 'expo.out' } });
                    intro
                        .from('.hero-pill', { autoAlpha: 0, y: 12, duration: 0.8 })
                        .from('.hero-char', { yPercent: 110, duration: 1.1, stagger: 0.018 }, 0.1)
                        .from('.portrait-frame', { clipPath: 'inset(100% 0% 0% 0% round 20px)', duration: 1.4, ease: 'expo.inOut' }, 0.2)
                        .from('.portrait-img', { scale: 1.35, duration: 1.8 }, 0.2)
                        .from('.hero-intro-fade', { autoAlpha: 0, y: 20, duration: 1, stagger: 0.1 }, 0.6)
                        .from('.pipe-node', { autoAlpha: 0, y: 10, duration: 0.6, stagger: 0.08 }, 0.9)
                        .from('.pipe-line', { scaleX: 0, transformOrigin: 'left center', duration: 0.6, stagger: 0.08, ease: 'power3.inOut' }, 0.95);

                    /* ---------- 3. Data "signals" travelling through the pipeline ---------- */
                    gsap.utils.toArray('.pipe-signal').forEach((el, i) => {
                        gsap.timeline({ repeat: -1, delay: 1.8 + i * 0.35, repeatDelay: 0.8 })
                            .fromTo(el, { left: '0%', autoAlpha: 0 }, { left: '100%', duration: 1.4, ease: 'power1.inOut' })
                            .to(el, { autoAlpha: 1, duration: 0.2 }, 0)
                            .to(el, { autoAlpha: 0, duration: 0.2 }, 1.2);
                    });

                    /* ---------- 4. Portrait tilts toward the cursor (only before scrolling starts) ---------- */
                    if (isDesktop && canHover) {
                        gsap.set(frame, { transformPerspective: 900 });
                        const rx = gsap.quickTo(frame, 'rotationX', { duration: 0.6, ease: 'power3.out' });
                        const ry = gsap.quickTo(frame, 'rotationY', { duration: 0.6, ease: 'power3.out' });

                        const onMove = (e) => {
                            if (story && story.progress > 0) return;
                            const r = frame.getBoundingClientRect();
                            ry(((e.clientX - r.left) / r.width - 0.5) * 12);
                            rx(-((e.clientY - r.top) / r.height - 0.5) * 12);
                        };
                        const onLeave = () => {
                            rx(0);
                            ry(0);
                        };

                        frame.addEventListener('pointermove', onMove);
                        frame.addEventListener('pointerleave', onLeave);
                        cleanups.push(() => {
                            frame.removeEventListener('pointermove', onMove);
                            frame.removeEventListener('pointerleave', onLeave);
                        });
                    }

                    return () => cleanups.forEach((fn) => fn());
                },
                sectionRef
            );

            return () => mm.revert();
        },
        { scope: sectionRef }
    );

    return (
        <section
            id="home"
            ref={sectionRef}
            className="relative isolate flex min-h-screen flex-col overflow-hidden pt-28 pb-10 md:pt-24 md:pb-8"
        >
            <div className="container relative mx-auto flex w-full max-w-7xl flex-1 flex-col px-6">
                <div className="relative">
                    {/* Status */}
                    <div className="hero-fade relative z-20">
                        <div className="hero-pill inline-flex items-center gap-2.5 rounded-full border border-neutral-800 bg-neutral-900/80 px-3.5 py-1.5 backdrop-blur">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                            <span className="text-sm text-neutral-300">Available for freelance projects</span>
                        </div>
                    </div>

                    {/* Headline (blends over the portrait) */}
                    <div className="relative z-20 mt-8 text-white mix-blend-difference" style={DISPLAY_FONT}>
                        <h1
                            aria-label="Full Stack Developer & AI Automation Specialist"
                            className="text-[clamp(2.6rem,min(7.2vw,11vh),7rem)] font-semibold leading-[0.95] tracking-[-0.045em]"
                        >
                            {HEADLINE.map((line) => (
                                <SplitLine key={line} text={line} />
                            ))}
                        </h1>
                    </div>

                    {/* Intro copy + actions */}
                    <div className="hero-fade relative z-20 mt-8 max-w-xl">
                        <p className="hero-intro-fade text-lg leading-relaxed text-neutral-400 md:text-xl">
                            I partner with founders, businesses, and startups worldwide to build scalable web
                            applications, autonomous AI agents, and custom workflow automations. Available for
                            freelance contracts and end-to-end product development.
                        </p>

                        <div className="hero-intro-fade mt-8 flex flex-wrap gap-4">
                            <Magnetic>
                                <Link to="/projects" className="btn btn-primary">
                                    View All Projects
                                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </Magnetic>
                            <Magnetic>
                                <a href="#contact" className="btn btn-outline">
                                    Hire Me / Let's Talk
                                </a>
                            </Magnetic>
                        </div>
                    </div>

                    {/* Portrait card (sized so it always fits the screen height) */}
                    <div className="portrait-wrap relative z-10 mx-auto mt-14 w-full max-w-[300px] md:absolute md:right-0 md:top-10 md:mx-0 md:mt-0 md:w-[min(28vw,380px,calc((100vh_-_15rem)*0.8))] md:max-w-none">
                        <div
                            className="portrait-frame relative aspect-[4/5] overflow-hidden rounded-[20px] border border-neutral-800 bg-neutral-900"
                            style={{ clipPath: 'inset(0% 0% 0% 0% round 20px)' }}
                        >
                            <img
                                src={profile}
                                alt="Vishesh Jain"
                                onLoad={() => ScrollTrigger.refresh()}
                                className="portrait-img h-full w-full object-cover"
                            />
                        </div>
                        <div className="hero-fade">
                            <p className="hero-intro-fade mt-3 text-sm text-neutral-500">Vishesh Jain</p>
                        </div>
                    </div>
                </div>

                {/* Workflow pipeline */}
                <div className="hero-fade mt-16 flex items-end gap-10 md:mt-auto md:pt-10">
                    <ol className="flex flex-1 items-start" aria-label="How a project flows">
                        {PIPELINE.map((label, i) => (
                            <React.Fragment key={label}>
                                <li className="pipe-node flex shrink-0 flex-col items-center gap-2">
                                    <span
                                        className="block h-2.5 w-2.5 rounded-full border"
                                        style={{ backgroundColor: DOT_IDLE, borderColor: DOT_BORDER }}
                                    />
                                    <span className="text-xs text-neutral-500 sm:text-sm">{label}</span>
                                </li>
                                {i < PIPELINE.length - 1 && (
                                    <li aria-hidden="true" className="pipe-line relative mx-2 mt-[5px] h-px flex-1 bg-neutral-800 sm:mx-4">
                                        <span
                                            className="pipe-signal invisible absolute top-1/2 -ml-[3px] h-1.5 w-1.5 -translate-y-1/2 rounded-full"
                                            style={{ backgroundColor: ACCENT, left: 0 }}
                                        />
                                    </li>
                                )}
                            </React.Fragment>
                        ))}
                    </ol>

                    <div className="hero-intro-fade hidden items-center gap-3 text-sm text-neutral-500 md:flex">
                        <span className="block h-8 w-px bg-neutral-700" />
                        Scroll
                    </div>
                </div>
            </div>

            {/* ===== Full-screen layer (desktop): photo grows, About plays out beside it ===== */}
            <div
                className="hero-expand invisible absolute left-0 top-0 z-30 hidden overflow-hidden border md:block"
                style={{ backgroundColor: PANEL, borderRadius: 20 }}
            >
                {/* Photo stays anchored right and grows to full height */}
                <div className="absolute right-0 top-0 aspect-[4/5] h-full">
                    <img src={profile} alt="" className="expand-img h-full w-full object-cover" />
                    <div
                        className="expand-fade absolute inset-0 opacity-0"
                        style={{
                            background: `linear-gradient(to right, ${PANEL} 0%, rgba(5,5,5,0.75) 25%, rgba(5,5,5,0.2) 55%, rgba(5,5,5,0) 75%), linear-gradient(to top, rgba(5,5,5,0.7) 0%, rgba(5,5,5,0) 35%)`,
                        }}
                    />
                </div>

                {/* About content in the free space */}
                <div className="absolute left-0 top-0 h-screen w-screen">
                    <div className="mx-auto flex h-full max-w-7xl flex-col px-6 pb-10 pt-28">
                        <div className="flex w-[min(100%,calc(100vw_-_80vh_-_8rem))] flex-1 flex-col">
                            {/* Heading + step indicator */}
                            <div className="ab-head flex flex-wrap items-end justify-between gap-6">
                                <h2
                                    className="text-[clamp(2.2rem,4vw,3.5rem)] font-semibold leading-none tracking-[-0.04em] text-white"
                                    style={DISPLAY_FONT}
                                >
                                    About me
                                </h2>
                                <ol className="flex items-center gap-5 text-sm" aria-hidden="true">
                                    {ABOUT_STEPS.map((label) => (
                                        <li key={label} className="flex items-center gap-2">
                                            <span
                                                className="ab-step-dot h-2 w-2 rounded-full border"
                                                style={{ backgroundColor: DOT_IDLE, borderColor: DOT_BORDER }}
                                            />
                                            <span className="ab-step-label" style={{ color: LABEL_IDLE }}>
                                                {label}
                                            </span>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            {/* The three steps share one spot and swap as you scroll */}
                            <div className="grid flex-1 items-center">
                                {/* Step A: intro */}
                                <div className="ab-panel-a col-start-1 row-start-1">
                                    <p
                                        className="text-[clamp(1.4rem,2.3vw,2.2rem)] font-medium leading-[1.25] tracking-[-0.02em] text-neutral-100"
                                        style={DISPLAY_FONT}
                                    >
                                        {ABOUT_STATEMENT.split(' ').map((word, i) => (
                                            <React.Fragment key={i}>
                                                <span className="ab-word">{word}</span>{' '}
                                            </React.Fragment>
                                        ))}
                                    </p>
                                    <p className="ab-body mt-6 max-w-xl leading-relaxed text-neutral-400">{ABOUT_BODY}</p>
                                </div>

                                {/* Step B: experience */}
                                <div className="ab-panel-b col-start-1 row-start-1">
                                    <div className="ab-b-item flex items-center gap-4 text-sm">
                                        <span className="tabular-nums text-neutral-500">{EXPERIENCE.start}</span>
                                        <span className="relative h-px w-full max-w-[220px] bg-neutral-800">
                                            <span
                                                className="ab-exp-fill absolute inset-0 origin-left"
                                                style={{ backgroundColor: ACCENT }}
                                            />
                                        </span>
                                        <span className="relative flex h-2 w-2 shrink-0">
                                            <span
                                                className="absolute inset-0 animate-ping rounded-full opacity-60"
                                                style={{ backgroundColor: ACCENT }}
                                            />
                                            <span className="relative h-2 w-2 rounded-full" style={{ backgroundColor: ACCENT }} />
                                        </span>
                                        <span style={{ color: ACCENT }}>{EXPERIENCE.end}</span>
                                    </div>
                                    <h3
                                        className="ab-b-item mt-5 text-[clamp(1.6rem,2.6vw,2.4rem)] font-medium leading-[1.1] tracking-[-0.025em] text-white"
                                        style={DISPLAY_FONT}
                                    >
                                        {EXPERIENCE.title}
                                    </h3>
                                    <p className="ab-b-item mt-2 text-sm font-medium text-neutral-300">{EXPERIENCE.role}</p>
                                    <p className="ab-b-item mt-3 max-w-xl leading-relaxed text-neutral-400">{EXPERIENCE.text}</p>
                                    <ul className="ab-b-item mt-4 flex flex-wrap gap-2" aria-label="Industries">
                                        {EXPERIENCE.industries.map((name) => (
                                            <li key={name} className="rounded-full border border-neutral-800 px-3 py-1 text-sm text-neutral-300">
                                                {name}
                                            </li>
                                        ))}
                                    </ul>
                                    {CERT && (
                                        <div className="ab-b-item mt-6 inline-flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                                            <SiGooglecloud className="h-6 w-6 shrink-0" style={{ color: '#4285F4' }} aria-hidden="true" />
                                            <span>
                                                <span className="block text-xs text-emerald-400">{CERT.issuer}</span>
                                                <span className="block text-sm font-medium text-white">{CERT.title}</span>
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Step C: what I do (full details live in the Services section) */}
                                <div className="ab-panel-c col-start-1 row-start-1">
                                    <div className="relative">
                                        <ul>
                                            {SERVICES.map((s) => (
                                                <li key={s.title} className="relative py-2.5">
                                                    <span className="ab-svc-line absolute inset-x-0 top-0 h-px origin-left bg-neutral-800" />
                                                    <div className="ab-svc-content flex items-baseline justify-between gap-6">
                                                        <span
                                                            className="text-[clamp(1.05rem,1.6vw,1.4rem)] font-medium tracking-[-0.02em] text-white"
                                                            style={DISPLAY_FONT}
                                                        >
                                                            {s.title}
                                                        </span>
                                                        <span className="shrink-0 text-sm text-neutral-500">{s.short}</span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                        <span className="ab-svc-line absolute inset-x-0 bottom-0 h-px origin-left bg-neutral-800" />
                                    </div>
                                    <div className="ab-svc-content mt-7 flex flex-wrap gap-4">
                                        <a href="#services" className="btn btn-outline">
                                            See all services
                                        </a>
                                        <a href="#contact" className="btn btn-primary">
                                            Start a project
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;