# PreVIT Landing Page

개선된 PreVIT 랜딩 페이지 - Vite 기반 모던 프론트엔드 구조

## 🚀 주요 개선사항

### 1. 빌드 시스템
- **Vite** 도입으로 빠른 개발 서버 및 빌드
- ES 모듈 기반 JavaScript
- 핫 리로드 지원

### 2. 폴더 구조 정리
```
src/
├── css/
│   ├── base.css          # CSS 변수 및 기본 스타일
│   ├── main.css          # 메인 CSS (모든 스타일 통합)
│   └── components/       # 컴포넌트별 CSS
├── js/
│   ├── main.js           # 메인 엔트리포인트
│   ├── components/       # 기능별 모듈
│   └── utils/            # 유틸리티 함수
├── *.html               # HTML 페이지들
public/
└── assets/              # 정적 파일들
```

### 3. JavaScript 모듈화
- 기능별로 분리된 ES6 모듈
- 중복 코드 제거
- 더 나은 코드 구조

### 4. 환경 설정 개선
- `.env` 파일 기반 환경 변수
- 개발/프로덕션 환경 분리
- Vite 환경 변수 사용

## 🛠️ 개발 환경 설정

### 1. 의존성 설치
```bash
npm install
```

### 2. 환경 변수 설정
`.env` 파일을 생성하고 다음 내용을 추가:
```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key
```

### 3. 로컬 개발 서버 실행
```bash
# Vite 개발 서버
npm run dev

# Netlify 로컬 개발 (함수 포함)
npm run netlify:dev
```

### 4. 빌드
```bash
npm run build
```

## 📁 주요 파일 설명

### JavaScript 모듈
- `main.js` - 애플리케이션 엔트리포인트
- `components/navigation.js` - 네비게이션 기능
- `components/animations.js` - 스크롤 애니메이션
- `components/contact-form.js` - 연락처 폼 처리
- `components/hero.js` - 히어로 섹션 애니메이션
- `utils/config.js` - 환경 설정 관리

### CSS 구조
- `base.css` - CSS 변수 및 기본 리셋
- `main.css` - 통합 스타일시트
- `components/` - 컴포넌트별 스타일

## 🚀 배포

### Netlify 배포
```bash
npm run deploy
```

### 빌드 설정
- `netlify.toml`에서 빌드 명령어가 `npm run netlify:build`로 설정됨
- 출력 디렉토리: `dist`

## 🔧 마이그레이션 내용

### 제거된 파일들
- `script.js` → `src/js/main.js`로 통합
- `navigation.js` → `src/js/components/navigation.js`
- `animations.js` → `src/js/components/animations.js`
- `common.js` → 사용되지 않던 코드 제거
- `styles.css` → `src/css/main.css`로 이동

### 경로 변경
- `asset/` → `/assets/` (public 폴더)
- 모든 이미지 및 비디오 파일 경로 업데이트

## 📋 앞으로 할 수 있는 개선사항

1. **TypeScript 도입**: 타입 안정성 향상
2. **CSS 전처리기**: Sass/SCSS 도입
3. **번들 최적화**: 더 세밀한 코드 스플리팅
4. **PWA 지원**: 서비스 워커 및 오프라인 지원
5. **테스트**: 단위 테스트 및 E2E 테스트 추가