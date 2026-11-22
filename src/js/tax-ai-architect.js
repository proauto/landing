// 강의 랜딩(/tax-ai-architect) 동작: 아이콘, 모바일 메뉴, 대상별 거르기, 목차 접기, 문의 요약 창.
// 시안(Gemini 단일 HTML)의 인라인 스크립트를 옮긴 것이다. 서버로 보내는 것은 없다.
import {
  createIcons, Menu, ArrowRight, BookOpen, ArrowUpRight, XCircle, CheckCircle2, Sparkles,
  ChevronUp, ChevronDown, Mail, Copy, Linkedin, ExternalLink, MapPin, Send, Check,
} from 'lucide';

/* global __TAX_AI_CONTACT_EMAIL__ */
const CONTACT_EMAIL = __TAX_AI_CONTACT_EMAIL__; // site.config.js 값(빌드 때 채워진다)

createIcons({
  icons: {
    Menu, ArrowRight, BookOpen, ArrowUpRight, XCircle, CheckCircle2, Sparkles,
    ChevronUp, ChevronDown, Mail, Copy, Linkedin, ExternalLink, MapPin, Send, Check,
  },
});

const $ = (id) => document.getElementById(id);

// ── 모바일 메뉴 ──
const mobileMenuBtn = $('mobile-menu-btn');
const mobileMenu = $('mobile-menu');
function setMenu(open) {
  mobileMenu.classList.toggle('hidden', !open);
  mobileMenuBtn.setAttribute('aria-expanded', String(open));
  mobileMenuBtn.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
}
mobileMenuBtn.addEventListener('click', () => setMenu(mobileMenu.classList.contains('hidden')));
document.querySelectorAll('.mobile-link').forEach((link) => link.addEventListener('click', () => setMenu(false)));

// ── 수강 대상별 거르기 ──
const tabs = [...document.querySelectorAll('.track-tab')];
function filterTracks(trackKey) {
  tabs.forEach((tab) => {
    const on = tab.dataset.filter === trackKey;
    tab.classList.toggle('bg-white', on);
    tab.classList.toggle('text-navy-900', on);
    tab.classList.toggle('shadow-2xs', on);
    tab.classList.toggle('font-bold', on);
    tab.classList.toggle('text-slate-600', !on);
    tab.classList.toggle('font-semibold', !on);
    tab.setAttribute('aria-selected', String(on));
    tab.tabIndex = on ? 0 : -1;
  });
  document.querySelectorAll('.track-card').forEach((card) => {
    card.classList.toggle('hidden', !(trackKey === 'all' || card.dataset.track === trackKey));
  });
}
tabs.forEach((tab, i) => {
  tab.tabIndex = tab.getAttribute('aria-selected') === 'true' ? 0 : -1;
  tab.addEventListener('click', () => filterTracks(tab.dataset.filter));
  // 탭 묶음 안에서는 좌우 화살표로 옮긴다
  tab.addEventListener('keydown', (e) => {
    const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = tabs[(i + step + tabs.length) % tabs.length];
    next.focus();
    filterTracks(next.dataset.filter);
  });
});

// ── 세부 목차 접기/보기 ──
document.querySelectorAll('[data-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const content = $(btn.dataset.toggle);
    const label = btn.querySelector('span');
    const icon = btn.querySelector('svg');
    const open = !content.classList.contains('open');
    content.classList.toggle('open', open);
    label.textContent = open ? '세부 목차 접기' : '세부 목차 보기';
    if (icon) icon.style.transform = open ? 'rotate(0deg)' : 'rotate(180deg)';
    btn.setAttribute('aria-expanded', String(open));
  });
});

// ── '이 강의로 문의하기' → 양식의 강의 선택 + 이동 ──
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('[data-inquire]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const selectEl = $('track-select');
    if (selectEl) selectEl.value = btn.dataset.inquire;
    const contactSection = $('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
      setTimeout(() => $('org-name')?.focus({ preventScroll: true }), 450);
    }
  });
});

// ── 복사·알림 ──
let toastTimeout;
function showToast(message) {
  const toast = $('toast');
  $('toast-message').textContent = message;
  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 2800);
}
function legacyCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  let ok = false;
  try { ok = document.execCommand('copy'); } catch { ok = false; }
  document.body.removeChild(textarea);
  return ok;
}
async function copyTextToClipboard(text, successMsg) {
  let ok = false;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      ok = true;
    }
  } catch { ok = false; }
  if (!ok) ok = legacyCopy(text);
  showToast(ok ? successMsg : '복사에 실패했습니다. 직접 선택해 복사해주세요.');
  return ok;
}

document.querySelectorAll('[data-contact-email]').forEach((el) => { el.textContent = CONTACT_EMAIL; });
document.querySelector('[data-copy-email]')?.addEventListener('click', async () => {
  const ok = await copyTextToClipboard(CONTACT_EMAIL, `이메일(${CONTACT_EMAIL})이 복사되었습니다.`);
  const copyBtnText = $('copy-btn-text');
  if (ok && copyBtnText) {
    copyBtnText.textContent = '복사됨';
    setTimeout(() => { copyBtnText.textContent = '복사'; }, 2000);
  }
});

// ── 문의 양식: 입력값 검증 → 요약 창 ──
let lastInquiryPlainText = '';
let lastFocus = null;
const inquiryForm = $('inquiry-form');
const modal = $('confirmation-modal');
const modalSummary = $('modal-summary');
const mailtoTrigger = $('mailto-trigger');

const EMAIL_RE = /[^\s@]+@[^\s@]+\.[^\s@]{2,}/;
const hasPhone = (v) => (v.match(/\d/g) || []).length >= 8;
const RULES = {
  'org-name': (v) => (!v ? '기관 또는 기업명을 입력해 주세요.' : v.length < 2 ? '기관 또는 기업명을 2자 이상 입력해 주세요.' : ''),
  'contact-info': (v) => (!v ? '담당자 연락처를 입력해 주세요.' : !(EMAIL_RE.test(v) || hasPhone(v)) ? '회신받을 이메일 주소나 전화번호를 넣어 주세요.' : ''),
  'inquiry-details': (v) => (!v ? '예상 일정과 요청사항을 입력해 주세요.' : v.length < 5 ? '예상 일정과 요청사항을 조금 더 자세히 적어 주세요.' : ''),
};
function validateField(id) {
  const el = $(id);
  const err = $(`err-${id}`);
  const msg = RULES[id](el.value.trim());
  err.textContent = msg;
  err.classList.toggle('hidden', !msg);
  el.classList.toggle('border-red-500', !!msg);
  el.setAttribute('aria-invalid', String(!!msg));
  return !msg;
}
Object.keys(RULES).forEach((id) => {
  $(id).addEventListener('input', () => { if ($(id).getAttribute('aria-invalid') === 'true') validateField(id); });
});

function summaryRow(label, value, extraClass) {
  const row = document.createElement('div');
  if (extraClass) row.className = extraClass;
  const b = document.createElement('span');
  b.className = 'font-bold text-navy-900';
  b.textContent = `${label}:`;
  row.append(b, ' ');
  return { row, value };
}

inquiryForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const bad = Object.keys(RULES).filter((id) => !validateField(id));
  if (bad.length) { $(bad[0]).focus(); return; }

  const orgName = $('org-name').value.trim();
  const contactInfo = $('contact-info').value.trim();
  const track = $('track-select').value;
  const details = $('inquiry-details').value.trim();

  // 입력값은 글자로만 넣는다(태그로 해석되지 않는다)
  modalSummary.replaceChildren();
  [['기관/기업명', orgName], ['담당자 연락처', contactInfo], ['희망 강의', track]].forEach(([label, value]) => {
    const { row } = summaryRow(label, value);
    row.append(value);
    modalSummary.append(row);
  });
  const { row: reqRow } = summaryRow('요청사항', details, 'pt-1.5 border-t border-slate-200/80');
  reqRow.append(document.createElement('br'));
  details.split('\n').forEach((line, i) => {
    if (i) reqRow.append(document.createElement('br'));
    reqRow.append(line);
  });
  modalSummary.append(reqRow);

  lastInquiryPlainText = `[이홍규 강사 강의 섭외 문의]\n- 기관/기업명: ${orgName}\n- 담당자 연락처: ${contactInfo}\n- 희망 강의 트랙: ${track}\n- 일정 및 요청사항:\n${details}`;
  const subject = encodeURIComponent(`[강의 섭외 문의] ${orgName} — ${track}`);
  const body = encodeURIComponent(lastInquiryPlainText);
  mailtoTrigger.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

  lastFocus = document.activeElement;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  $('modal-title').focus();
});

function closeModal() {
  if (modal.classList.contains('hidden')) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  lastFocus?.focus?.();
}
document.querySelector('[data-copy-summary]')?.addEventListener('click', () => {
  if (lastInquiryPlainText) copyTextToClipboard(lastInquiryPlainText, '문의 내용이 클립보드에 복사되었습니다.');
});
document.querySelector('[data-close-modal]')?.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeModal(); if (!mobileMenu.classList.contains('hidden')) { setMenu(false); mobileMenuBtn.focus(); } return; }
  // 요약 창이 열려 있는 동안 Tab 초점은 창 안에서만 돈다
  if (e.key !== 'Tab' || modal.classList.contains('hidden')) return;
  const items = [...modal.querySelectorAll('a[href], button')];
  const first = items[0];
  const last = items[items.length - 1];
  if (e.shiftKey && (document.activeElement === first || document.activeElement === $('modal-title'))) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});
