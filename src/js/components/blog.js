// Blog page component
export function BlogComponent() {
    return `
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
    `;
}