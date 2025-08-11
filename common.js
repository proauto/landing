function renderHeader() {
    return `
    <header class="main-header">
        <div class="header-container">
            <a href="index.html" class="header-logo">
                <span class="logo-pre">Pre</span><span class="logo-vit">VIT</span>
            </a>
            <div class="header-nav-wrapper">
                <a href="brand.html" class="nav-item" data-page="brand">BRAND</a>
                <a href="product.html" class="nav-item" data-page="product">PRODUCT</a>
            </div>
        </div>
        <div class="nav-indicator"></div>
    </header>
    `;
}

function renderFooter() {
    return `
    <section id="footer" class="footer-section">
        <div class="container">
            <div class="footer-content">
                <p class="company-name">프레빗랩</p>
                <p class="ceo-info"><span class="bold-label">대표</span> 서민아</p>
                <p class="contact-info"><span class="bold-label">문의</span> previtlab@gmail.com</p>
            </div>
        </div>
    </section>
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    
    const navItems = document.querySelectorAll('.nav-item');
    const navIndicator = document.querySelector('.nav-indicator');
    const mainHeader = document.querySelector('.main-header');
    
    // Mark current page
    navItems.forEach(item => {
        if (item.getAttribute('data-page') === currentPage) {
            item.classList.add('current-page');
        }
    });
    
    // Position indicator under current page nav item
    function positionIndicator() {
        const currentNavItem = document.querySelector('.nav-item.current-page');
        if (currentNavItem && navIndicator) {
            const rect = currentNavItem.getBoundingClientRect();
            const headerRect = mainHeader.getBoundingClientRect();
            navIndicator.style.left = `${rect.left - headerRect.left}px`;
            navIndicator.style.width = `${rect.width}px`;
            navIndicator.classList.add('active');
        }
    }
    
    // Initial positioning
    positionIndicator();
    
    // Reposition on window resize
    window.addEventListener('resize', positionIndicator);
    
    // Handle hover effects
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const rect = this.getBoundingClientRect();
            const headerRect = mainHeader.getBoundingClientRect();
            navIndicator.style.left = `${rect.left - headerRect.left}px`;
            navIndicator.style.width = `${rect.width}px`;
        });
    });
    
    // Return to current page indicator position when mouse leaves header
    mainHeader.addEventListener('mouseleave', function() {
        positionIndicator();
    });
});