// Shared animation functionality for all pages
document.addEventListener('DOMContentLoaded', function() {
    
    // Add animation keyframes if not already added
    if (!document.querySelector('#animation-keyframes')) {
        const style = document.createElement('style');
        style.id = 'animation-keyframes';
        style.textContent = `
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
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
            
            .animate-fade-in-up {
                opacity: 0;
                transition: opacity 0.8s ease, transform 0.8s ease;
            }
            
            .animate-fade-in-up.animated {
                opacity: 1;
            }
            
            .animate-fade-in-up:not(.no-translate) {
                transform: translateY(40px);
            }
            
            .animate-fade-in-up.animated:not(.no-translate) {
                transform: translateY(0);
            }
            
            .animate-fade-in {
                opacity: 0;
                transition: opacity 0.8s ease;
            }
            
            .animate-fade-in.animated {
                opacity: 1;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Setup Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const animationObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add delay based on data-delay attribute if present
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, delay);
                
                // Unobserve after animation to prevent re-triggering
                animationObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Function to setup animations for specific page elements
    function setupPageAnimations() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        if (currentPage === 'brand.html') {
            // BRAND page animations
            // First section elements - these are absolutely positioned so only fade
            const brandTitle = document.querySelector('.brand-title');
            const brandSubtitle = document.querySelector('.brand-subtitle');
            const brandCircles = document.querySelectorAll('.brand-circle');
            const brandDivider = document.querySelector('.brand-divider');
            const brandQuestion = document.querySelector('.brand-question');
            
            // Add animation classes - use fade only for absolute positioned elements
            if (brandTitle) {
                brandTitle.classList.add('animate-fade-in');
                brandTitle.setAttribute('data-delay', '100');
                animationObserver.observe(brandTitle);
            }
            
            if (brandSubtitle) {
                brandSubtitle.classList.add('animate-fade-in');
                brandSubtitle.setAttribute('data-delay', '200');
                animationObserver.observe(brandSubtitle);
            }
            
            brandCircles.forEach((circle, index) => {
                circle.classList.add('animate-fade-in');
                circle.setAttribute('data-delay', String(300 + index * 100));
                animationObserver.observe(circle);
            });
            
            if (brandDivider) {
                brandDivider.classList.add('animate-fade-in');
                brandDivider.setAttribute('data-delay', '600');
                animationObserver.observe(brandDivider);
            }
            
            if (brandQuestion) {
                brandQuestion.classList.add('animate-fade-in');
                brandQuestion.setAttribute('data-delay', '700');
                animationObserver.observe(brandQuestion);
            }
            
            // Second section elements - all absolute positioned
            const workTitle = document.querySelector('.work-title');
            const workCardsContainer = document.querySelector('.work-cards-container');
            
            if (workTitle) {
                workTitle.classList.add('animate-fade-in');
                workTitle.setAttribute('data-delay', '100');
                animationObserver.observe(workTitle);
            }
            
            if (workCardsContainer) {
                workCardsContainer.classList.add('animate-fade-in');
                workCardsContainer.setAttribute('data-delay', '200');
                animationObserver.observe(workCardsContainer);
            }
            
        } else if (currentPage === 'product.html') {
            // PRODUCT page - no animations
            
        } else if (currentPage === 'index.html' || currentPage === '') {
            // INDEX page animations (existing animations)
            // Service intro elements - these are absolutely positioned so no translate
            const middleImage = document.querySelector('.middle-image');
            const serviceMainText = document.querySelector('.service-main-text');
            const serviceDescText = document.querySelector('.service-description-text');
            
            if (middleImage) {
                middleImage.classList.add('animate-fade-in');
                middleImage.setAttribute('data-delay', '100');
                animationObserver.observe(middleImage);
            }
            
            if (serviceMainText) {
                serviceMainText.classList.add('animate-fade-in');
                serviceMainText.setAttribute('data-delay', '200');
                animationObserver.observe(serviceMainText);
            }
            
            if (serviceDescText) {
                serviceDescText.classList.add('animate-fade-in');
                serviceDescText.setAttribute('data-delay', '300');
                animationObserver.observe(serviceDescText);
            }
            
            // Work cards
            const workCards = document.querySelectorAll('.work-card');
            workCards.forEach((card, index) => {
                card.classList.add('animate-fade-in-up');
                card.setAttribute('data-delay', String(100 + index * 150));
                animationObserver.observe(card);
            });
            
            // Mission content
            const missionContent = document.querySelector('.mission-content');
            if (missionContent) {
                missionContent.classList.add('animate-fade-in-up');
                missionContent.setAttribute('data-delay', '100');
                animationObserver.observe(missionContent);
            }
            
            // Team members
            const teamMembers = document.querySelectorAll('.team-member');
            teamMembers.forEach((member, index) => {
                member.classList.add('animate-fade-in-up');
                member.setAttribute('data-delay', String(100 + index * 200));
                animationObserver.observe(member);
            });
            
            // Contact form
            const contactContent = document.querySelector('.contact-content');
            if (contactContent) {
                contactContent.classList.add('animate-fade-in-up');
                contactContent.setAttribute('data-delay', '100');
                animationObserver.observe(contactContent);
            }
        }
        
        // Footer animation (all pages)
        const footerContent = document.querySelector('.footer-content');
        if (footerContent) {
            footerContent.classList.add('animate-fade-in');
            footerContent.setAttribute('data-delay', '100');
            animationObserver.observe(footerContent);
        }
    }
    
    // Initial page load animation
    function initPageLoadAnimation() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    }
    
    // Initialize animations
    initPageLoadAnimation();
    setupPageAnimations();
});