/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                load_content: "load_content 0.55s ease",
            },
            keyframes: {
                load_content: {
                    "0%": { transform: "translateY(2%)", opacity: "0%" },
                    "100%": { transform: "translateY(0)", opacity: "100%" },
                },
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                mmd: ["Major Mono Display", "monospace"],
            },
            colors: {
                bg1: "#0f172a",
                bg2: "#0F0326",
                primary: "#335145",
                secondary: "#1E352F",
                accent: "#F4F1DE",
                accentText: "#22D3EE",
                text: "#64748B",
                heading: "#E2E8F0",
                borderSubtle: "#1E293B",
            },
        },
    },
    plugins: [],
};
