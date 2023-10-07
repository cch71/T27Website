export default defineAppConfig({
  docus: {
    title: 'BSA Troop 27',
    description: 'BSA Troop 27 Website',
    image: '/t27_patch.png',

    socials: {
      twitter: '',
      github: '',
      nuxt: {
        label: 'Nuxt',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://nuxt.com'
      }
    },

    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
      edit: true
    },

    aside: {
      level: 1,
      collapsed: false,
      exclude: []
    },

    main: {
      padded: true,
      fluid: true
    },

    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
      title: 'BSA Troop 27'
    },

    titleTemplate: '%s · Docus'
  },

  nuxtIcon: {
    size: '1em'
  }
})