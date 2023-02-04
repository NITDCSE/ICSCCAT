/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
    },
    theme: {
        extend: {
            colors: {
                primaryRegular: '#222299',
                primaryLight: '#3035D9',
                primaryDark: '#211973',
                primary90: '#3838A3',
                primary80: '#4E4EAD',
                primary50: '#9191CC',
                primary20: '#D3D3EB',
                primary10: '#E9E9F5',
                primary05: '#F4F4FA',
                black: '#1E1E24',
                white: '#F4F4F4'
            }

        },
    },
    plugins: [],
}

