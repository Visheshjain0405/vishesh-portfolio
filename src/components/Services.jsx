import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { SERVICES } from '../data/about';
import { registerScrollTarget, scrollToPosition } from '../lib/scroll';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ACCENT = '#8EA4FF';
const DISPLAY_FONT = { fontFamily: "'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif" };

// 3D ring geometry: cards sit around a cylinder, one every ANGLE degrees
const COUNT = SERVICES.length;
const LAST = COUNT - 1;
const ANGLE = 360 / COUNT;
const CARD_W = 320;
const CARD_H = 400;
const RADIUS = Math.round(CARD_W / 2 / Math.tan(Math.PI / COUNT)) + 40;

/*
  Every class starting with "lg:motion-safe:" is the 3D ring layout. It only applies on
  large screens with animations allowed, which is exactly when the JS below runs.
  Everywhere else the same markup is a normal responsive grid of cards.
*/
function ServiceCard({ service }) {
    return (
        <li
            className="svc-card lg:motion-safe:absolute lg:motion-safe:[backface-visibility:hidden] [&.is-front>div]:border-[#8EA4FF66]"
        >
            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-surface p-6 transition-colors duration-500 hover:border-neutral-700 lg:p-7">
                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: `radial-gradient(120% 80% at 0% 0%, ${ACCENT}1F, transparent 60%)` }}
                />
                <span className="relative self-start rounded-full border border-neutral-800 px-2.5 py-0.5 text-xs text-neutral-400">
                    {service.short}
                </span>
                <h3
                    className="relative mt-5 text-xl font-medium leading-tight tracking-[-0.02em] text-white lg:text-2xl"
                    style={DISPLAY_FONT}
                >
                    {service.title}
                </h3>
                <p className="relative mt-3 text-[15px] leading-relaxed text-neutral-400 lg:motion-safe:text-sm">
                    {service.text}
                </p>
                <div className="relative mt-auto pt-6">
                    <ul className="flex flex-wrap gap-1.5 border-t border-neutral-800/80 pt-4">
                        {service.tags.map((tag) => (
                            <li
                                key={tag}
                                className="rounded-md border border-neutral-800 bg-neutral-900/60 px-2 py-0.5 text-xs text-neutral-300"
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </li>
    );
}

const Services = () => {
    const rootRef = useRef(null);
    const pinRef = useRef(null);
    const ringRef = useRef(null);
    const storyRef = useRef(null);
    const activeRef = useRef(0);
    const [active, setActive] = useState(0);

    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            mm.add(
                {
                    isLarge: '(min-width: 1024px)',
                    motionOK: '(prefers-reduced-motion: no-preference)',
                },
                (ctx) => {
                    const { isLarge, motionOK } = ctx.conditions;
                    if (!motionOK) return undefined;

                    gsap.from('.svc-heading-inner', {
                        yPercent: 110,
                        duration: 1.1,
                        ease: 'expo.out',
                        scrollTrigger: { trigger: '.svc-heading', start: 'top 85%', once: true },
                    });

                    const cards = gsap.utils.toArray('.svc-card');

                    /* ---------- Smaller screens: cards rise in as a grid ---------- */
                    if (!isLarge) {
                        gsap.from(cards, {
                            autoAlpha: 0,
                            y: 40,
                            duration: 0.9,
                            ease: 'power3.out',
                            stagger: 0.08,
                            scrollTrigger: { trigger: ringRef.current, start: 'top 80%', once: true },
                        });
                        return undefined;
                    }

                    /* ---------- Large screens: scrolling spins a 3D ring of cards ---------- */
                    const ring = ringRef.current;
                    const state = { rot: 0 };

                    // Place each card around the cylinder
                    cards.forEach((card, i) => {
                        card.style.left = `${-CARD_W / 2}px`;
                        card.style.top = `${-CARD_H / 2}px`;
                        card.style.width = `${CARD_W}px`;
                        card.style.height = `${CARD_H}px`;
                        card.style.transform = `rotateY(${i * ANGLE}deg) translateZ(${RADIUS}px)`;
                    });

                    // Spin the ring; cards fade the further they turn away from the front
                    const render = () => {
                        ring.style.transform = `translateZ(${-RADIUS}px) rotateX(-6deg) rotateY(${state.rot}deg)`;
                        cards.forEach((card, i) => {
                            let d = (i * ANGLE + state.rot) % 360;
                            if (d > 180) d -= 360;
                            if (d < -180) d += 360;
                            const away = Math.abs(d);
                            const opacity = Math.max(0, 1 - away / 140);
                            card.style.opacity = opacity.toFixed(3);
                            card.style.pointerEvents = away < 30 ? 'auto' : 'none';
                            card.classList.toggle('is-front', away < 20);
                        });
                    };
                    render();

                    const spin = gsap.to(state, {
                        rot: -LAST * ANGLE,
                        ease: 'none',
                        onUpdate: render,
                        scrollTrigger: {
                            trigger: pinRef.current,
                            start: 'top top',
                            end: () => `+=${window.innerHeight * 0.7 * LAST}`,
                            pin: true,
                            scrub: 0.8,
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
                    storyRef.current = spin.scrollTrigger;

                    // Ring floats in when the section arrives
                    gsap.from('.svc-ring-wrap', {
                        autoAlpha: 0,
                        y: 80,
                        duration: 1.2,
                        ease: 'expo.out',
                        clearProps: 'transform',
                        scrollTrigger: { trigger: pinRef.current, start: 'top 75%', once: true },
                    });

                    const unregister = registerScrollTarget('services', () => spin.scrollTrigger.start);

                    return () => {
                        unregister();
                        storyRef.current = null;
                        ring.style.transform = '';
                        cards.forEach((card) => {
                            card.removeAttribute('style');
                            card.classList.remove('is-front');
                        });
                    };
                },
                rootRef
            );

            return () => mm.revert();
        },
        { scope: rootRef }
    );

    // Clicking a name in the list scrolls to the point where that card faces front
    const goTo = (i) => {
        const st = storyRef.current;
        if (!st) return;
        scrollToPosition(st.start + (st.end - st.start) * (i / LAST));
    };

    return (
        <div id="services" ref={rootRef} className="lg:motion-safe:overflow-x-clip">
            <div
                ref={pinRef}
                className="lg:motion-safe:grid lg:motion-safe:h-screen lg:motion-safe:grid-cols-12 lg:motion-safe:items-center lg:motion-safe:gap-10 lg:motion-safe:pt-16"
            >
                {/* Heading, list of services, call to action */}
                <div className="mb-10 lg:motion-safe:col-span-5 lg:motion-safe:mb-0">
                    <h2
                        className="svc-heading overflow-hidden pb-[0.1em] text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-none tracking-[-0.04em] text-white"
                        style={DISPLAY_FONT}
                    >
                        <span className="svc-heading-inner block">Services</span>
                    </h2>
                    <p className="mt-3 max-w-md text-neutral-500">
                        End-to-end delivery, from the first idea to a product running in production.
                    </p>

                    <ol className="mt-10 hidden lg:motion-safe:block" aria-label="Services">
                        {SERVICES.map((s, i) => {
                            const isActive = i === active;
                            return (
                                <li key={s.title}>
                                    <button
                                        type="button"
                                        onClick={() => goTo(i)}
                                        className="group flex w-full items-center gap-4 py-2 text-left"
                                        aria-current={isActive ? 'true' : undefined}
                                    >
                                        <span
                                            className="h-px shrink-0 transition-all duration-500"
                                            style={{ width: isActive ? 40 : 16, backgroundColor: isActive ? ACCENT : '#404040' }}
                                        />
                                        <span
                                            className={`text-lg transition-colors duration-300 xl:text-xl ${
                                                isActive ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-300'
                                            }`}
                                            style={DISPLAY_FONT}
                                        >
                                            {s.title}
                                        </span>
                                    </button>
                                </li>
                            );
                        })}
                    </ol>

                    <div className="mt-8 flex flex-wrap items-center gap-6">
                        <a href="#contact" className="btn btn-outline">
                            Discuss your project
                        </a>
                        <span className="hidden text-sm tabular-nums text-neutral-500 lg:motion-safe:inline">
                            {active + 1} / {COUNT}
                        </span>
                    </div>
                </div>

                {/* 3D stage (large screens) or card grid (everywhere else) */}
                <div className="lg:motion-safe:col-span-7">
                    <div className="svc-stage lg:motion-safe:relative lg:motion-safe:h-[500px] lg:motion-safe:scale-[0.82] lg:motion-safe:[perspective:1400px] xl:motion-safe:scale-100">
                        {/* soft glow under the ring */}
                        <span
                            aria-hidden="true"
                            className="pointer-events-none absolute bottom-0 left-1/2 hidden h-24 w-[70%] -translate-x-1/2 rounded-[50%] opacity-20 blur-3xl lg:motion-safe:block"
                            style={{ backgroundColor: ACCENT }}
                        />
                        <div className="svc-ring-wrap lg:motion-safe:absolute lg:motion-safe:inset-0 lg:motion-safe:[transform-style:preserve-3d]">
                        <ul
                            ref={ringRef}
                            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:motion-safe:absolute lg:motion-safe:left-1/2 lg:motion-safe:top-1/2 lg:motion-safe:block lg:motion-safe:h-0 lg:motion-safe:w-0 lg:motion-safe:[transform-style:preserve-3d]"
                        >
                            {SERVICES.map((service) => (
                                <ServiceCard key={service.title} service={service} />
                            ))}
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
