// Product page component  
export function ProductComponent() {
    return `
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
    `;
}