import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mkcert from 'vite-plugin-mkcert'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  compilerOptions: {
    isCustomElement: tag => tag === 'lottie-player'
  },
  plugins: [
    vue(),

    // https://github.com/liuweiGL/vite-plugin-mkcert
    mkcert(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        // 'vue/macros',
        // '@vueuse/head',
        // '@vueuse/core',
      ],
      js: '/auto-imports.js',
    }),
  ],
  server: { https: true },
})
