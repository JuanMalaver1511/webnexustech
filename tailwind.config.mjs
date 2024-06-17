/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors:{
			primary_dart: "#00071A",
			secundary:"#007AFF",
			blur_color_dark: "rgba(3,7,18,0.9)",
			
		},
		textColor:{
			text_color:"#007AFF",
			text_color_hover:"#fff"
		},
		fontFamily: {
			normal: ['Varela Round', 'sans-serif'],
		  },
		fontSize:{
			navBarText: 15
		}
	},
	plugins: [],
}
