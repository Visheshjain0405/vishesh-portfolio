/**
 * Small scroll helper shared by the whole app.
 * - Holds the Lenis instance (set by <SmoothScroll />)
 * - Lets a component register a custom scroll position for a section id,
 *   e.g. the hero registers "about" because About plays inside the pinned hero on desktop.
 */

const NAV_OFFSET = 80; // keeps section headings clear of the fixed navbar

let lenis = null;
const customTargets = new Map();

export function setLenis(instance) {
    lenis = instance;
}

export function registerScrollTarget(id, getY) {
    customTargets.set(id, getY);
    return () => {
        if (customTargets.get(id) === getY) customTargets.delete(id);
    };
}

function scrollToY(y, immediate) {
    const top = Math.max(0, y);
    if (lenis) lenis.scrollTo(top, { immediate, force: true, duration: 1.4 });
    else window.scrollTo({ top, behavior: immediate ? 'auto' : 'smooth' });
}

/** Scrolls to a section by id. Returns false if nothing with that id exists on the page. */
export function scrollToSection(id, { immediate = false } = {}) {
    const custom = customTargets.get(id);
    const customY = custom ? custom() : null;
    if (typeof customY === 'number' && Number.isFinite(customY)) {
        scrollToY(customY, immediate);
        return true;
    }

    const el = document.getElementById(id);
    if (!el) return false;
    scrollToY(el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET, immediate);
    return true;
}

/** Scrolls to an exact page position (used for steps inside pinned sections). */
export function scrollToPosition(y, { immediate = false } = {}) {
    scrollToY(y, immediate);
}

export function scrollToTop({ immediate = true } = {}) {
    scrollToY(0, immediate);
}
