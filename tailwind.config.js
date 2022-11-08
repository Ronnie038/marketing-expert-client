/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: ['night', 'dark', 'light', 'synthwave'],
	},
	plugins: [require('daisyui')],
};
