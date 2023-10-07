export default defineAppConfig({
  docus: {
    title: 'BSA Troop 27',
    description: 'The best place to start your documentation.',
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
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
      title: 'BSA Troop 27'
    }
  },

  nuxtIcon: {
    size: '1em'
  }
})