module.exports = {
	purge: [],
	darkMode: false,
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			blue: {
				DEFAULT: "hsl(246, 80%, 60%)",
				soft: "hsl(195, 74%, 62%)",
				pale: "hsl(236, 100%, 87%)",
				dark: "hsl(235, 46%, 20%)",
				darker: "hsl(226, 43%, 10%)",
				desaturated: "hsl(235, 45%, 61%)",
			},
			"light-red": {
				work: "hsl(15, 100%, 70%)",
				study: "hsl(348, 100%, 68%)",
			},
			violet: "hsl(264, 64%, 52%)",
			"soft-orange": "hsl(43, 84%, 65%)",
			"lime-green": "hsl(145, 58%, 55%)",
		},
		extend: {
			fontFamily: {
				rubik: ["Rubik", "sans-serif"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
