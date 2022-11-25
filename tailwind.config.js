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
				"dark-navbar-color": "rgb(22, 27, 34)",
				"dark-background-color": "rgb(2, 4, 8)",
				"dark-secondary-color": "rgb(139, 148, 158)",
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
