/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './src/**/*.{html,jsx,ts,tsx}',
        './pages/**/*.{html,js,ts,tsx}',
        './components/**/*.{html,js,ts,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'poke-wall': "url('../assets/images/background.png')",
            }
        },
        plugins: [],
    }
}