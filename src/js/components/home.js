// Home page component
export function HomeComponent() {
    return `
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
    `;
}