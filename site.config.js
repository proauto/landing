// 사이트 설정 값 — 여기 한 곳만 바꾸면 빌드 때 화면·메일 링크에 함께 반영된다.
export default {
  // 강의 랜딩(/tax-ai-architect) 문의를 받는 메일 주소
  taxAiContactEmail: 'dev@previtlab.com',
  // 강의 랜딩 첫 화면 큰 글(여기만 바꾸면 화면과 링크 미리보기 설명 글이 같이 바뀐다)
  // 화면: line1 줄바꿈 뒤 line2Before + (파란 강조)highlight + line2After
  // 링크 미리보기 그림(public/assets/og-tax-ai-architect.png)은 따로 다시 만들어야 한다.
  taxAiHeadline: { line1: '세무 실무 지식을,', line2Before: '실제로 돌아가는 ', highlight: 'AI 서비스', line2After: '로 만듭니다.' },
};
