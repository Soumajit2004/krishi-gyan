import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            "data-card": "bg-primary min-h-full rounded-2xl flex flex-col justify-center items-center gap-2 shadow-xl",
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                myTheme: {
                    "primary": "#47cf56",
                    "secondary": "#8de1d6",
                    "accent": "#62c5d6",
                    "neutral": "#103c16",
                    "base-100": "#f4fcf5",
                },
            },
        ],
    },
};
export default config;
