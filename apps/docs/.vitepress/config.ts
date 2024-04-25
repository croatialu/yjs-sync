import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'y-sync',
  description: 'A VitePress Site',
  base: '/y-sync',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/example/' },
    ],

    sidebar: [
      {
        text: 'Vue API',
        items: [
          { text: 'useMap', link: '/api/useMap' },
          { text: 'useArray', link: '/api/useArray' },
          { text: 'useWebRtc', link: '/api/useWebRtc' },
        ],
      },
      {
        text: 'Examples',
        items: [
          { text: 'hello', link: '/examples/hello' },
          { text: 'cursor', link: '/examples/cursor' },
          { text: 'simple-list', link: '/examples/simple-list' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/croatialu/yjs-vue' },
    ],
  },
})
