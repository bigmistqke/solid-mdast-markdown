import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [
    dts({ rollupTypes: true }),
    solidPlugin({
      solid: {
        generate: 'ssr',
      },
    }),
  ],
  server: {
    port: 3001
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'SolidLezerMarkdown',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'solid-js',
        'solid-js/web',
      ],
      output: {
        globals: {
          'solid-js': 'Solid',
          'solid-js/web': 'SolidWeb',
        },
      },
    },
  },
})
