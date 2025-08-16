import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  base: '/', // Use absolute paths for GitHub Pages
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        404: resolve(__dirname, 'src/404.html'),
        admin: resolve(__dirname, 'src/admin.html')
      }
    },
    assetsDir: 'assets'
  },
  publicDir: '../public',
  server: {
    port: 3000,
    open: true,
    historyApiFallback: {
      // SPA fallback for development
      rewrites: [
        { from: /^\/admin/, to: '/admin.html' },
        { from: /.*/, to: '/index.html' }
      ]
    }
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }
});