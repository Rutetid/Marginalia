import { Footer } from 'flowbite-react';

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"'node_modules/flowbite-react/lib/esm/**/*.js'",
	],
	theme: {
		colors: {
			text: "#080403",
			background: "#ededed",
			main: "#5732b3",
			secondary: "#9573de",
			axent: "#6fc5a8",
			sec2: "#d2c7e8",
			footer: "#e1e1e1",
		},
		extend: {
			colors: {
				primary: {
					50: "#efebf9",
					100: "#dfd7f4",
					200: "#c0afe9",
					300: "#a088dd",
					400: "#8060d2",
					500: "#6138c7",
					600: "#4d2d9f",
					700: "#3a2277",
					800: "#271650",
					900: "#130b28",
					950: "#0a0614",
				},
			},
		},
		fontFamily: {
			body: [
				"Inter",
				"ui-sans-serif",
				"system-ui",
				"-apple-system",
				"system-ui",
				"Segoe UI",
				"Roboto",
				"Helvetica Neue",
				"Arial",
				"Noto Sans",
				"sans-serif",
				"Apple Color Emoji",
				"Segoe UI Emoji",
				"Segoe UI Symbol",
				"Noto Color Emoji",
			],
			sans: [
				"Inter",
				"ui-sans-serif",
				"system-ui",
				"-apple-system",
				"system-ui",
				"Segoe UI",
				"Roboto",
				"Helvetica Neue",
				"Arial",
				"Noto Sans",
				"sans-serif",
				"Apple Color Emoji",
				"Segoe UI Emoji",
				"Segoe UI Symbol",
				"Noto Color Emoji",
			],
		},
	},
	plugins: [require("daisyui"), require("flowbite/plugin")],
	daisyui: {
		themes: [],
	},
};
