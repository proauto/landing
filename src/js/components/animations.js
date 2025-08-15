export function initAnimations() {
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
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, delay);
                
                animationObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Setup page-specific animations
    setupPageAnimations(animationObserver);
}

function setupPageAnimations(observer) {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    if (currentPage === 'brand.html') {
        setupBrandAnimations(observer);
    } else if (currentPage === 'index.html' || currentPage === '') {
        setupIndexAnimations(observer);
    }
    
    // Footer animation (all pages)
    const footerContent = document.querySelector('.footer-content');
    if (footerContent) {
        footerContent.classList.add('animate-fade-in');
        footerContent.setAttribute('data-delay', '100');
        observer.observe(footerContent);
    }
}

function setupBrandAnimations(observer) {
    const elements = [
        { selector: '.brand-title', delay: 100 },
        { selector: '.brand-subtitle', delay: 200 },
        { selector: '.brand-divider', delay: 600 },
        { selector: '.brand-question', delay: 700 },
        { selector: '.work-title', delay: 100 },
        { selector: '.work-cards-container', delay: 200 }
    ];
    
    elements.forEach(({ selector, delay }) => {
        const element = document.querySelector(selector);
        if (element) {
            element.classList.add('animate-fade-in');
            element.setAttribute('data-delay', delay.toString());
            observer.observe(element);
        }
    });
    
    // Brand circles with staggered animation
    const brandCircles = document.querySelectorAll('.brand-circle');
    brandCircles.forEach((circle, index) => {
        circle.classList.add('animate-fade-in');
        circle.setAttribute('data-delay', (300 + index * 100).toString());
        observer.observe(circle);
    });
}

function setupIndexAnimations(observer) {
    // Service intro elements
    const serviceElements = [
        { selector: '.middle-image', delay: 100 },
        { selector: '.service-main-text', delay: 200 },
        { selector: '.service-description-text', delay: 300 }
    ];
    
    serviceElements.forEach(({ selector, delay }) => {
        const element = document.querySelector(selector);
        if (element) {
            element.classList.add('animate-fade-in');
            element.setAttribute('data-delay', delay.toString());
            observer.observe(element);
        }
    });
    
    // Work cards
    const workCards = document.querySelectorAll('.work-card');
    workCards.forEach((card, index) => {
        card.classList.add('animate-fade-in-up');
        card.setAttribute('data-delay', (100 + index * 150).toString());
        observer.observe(card);
    });
    
    // Mission content
    const missionContent = document.querySelector('.mission-content');
    if (missionContent) {
        missionContent.classList.add('animate-fade-in-up');
        missionContent.setAttribute('data-delay', '100');
        observer.observe(missionContent);
    }
    
    // Team members
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach((member, index) => {
        member.classList.add('animate-fade-in-up');
        member.setAttribute('data-delay', (100 + index * 200).toString());
        observer.observe(member);
    });
    
    // Contact form
    const contactContent = document.querySelector('.contact-content');
    if (contactContent) {
        contactContent.classList.add('animate-fade-in-up');
        contactContent.setAttribute('data-delay', '100');
        observer.observe(contactContent);
    }
}