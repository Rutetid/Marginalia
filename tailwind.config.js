/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			colors: {
				text: "#0c0401",
				background: "#fefaf9",
				backgroundshade: "#eeeeee",
				primary: "#5532b1",
				secondary: "#f1ee8d",
				accent: "#f464ea",
				secondaryshade: "#e9e9f5",
			},
		},
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: false,
	},
};
