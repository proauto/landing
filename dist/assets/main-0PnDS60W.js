(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function e(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=e(o);fetch(o.href,r)}})();function f(){const n=(window.location.pathname.split("/").pop()||"index.html").replace(".html",""),e=document.querySelectorAll(".nav-item"),a=document.querySelector(".nav-indicator"),o=document.querySelector(".main-header");if(!a||!o)return;function r(){e.forEach(i=>{const c=i.getAttribute("data-page");c===n||n==="index"&&!c?i.classList.add("current-page"):i.classList.remove("current-page")}),s()}function s(i){const c=i||document.querySelector(".nav-item.current-page");if(c&&a){const l=c.getBoundingClientRect(),u=o.getBoundingClientRect(),m=l.left-u.left;a.style.left=`${m}px`,a.style.width=`${l.width}px`,a.classList.add("active")}else c||a.classList.remove("active")}r(),window.addEventListener("resize",()=>s()),e.forEach(i=>{i.addEventListener("mouseenter",function(){s(this)})}),o.addEventListener("mouseleave",function(){s()}),e.forEach(i=>{i.addEventListener("click",function(c){c.preventDefault();const l=this.getAttribute("href");this.classList.add("clicked"),setTimeout(()=>{window.location.href=l},150)})})}function p(){if(!document.querySelector("#animation-keyframes")){const e=document.createElement("style");e.id="animation-keyframes",e.textContent=`
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
        `,document.head.appendChild(e)}const t={threshold:.1,rootMargin:"0px 0px -50px 0px"},n=new IntersectionObserver(function(e){e.forEach(a=>{if(a.isIntersecting){const o=a.target.getAttribute("data-delay")||0;setTimeout(()=>{a.target.classList.add("animated")},o),n.unobserve(a.target)}})},t);y(n)}function y(t){const n=window.location.pathname.split("/").pop()||"index.html";n==="brand.html"?h(t):(n==="index.html"||n==="")&&g(t);const e=document.querySelector(".footer-content");e&&(e.classList.add("animate-fade-in"),e.setAttribute("data-delay","100"),t.observe(e))}function h(t){[{selector:".brand-title",delay:100},{selector:".brand-subtitle",delay:200},{selector:".brand-divider",delay:600},{selector:".brand-question",delay:700},{selector:".work-title",delay:100},{selector:".work-cards-container",delay:200}].forEach(({selector:a,delay:o})=>{const r=document.querySelector(a);r&&(r.classList.add("animate-fade-in"),r.setAttribute("data-delay",o.toString()),t.observe(r))}),document.querySelectorAll(".brand-circle").forEach((a,o)=>{a.classList.add("animate-fade-in"),a.setAttribute("data-delay",(300+o*100).toString()),t.observe(a)})}function g(t){[{selector:".middle-image",delay:100},{selector:".service-main-text",delay:200},{selector:".service-description-text",delay:300}].forEach(({selector:s,delay:i})=>{const c=document.querySelector(s);c&&(c.classList.add("animate-fade-in"),c.setAttribute("data-delay",i.toString()),t.observe(c))}),document.querySelectorAll(".work-card").forEach((s,i)=>{s.classList.add("animate-fade-in-up"),s.setAttribute("data-delay",(100+i*150).toString()),t.observe(s)});const a=document.querySelector(".mission-content");a&&(a.classList.add("animate-fade-in-up"),a.setAttribute("data-delay","100"),t.observe(a)),document.querySelectorAll(".team-member").forEach((s,i)=>{s.classList.add("animate-fade-in-up"),s.setAttribute("data-delay",(100+i*200).toString()),t.observe(s)});const r=document.querySelector(".contact-content");r&&(r.classList.add("animate-fade-in-up"),r.setAttribute("data-delay","100"),t.observe(r))}function b(){const t=document.querySelector(".contact-form");if(!t)return;t.addEventListener("submit",v);const n=t.querySelector(".submit-button");n&&n.addEventListener("click",w)}async function v(t){t.preventDefault();const n=x(this);if(!S(n))return;const e=this.querySelector(".submit-button"),a=e.textContent;d(e,!0);try{const o=await fetch("/.netlify/functions/submit-contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),r=await o.json();if(o.ok&&r.success)alert("제안이 성공적으로 전송되었습니다!\\n\\n빠른 시일 내에 연락드리겠습니다."),this.reset();else throw new Error(r.error||"Unknown error")}catch(o){console.error("Form submission error:",o),alert("전송 중 오류가 발생했습니다. 다시 시도해주세요.")}finally{d(e,!1,a)}}function x(t){const n=t.querySelectorAll("input"),e={};return n.forEach(a=>{const o=a.placeholder;o&&(e[o]=a.value.trim())}),{name:e.이름||"",email:e.이메일||"",company:e.회사명||"",phone:e.연락처||"",proposal:e["제안 사항"]||""}}function S(t){return!t.name||!t.email||!t.proposal?(alert("이름, 이메일, 제안 사항은 필수 입력 항목입니다."),!1):/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(t.email)?t.phone&&t.phone.length>0&&!/^[0-9-+\\s()]+$/.test(t.phone)?(alert("올바른 연락처 형식을 입력해주세요."),!1):!0:(alert("올바른 이메일 주소를 입력해주세요."),!1)}function d(t,n,e="제안 보내기"){n?(t.textContent="전송 중...",t.disabled=!0):(t.textContent=e,t.disabled=!1)}function w(t){const n=t.currentTarget,e=document.createElement("span"),a=n.getBoundingClientRect(),o=Math.max(a.width,a.height),r=t.clientX-a.left-o/2,s=t.clientY-a.top-o/2;e.style.cssText=`
        width: ${o}px;
        height: ${o}px;
        left: ${r}px;
        top: ${s}px;
        position: absolute;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.1);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    `,n.style.position="relative",n.style.overflow="hidden",n.appendChild(e),setTimeout(()=>{e.remove()},600)}function L(){const t=window.location.pathname.split("/").pop()||"index.html";if(t!=="index.html"&&t!=="")return;const n={logo:document.querySelector(".logo"),mainCopy:document.querySelector(".main-copy"),subCopy:document.querySelector(".sub-copy")};E(n),q()}function E({logo:t,mainCopy:n,subCopy:e}){t&&(t.style.cssText=`
            opacity: 0;
            transform: translateX(-50%) translateY(-30px);
            transition: opacity 1s ease, transform 1s ease;
        `,setTimeout(()=>{t.style.opacity="1",t.style.transform="translateX(-50%) translateY(0)"},300)),n&&(n.style.cssText=`
            opacity: 0;
            transform: translateX(-50%) translateY(30px);
            transition: opacity 1s ease, transform 1s ease;
        `,setTimeout(()=>{n.style.opacity="1",n.style.transform="translateX(-50%) translateY(0)"},600)),e&&(e.style.cssText=`
            opacity: 0;
            transform: translateX(-50%) translateY(30px);
            transition: opacity 1s ease, transform 1s ease;
        `,setTimeout(()=>{e.style.opacity="1",e.style.transform="translateX(-50%) translateY(0)"},900))}function q(){document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(n){n.preventDefault();const e=document.querySelector(this.getAttribute("href"));e&&e.scrollIntoView({behavior:"smooth",block:"start"})})})}document.addEventListener("DOMContentLoaded",function(){f(),p(),b(),L(),document.body.style.opacity="0",document.body.style.transition="opacity 0.5s ease",setTimeout(()=>{document.body.style.opacity="1"},100)});
