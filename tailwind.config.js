// 강의 랜딩(/tax-ai-architect) 전용. 시안(Gemini)이 쓰던 Tailwind CDN 설정을 그대로 옮긴 것이다.
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/tax-ai-architect.html', './src/js/tax-ai-architect.js', './scripts/lectures-render.mjs'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'Noto Sans KR', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: { 950: '#070D19', 900: '#0F172A', 800: '#1E293B', 700: '#334155' },
        brand: { 50: '#EFF6FF', 100: '#DBEAFE', 200: '#BFDBFE', 500: '#2563EB', 600: '#1D4ED8', 700: '#1E40AF' },
      },
      boxShadow: {
        soft: '0 2px 14px -2px rgba(15, 23, 42, 0.04), 0 8px 24px -4px rgba(15, 23, 42, 0.03)',
        card: '0 0 0 1px rgba(15, 23, 42, 0.07), 0 4px 12px rgba(15, 23, 42, 0.03)',
        'card-hover': '0 0 0 1px rgba(37, 99, 235, 0.3), 0 12px 24px -4px rgba(15, 23, 42, 0.08)',
      },
    },
  },
};
