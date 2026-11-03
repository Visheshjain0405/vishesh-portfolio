import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Thin accent bar at the top of the page that fills as you scroll */
export default function ScrollProgress() {
    const barRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            barRef.current,
            { scaleX: 0 },
            { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.3 } }
        );
    });

    return (
        <div
            ref={barRef}
            aria-hidden="true"
            className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-[2px] origin-left"
            style={{ backgroundColor: '#8EA4FF', transform: 'scaleX(0)' }}
        />
    );
}
