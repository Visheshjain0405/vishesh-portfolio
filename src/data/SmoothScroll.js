import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { setLenis, scrollToSection, scrollToTop } from '../lib/scroll';

gsap.registerPlugin(ScrollTrigger);

const HASH_LINK = /^\/?#([\w-]+)$/; // matches "#contact" and "/#contact"

/**
 * Wrap the app once, inside <BrowserRouter>.
 * 1. Smooth scrolling (Lenis) kept in sync with every GSAP ScrollTrigger
 * 2. Every "#section" link scrolls smoothly; from another page it goes home first
 * 3. Route changes start at the top (replaces the old ScrollToTop component)
 */
export default function SmoothScroll({ children }) {
    const { pathname, hash, key } = useLocation();
    const navigate = useNavigate();

    // 1. Lenis, created once
    useEffect(() => {
        // Don't let the browser drop you back mid-animation on refresh
        if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
        document.fonts?.ready.then(() => ScrollTrigger.refresh());

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

        const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
        setLenis(lenis);
        lenis.on('scroll', ScrollTrigger.update);

        const raf = (time) => lenis.raf(time * 1000);
        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(raf);
            lenis.destroy();
            setLenis(null);
        };
    }, []);

    // 2. One click handler for every in-page link on the site
    useEffect(() => {
        const onClick = (e) => {
            if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
            const link = e.target.closest('a[href]');
            if (!link || link.target === '_blank') return;

            const match = link.getAttribute('href').match(HASH_LINK);
            if (!match) return;

            e.preventDefault();
            const id = match[1];
            if (window.location.pathname === '/') scrollToSection(id);
            else navigate(`/#${id}`);
        };

        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, [navigate]);

    // 3. On every route change: go to the #section if there is one, otherwise to the top
    useEffect(() => {
        const id = hash.replace('#', '');

        if (!id) {
            scrollToTop({ immediate: true });
            ScrollTrigger.refresh();
            return undefined;
        }

        // Give the new page a moment to mount and measure its pinned sections
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
            scrollToSection(id, { immediate: false });
        }, 150);
        return () => clearTimeout(timer);
    }, [pathname, hash, key]);

    return children;
}