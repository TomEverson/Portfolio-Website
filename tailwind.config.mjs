/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				cappuccino: {
					light: '#E6C4A3',
					DEFAULT: '#B38B6D',
					dark: '#8A6D54',
				},
				cream: '#FFF1E6',
				coffee: '#6F4E37',
				sugar: '#C0B283',
			},
			backgroundColor: theme => ({
				...theme('colors'),
				page: '#FFF8F2',
			}),
			textColor: theme => ({
				...theme('colors'),
				heading: '#3E2723',
				body: '#5D4037',
			}),
			borderColor: theme => ({
				...theme('colors'),
			}),
			fontFamily: {
				roboto_mono: "'Roboto Mono', monospace",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
