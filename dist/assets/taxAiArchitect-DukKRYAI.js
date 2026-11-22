import"./modulepreload-polyfill-B5Qt9EMX.js";/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=(e,t,n=[])=>{const o=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(c=>{o.setAttribute(c,String(t[c]))}),n.length&&n.forEach(c=>{const r=q(...c);o.appendChild(r)}),o};var j=([e,t,n])=>q(e,t,n);/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=e=>Array.from(e.attributes).reduce((t,n)=>(t[n.name]=n.value,t),{}),O=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",B=e=>e.flatMap(O).map(n=>n.trim()).filter(Boolean).filter((n,o,c)=>c.indexOf(n)===o).join(" "),U=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,n,o)=>n.toUpperCase()+o.toLowerCase()),A=(e,{nameAttr:t,icons:n,attrs:o})=>{const c=e.getAttribute(t);if(c==null)return;const r=U(c),l=n[r];if(!l)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const p=R(e),[v,d,u]=l,m={...d,"data-lucide":c,...o,...p},k=B(["lucide",`lucide-${c}`,p,o]);k&&Object.assign(m,{class:k});const N=j([v,m,u]);return e.parentNode?.replaceChild(N,e)};/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=["svg",s,[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=["svg",s,[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=["svg",s,[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=["svg",s,[["path",{d:"M20 6 9 17l-5-5"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=["svg",s,[["path",{d:"m6 9 6 6 6-6"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=["svg",s,[["path",{d:"m18 15-6-6-6 6"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=["svg",s,[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=["svg",s,[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=["svg",s,[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=["svg",s,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=["svg",s,[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["circle",{cx:"12",cy:"10",r:"3"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=["svg",s,[["line",{x1:"4",x2:"20",y1:"12",y2:"12"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=["svg",s,[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=["svg",s,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=({icons:e={},nameAttr:t="data-lucide",attrs:n={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const o=document.querySelectorAll(`[${t}]`);if(Array.from(o).forEach(c=>A(c,{nameAttr:t,icons:e,attrs:n})),t==="data-lucide"){const c=document.querySelectorAll("[icon-name]");c.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(c).forEach(r=>A(r,{nameAttr:"icon-name",icons:e,attrs:n})))}},f="dev@previtlab.com";te({icons:{Menu:Y,ArrowRight:D,BookOpen:z,ArrowUpRight:P,XCircle:X,CheckCircle2:_,Sparkles:ee,ChevronUp:H,ChevronDown:F,Mail:Q,Copy:G,Linkedin:K,ExternalLink:J,MapPin:W,Send:Z,Check:V}});const a=e=>document.getElementById(e),g=a("mobile-menu-btn"),E=a("mobile-menu");function L(e){E.classList.toggle("hidden",!e),g.setAttribute("aria-expanded",String(e)),g.setAttribute("aria-label",e?"메뉴 닫기":"메뉴 열기")}g.addEventListener("click",()=>L(E.classList.contains("hidden")));document.querySelectorAll(".mobile-link").forEach(e=>e.addEventListener("click",()=>L(!1)));const h=[...document.querySelectorAll(".track-tab")];function C(e){h.forEach(t=>{const n=t.dataset.filter===e;t.classList.toggle("bg-white",n),t.classList.toggle("text-navy-900",n),t.classList.toggle("shadow-2xs",n),t.classList.toggle("font-bold",n),t.classList.toggle("text-slate-600",!n),t.classList.toggle("font-semibold",!n),t.setAttribute("aria-selected",String(n)),t.tabIndex=n?0:-1}),document.querySelectorAll(".track-card").forEach(t=>{t.classList.toggle("hidden",!(e==="all"||t.dataset.track===e))})}h.forEach((e,t)=>{e.tabIndex=e.getAttribute("aria-selected")==="true"?0:-1,e.addEventListener("click",()=>C(e.dataset.filter)),e.addEventListener("keydown",n=>{const o=n.key==="ArrowRight"?1:n.key==="ArrowLeft"?-1:0;if(!o)return;n.preventDefault();const c=h[(t+o+h.length)%h.length];c.focus(),C(c.dataset.filter)})});document.querySelectorAll("[data-toggle]").forEach(e=>{e.addEventListener("click",()=>{const t=a(e.dataset.toggle),n=e.querySelector("span"),o=e.querySelector("svg"),c=!t.classList.contains("open");t.classList.toggle("open",c),n.textContent=c?"세부 목차 접기":"세부 목차 보기",o&&(o.style.transform=c?"rotate(0deg)":"rotate(180deg)"),e.setAttribute("aria-expanded",String(c))})});const ne=window.matchMedia("(prefers-reduced-motion: reduce)").matches;document.querySelectorAll("[data-inquire]").forEach(e=>{e.addEventListener("click",()=>{const t=a("track-select");t&&(t.value=e.dataset.inquire);const n=a("contact");n&&(n.scrollIntoView({behavior:ne?"auto":"smooth"}),setTimeout(()=>a("org-name")?.focus({preventScroll:!0}),450))})});let M;function oe(e){const t=a("toast");a("toast-message").textContent=e,t.classList.remove("translate-y-20","opacity-0"),t.classList.add("translate-y-0","opacity-100"),clearTimeout(M),M=setTimeout(()=>{t.classList.add("translate-y-20","opacity-0"),t.classList.remove("translate-y-0","opacity-100")},2800)}function ce(e){const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();let n=!1;try{n=document.execCommand("copy")}catch{n=!1}return document.body.removeChild(t),n}async function T(e,t){let n=!1;try{navigator.clipboard&&window.isSecureContext&&(await navigator.clipboard.writeText(e),n=!0)}catch{n=!1}return n||(n=ce(e)),oe(n?t:"복사에 실패했습니다. 직접 선택해 복사해주세요."),n}document.querySelectorAll("[data-contact-email]").forEach(e=>{e.textContent=f});document.querySelector("[data-copy-email]")?.addEventListener("click",async()=>{const e=await T(f,`이메일(${f})이 복사되었습니다.`),t=a("copy-btn-text");e&&t&&(t.textContent="복사됨",setTimeout(()=>{t.textContent="복사"},2e3))});let y="",$=null;const ae=a("inquiry-form"),i=a("confirmation-modal"),w=a("modal-summary"),se=a("mailto-trigger"),re=/[^\s@]+@[^\s@]+\.[^\s@]{2,}/,ie=e=>(e.match(/\d/g)||[]).length>=8,b={"org-name":e=>e?e.length<2?"기관 또는 기업명을 2자 이상 입력해 주세요.":e.length>60?"기관 또는 기업명은 60자까지 입력할 수 있습니다.":"":"기관 또는 기업명을 입력해 주세요.","contact-info":e=>e?e.length>80?"담당자 연락처는 80자까지 입력할 수 있습니다.":re.test(e)||ie(e)?"":"회신받을 이메일 주소나 전화번호를 넣어 주세요.":"담당자 연락처를 입력해 주세요.","inquiry-details":e=>e?e.length<5?"예상 일정과 요청사항을 조금 더 자세히 적어 주세요.":e.length>1e3?"요청사항은 1,000자까지 입력할 수 있습니다.":"":"예상 일정과 요청사항을 입력해 주세요."};function I(e){const t=a(e),n=a(`err-${e}`),o=b[e](t.value.trim());return n.textContent=o,n.classList.toggle("hidden",!o),t.classList.toggle("border-red-500",!!o),t.setAttribute("aria-invalid",String(!!o)),!o}Object.keys(b).forEach(e=>{a(e).addEventListener("input",()=>{a(e).getAttribute("aria-invalid")==="true"&&I(e)})});function S(e,t,n){const o=document.createElement("div");n&&(o.className=n);const c=document.createElement("span");return c.className="font-bold text-navy-900",c.textContent=`${e}:`,o.append(c," "),{row:o,value:t}}ae.addEventListener("submit",e=>{e.preventDefault();const t=Object.keys(b).filter(d=>!I(d));if(t.length){a(t[0]).focus();return}const n=a("org-name").value.trim(),o=a("contact-info").value.trim(),c=a("track-select").value,r=a("inquiry-details").value.trim();w.replaceChildren(),[["기관/기업명",n],["담당자 연락처",o],["희망 강의",c]].forEach(([d,u])=>{const{row:m}=S(d,u);m.append(u),w.append(m)});const{row:l}=S("요청사항",r,"pt-1.5 border-t border-slate-200/80");l.append(document.createElement("br")),r.split(`
`).forEach((d,u)=>{u&&l.append(document.createElement("br")),l.append(d)}),w.append(l),y=`[이홍규 강사 강의 섭외 문의]
- 기관/기업명: ${n}
- 담당자 연락처: ${o}
- 희망 강의 트랙: ${c}
- 일정 및 요청사항:
${r}`;const p=encodeURIComponent(`[강의 섭외 문의] ${n} — ${c}`),v=encodeURIComponent(y);se.href=`mailto:${f}?subject=${p}&body=${v}`,$=document.activeElement,i.classList.remove("hidden"),i.classList.add("flex"),a("modal-title").focus()});function x(){i.classList.contains("hidden")||(i.classList.add("hidden"),i.classList.remove("flex"),$?.focus?.())}document.querySelector("[data-copy-summary]")?.addEventListener("click",()=>{y&&T(y,"문의 내용이 클립보드에 복사되었습니다.")});document.querySelector("[data-close-modal]")?.addEventListener("click",x);i.addEventListener("click",e=>{e.target===i&&x()});document.addEventListener("keydown",e=>{if(e.key==="Escape"){x(),E.classList.contains("hidden")||(L(!1),g.focus());return}if(e.key!=="Tab"||i.classList.contains("hidden"))return;const t=[...i.querySelectorAll("a[href], button")],n=t[0],o=t[t.length-1];e.shiftKey&&(document.activeElement===n||document.activeElement===a("modal-title"))?(e.preventDefault(),o.focus()):!e.shiftKey&&document.activeElement===o&&(e.preventDefault(),n.focus())});
