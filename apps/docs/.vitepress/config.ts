import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'y-sync',
  description: 'A VitePress Site',
  base: '/yjs-sync',
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
          { text: 'useMap', link: '/api/vue/useMap' },
          { text: 'useMapRef', link: '/api/vue/useMapRef' },
          { text: 'useRecord', link: '/api/vue/useRecord' },
          { text: 'useRecordRef', link: '/api/vue/useRecordRef' },
          { text: 'useArray', link: '/api/vue/useArray' },
          { text: 'useArrayRef', link: '/api/vue/useArrayRef' },
          { text: 'useWebRtc', link: '/api/vue/useWebRtc' },
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
  outDir: 'dist',
})
