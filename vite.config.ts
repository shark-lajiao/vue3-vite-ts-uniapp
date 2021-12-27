import { defineConfig } from 'vite'
import { resolve } from 'path'
import uni from '@dcloudio/vite-plugin-uni'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
    ],
  },
  plugins: [uni(), viteMockServe({})],
})
