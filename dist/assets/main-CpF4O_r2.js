(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();function f(){const a=(window.location.pathname.split("/").pop()||"index.html").replace(".html",""),e=document.querySelectorAll(".nav-item"),o=document.querySelector(".nav-indicator"),n=document.querySelector(".main-header");if(!o||!n)return;function r(){e.forEach(i=>{const c=i.getAttribute("data-page");c===a||a==="index"&&!c?i.classList.add("current-page"):i.classList.remove("current-page")}),s()}function s(i){const c=i||document.querySelector(".nav-item.current-page");if(c&&o){const l=c.getBoundingClientRect(),u=n.getBoundingClientRect(),m=l.left-u.left;o.style.left=`${m}px`,o.style.width=`${l.width}px`,o.classList.add("active")}else c||o.classList.remove("active")}r(),window.addEventListener("resize",()=>s()),e.forEach(i=>{i.addEventListener("mouseenter",function(){s(this)})}),n.addEventListener("mouseleave",function(){s()}),e.forEach(i=>{i.addEventListener("click",function(c){c.preventDefault();const l=this.getAttribute("href");this.classList.add("clicked"),setTimeout(()=>{window.location.href=l},150)})})}function p(){if(!document.querySelector("#animation-keyframes")){const e=document.createElement("style");e.id="animation-keyframes",e.textContent=`
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(40px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                40% { transform: translateY(-10px); }
                60% { transform: translateY(-5px); }
            }
            
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
            
            .animate-fade-in-up {
                opacity: 0;
                transition: opacity 0.8s ease, transform 0.8s ease;
                transform: translateY(40px);
            }
            
            .animate-fade-in-up.animated {
                opacity: 1;
                transform: translateY(0);
            }
            
            .animate-fade-in {
                opacity: 0;
                transition: opacity 0.8s ease;
            }
            
            .animate-fade-in.animated {
                opacity: 1;
            }
            
            .work-card:hover .card-icon {
                animation: bounce 0.6s ease;
            }
        `,document.head.appendChild(e)}const t={threshold:.1,rootMargin:"0px 0px -50px 0px"},a=new IntersectionObserver(function(e){e.forEach(o=>{if(o.isIntersecting){const n=o.target.getAttribute("data-delay")||0;setTimeout(()=>{o.target.classList.add("animated")},n),a.unobserve(o.target)}})},t);y(a)}function y(t){const a=window.location.pathname.split("/").pop()||"index.html";a==="brand.html"?h(t):(a==="index.html"||a==="")&&g(t);const e=document.querySelector(".footer-content");e&&(e.classList.add("animate-fade-in"),e.setAttribute("data-delay","100"),t.observe(e))}function h(t){[{selector:".brand-title",delay:100},{selector:".brand-subtitle",delay:200},{selector:".brand-divider",delay:600},{selector:".brand-question",delay:700},{selector:".work-title",delay:100},{selector:".work-cards-container",delay:200}].forEach(({selector:o,delay:n})=>{const r=document.querySelector(o);r&&(r.classList.add("animate-fade-in"),r.setAttribute("data-delay",n.toString()),t.observe(r))}),document.querySelectorAll(".brand-circle").forEach((o,n)=>{o.classList.add("animate-fade-in"),o.setAttribute("data-delay",(300+n*100).toString()),t.observe(o)})}function g(t){[{selector:".middle-image",delay:100},{selector:".service-main-text",delay:200},{selector:".service-description-text",delay:300}].forEach(({selector:s,delay:i})=>{const c=document.querySelector(s);c&&(c.classList.add("animate-fade-in"),c.setAttribute("data-delay",i.toString()),t.observe(c))}),document.querySelectorAll(".work-card").forEach((s,i)=>{s.classList.add("animate-fade-in-up"),s.setAttribute("data-delay",(100+i*150).toString()),t.observe(s)});const o=document.querySelector(".mission-content");o&&(o.classList.add("animate-fade-in-up"),o.setAttribute("data-delay","100"),t.observe(o)),document.querySelectorAll(".team-member").forEach((s,i)=>{s.classList.add("animate-fade-in-up"),s.setAttribute("data-delay",(100+i*200).toString()),t.observe(s)});const r=document.querySelector(".contact-content");r&&(r.classList.add("animate-fade-in-up"),r.setAttribute("data-delay","100"),t.observe(r))}function b(){const t=document.querySelector(".contact-form");if(!t)return;t.addEventListener("submit",x);const a=t.querySelector(".submit-button");a&&a.addEventListener("click",L)}async function x(t){t.preventDefault();const a=v(this);if(!S(a))return;const e=this.querySelector(".submit-button"),o=e.textContent;d(e,!0);try{await new Promise(n=>setTimeout(n,1e3)),console.log("Form submission:",a),alert("제안이 성공적으로 전송되었습니다!\\n\\n문의사항은 previtlab@gmail.com으로 직접 연락 부탁드립니다."),this.reset()}catch(n){console.error("Form submission error:",n),alert("전송 중 오류가 발생했습니다. 다시 시도해주세요.")}finally{d(e,!1,o)}}function v(t){const a=t.querySelectorAll("input"),e={};return a.forEach(o=>{const n=o.placeholder;n&&(e[n]=o.value.trim())}),{name:e.이름||"",email:e.이메일||"",company:e.회사명||"",phone:e.연락처||"",proposal:e["제안 사항"]||""}}function S(t){return!t.name||!t.email||!t.proposal?(alert("이름, 이메일, 제안 사항은 필수 입력 항목입니다."),!1):/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email)?t.phone&&t.phone.length>0&&!/^[0-9-+\s()]+$/.test(t.phone)?(alert("올바른 연락처 형식을 입력해주세요."),!1):!0:(alert("올바른 이메일 주소를 입력해주세요."),!1)}function d(t,a,e="제안 보내기"){a?(t.textContent="전송 중...",t.disabled=!0):(t.textContent=e,t.disabled=!1)}function L(t){const a=t.currentTarget,e=document.createElement("span"),o=a.getBoundingClientRect(),n=Math.max(o.width,o.height),r=t.clientX-o.left-n/2,s=t.clientY-o.top-n/2;e.style.cssText=`
        width: ${n}px;
        height: ${n}px;
        left: ${r}px;
        top: ${s}px;
        position: absolute;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.1);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    `,a.style.position="relative",a.style.overflow="hidden",a.appendChild(e),setTimeout(()=>{e.remove()},600)}function q(){const t=window.location.pathname.split("/").pop()||"index.html";if(t!=="index.html"&&t!=="")return;const a={logoImage:document.querySelector(".logo-image"),logo:document.querySelector(".logo"),mainCopy:document.querySelector(".main-copy"),subCopy:document.querySelector(".sub-copy")};w(a),E()}function w({logoImage:t,logo:a,mainCopy:e,subCopy:o}){if(t&&(t.style.cssText=`
            opacity: 0;
            transform: translateY(-20px);
            transition: opacity 1s ease, transform 1s ease;
        `,setTimeout(()=>{t.style.opacity="1",t.style.transform="translateY(0)"},200)),a){const n=a.querySelector(".logo-pre"),r=a.querySelector(".logo-vit");n&&(n.style.cssText=`
                opacity: 0;
                transform: translateX(-20px);
                transition: opacity 1s ease, transform 1s ease;
            `,setTimeout(()=>{n.style.opacity="1",n.style.transform="translateX(0)"},400)),r&&(r.style.cssText=`
                opacity: 0;
                transform: translateX(20px);
                transition: opacity 1s ease, transform 1s ease;
            `,setTimeout(()=>{r.style.opacity="1",r.style.transform="translateX(0)"},500))}e&&(e.style.cssText=`
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 1s ease, transform 1s ease;
        `,setTimeout(()=>{e.style.opacity="1",e.style.transform="translateY(0)"},700)),o&&(o.style.cssText=`
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 1s ease, transform 1s ease;
        `,setTimeout(()=>{o.style.opacity="1",o.style.transform="translateY(0)"},900))}function E(){document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(a){a.preventDefault();const e=document.querySelector(this.getAttribute("href"));e&&e.scrollIntoView({behavior:"smooth",block:"start"})})})}document.addEventListener("DOMContentLoaded",function(){f(),p(),b(),q(),document.body.style.opacity="0",document.body.style.transition="opacity 0.5s ease",setTimeout(()=>{document.body.style.opacity="1"},100)});
