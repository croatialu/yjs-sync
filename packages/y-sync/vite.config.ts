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
    sourcemap: true,
    minify: false,
    rollupOptions: {
      external: ['yjs'],
    },
  },
  plugins: [dts()],
})
