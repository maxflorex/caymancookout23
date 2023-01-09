/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-syne)'],
				handwritten: ['var(--font-msmadi)']
			},
			colors: {
				'mx': {
					100: '#F8F8F8 ',
					200: '#F2F2F2',
					300: '#00FFFF',
					400: '#002E4D',
				}
			}
		},
	},
	plugins: [],
}
