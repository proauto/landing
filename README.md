# PreVIT Landing Page 🚀

PreVIT LAB의 공식 랜딩 페이지 - 현대적인 디자인과 반응형 웹 기술로 구축된 회사 소개 사이트

## 🌐 라이브 사이트
- **메인 사이트**: [previtlab.com](https://previtlab.com)
- **GitHub Pages**: [proauto.github.io/landing](https://proauto.github.io/landing/)

## 📋 프로젝트 개요

PreVIT LAB은 "아이디어를 서비스로" 만드는 회사로, AI와 기술을 활용해 일상의 작은 불편함을 해결하는 혁신적인 솔루션을 제공합니다.

### 🎯 핵심 가치
- **생활 밀착형**: 일상에서 느끼는 문제 해결
- **빠른 실행**: 아이디어에서 결과까지 한번에
- **접근성**: 누구나 쉽게 쓸 수 있는 도구

## 🚀 주요 제품/서비스

### 1. HyugePICK
- **설명**: 지금 나에게 딱 맞는 휴게소 찾기 서비스
- **기능**: 목적지 기반 휴게소 추천, 식당 메뉴/카페 브랜드 정보 제공

### 2. R-Robot (알로봇)
- **설명**: 성장형 AI로봇 일지
- **플랫폼**: [YouTube](https://www.youtube.com/@알로봇R), Instagram
- **콘텐츠**: AI를 활용한 창작 과정 소개 (영상, 음악, 그림, 코딩, 글쓰기)

### 3. MomCheck
- **설명**: 임신 체중 증가 계산기
- **웹사이트**: [momcheck.kr](https://www.momcheck.kr/)
- **기능**: 주차별 권장 체중 비교, 체중 분포 시각화

## 🏗️ 기술 스택 & 아키텍처

### Frontend
- **빌드 도구**: Vite 5.x
- **언어**: Vanilla JavaScript (ES6+ 모듈)
- **스타일**: CSS3 (반응형 디자인)
- **폰트**: Montserrat, Noto Sans KR
- **배포**: GitHub Pages

### 프로젝트 구조
```
├── public/
│   └── assets/          # 이미지, 비디오, 아이콘
├── src/
│   ├── css/
│   │   ├── base.css     # CSS 변수, 리셋 스타일
│   │   ├── main.css     # 메인 스타일시트
│   │   ├── styles.css   # 추가 스타일
│   │   └── components/  # 컴포넌트별 CSS
│   │       ├── header.css
│   │       ├── hero.css
│   │       └── brand.css
│   ├── js/
│   │   ├── main.js      # 애플리케이션 진입점
│   │   ├── components/  # 기능별 모듈
│   │   │   ├── navigation.js
│   │   │   ├── contact-form.js
│   │   │   ├── animations.js
│   │   │   └── hero.js
│   │   └── utils/
│   │       └── config.js
│   ├── components/      # 추가 컴포넌트 폴더
│   ├── index.html       # 홈페이지
│   ├── brand.html       # 브랜드 소개
│   ├── product.html     # 제품 소개
│   └── admin.html       # 관리자 페이지 (Supabase 연동)
├── dist/                # 빌드 결과물
├── vite.config.js       # Vite 설정
└── package.json
```

## 🎨 디자인 특징

### 반응형 디자인
- **Desktop**: 1200px 이상
- **Tablet**: 768px - 1024px  
- **Mobile**: 768px 이하

### 색상 팔레트
- **Primary Blue**: #0001D9
- **Secondary Blue**: #0D0E78
- **Background**: #EDF2FB (연한 회색)
- **Text**: #333333 (다크 그레이)

### 타이포그래피
- **헤딩**: Montserrat (300, 400, 600, 700)
- **본문**: Noto Sans KR (300, 400, 500, 700, 900)

## 🛠️ 개발 환경 설정

### 1. 저장소 클론
```bash
git clone https://github.com/proauto/landing.git
cd landing
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 개발 서버 실행
```bash
npm run dev
# → http://localhost:3000
```

### 4. 프로덕션 빌드
```bash
npm run build
# → dist/ 폴더에 빌드 결과물 생성
```

### 5. 빌드 미리보기
```bash
npm run preview
```

## 📱 페이지 구성

### 홈페이지 (`/`)
- **Hero Section**: 회사 소개 비디오 배경
- **Service Intro**: 회사 미션 및 가치 제안
- **How We Work**: 3가지 핵심 가치 소개
- **Mission**: 회사 철학 및 비전
- **Team**: 팀 멤버 소개 (MINA CEO, HARRY CTO)
- **Contact**: 제안서 제출 폼

### 브랜드 페이지 (`/brand.html`)
- **Brand Identity**: PreVIT LAB 브랜드 소개
- **Brand Circles**: PrePare + Vision + IT 컨셉
- **Work Philosophy**: 업무 방식 소개

### 제품 페이지 (`/product.html`)
- **HyugePICK**: 휴게소 찾기 서비스
- **R-Robot**: AI 로봇 콘텐츠 채널 ([YouTube 채널 연결](https://www.youtube.com/@알로봇R))
- **MomCheck**: 임신 체중 계산기 ([실제 링크 연결](https://www.momcheck.kr/))

### 관리자 페이지 (`/admin.html`)
- **연락처 관리**: Supabase 연동으로 실시간 연락처 확인
- **CSV 내보내기**: 연락처 데이터 다운로드
- **통계 대시보드**: 접수된 연락처 현황

## 🎯 주요 기능

### 1. 반응형 네비게이션
- 현재 페이지 표시 인디케이터
- 부드러운 페이지 전환 애니메이션
- 모바일/태블릿 최적화

### 2. 인터랙티브 요소
- 스크롤 기반 애니메이션
- 호버 이팩트
- 리플 이팩트 버튼

### 3. 연락처 폼
- 실시간 입력 검증
- 이메일 형식 검증
- 전화번호 형식 검증
- 로딩 상태 표시
- **Supabase 연동**: 실제 데이터베이스 저장

### 4. 성능 최적화
- 이미지 최적화
- CSS/JS 번들링 및 압축
- 지연 로딩

## 🚀 배포 과정

### GitHub Pages 배포
1. **자동 배포**: `main` 브랜치에 push시 자동 배포
2. **배포 방식**: Static files from `dist` folder
3. **도메인**: Custom domain (`previtlab.com`) 설정됨

### 배포 설정 파일
- **`.nojekyll`**: Jekyll 처리 비활성화
- **`CNAME`**: 커스텀 도메인 설정
- **Root `index.html`**: `dist/index.html`로 리다이렉트

## 🔧 개발 히스토리

### Phase 1: 프로젝트 구조 개선
- Vite 빌드 시스템 도입
- 폴더 구조 재정리
- ES6 모듈화

### Phase 2: 디자인 시스템 구축
- 반응형 디자인 구현
- CSS 컴포넌트 분리
- 브랜드 가이드라인 적용

### Phase 3: 기능 구현
- 네비게이션 시스템
- 연락처 폼
- 인터랙티브 애니메이션

### Phase 4: 콘텐츠 최적화
- 이미지 크기 조정 (250% → 85% 등)
- 텍스트 크기 최적화
- 모바일 반응성 개선

### Phase 5: 배포 및 운영
- GitHub Pages 설정
- 도메인 연결
- 외부 링크 연결 (MomCheck)

## 📊 성능 메트릭

### 빌드 결과 (Latest)
```
dist/
├── brand.html                 5.39 kB │ gzip: 1.95 kB
├── index.html                 8.92 kB │ gzip: 2.79 kB  
├── admin.html                10.09 kB │ gzip: 2.90 kB
├── product.html              10.93 kB │ gzip: 3.11 kB
├── assets/main-CBcZsG1x.css  13.22 kB │ gzip: 3.09 kB
└── assets/main-CpF4O_r2.js    9.31 kB │ gzip: 3.04 kB
```

## 🛠️ 최근 업데이트

### SEO 최적화 완료 ✅
- **메타 태그**: description, keywords, viewport 설정
- **Open Graph**: 소셜미디어 공유 최적화 
- **Twitter Card**: 트위터 공유 최적화
- **보안 헤더**: CSP, XSS Protection 등 적용
- **구조화된 데이터**: 제목 태그 및 이미지 alt 속성 최적화

### 연락처 폼 고도화 ✅
- **Supabase 연동**: 실시간 데이터베이스 저장
- **관리자 페이지**: 연락처 관리 및 CSV 내보내기
- **실시간 검증**: 이메일, 전화번호 형식 검증

## 🐛 알려진 이슈

### 기타
- **WebP 폴더**: `public/assets/webp/` 폴더가 비어있음 (향후 이미지 최적화용)

## 🚀 향후 개선 계획

### 단기 계획
- [x] ~~연락처 폼 실제 전송 기능~~ (Supabase 연동 완료)
- [x] ~~SEO 최적화~~ (완료)
- [ ] 추가 제품 페이지 확장
- [ ] 사이트맵 생성
- [ ] WebP 이미지 최적화 적용
- [ ] 관리자 페이지 인증 시스템

### 장기 계획  
- [ ] TypeScript 마이그레이션
- [ ] PWA 지원
- [ ] 다국어 지원 (영문)
- [ ] CMS 연동
- [ ] 블로그 섹션 추가

## 👥 팀

### Core Team
- **MINA (CEO)**: 디자인, 마케팅, 기획
- **HARRY (CTO)**: 개발, 비지니스, 기획

### Contributors
- Claude Code (AI Assistant): 개발 지원 및 코드 리뷰

## 📞 연락처

- **이메일**: previtlab@gmail.com
- **웹사이트**: [previtlab.com](https://previtlab.com)
- **GitHub**: [github.com/proauto/landing](https://github.com/proauto/landing)

---

<p align="center">
  <strong>PreVIT LAB</strong><br>
  Prepare Your Vision with IT
</p>

<p align="center">
  🤖 Generated and maintained with <a href="https://claude.ai/code">Claude Code</a>
</p>