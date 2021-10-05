module.exports = {
	purge: [],
	darkMode: false,
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: "#fff",
			black: "#000",
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
			backgroundImage: {
				work: "url('../images/icon-work.svg')",
				study: "url('../images/icon-study.svg')",
				play: "url('../images/icon-play.svg')",
				social: "url('../images/icon-social.svg')",
				exercise: "url('../images/icon-exercise.svg')",
				"self-care": "url('../images/icon-self-care.svg')",
			},
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
