(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=o(i);fetch(i.href,s)}})();const w="modulepreload",S=function(e,t){return new URL(e,t).href},y={},k=function(t,o,n){let i=Promise.resolve();if(o&&o.length>0){let f=function(l){return Promise.all(l.map(d=>Promise.resolve(d).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const a=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),c=r?.nonce||r?.getAttribute("nonce");i=f(o.map(l=>{if(l=S(l,n),l in y)return;y[l]=!0;const d=l.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(!!n)for(let v=a.length-1;v>=0;v--){const g=a[v];if(g.href===l&&(!d||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${h}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":w,d||(p.as="script"),p.crossOrigin="",p.href=l,c&&p.setAttribute("nonce",c),document.head.appendChild(p),d)return new Promise((v,g)=>{p.addEventListener("load",v),p.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=a,window.dispatchEvent(r),!r.defaultPrevented)throw a}return i.then(a=>{for(const r of a||[])r.status==="rejected"&&s(r.reason);return t().catch(s)})};function E(){const t=(window.location.pathname.split("/").pop()||"index.html").replace(".html",""),o=document.querySelectorAll(".nav-item"),n=document.querySelector(".nav-indicator"),i=document.querySelector(".main-header");if(!n||!i)return;function s(){o.forEach(r=>{const c=r.getAttribute("data-page");c===t||t==="index"&&!c?r.classList.add("current-page"):r.classList.remove("current-page")}),a()}function a(r){const c=r||document.querySelector(".nav-item.current-page");if(c&&n){const f=c.getBoundingClientRect(),l=i.getBoundingClientRect(),d=f.left-l.left;n.style.left=`${d}px`,n.style.width=`${f.width}px`,n.classList.add("active")}else c||n.classList.remove("active")}s(),window.addEventListener("resize",()=>a()),o.forEach(r=>{r.addEventListener("mouseenter",function(){a(this)})}),i.addEventListener("mouseleave",function(){a()}),o.forEach(r=>{r.hasAttribute("data-path")||r.addEventListener("click",function(c){c.preventDefault();const f=this.getAttribute("href");this.classList.add("clicked"),setTimeout(()=>{window.location.href=f},150)})})}function L(){if(!document.querySelector("#animation-keyframes")){const o=document.createElement("style");o.id="animation-keyframes",o.textContent=`
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
        `,document.head.appendChild(o)}const e={threshold:.1,rootMargin:"0px 0px -50px 0px"},t=new IntersectionObserver(function(o){o.forEach(n=>{if(n.isIntersecting){const i=n.target.getAttribute("data-delay")||0;setTimeout(()=>{n.target.classList.add("animated")},i),t.unobserve(n.target)}})},e);A(t)}function A(e){const t=window.location.pathname.split("/").pop()||"index.html";t==="brand.html"?q(e):(t==="index.html"||t==="")&&T(e);const o=document.querySelector(".footer-content");o&&(o.classList.add("animate-fade-in"),o.setAttribute("data-delay","100"),e.observe(o))}function q(e){[{selector:".brand-title",delay:100},{selector:".brand-subtitle",delay:200},{selector:".brand-divider",delay:600},{selector:".brand-question",delay:700},{selector:".work-title",delay:100},{selector:".work-cards-container",delay:200}].forEach(({selector:n,delay:i})=>{const s=document.querySelector(n);s&&(s.classList.add("animate-fade-in"),s.setAttribute("data-delay",i.toString()),e.observe(s))}),document.querySelectorAll(".brand-circle").forEach((n,i)=>{n.classList.add("animate-fade-in"),n.setAttribute("data-delay",(300+i*100).toString()),e.observe(n)})}function T(e){[{selector:".middle-image",delay:100},{selector:".service-main-text",delay:200},{selector:".service-description-text",delay:300}].forEach(({selector:a,delay:r})=>{const c=document.querySelector(a);c&&(c.classList.add("animate-fade-in"),c.setAttribute("data-delay",r.toString()),e.observe(c))}),document.querySelectorAll(".work-card").forEach((a,r)=>{a.classList.add("animate-fade-in-up"),a.setAttribute("data-delay",(100+r*150).toString()),e.observe(a)});const n=document.querySelector(".mission-content");n&&(n.classList.add("animate-fade-in-up"),n.setAttribute("data-delay","100"),e.observe(n)),document.querySelectorAll(".team-member").forEach((a,r)=>{a.classList.add("animate-fade-in-up"),a.setAttribute("data-delay",(100+r*200).toString()),e.observe(a)});const s=document.querySelector(".contact-content");s&&(s.classList.add("animate-fade-in-up"),s.setAttribute("data-delay","100"),e.observe(s))}class m{static show(t,o="success",n=5e3){const i=document.querySelector(".toast");i&&i.remove();const s=document.createElement("div");s.className=`toast toast-${o}`;const a={success:"✅",error:"❌",warning:"⚠️",info:"ℹ️"};return s.innerHTML=`
            <div class="toast-content">
                <div class="toast-icon">${a[o]||a.success}</div>
                <div class="toast-message">${t}</div>
                <button class="toast-close" onclick="this.parentElement.parentElement.remove()">✕</button>
            </div>
        `,this.applyStyles(s),document.body.appendChild(s),setTimeout(()=>s.classList.add("toast-show"),10),setTimeout(()=>{s.parentElement&&(s.classList.add("toast-hide"),setTimeout(()=>s.remove(),300))},n),s}static applyStyles(t){Object.assign(t.style,{position:"fixed",top:"20px",right:"20px",zIndex:"10000",minWidth:"320px",maxWidth:"500px",backgroundColor:"#fff",borderRadius:"12px",boxShadow:"0 10px 30px rgba(0, 0, 0, 0.2)",transform:"translateX(100%)",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",fontFamily:'"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',fontSize:"14px",border:"1px solid #e1e5e9"});const o=t.querySelector(".toast-content");Object.assign(o.style,{display:"flex",alignItems:"flex-start",padding:"16px",gap:"12px"});const n=t.querySelector(".toast-icon");Object.assign(n.style,{fontSize:"20px",flexShrink:"0",marginTop:"2px"});const i=t.querySelector(".toast-message");Object.assign(i.style,{flex:"1",lineHeight:"1.5",color:"#333",wordBreak:"keep-all"});const s=t.querySelector(".toast-close");Object.assign(s.style,{background:"none",border:"none",fontSize:"18px",color:"#999",cursor:"pointer",padding:"0",width:"24px",height:"24px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",transition:"all 0.2s ease"}),t.classList.contains("toast-success")?(t.style.borderLeft="4px solid #28a745",n.style.color="#28a745"):t.classList.contains("toast-error")&&(t.style.borderLeft="4px solid #dc3545",n.style.color="#dc3545"),s.addEventListener("mouseenter",()=>{s.style.backgroundColor="#f0f0f0",s.style.color="#333"}),s.addEventListener("mouseleave",()=>{s.style.backgroundColor="transparent",s.style.color="#999"})}static success(t,o){return this.show(t,"success",o)}static error(t,o){return this.show(t,"error",o)}}const x=document.createElement("style");x.textContent=`
    .toast-show {
        transform: translateX(0) !important;
    }
    
    .toast-hide {
        transform: translateX(100%) !important;
        opacity: 0 !important;
    }
    
    @media (max-width: 768px) {
        .toast {
            left: 20px !important;
            right: 20px !important;
            min-width: auto !important;
            max-width: none !important;
        }
    }
`;document.head.querySelector("style[data-toast-styles]")||(x.setAttribute("data-toast-styles","true"),document.head.appendChild(x));const C=["바보","멍청이","씨발","개새끼","존나"];function P(){const e=document.querySelector(".contact-form");if(!e)return;e.addEventListener("submit",O);const t=e.querySelector(".submit-button");t&&t.addEventListener("click",I)}async function O(e){e.preventDefault();const t=R(this);if(t.website){console.warn("Bot detected via honeypot field.");return}if(!z(t))return;const o=this.querySelector(".submit-button"),n=o.textContent;b(o,!0);try{const i=await fetch("https://formspree.io/f/xvzqqkao",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:t.name,email:t.email,company:t.company,phone:t.phone,proposal:t.proposal})});if(i.ok)m.success(`제안이 성공적으로 전달되었습니다.

추가 문의사항은 previtlab@gmail.com으로 연락 부탁드립니다.`,7e3),this.reset();else{const s=await i.json();m.error(s.error||"전송 중 오류가 발생했습니다.")}}catch(i){console.error("Form submission error:",i),m.error("전송 중 오류가 발생했습니다. 다시 시도해주세요.")}finally{b(o,!1,n)}}function R(e){const t=e.querySelectorAll("input, textarea"),o={};return t.forEach(n=>{const i=n.getAttribute("name"),s=n.placeholder;i==="website"?o.website=n.value:s&&(o[s]=n.value.trim())}),{website:o.website||"",name:o.이름||"",email:o.이메일||"",company:o.회사명||"",phone:o.연락처||"",proposal:o["제안 사항"]||""}}function z(e){if(!e.name||!e.email||!e.proposal)return m.error("이름, 이메일, 제안 사항은 필수 항목입니다."),!1;const t=`${e.name} ${e.company} ${e.proposal}`.toLowerCase();return C.some(i=>t.includes(i))?(m.error("부적절한 표현이 포함되어 있어 전송할 수 없습니다."),!1):/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e.email)?e.phone&&!/^[0-9-]{9,13}$/.test(e.phone.replace(/\s/g,""))?(m.error("올바른 연락처 형식을 입력해주세요. (숫자와 - 사용)"),!1):!0:(m.error("올바른 이메일 형식이 아닙니다."),!1)}function b(e,t,o="제안 보내기"){t?(e.textContent="전송 중...",e.disabled=!0):e.textContent=o}function I(e){const t=e.currentTarget,o=document.createElement("span"),n=t.getBoundingClientRect(),i=Math.max(n.width,n.height),s=e.clientX-n.left-i/2,a=e.clientY-n.top-i/2;o.style.cssText=`
        width: ${i}px;
        height: ${i}px;
        left: ${s}px;
        top: ${a}px;
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    `,t.style.position="relative",t.style.overflow="hidden",t.appendChild(o),setTimeout(()=>{o.remove()},600)}function F(){const e=window.location.pathname.split("/").pop()||"index.html";if(e!=="index.html"&&e!=="")return;const t={logoImage:document.querySelector(".logo-image"),logo:document.querySelector(".logo"),mainCopy:document.querySelector(".main-copy"),subCopy:document.querySelector(".sub-copy")};M(t),$()}function M({logoImage:e,logo:t,mainCopy:o,subCopy:n}){if(e&&(e.style.cssText=`
            opacity: 0;
            transform: translateY(-20px);
            transition: opacity 1s ease, transform 1s ease;
        `,setTimeout(()=>{e.style.opacity="1",e.style.transform="translateY(0)"},200)),t){const i=t.querySelector(".logo-pre"),s=t.querySelector(".logo-vit");i&&(i.style.cssText=`
                opacity: 0;
                transform: translateX(-20px);
                transition: opacity 1s ease, transform 1s ease;
            `,setTimeout(()=>{i.style.opacity="1",i.style.transform="translateX(0)"},400)),s&&(s.style.cssText=`
                opacity: 0;
                transform: translateX(20px);
                transition: opacity 1s ease, transform 1s ease;
            `,setTimeout(()=>{s.style.opacity="1",s.style.transform="translateX(0)"},500))}o&&(o.style.cssText=`
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 1s ease, transform 1s ease;
        `,setTimeout(()=>{o.style.opacity="1",o.style.transform="translateY(0)"},700)),n&&(n.style.cssText=`
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 1s ease, transform 1s ease;
        `,setTimeout(()=>{n.style.opacity="1",n.style.transform="translateY(0)"},900))}function $(){document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const o=document.querySelector(this.getAttribute("href"));o&&o.scrollIntoView({behavior:"smooth",block:"start"})})})}function B(){return`
        <!-- Hero Section -->
        <section id="hero" class="hero-section">
            <video class="hero-video" autoplay muted loop playsinline>
                <source src="/assets/히어로영상.mp4" type="video/mp4">
            </video>
            <div class="hero-overlay"></div>
            <div class="hero-content">
                <img src="/assets/로고.png" alt="PreVIT 로고" class="logo-image">
                <div class="logo">
                    <span class="logo-pre">Pre</span><span class="logo-vit">VIT</span>
                </div>
                <h1 class="main-copy">아이디어로만 끝났던 일, 프레빗이 서비스로 만듭니다.</h1>
                <p class="sub-copy">작고 사소하지만 꼭 필요했던 생각을 우리는 AI로 빠르게 구현합니다.</p>
            </div>
        </section>

        <!-- Service Introduction Section -->
        <section id="service-intro" class="service-intro-section">
            <img src="/assets/중간이미지.png" alt="중간 이미지" class="middle-image">
            <h2 class="service-main-text">작지만 <span class="highlight-blue">분명한 필요</span>를 기술로 해결하는 팀입니다.</h2>
            <div class="service-description-text">
                <p>당신이 한 번쯤 생각했지만 <span class="bold-text">잊고 지나간 불편함,</span></p>
                <p>우리는 그런 것들을 직접 만들고 실험합니다.</p>
            </div>
        </section>

        <!-- How We Work Section -->
        <section id="how-we-work" class="how-we-work-section">
            <div class="container">
                <h2 class="section-title">HOW WE WORK</h2>
                <div class="work-cards">
                    <div class="work-card work-card-gray">
                        <div class="card-icon">
                            <img src="/assets/생활밀착형.png" alt="생활밀착형">
                        </div>
                        <h3>생활 밀착형</h3>
                        <p>일상에서 느끼는<br>문제 해결</p>
                    </div>
                    <div class="work-card work-card-blue">
                        <div class="card-icon">
                            <img src="/assets/빠른실행.png" alt="빠른실행">
                        </div>
                        <h3>빠른 실행</h3>
                        <p>아이디어에서<br>결과까지 한번에</p>
                    </div>
                    <div class="work-card work-card-dark">
                        <div class="card-icon">
                            <img src="/assets/접근성.png" alt="접근성">
                        </div>
                        <h3>접근성</h3>
                        <p>누구나 쉽게<br>쓸 수 있는 도구</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Mission Section -->
        <section id="mission" class="mission-section">
            <div class="container">
                <div class="mission-content">
                    <h2>우리는 '기술이 멋져야 한다'고 생각하지 않습니다.</h2>
                    <p class="mission-sub">멋진 건, 기술을 몰라도 그걸 쓸 수 있게 만드는 일입니다.</p>
                    <div class="mission-divider"></div>
                    <p class="mission-additional">AI가 당연하게 여겨지는 세상, 그 시작은 아주 사소한 서비스일지도 모릅니다.</p>
                </div>
            </div>
        </section>

        <!-- Team Section -->
        <section id="team" class="team-section">
            <div class="container">
                <h2 class="section-title">WHO WE ARE</h2>
                <div class="team-members">                
                    <div class="team-member">
                        <div class="member-photo">
                            <img src="/assets/민아.png" alt="서민아 CEO">
                        </div>
                        <h3>MINA <span class="role-highlight">CEO</span></h3>
                        <div class="role-tags">                        
                            <span class="role-tag">디자인</span>
                            <span class="role-tag">마케팅</span>
                            <span class="role-tag">기획</span>
                        </div>
                    </div>
                    <div class="team-member">
                        <div class="member-photo">
                            <img src="/assets/홍규.png" alt="이홍규 CTO">
                        </div>
                        <h3>HARRY <span class="role-highlight">CTO</span></h3>
                        <div class="role-tags">
                            <span class="role-tag">개발</span>
                            <span class="role-tag">비지니스</span>
                            <span class="role-tag">기획</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer/Contact Section -->
        <section id="contact" class="contact-section">
            <div class="container">
                <div class="contact-content">
                    <img src="/assets/연락처로고.png" alt="연락처 로고" class="contact-logo">
                    <h2>우리와 함께 만들고 싶은 것이 있으신가요?</h2>
                    <p>PreVIT LAB은 항상 새로운 제안을 기다립니다.</p>
                    <form class="contact-form">
                        <!-- Honeypot field for spam protection -->
                        <div style="display:none !important;">
                            <input type="text" name="website" tabindex="-1" autocomplete="off">
                        </div>
                        <div class="form-row">
                            <input type="text" placeholder="이름" class="form-input" required>
                            <input type="email" placeholder="이메일" class="form-input" required>
                        </div>
                        <div class="form-row">
                            <input type="text" placeholder="회사명" class="form-input">
                            <input type="tel" placeholder="연락처" class="form-input">
                        </div>
                        <div class="form-row">
                            <textarea placeholder="제안 사항" class="form-input-wide" rows="4" required></textarea>
                        </div>
                        <button type="submit" class="submit-button">제안 보내기</button>
                    </form>
                </div>
            </div>
        </section>
    `}function D(){return`
        <!-- First Section -->
        <section class="brand-first-section">
            <h1 class="brand-title">PreVIT LAB</h1>
            <p class="brand-subtitle">Prepare Your Vision with IT</p>
            
            <div class="brand-circles">
                <div class="brand-circle">
                    <span><span class="highlight">Pre</span>Pare</span>
                </div>
                <div class="brand-circle">
                    <span><span class="highlight">Vi</span>sion</span>
                </div>
                <div class="brand-circle">
                    <span class="highlight">IT</span>
                </div>
            </div>
            
            <div class="brand-divider"></div>
            
            <div class="brand-question">당신은 어떤 미래를 준비하고 있나요?</div>
            <div class="brand-answer">프레빗랩은 기술을 통해 비전을 구체화합니다.</div>
        </section>

        <!-- Second Section -->
        <section class="brand-second-section">
            <h2 class="work-title">우리가 일하는 방식</h2>
            
            <div class="work-cards-container">
                <div class="work-box">
                    <div class="work-box-title">빠른 실행</div>
                    <div class="work-box-text">좋은 아이디어는 많지만, 직접 해보는 용기는 드뭅니다.</div>
                    <div class="work-box-text">작더라도 직접 실험해보는 것을 가장 중요하게 생각합니다.</div>
                </div>
                
                <div class="work-box">
                    <div class="work-box-title">명확한 목적</div>
                    <div class="work-box-text">기술은 수단일 뿐입니다.</div>
                    <div class="work-box-text">우리가 왜 이것을 하는지, 무엇을 바꾸고 싶은지를 먼저 정의합니다.</div>
                </div>
                
                <div class="work-box">
                    <div class="work-box-title">효율 극대화</div>
                    <div class="work-box-text">복잡함은 줄이고, 간단하고 명확하게 일합니다.</div>
                    <div class="work-box-text">불필요한 절차보다는 결과를 만드는 데 집중합니다.</div>
                </div>
            </div>
        </section>
    `}function N(){return`
        <style>
            .product-main-section {
                height: auto;
                background: #EDF2FB;
                position: relative;
                padding: 48px 0 80px 0;
            }
            
            .product-container {
                width: 1280px;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 48px;
                margin: 0 auto;
                position: relative;
            }
            
            .product-box {
                width: 850px;
                height: 617px;
                background: #FFFFFF;
                border-radius: 24px;
                position: relative;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }
            
            .product-box-bg {
                width: 100%;
                height: auto;
                object-fit: contain;
                object-position: top;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 1;
            }
            
            .product-content {
                position: relative;
                z-index: 2;
                width: 100%;
                height: 100%;
            }
            
            .product-title {
                position: absolute;
                top: 231px;
                left: 50%;
                transform: translateX(-50%);
                font-family: 'Montserrat', sans-serif;
                font-weight: 700;
                font-size: 27px;
                color: #0D0E78;
                text-align: center;
                white-space: nowrap;
            }
            
            .product-subtitle {
                position: absolute;
                top: 292px;
                left: 50%;
                transform: translateX(-50%);
                font-family: 'Noto Sans KR', sans-serif;
                font-weight: 500;
                font-size: 24px;
                color: #000000;
                text-align: center;
                white-space: nowrap;
            }
            
            .product-description {
                position: absolute;
                top: 357px;
                left: 50%;
                transform: translateX(-50%);
                font-family: 'Noto Sans KR', sans-serif;
                font-weight: 400;
                font-size: 17px;
                color: #000000;
                text-align: center;
                line-height: 1.5;
                width: 90%;
            }
            
            .product-buttons {
                position: absolute;
                top: 466px;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                gap: 27px;
                align-items: center;
            }
            
            .product-button {
                width: 58px;
                height: 58px;
                border-radius: 50%;
                background: #FFFFFF;
                border: 2px solid #E5E5E5;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.3s ease;
                text-decoration: none;
            }
            
            .product-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
                border-color: #0D0E78;
            }
            
            .product-button img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 50%;
            }
            
            /* Mobile Responsive */
            @media (max-width: 1024px) {
                .product-main-section {
                    height: auto;
                    min-height: 100vh;
                    padding: 48px 0 60px 0;
                }
                
                .product-container {
                    width: 90%;
                    max-width: 800px;
                    padding: 20px;
                    position: relative;
                    top: auto;
                    left: auto;
                    transform: none;
                    margin: 0 auto;
                }
                
                .product-box {
                    width: 100%;
                    height: auto;
                    min-height: 500px;
                }
                
                .product-title {
                    top: 200px;
                    font-size: 24px;
                }
                
                .product-subtitle {
                    top: 250px;
                    font-size: 20px;
                }
                
                .product-description {
                    top: 300px;
                    font-size: 14px;
                    padding: 0 20px;
                }
                
                .product-buttons {
                    top: 420px;
                    gap: 20px;
                }
                
                .product-button {
                    width: 50px;
                    height: 50px;
                }
            }
            
            @media (max-width: 768px) {
                .product-main-section {
                    height: auto;
                    min-height: 100vh;
                    padding: 20px 0 60px 0;
                }
                
                .product-container {
                    width: 95%;
                    gap: 30px;
                    position: relative;
                    top: auto;
                    left: auto;
                    transform: none;
                    margin: 0 auto;
                }
                
                .product-box {
                    min-height: 400px;
                    margin: 0 auto;
                }
                
                .product-title {
                    top: 150px;
                    font-size: 20px;
                }
                
                .product-subtitle {
                    top: 185px;
                    font-size: 16px;
                    white-space: normal;
                    padding: 0 15px;
                }
                
                .product-description {
                    top: 230px;
                    font-size: 12px;
                    padding: 0 15px;
                    line-height: 1.4;
                }
                
                .product-buttons {
                    top: 320px;
                    gap: 15px;
                }
                
                .product-button {
                    width: 40px;
                    height: 40px;
                }
            }
            
            @media (max-width: 480px) {
                .product-container {
                    width: 100%;
                    padding: 10px;
                    gap: 20px;
                    position: relative;
                    top: auto;
                    left: auto;
                    transform: none;
                    margin: 0 auto;
                }
                
                .product-box {
                    min-height: 350px;
                }
                
                .product-title {
                    top: 120px;
                    font-size: 18px;
                }
                
                .product-subtitle {
                    top: 150px;
                    font-size: 14px;
                    padding: 0 10px;
                }
                
                .product-description {
                    top: 190px;
                    font-size: 11px;
                    padding: 0 10px;
                }
                
                .product-buttons {
                    top: 280px;
                    gap: 12px;
                }
                
                .product-button {
                    width: 35px;
                    height: 35px;
                }
            }
        </style>

        <!-- Product Section -->
        <section class="product-main-section">
            <div class="product-container">
                
                <div class="product-box" id="modncal-box">
                    <img src="/assets/service_modncal.png" alt="MODN Cal Service" class="product-box-bg" onerror="this.onerror=null; this.src='/assets/service_rrobot.png';">
                    <div class="product-content">
                        <div class="product-title">MODN 모든 계산기</div>
                        <div class="product-subtitle">[세상의 모든 계산, MODN 올인원 계산기]</div>
                        <div class="product-description">
                            MODN 계산기는 단순한 계산 기능을 넘어,<br>
                            실생활, 금융, 운동, 교육, 기술 분야까지 다양한 계산을 손쉽게 해결할 수 있는<br>
                            올인원 통합 계산기 앱 입니다.
                            </div>
                        <div class="product-buttons">
                            <a href="https://play.google.com/store/apps/details?id=com.modncalculator.app&hl=ko" class="product-button">
                                <img src="/assets/product_google.png" alt="Google" onerror="this.onerror=null; this.src='/assets/service_rrobot.png';">
                            </a>
                        </div>
                    </div>
                </div>

                <div class="product-box" id="momcheck-box">
                    <img src="/assets/service_momcheck.png" alt="MomCheck Service" class="product-box-bg" onerror="this.onerror=null; this.src='/assets/service_rrobot.png';">
                    <div class="product-content">
                        <div class="product-title">MomCheck</div>
                        <div class="product-subtitle">임신 체중 증가 계산기 : 맘체크 MomCheck</div>
                        <div class="product-description">
                            임신 중 체중 변화를 한눈에 확인할 수 있는 건강 관리 서비스입니다.<br>
                            주차별 권장 체중과 현재 상태를 비교하고, 태아·양수·태반 등 증가된 체중의 분포도를 볼 수 있어요.<br>
                            데이터와 시각화를 통해 임신 기간의 변화를 더욱 이해하기 쉽게 알려드릴게요.
                        </div>
                        <div class="product-buttons">
                            <a href="https://www.momcheck.kr/" target="_blank" class="product-button">
                                <img src="/assets/product_internet.png" alt="Internet" onerror="this.onerror=null; this.src='/assets/service_rrobot.png';">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `}let u;document.addEventListener("DOMContentLoaded",function(){console.log("DOM loaded, initializing SPA"),k(async()=>{const{default:e}=await import("./router-Dvy3MloR.js");return{default:e}},[],import.meta.url).then(({default:e})=>{u=new e,u.addRoute("/",B),u.addRoute("/brand",D),u.addRoute("/product",N),console.log("Routes registered:",Array.from(u.routes.keys())),u.init(),window.router=u}),E(),L(),P(),F(),document.body.style.opacity="0",document.body.style.transition="opacity 0.5s ease",setTimeout(()=>{document.body.style.opacity="1"},100),console.log("PreVIT SPA loaded successfully")});
