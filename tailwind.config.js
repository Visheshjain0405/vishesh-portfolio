/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Inter', 'sans-serif'],
            },
            colors: {
                background: '#050505', // Deep black/charcoal
                surface: '#121212',    // Slightly lighter for cards
                surfaceHighlight: '#1E1E1E',

                primary: '#3b82f6',    // Blue accent (adjust if you want another color)

                textMain: '#EDEDED',   // Primary text
                textMuted: '#A1A1AA',  // Secondary text

                border: '#27272A',     // Border color
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
