// Brand page component
export function BrandComponent() {
    return `
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
    `;
}