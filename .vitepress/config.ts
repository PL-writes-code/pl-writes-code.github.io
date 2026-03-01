import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Pierre Lemperiere',
  description: 'Notes on systems, tools, and automation',
  cleanUrls: true,

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PL-writes-code' },
    ],

    sidebar: {
      '/posts/': [
        {
          text: 'Posts',
          items: [
            // New posts are added here
          ],
        },
      ],
    },
  },
})
