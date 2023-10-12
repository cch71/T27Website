export default defineAppConfig({
	docus: {
		title: 'BSA Troop 27',
		description: 'BSA Troop 27 Website',
		image: 't27_patch.png',
		url: 'https://www.bsatroop27.us/',
		titleTemplate: 'BSA Troop 27 - %s',

		aside: {
			level: 0,
			collapsed: true,
			exclude: []
		},

		socials: {},

		main: {
			padded: true,
			fluid: true
		},

		header: {
			logo: false,
			showLinkIcon: false,
			exclude: [],
			fluid: true,
			title: 'BSA Troop 27'
		},

		footer: {
			credits: {
				icon: '',
				text: 'Copyright(C) BSA Capital Area Council Troop 27 RoundRock Texas',
				href: 'https://www.bsatroop27.us/'
			},
			textLinks: [],
			iconLinks: [],
			fluid: false
		}

	},
})
