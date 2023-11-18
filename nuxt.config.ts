export default defineNuxtConfig({
	// https://github.com/nuxt-themes/docus
	extends: '@nuxt-themes/docus',
	devtools: { enabled: true },
	css: [
		'@/assets/css/main.css',
	],
	colorMode: {
		preference: "light"
	},
	site: {
		url: 'https://www.bsatroop27.us/'	
	},
	modules: [
		// Remove it if you don't use Plausible analytics
		// https://github.com/nuxt-modules/plausible
		// '@nuxtjs/plausible',
		'@nuxtjs/robots',
		'nuxt-simple-sitemap'
	]
})
