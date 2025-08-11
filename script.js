// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll animation for elements coming into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    // Create intersection observer for animations
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Initialize animations for elements
    function initAnimations() {
        // Animations are now handled by animations.js
        // This function is kept for compatibility
    }

    // Hero section animation
    function initHeroAnimation() {
        const heroContent = document.querySelector('.hero-content');
        const logo = document.querySelector('.logo');
        const mainCopy = document.querySelector('.main-copy');
        const subCopy = document.querySelector('.sub-copy');

        // Check if elements exist before accessing their style properties
        if (logo) {
            // Initial state
            logo.style.opacity = '0';
            logo.style.transform = 'translateX(-50%) translateY(-30px)';
            
            // Animate elements with delays
            setTimeout(() => {
                logo.style.transition = 'opacity 1s ease, transform 1s ease';
                logo.style.opacity = '1';
                logo.style.transform = 'translateX(-50%) translateY(0)';
            }, 300);
        }

        if (mainCopy) {
            mainCopy.style.opacity = '0';
            mainCopy.style.transform = 'translateX(-50%) translateY(30px)';
            
            setTimeout(() => {
                mainCopy.style.transition = 'opacity 1s ease, transform 1s ease';
                mainCopy.style.opacity = '1';
                mainCopy.style.transform = 'translateX(-50%) translateY(0)';
            }, 600);
        }

        if (subCopy) {
            subCopy.style.opacity = '0';
            subCopy.style.transform = 'translateX(-50%) translateY(30px)';
            
            setTimeout(() => {
                subCopy.style.transition = 'opacity 1s ease, transform 1s ease';
                subCopy.style.opacity = '1';
                subCopy.style.transform = 'translateX(-50%) translateY(0)';
            }, 900);
        }
    }

    // Floating animation for hero background pattern
    function initFloatingAnimation() {
        const bgPattern = document.querySelector('.hero-bg-pattern');
        if (bgPattern) {
            bgPattern.style.animation = 'float 6s ease-in-out infinite';
        }
    }

    // Add floating keyframes to CSS
    function addFloatingKeyframes() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% {
                    transform: translateY(0px) rotate(0deg);
                }
                50% {
                    transform: translateY(-10px) rotate(1deg);
                }
            }

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

            .work-card:hover .card-icon {
                animation: bounce 0.6s ease;
            }

            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% {
                    transform: translateY(0);
                }
                40% {
                    transform: translateY(-10px);
                }
                60% {
                    transform: translateY(-5px);
                }
            }

            .illustration-svg .person-1,
            .illustration-svg .person-2 {
                animation: subtleBob 3s ease-in-out infinite;
            }

            .illustration-svg .person-2 {
                animation-delay: -1.5s;
            }

            @keyframes subtleBob {
                0%, 100% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(-5px);
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Contact form functionality
    function initContactForm() {
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', async function(e) {
                e.preventDefault();
                
                // Get form inputs
                const inputs = this.querySelectorAll('input');
                const data = {};
                
                inputs.forEach(input => {
                    const placeholder = input.placeholder;
                    if (placeholder) {
                        data[placeholder] = input.value.trim();
                    }
                });
                
                // Map Korean placeholders to English keys
                const submitData = {
                    name: data['이름'] || '',
                    email: data['이메일'] || '',
                    company: data['회사명'] || '',
                    phone: data['연락처'] || '',
                    proposal: data['제안 사항'] || ''
                };
                
                // Enhanced validation
                if (!submitData.name || !submitData.email || !submitData.proposal) {
                    alert('이름, 이메일, 제안 사항은 필수 입력 항목입니다.');
                    return;
                }
                
                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(submitData.email)) {
                    alert('올바른 이메일 주소를 입력해주세요.');
                    return;
                }
                
                // Phone number validation (if provided)
                if (submitData.phone && submitData.phone.length > 0) {
                    const phoneRegex = /^[0-9-+\s()]+$/;
                    if (!phoneRegex.test(submitData.phone)) {
                        alert('올바른 연락처 형식을 입력해주세요.');
                        return;
                    }
                }
                
                // Show loading state
                const submitButton = this.querySelector('.submit-button');
                const originalText = submitButton.textContent;
                submitButton.textContent = '전송 중...';
                submitButton.disabled = true;
                
                try {
                    // Submit to Netlify Function
                    const response = await fetch('/.netlify/functions/submit-contact', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(submitData)
                    });
                    
                    const result = await response.json();
                    
                    if (response.ok && result.success) {
                        alert('제안이 성공적으로 전송되었습니다!\n\n빠른 시일 내에 연락드리겠습니다.');
                        this.reset();
                    } else {
                        throw new Error(result.error || 'Unknown error');
                    }
                    
                } catch (error) {
                    console.error('Form submission error:', error);
                    alert('전송 중 오류가 발생했습니다. 다시 시도해주세요.');
                } finally {
                    // Restore button state
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                }
            });

            // Add ripple effect to submit button
            const submitButton = document.querySelector('.submit-button');
            if (submitButton) {
                submitButton.addEventListener('click', function(e) {
                    const ripple = document.createElement('span');
                    const rect = this.getBoundingClientRect();
                    const size = Math.max(rect.width, rect.height);
                    const x = e.clientX - rect.left - size / 2;
                    const y = e.clientY - rect.top - size / 2;
                    
                    ripple.style.width = ripple.style.height = size + 'px';
                    ripple.style.left = x + 'px';
                    ripple.style.top = y + 'px';
                    ripple.style.position = 'absolute';
                    ripple.style.borderRadius = '50%';
                    ripple.style.background = 'rgba(0, 0, 0, 0.1)';
                    ripple.style.transform = 'scale(0)';
                    ripple.style.animation = 'ripple 0.6s linear';
                    ripple.style.pointerEvents = 'none';
                    
                    this.style.position = 'relative';
                    this.style.overflow = 'hidden';
                    this.appendChild(ripple);
                    
                    setTimeout(() => {
                        ripple.remove();
                    }, 600);
                });
            }
        }
    }

    // Add ripple animation keyframes
    function addRippleKeyframes() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Parallax effect for hero section
    function initParallaxEffect() {
        // Disabled to prevent transform conflicts with center alignment
        // Parallax can interfere with absolute positioning
    }

    // Smooth scroll for anchor links (if any are added later)
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Navigation functionality
    function initNavigation() {
        // Navigation is now handled in common.js
        // This function is kept for compatibility but functionality moved to common.js
    }

    // Initialize all animations and interactions
    addFloatingKeyframes();
    addRippleKeyframes();
    initHeroAnimation();
    initFloatingAnimation();
    initAnimations();
    initContactForm();
    initParallaxEffect();
    initSmoothScroll();
    initNavigation();

    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});