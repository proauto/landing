import { defineConfig } from 'vite';
import { resolve } from 'path';
import tailwindcss from 'tailwindcss';
import siteConfig from './site.config.js';

// HTML 안의 %TAX_AI_CONTACT_EMAIL% 자리를 site.config.js 값으로 채운다.
const siteConfigHtml = () => ({
  name: 'site-config-html',
  transformIndexHtml: (html) => html.replaceAll('%TAX_AI_CONTACT_EMAIL%', siteConfig.taxAiContactEmail),
});

export default defineConfig({
  root: 'src',
  plugins: [siteConfigHtml()],
  // Tailwind는 강의 랜딩(tax-ai-architect.css)에서만 쓴다. @tailwind 지시문이 없는 기존 CSS는 그대로 통과한다.
  css: { postcss: { plugins: [tailwindcss({ config: resolve(__dirname, 'tailwind.config.js') })] } },
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
        // 강의 랜딩(이홍규 | Tax × AI Architect)
        taxAiArchitect: resolve(__dirname, 'src/tax-ai-architect.html'),
        // 루담(Dreamer) 약관 — 독립 정적 페이지
        rudamTerms: resolve(__dirname, 'src/rudam/terms.html'),
        rudamPrivacy: resolve(__dirname, 'src/rudam/privacy.html')
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
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    __TAX_AI_CONTACT_EMAIL__: JSON.stringify(siteConfig.taxAiContactEmail)
  },
  envPrefix: 'VITE_'
});