import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
import viteFonts from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  server: { hmr: { overlay: false } },
  plugins: [
    reactRefresh(),
    viteFonts({
      google: {
        families: ['Source Sans Pro', 'Inter', 'Codystar'],
      },
    }),
  ],
  build: {
    outDir: './build',
  },
  define: {
    'process.env': {},
  },
  resolve: {
    alias: {
      '@/': '/src/',
      '@c/': '/src/components/',
    },
  },
})
