const colors = require("tailwindcss/colors");

// As of Tailwind CSS v3.0 the following colors has been renamed
delete colors["lightBlue"];
delete colors["blueGray"];
delete colors["coolGray"];
delete colors["trueGray"];
delete colors["warmGray"];

module.exports = {
	content: ["./app/**/*.{ts,tsx,jsx,js}"],
	darkMode: "class",
	important: true,
	theme: {
		colors: {
			"nav-border-color": "rgb(219, 219, 219)",
			...colors,
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
	plugins: [require("@tailwindcss/typography")],
};
