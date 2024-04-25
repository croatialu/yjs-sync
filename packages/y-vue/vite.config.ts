import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: 'src/index.ts',
      },
      formats: ['es', 'cjs'],
    },
    minify: false,
    rollupOptions: {
      external: ['yjs', 'vue', 'vue-demi', 'y-webrtc', 'y-websocket', 'y-indexeddb', 'y-protocols'],
    },
  },
  plugins: [dts()],
})
