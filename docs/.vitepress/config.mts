import { defineConfig } from 'vitepress'
const base = "/tomato-vitepress/";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,
  title: "TomatoXcj",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Markdown', link: '/markdown' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Project Config', link: '/project-config' },
          { text: 'Markdown Study', link: '/markdown-study' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xujiuran' }
    ]
  }
})
