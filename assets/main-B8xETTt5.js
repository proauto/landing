(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();const b="modulepreload",x=function(t){return"/"+t},m={},y=function(o,e,a){let s=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),r=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));s=Promise.allSettled(e.map(c=>{if(c=x(c),c in m)return;m[c]=!0;const d=c.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const l=document.createElement("link");if(l.rel=d?"stylesheet":b,d||(l.as="script"),l.crossOrigin="",l.href=c,r&&l.setAttribute("nonce",r),document.head.appendChild(l),d)return new Promise((h,v)=>{l.addEventListener("load",h),l.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(n){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=n,window.dispatchEvent(r),!r.defaultPrevented)throw n}return s.then(n=>{for(const r of n||[])r.status==="rejected"&&i(r.reason);return o().catch(i)})};function w(){const o=(window.location.pathname.split("/").pop()||"index.html").replace(".html",""),e=document.querySelectorAll(".nav-item"),a=document.querySelector(".nav-indicator"),s=document.querySelector(".main-header");if(!a||!s)return;function i(){e.forEach(r=>{const c=r.getAttribute("data-page");c===o||o==="index"&&!c?r.classList.add("current-page"):r.classList.remove("current-page")}),n()}function n(r){const c=r||document.querySelector(".nav-item.current-page");if(c&&a){const d=c.getBoundingClientRect(),u=s.getBoundingClientRect(),l=d.left-u.left;a.style.left=`${l}px`,a.style.width=`${d.width}px`,a.classList.add("active")}else c||a.classList.remove("active")}i(),window.addEventListener("resize",()=>n()),e.forEach(r=>{r.addEventListener("mouseenter",function(){n(this)})}),s.addEventListener("mouseleave",function(){n()}),e.forEach(r=>{r.addEventListener("click",function(c){c.preventDefault();const d=this.getAttribute("href");this.classList.add("clicked"),setTimeout(()=>{window.location.href=d},150)})})}function S(){if(!document.querySelector("#animation-keyframes")){const e=document.createElement("style");e.id="animation-keyframes",e.textContent=`
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
        `,document.head.appendChild(e)}const t={threshold:.1,rootMargin:"0px 0px -50px 0px"},o=new IntersectionObserver(function(e){e.forEach(a=>{if(a.isIntersecting){const s=a.target.getAttribute("data-delay")||0;setTimeout(()=>{a.target.classList.add("animated")},s),o.unobserve(a.target)}})},t);k(o)}function k(t){const o=window.location.pathname.split("/").pop()||"index.html";o==="brand.html"?E(t):(o==="index.html"||o==="")&&A(t);const e=document.querySelector(".footer-content");e&&(e.classList.add("animate-fade-in"),e.setAttribute("data-delay","100"),t.observe(e))}function E(t){[{selector:".brand-title",delay:100},{selector:".brand-subtitle",delay:200},{selector:".brand-divider",delay:600},{selector:".brand-question",delay:700},{selector:".work-title",delay:100},{selector:".work-cards-container",delay:200}].forEach(({selector:a,delay:s})=>{const i=document.querySelector(a);i&&(i.classList.add("animate-fade-in"),i.setAttribute("data-delay",s.toString()),t.observe(i))}),document.querySelectorAll(".brand-circle").forEach((a,s)=>{a.classList.add("animate-fade-in"),a.setAttribute("data-delay",(300+s*100).toString()),t.observe(a)})}function A(t){[{selector:".middle-image",delay:100},{selector:".service-main-text",delay:200},{selector:".service-description-text",delay:300}].forEach(({selector:n,delay:r})=>{const c=document.querySelector(n);c&&(c.classList.add("animate-fade-in"),c.setAttribute("data-delay",r.toString()),t.observe(c))}),document.querySelectorAll(".work-card").forEach((n,r)=>{n.classList.add("animate-fade-in-up"),n.setAttribute("data-delay",(100+r*150).toString()),t.observe(n)});const a=document.querySelector(".mission-content");a&&(a.classList.add("animate-fade-in-up"),a.setAttribute("data-delay","100"),t.observe(a)),document.querySelectorAll(".team-member").forEach((n,r)=>{n.classList.add("animate-fade-in-up"),n.setAttribute("data-delay",(100+r*200).toString()),t.observe(n)});const i=document.querySelector(".contact-content");i&&(i.classList.add("animate-fade-in-up"),i.setAttribute("data-delay","100"),t.observe(i))}function P(){const t=document.querySelector(".contact-form");if(!t)return;t.addEventListener("submit",R);const o=t.querySelector(".submit-button");o&&o.addEventListener("click",z)}async function R(t){t.preventDefault();const o=L(this);if(!q(o))return;const e=this.querySelector(".submit-button"),a=e.textContent;g(e,!0);try{await new Promise(s=>setTimeout(s,1e3)),console.log("Form submission:",o),alert("제안이 성공적으로 전송되었습니다!\\n\\n문의사항은 previtlab@gmail.com으로 직접 연락 부탁드립니다."),this.reset()}catch(s){console.error("Form submission error:",s),alert("전송 중 오류가 발생했습니다. 다시 시도해주세요.")}finally{g(e,!1,a)}}function L(t){const o=t.querySelectorAll("input"),e={};return o.forEach(a=>{const s=a.placeholder;s&&(e[s]=a.value.trim())}),{name:e.이름||"",email:e.이메일||"",company:e.회사명||"",phone:e.연락처||"",proposal:e["제안 사항"]||""}}function q(t){return!t.name||!t.email||!t.proposal?(alert("이름, 이메일, 제안 사항은 필수 입력 항목입니다."),!1):/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email)?t.phone&&t.phone.length>0&&!/^[0-9-+\s()]+$/.test(t.phone)?(alert("올바른 연락처 형식을 입력해주세요."),!1):!0:(alert("올바른 이메일 주소를 입력해주세요."),!1)}function g(t,o,e="제안 보내기"){o?(t.textContent="전송 중...",t.disabled=!0):(t.textContent=e,t.disabled=!1)}function z(t){const o=t.currentTarget,e=document.createElement("span"),a=o.getBoundingClientRect(),s=Math.max(a.width,a.height),i=t.clientX-a.left-s/2,n=t.clientY-a.top-s/2;e.style.cssText=`
        width: ${s}px;
        height: ${s}px;
        left: ${i}px;
        top: ${n}px;
        position: absolute;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.1);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    `,o.style.position="relative",o.style.overflow="hidden",o.appendChild(e),setTimeout(()=>{e.remove()},600)}function T(){const t=window.location.pathname.split("/").pop()||"index.html";if(t!=="index.html"&&t!=="")return;const o={logoImage:document.querySelector(".logo-image"),logo:document.querySelector(".logo"),mainCopy:document.querySelector(".main-copy"),subCopy:document.querySelector(".sub-copy")};C(o),I()}function C({logoImage:t,logo:o,mainCopy:e,subCopy:a}){if(t&&(t.style.cssText=`
            opacity: 0;
            transform: translateY(-20px);
            transition: opacity 1s ease, transform 1s ease;
        `,setTimeout(()=>{t.style.opacity="1",t.style.transform="translateY(0)"},200)),o){const s=o.querySelector(".logo-pre"),i=o.querySelector(".logo-vit");s&&(s.style.cssText=`
                opacity: 0;
                transform: translateX(-20px);
                transition: opacity 1s ease, transform 1s ease;
            `,setTimeout(()=>{s.style.opacity="1",s.style.transform="translateX(0)"},400)),i&&(i.style.cssText=`
                opacity: 0;
                transform: translateX(20px);
                transition: opacity 1s ease, transform 1s ease;
            `,setTimeout(()=>{i.style.opacity="1",i.style.transform="translateX(0)"},500))}e&&(e.style.cssText=`
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 1s ease, transform 1s ease;
        `,setTimeout(()=>{e.style.opacity="1",e.style.transform="translateY(0)"},700)),a&&(a.style.cssText=`
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 1s ease, transform 1s ease;
        `,setTimeout(()=>{a.style.opacity="1",a.style.transform="translateY(0)"},900))}function I(){document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(o){o.preventDefault();const e=document.querySelector(this.getAttribute("href"));e&&e.scrollIntoView({behavior:"smooth",block:"start"})})})}function F(){return`
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
                        <div class="form-row">
                            <input type="text" placeholder="이름" class="form-input" required>
                            <input type="email" placeholder="이메일" class="form-input" required>
                        </div>
                        <div class="form-row">
                            <input type="text" placeholder="회사명" class="form-input">
                            <input type="tel" placeholder="연락처" class="form-input">
                        </div>
                        <div class="form-row">
                            <input type="text" placeholder="제안 사항" class="form-input-wide" required>
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
    `}function _(){return`
        <style>
            .product-main-section {
                height: 2600px;
                background: #EDF2FB;
                position: relative;
                padding: 48px 0;
            }
            
            .product-container {
                position: absolute;
                top: 48px;
                left: 50%;
                transform: translateX(-50%);
                width: 1280px;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 48px;
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
                <div class="product-box" id="hyugepick-box">
                    <img src="/assets/service_hyugepick.png" alt="HyugePick Service" class="product-box-bg">
                    <div class="product-content">
                        <div class="product-title">HyugePICK</div>
                        <div class="product-subtitle">휴게픽 : 지금 나에게 딱 맞는 휴게소</div>
                        <div class="product-description">
                            목적지를 설정하면 경로에 있는 휴게소를 한 번에 찾아줍니다.<br>
                            식당 메뉴, 카페 브랜드, 편의시설 등 다양한 정보를 제공해드립니다.<br>
                            휴게픽과 함께 더 즐겁고 편안한 여행 되세요!
                        </div>
                        <div class="product-buttons">
                            <a href="javascript:void(0)" class="product-button">
                                <img src="/assets/product_internet.png" alt="Internet">
                            </a>
                            <a href="javascript:void(0)" class="product-button">
                                <img src="/assets/product_apple.png" alt="Apple">
                            </a>
                            <a href="javascript:void(0)" class="product-button">
                                <img src="/assets/product_google.png" alt="Google">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="product-box" id="rrobot-box">
                    <img src="/assets/service_rrobot.png" alt="RRobot Service" class="product-box-bg">
                    <div class="product-content">
                        <div class="product-title">R-Robot</div>
                        <div class="product-subtitle">알로봇 R-Robot : 성장형 AI로봇 일지</div>
                        <div class="product-description">
                            AI로 할 수 있는 모든 것을 직접 배우며 보여주는 성장형 AI 콘텐츠 채널입니다.<br>
                            영상 만들기, 음악 작곡, 그림 그리기, 코딩, 글쓰기 등 AI 기술을 활용해<br>
                            얼마나 쉽고 재미있게 창작할 수 있는지 하나씩 체험하며 소개할게요.
                        </div>
                        <div class="product-buttons">
                            <a href="javascript:void(0)" class="product-button">
                                <img src="/assets/product_insta.png" alt="Instagram">
                            </a>
                            <a href="https://www.youtube.com/@알로봇R" target="_blank" class="product-button">
                                <img src="/assets/product_youtube.png" alt="YouTube">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="product-box" id="momcheck-box">
                    <img src="/assets/service_momcheck.png" alt="MomCheck Service" class="product-box-bg">
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
                                <img src="/assets/product_internet.png" alt="Internet">
                            </a>
                            <a href="javascript:void(0)" class="product-button">
                                <img src="/assets/product_apple.png" alt="Apple">
                            </a>
                            <a href="javascript:void(0)" class="product-button">
                                <img src="/assets/product_google.png" alt="Google">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `}function B(){return`
        <style>
            .blog-main-section {
                background: #EDF2FB;
                min-height: 100vh;
                padding: 48px 0 80px 0;
            }
            
            .blog-container {
                max-width: 1280px;
                margin: 0 auto;
                padding: 0 20px;
            }
            
            .blog-header {
                text-align: center;
                margin-bottom: 60px;
            }
            
            .blog-title {
                font-family: 'Montserrat', sans-serif;
                font-weight: 700;
                font-size: 48px;
                color: #0D0E78;
                margin-bottom: 16px;
            }
            
            .blog-subtitle {
                font-family: 'Noto Sans KR', sans-serif;
                font-weight: 400;
                font-size: 18px;
                color: #666;
                margin-bottom: 40px;
            }
            
            .blog-search-container {
                max-width: 600px;
                margin: 0 auto 40px auto;
                position: relative;
            }
            
            .blog-search {
                width: 100%;
                padding: 16px 50px 16px 20px;
                border: 2px solid #E5E5E5;
                border-radius: 30px;
                font-size: 16px;
                font-family: 'Noto Sans KR', sans-serif;
                outline: none;
                transition: border-color 0.3s ease;
                background: white;
            }
            
            .blog-search:focus {
                border-color: #0D0E78;
            }
            
            .search-icon {
                position: absolute;
                right: 20px;
                top: 50%;
                transform: translateY(-50%);
                color: #999;
                font-size: 20px;
            }
            
            .blog-categories {
                display: flex;
                justify-content: center;
                gap: 16px;
                margin-bottom: 50px;
                flex-wrap: wrap;
            }
            
            .category-btn {
                padding: 12px 24px;
                border: 2px solid #E5E5E5;
                border-radius: 25px;
                background: white;
                color: #666;
                font-family: 'Noto Sans KR', sans-serif;
                font-weight: 500;
                font-size: 14px;
                cursor: pointer;
                transition: all 0.3s ease;
                text-decoration: none;
            }
            
            .category-btn:hover,
            .category-btn.active {
                background: #0D0E78;
                color: white;
                border-color: #0D0E78;
            }
            
            .blog-posts {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                gap: 30px;
                margin-bottom: 60px;
            }
            
            .blog-post {
                background: white;
                border-radius: 20px;
                overflow: hidden;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                cursor: pointer;
                text-decoration: none;
                color: inherit;
            }
            
            .blog-post:hover {
                transform: translateY(-5px);
                box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
            }
            
            .post-image {
                width: 100%;
                height: 220px;
                object-fit: cover;
                background: #f0f0f0;
            }
            
            .post-content {
                padding: 24px;
            }
            
            .post-category {
                display: inline-block;
                padding: 6px 12px;
                background: #EDF2FB;
                color: #0D0E78;
                border-radius: 12px;
                font-size: 12px;
                font-weight: 500;
                margin-bottom: 12px;
            }
            
            .post-title {
                font-family: 'Noto Sans KR', sans-serif;
                font-weight: 700;
                font-size: 20px;
                color: #333;
                margin-bottom: 12px;
                line-height: 1.4;
            }
            
            .post-excerpt {
                font-family: 'Noto Sans KR', sans-serif;
                font-weight: 400;
                font-size: 14px;
                color: #666;
                line-height: 1.6;
                margin-bottom: 16px;
            }
            
            .post-meta {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 12px;
                color: #999;
            }
            
            .post-date {
                font-family: 'Noto Sans KR', sans-serif;
            }
            
            .post-read-time {
                font-family: 'Noto Sans KR', sans-serif;
            }
            
            .load-more {
                text-align: center;
            }
            
            .load-more-btn {
                padding: 16px 40px;
                background: white;
                border: 2px solid #0D0E78;
                border-radius: 30px;
                color: #0D0E78;
                font-family: 'Noto Sans KR', sans-serif;
                font-weight: 600;
                font-size: 16px;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .load-more-btn:hover {
                background: #0D0E78;
                color: white;
            }
            
            /* Mobile Responsive */
            @media (max-width: 768px) {
                .blog-main-section {
                    padding: 20px 0 60px 0;
                }
                
                .blog-container {
                    padding: 0 15px;
                }
                
                .blog-title {
                    font-size: 36px;
                }
                
                .blog-subtitle {
                    font-size: 16px;
                }
                
                .blog-posts {
                    grid-template-columns: 1fr;
                    gap: 20px;
                }
                
                .blog-categories {
                    gap: 12px;
                }
                
                .category-btn {
                    padding: 10px 20px;
                    font-size: 13px;
                }
            }
            
            @media (max-width: 480px) {
                .blog-title {
                    font-size: 28px;
                }
                
                .blog-subtitle {
                    font-size: 14px;
                }
                
                .post-content {
                    padding: 20px;
                }
                
                .post-title {
                    font-size: 18px;
                }
            }
        </style>

        <!-- Blog Main Section -->
        <section class="blog-main-section">
            <div class="blog-container">
                <!-- Blog Header -->
                <div class="blog-header">
                    <h1 class="blog-title">BLOG</h1>
                    <p class="blog-subtitle">일상을 더 편리하게 만드는 정보와 팁을 공유합니다</p>
                    
                    <!-- Search -->
                    <div class="blog-search-container">
                        <input type="text" class="blog-search" placeholder="궁금한 내용을 검색해보세요..." id="blogSearch">
                        <span class="search-icon">🔍</span>
                    </div>
                    
                    <!-- Categories -->
                    <div class="blog-categories">
                        <button class="category-btn active" data-category="all">전체</button>
                        <button class="category-btn" data-category="driving">운전 & 여행</button>
                        <button class="category-btn" data-category="pregnancy">임신 & 출산</button>
                        <button class="category-btn" data-category="tips">생활 팁</button>
                    </div>
                </div>
                
                <!-- Blog Posts -->
                <div class="blog-posts" id="blogPosts">
                    <!-- Sample Posts -->
                    <a href="javascript:void(0)" class="blog-post" data-category="driving" onclick="alert('블로그 상세 페이지는 SPA 라우팅으로 구현 예정입니다.')">
                        <img src="/assets/service_hyugepick.png" alt="휴게소 가이드" class="post-image">
                        <div class="post-content">
                            <span class="post-category">운전 & 여행</span>
                            <h3 class="post-title">장거리 운전 시 꼭 알아야 할 휴게소 활용법</h3>
                            <p class="post-excerpt">고속도로 휴게소를 효율적으로 활용하는 방법과 숨겨진 편의시설들을 소개합니다. 안전하고 즐거운 여행을 위한 필수 가이드입니다.</p>
                            <div class="post-meta">
                                <span class="post-date">2024.01.15</span>
                                <span class="post-read-time">5분 소요</span>
                            </div>
                        </div>
                    </a>
                    
                    <a href="javascript:void(0)" class="blog-post" data-category="pregnancy" onclick="alert('블로그 상세 페이지는 SPA 라우팅으로 구현 예정입니다.')">
                        <img src="/assets/service_momcheck.png" alt="임신 체중 관리" class="post-image">
                        <div class="post-content">
                            <span class="post-category">임신 & 출산</span>
                            <h3 class="post-title">임신 중 건강한 체중 관리를 위한 실전 가이드</h3>
                            <p class="post-excerpt">임신 시기별 적정 체중 증가량과 건강한 식단 관리법을 알아보세요. 엄마와 아기 모두 건강한 임신을 위한 체중 관리 팁입니다.</p>
                            <div class="post-meta">
                                <span class="post-date">2024.01.12</span>
                                <span class="post-read-time">7분 소요</span>
                            </div>
                        </div>
                    </a>
                    
                    <a href="javascript:void(0)" class="blog-post" data-category="driving" onclick="alert('블로그 상세 페이지는 SPA 라우팅으로 구현 예정입니다.')">
                        <img src="/assets/중간이미지.png" alt="안전 운전" class="post-image">
                        <div class="post-content">
                            <span class="post-category">운전 & 여행</span>
                            <h3 class="post-title">겨울철 안전 운전을 위한 5가지 필수 체크리스트</h3>
                            <p class="post-excerpt">추운 겨울, 안전한 운전을 위해 미리 준비해야 할 것들과 위험 상황 대처법을 정리했습니다.</p>
                            <div class="post-meta">
                                <span class="post-date">2024.01.08</span>
                                <span class="post-read-time">4분 소요</span>
                            </div>
                        </div>
                    </a>
                    
                    <a href="javascript:void(0)" class="blog-post" data-category="pregnancy" onclick="alert('블로그 상세 페이지는 SPA 라우팅으로 구현 예정입니다.')">
                        <img src="/assets/민아.png" alt="임신 영양" class="post-image">
                        <div class="post-content">
                            <span class="post-category">임신 & 출산</span>
                            <h3 class="post-title">임신 초기 꼭 필요한 영양소와 추천 음식</h3>
                            <p class="post-excerpt">임신 초기 태아 발달에 중요한 영양소들과 이를 충분히 섭취할 수 있는 음식들을 소개합니다.</p>
                            <div class="post-meta">
                                <span class="post-date">2024.01.05</span>
                                <span class="post-read-time">6분 소요</span>
                            </div>
                        </div>
                    </a>
                    
                    <a href="javascript:void(0)" class="blog-post" data-category="tips" onclick="alert('블로그 상세 페이지는 SPA 라우팅으로 구현 예정입니다.')">
                        <img src="/assets/접근성.png" alt="기술 팁" class="post-image">
                        <div class="post-content">
                            <span class="post-category">생활 팁</span>
                            <h3 class="post-title">일상을 편리하게 만드는 스마트 기술 활용법</h3>
                            <p class="post-excerpt">AI와 앱을 활용해 일상의 작은 불편함을 해결하는 방법들을 소개합니다. 기술이 어렵다고 느끼는 분들도 쉽게 따라할 수 있어요.</p>
                            <div class="post-meta">
                                <span class="post-date">2024.01.02</span>
                                <span class="post-read-time">5분 소요</span>
                            </div>
                        </div>
                    </a>
                    
                    <a href="javascript:void(0)" class="blog-post" data-category="driving" onclick="alert('블로그 상세 페이지는 SPA 라우팅으로 구현 예정입니다.')">
                        <img src="/assets/빠른실행.png" alt="휴게소 맛집" class="post-image">
                        <div class="post-content">
                            <span class="post-category">운전 & 여행</span>
                            <h3 class="post-title">전국 휴게소 숨은 맛집 BEST 10</h3>
                            <p class="post-excerpt">고속도로 이용할 때 꼭 들러야 할 휴게소 맛집들을 엄선했습니다. 지역별 특색 메뉴와 추천 이유를 자세히 알려드려요.</p>
                            <div class="post-meta">
                                <span class="post-date">2023.12.28</span>
                                <span class="post-read-time">8분 소요</span>
                            </div>
                        </div>
                    </a>
                </div>
                
                <!-- Load More -->
                <div class="load-more">
                    <button class="load-more-btn" id="loadMoreBtn">더 많은 글 보기</button>
                </div>
            </div>
        </section>
    `}let p;document.addEventListener("DOMContentLoaded",function(){console.log("DOM loaded, initializing SPA"),y(async()=>{const{default:t}=await import("./router-1Kjc5E-Z.js");return{default:t}},[]).then(({default:t})=>{p=new t,p.addRoute("/",F),p.addRoute("/brand",D),p.addRoute("/product",_),p.addRoute("/blog",B),console.log("Routes registered:",Array.from(p.routes.keys())),p.init(),window.router=p}),w(),S(),P(),T(),document.body.style.opacity="0",document.body.style.transition="opacity 0.5s ease",setTimeout(()=>{document.body.style.opacity="1"},100),console.log("PreVIT SPA loaded successfully")});const f=sessionStorage.getItem("spa-path");f&&(sessionStorage.removeItem("spa-path"),setTimeout(()=>{window.router&&window.router.navigate(f)},100));
