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
        404: resolve(__dirname, 'src/404.html'),
        // 모든 정적 페이지들
        brand: resolve(__dirname, 'src/brand.html'),
        product: resolve(__dirname, 'src/product.html'),
        // ChefStack 계정 삭제 페이지 (Google Play 정책)
        chefstackAccountDeletion: resolve(__dirname, 'src/chefstack-account-deletion.html')
      },
      output: {
        // 안정적인 chunk 생성을 위한 설정
        manualChunks: undefined,
        // asset 파일명 규칙 명확화
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(css)$/.test(assetInfo.name)) {
            return `assets/[name]-[hash].${ext}`;
          }
          return `assets/[name]-[hash].${ext}`;
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    },
    assetsDir: 'assets',
    // 추가 안정성 설정
    minify: 'esbuild',
    sourcemap: false,
    // 큰 chunk에 대한 경고 비활성화
    chunkSizeWarningLimit: 1000
  },
  publicDir: '../public',
  server: {
    port: 3000,
    open: true
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  },
  envPrefix: 'VITE_'
});