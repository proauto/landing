// 강의 목록 원본(tax-ai-architect/lectures.json) 하나로 두 페이지를 만든다.
// - 랜딩 src/tax-ai-architect.html: vite 플러그인(vite.config.js)이 %TAX_LECTURES_HTML% 자리를 빌드 때 채운다.
// - 커리큘럼 tax-ai-architect/plan-mehcrsko/index.html: `node scripts/lectures-render.mjs`(npm prebuild)가
//   <!-- lectures:start --> ~ <!-- lectures:end --> 사이를 다시 쓴다.
// 랜딩은 공개 페이지라 덱 링크를 넣지 않는다(덱 링크는 비공개 커리큘럼 페이지에만).
import fs from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
export const LECTURES_JSON = resolve(ROOT, 'tax-ai-architect/lectures.json');
export const PLAN_HTML = resolve(ROOT, 'tax-ai-architect/plan-mehcrsko/index.html');

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const loadLectures = () => JSON.parse(fs.readFileSync(LECTURES_JSON, 'utf8'));

export function renderLanding(d) {
  const cards = d.lectures.map((l) => `
                                <div class="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/60">
                                    <span class="text-[11px] font-extrabold text-brand-600 block mb-1">${l.no}강</span>
                                    <p class="text-xs sm:text-sm font-bold text-navy-900">${esc(l.title)}</p>
                                </div>`).join('');
  const hobby = d.hobby.map((h) => `
                            <div class="mt-3 p-3.5 rounded-xl bg-brand-50/60 border border-brand-100 text-xs sm:text-sm">
                                <span class="px-2.5 py-1 text-xs font-extrabold tracking-wider bg-brand-50 text-brand-700 rounded-md">${esc(h.label)}</span>
                                <span class="font-bold text-navy-900">${esc(h.title)}</span>
                                <span class="text-slate-500">· ${esc(h.note)}</span>
                            </div>`).join('');
  return `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">${cards}
                            </div>${hobby}
                            <p class="mt-4 text-xs sm:text-sm text-slate-500 leading-relaxed">${esc(d.summary)}</p>
                            <a href="${esc(d.planUrl)}" data-plan-link class="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-navy-800 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all">
                                <span>전체 커리큘럼 보기</span>
                                <i data-lucide="arrow-right" class="w-4 h-4"></i>
                            </a>`;
}

const AUD = { '전원': 'all', '직원': 'staff', '세무사': 'cpa', '구축 담당': 'ops' };
const audTags = (s) => Object.entries(AUD).filter(([k]) => s.includes(k)).map(([k, v]) => `<span class="aud ${v}">${k}</span>`).join('');

export function renderPlan(d) {
  const cards = d.lectures.map((l) => `<div class="mod ${l.aud}"><div class="mh"><span class="mn">${l.no}강</span></div>
<div class="mt">${esc(l.title)}</div><div class="mm">${audTags(l.audience)}<span class="mtxt">${esc(l.audience)}</span></div>
<div class="mf"><a href="${esc(d.deckBase + l.deck)}">강의 자료 열기</a></div></div>`).join('\n');
  const hobby = d.hobby.map((h) => `<div class="mod hobby" style="border-top-color:#98a2b3;background:#f8fafc"><div class="mh"><span class="mn">${esc(h.label)}</span></div>
<div class="mt">${esc(h.title)}</div><div class="mm"><span class="mtxt">${esc(h.note)}</span></div>
<div class="mf"><a href="${esc(d.deckBase + h.deck)}">강의 자료 열기</a></div></div>`).join('\n');
  return `<div class="mods">${cards}\n</div>\n<p class="cap">${esc(d.summary)}</p>\n<div class="mods" style="margin-top:10px">${hobby}</div>`;
}

export function writePlan(d = loadLectures(), file = PLAN_HTML) {
  const html = fs.readFileSync(file, 'utf8');
  const re = /(<!-- lectures:start -->)[\s\S]*?(<!-- lectures:end -->)/;
  if (!re.test(html)) throw new Error(`표시 자리 없음: ${file}`);
  const out = html.replace(re, `$1\n${renderPlan(d)}\n$2`);
  if (out !== html) fs.writeFileSync(file, out);
  return out !== html;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  console.log(writePlan() ? '커리큘럼 페이지 갱신' : '커리큘럼 페이지 변경 없음');
}
