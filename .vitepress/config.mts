import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "tp2-appweb-doc",
  description: "tp2-appweb sur un rpg de Star Wars",
  base: '/tp2-appweb-doc/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Liste des revues de codes',
        items: [
          { text: 'Revue de Arthur', link: '/revue_arthur' },
          { text: 'Revue de Laurent', link: '/revue_laurent' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
