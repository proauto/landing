export function initHeroSection() {
    // Only run on index page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (currentPage !== 'index.html' && currentPage !== '') return;
    
    const heroElements = {
        logoImage: document.querySelector('.logo-image'),
        logo: document.querySelector('.logo'),
        mainCopy: document.querySelector('.main-copy'),
        subCopy: document.querySelector('.sub-copy')
    };
    
    // Initialize hero animations
    initHeroAnimations(heroElements);
    
    // Setup smooth scroll for anchor links
    setupSmoothScroll();
}

function initHeroAnimations({ logoImage, logo, mainCopy, subCopy }) {
    // Logo image animation
    if (logoImage) {
        logoImage.style.cssText = `
            opacity: 0;
            transform: translateY(-20px);
            transition: opacity 1s ease, transform 1s ease;
        `;
        
        setTimeout(() => {
            logoImage.style.opacity = '1';
            logoImage.style.transform = 'translateY(0)';
        }, 200);
    }
    
    // Logo text animation (Pre and VIT separately)
    if (logo) {
        const logoPre = logo.querySelector('.logo-pre');
        const logoVit = logo.querySelector('.logo-vit');
        
        if (logoPre) {
            logoPre.style.cssText = `
                opacity: 0;
                transform: translateX(-20px);
                transition: opacity 1s ease, transform 1s ease;
            `;
            
            setTimeout(() => {
                logoPre.style.opacity = '1';
                logoPre.style.transform = 'translateX(0)';
            }, 400);
        }
        
        if (logoVit) {
            logoVit.style.cssText = `
                opacity: 0;
                transform: translateX(20px);
                transition: opacity 1s ease, transform 1s ease;
            `;
            
            setTimeout(() => {
                logoVit.style.opacity = '1';
                logoVit.style.transform = 'translateX(0)';
            }, 500);
        }
    }
    
    // Main copy animation
    if (mainCopy) {
        mainCopy.style.cssText = `
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 1s ease, transform 1s ease;
        `;
        
        setTimeout(() => {
            mainCopy.style.opacity = '1';
            mainCopy.style.transform = 'translateY(0)';
        }, 700);
    }
    
    // Sub copy animation
    if (subCopy) {
        subCopy.style.cssText = `
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 1s ease, transform 1s ease;
        `;
        
        setTimeout(() => {
            subCopy.style.opacity = '1';
            subCopy.style.transform = 'translateY(0)';
        }, 900);
    }
}

function setupSmoothScroll() {
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