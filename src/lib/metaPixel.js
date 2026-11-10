/**
 * Meta (Facebook) Pixel tracking utility.
 * Safe for use in development and production.
 */

// Fallback placeholder ID. Set your real Pixel ID in .env as VITE_META_PIXEL_ID
export const DEFAULT_PIXEL_ID = 'YOUR_META_PIXEL_ID';

export const getMetaPixelId = () => {
    return import.meta.env.VITE_META_PIXEL_ID || DEFAULT_PIXEL_ID;
};

/**
 * Initialize the Meta Pixel and send initial PageView
 */
export const initMetaPixel = () => {
    const pixelId = getMetaPixelId();
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
        if (pixelId && pixelId !== DEFAULT_PIXEL_ID) {
            window.fbq('init', pixelId);
            window.fbq('track', 'PageView');
            if (import.meta.env.DEV) {
                console.log(`[Meta Pixel] Initialized with ID: ${pixelId}`);
            }
        } else if (import.meta.env.DEV) {
            console.info('[Meta Pixel] Placeholder active. Set VITE_META_PIXEL_ID in .env when your pixel is ready.');
        }
    }
};

/**
 * Track standard Meta Pixel events:
 * E.g.: 'PageView', 'Lead', 'Contact', 'ViewContent', 'Schedule'
 */
export const trackMetaEvent = (eventName, params = {}) => {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
        window.fbq('track', eventName, params);
        if (import.meta.env.DEV) {
            console.log(`[Meta Pixel] Sent event: ${eventName}`, params);
        }
    } else if (import.meta.env.DEV) {
        console.debug(`[Meta Pixel - DEV / No Pixel Active] ${eventName}:`, params);
    }
};

/**
 * Track custom Meta Pixel events:
 */
export const trackCustomMetaEvent = (eventName, params = {}) => {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
        window.fbq('trackCustom', eventName, params);
        if (import.meta.env.DEV) {
            console.log(`[Meta Pixel] Sent custom event: ${eventName}`, params);
        }
    } else if (import.meta.env.DEV) {
        console.debug(`[Meta Pixel - DEV / No Pixel Active] Custom ${eventName}:`, params);
    }
};
