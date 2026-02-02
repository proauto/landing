export function initNavigation() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const currentPage = currentPath.replace('.html', '');
    
    const navItems = document.querySelectorAll('.nav-item');
    const navIndicator = document.querySelector('.nav-indicator');
    const mainHeader = document.querySelector('.main-header');
    
    if (!navIndicator || !mainHeader) return;
    
    // Mark current page and set initial indicator position
    function setCurrentPage() {
        navItems.forEach(item => {
            const itemPage = item.getAttribute('data-page');
            if (itemPage === currentPage || (currentPage === 'index' && !itemPage)) {
                item.classList.add('current-page');
            } else {
                item.classList.remove('current-page');
            }
        });
        
        positionIndicator();
    }
    
    // Position indicator under current or hovered item
    function positionIndicator(targetItem) {
        const item = targetItem || document.querySelector('.nav-item.current-page');
        if (item && navIndicator) {
            const rect = item.getBoundingClientRect();
            const headerRect = mainHeader.getBoundingClientRect();
            const leftPosition = rect.left - headerRect.left;
            navIndicator.style.left = `${leftPosition}px`;
            navIndicator.style.width = `${rect.width}px`;
            navIndicator.classList.add('active');
        } else if (!item) {
            navIndicator.classList.remove('active');
        }
    }
    
    // Initialize
    setCurrentPage();
    
    // Handle window resize
    window.addEventListener('resize', () => positionIndicator());
    
    // Handle hover effects
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            positionIndicator(this);
        });
    });
    
    // Return to current page indicator when mouse leaves header
    mainHeader.addEventListener('mouseleave', function() {
        positionIndicator();
    });
    
    // Handle navigation clicks - only for items without data-path (legacy support)
    navItems.forEach(item => {
        // Skip items that have data-path attribute (handled by router)
        if (item.hasAttribute('data-path')) {
            return;
        }
        
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            // Visual feedback before navigation
            this.classList.add('clicked');
            setTimeout(() => {
                window.location.href = href;
            }, 150);
        });
    });
}