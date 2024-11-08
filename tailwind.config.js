/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                helvetica: ['Helvetica Neue', 'sans-serif'],
                belle: ['La Belle Aurore', 'cursive'],
                coolvetica: ['Coolvetica', 'sans-serif'],
            },
            animation: {
                'bounce-slow': 'bounce 3s linear infinite',
                'bounce-slow-2': 'bounce 3.5s linear infinite',
            },
        },
    },
    plugins: [],
};
