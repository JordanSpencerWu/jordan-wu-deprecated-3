module.exports = {
	content: ["./app/**/*.{ts,tsx,jsx,js}"],
	darkMode: "class",
	theme: {
		extend: {
			animation: {
				"fade-in": "fade-in 0.5s ease-out",
			},
			colors: {
				"nav-border-color": "rgb(219, 219, 219)",
			},
			keyframes: {
				"fade-in": {
					"0%": {
						opacity: "0",
					},
					"100%": {
						opacity: "1",
					},
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
