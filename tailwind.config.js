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
                background: '#09090b', // Sleek deep zinc black
                surface: '#121215',    // Minimalist card surface
                surfaceHighlight: '#1c1c21',

                primary: '#FFFFFF',    // Crisp minimalist white
                primaryHover: '#E4E4E7',

                textMain: '#F4F4F5',   // High readability crisp white
                textMuted: '#A1A1AA',  // Clean secondary zinc gray

                border: '#27272A',     // Refined subtle border
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
