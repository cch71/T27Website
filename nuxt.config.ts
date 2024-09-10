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

  modules: [ '@nuxtjs/robots', '@nuxtjs/sitemap'],
  compatibilityDate: '2024-09-10'
})