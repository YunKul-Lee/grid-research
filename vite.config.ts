import { fileURLToPath, URL } from 'node:url'

import {defineConfig, Plugin} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

function myPlugin (): Plugin[] {
  return [
    {
      name: 'my-plugin:serve',
      apply: 'serve',   // 개발서버에만 적용
      configResolved(config) {
        console.log('dev-server', config)
      }
    },
    {
      name: 'my-plugin:build',
      apply: 'build',   // 번들에만 적용
      configResolved(config) {
        console.log('bundle', config)
      }
    }
  ]
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})

