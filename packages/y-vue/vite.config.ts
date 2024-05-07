import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: {
        'index': 'src/index.ts',
        'provider/webrtc': 'src/provider/webrtc/index.ts',
        'provider/websocket': 'src/provider/websocket/index.ts',
      },
      formats: ['es', 'cjs'],
    },
    minify: false,
    sourcemap: true,
    rollupOptions: {
      external: [
        'yjs',
        'vue',
        'vue-demi',
        'y-webrtc',
        'y-websocket',
        'y-indexeddb',
        'y-protocols',
        '@croatialu/y-sync',
      ],
    },
  },
  plugins: [dts()],
})
