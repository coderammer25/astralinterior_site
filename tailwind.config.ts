import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
				playfair: ["Playfair Display", "serif"],
			},
			fontWeight: {
				bolder: "900",
			},
      colors: {
        primary: '',
        secondary: '',
      }
		},
	},
	plugins: [],
} satisfies Config;
