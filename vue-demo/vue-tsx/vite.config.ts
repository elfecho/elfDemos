import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  base: './', // 打包路径
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 设置别名
      components: path.resolve(__dirname, './src/components'),
    },
  },
  server: {
    port: 8099, // 启动端口
    open: false,
    proxy: {
      // 选项写法
      '/api': '', // 代理网址
    },
    cors: true,
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
})
