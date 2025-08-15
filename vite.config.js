import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  base: './', // Use relative paths for GitHub Pages
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        brand: resolve(__dirname, 'src/brand.html'),
        product: resolve(__dirname, 'src/product.html'),
        admin: resolve(__dirname, 'src/admin.html')
      }
    },
    assetsDir: 'assets'
  },
  publicDir: '../public',
  server: {
    port: 3000,
    open: true
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }
});