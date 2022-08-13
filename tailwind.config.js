module.exports = {
	content: ["./app/**/*.{ts,tsx,jsx,js}"],
	darkMode: "class",
	theme: {
		colors: {
			"nav-border-color": "rgb(219, 219, 219)",
		},
		extend: {
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
			animation: {
				"fade-in": "fade-in 0.5s ease-out",
			},
		},
	},
	plugins: [],
};
