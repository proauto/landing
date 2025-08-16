// SPA Router for PreVIT
class Router {
    constructor() {
        this.routes = new Map();
        this.currentRoute = null;
        this.initialized = false;
        
        // Detect base path for GitHub Pages deployment
        this.basePath = this.getBasePath();
    }
    
    getBasePath() {
        // Check if deployed on GitHub Pages with subdirectory
        const path = window.location.pathname;
        if (path.includes('/landing/')) {
            return '/landing';
        }
        return '';
    }
    
    normalizePathForRouting(fullPath) {
        // Remove base path for internal routing
        if (this.basePath && fullPath.startsWith(this.basePath)) {
            fullPath = fullPath.substring(this.basePath.length);
        }
        
        // Ensure path starts with /
        if (!fullPath.startsWith('/')) {
            fullPath = '/' + fullPath;
        }
        
        // Handle empty path as home
        if (fullPath === '/') {
            return '/';
        }
        
        return fullPath;
    }
    
    getFullPath(routePath) {
        // Add base path for browser navigation
        return this.basePath + routePath;
    }

    init() {
        if (this.initialized) return;
        
        console.log('Router initialized with', this.routes.size, 'routes');
        
        // Handle browser back/forward buttons
        window.addEventListener('popstate', (e) => {
            const normalizedPath = this.normalizePathForRouting(window.location.pathname);
            this.handleRoute(normalizedPath);
        });

        // Handle initial page load
        const currentPath = this.normalizePathForRouting(window.location.pathname);
        console.log('Initial route:', window.location.pathname, '-> normalized:', currentPath);
        this.handleRoute(currentPath);
        
        this.initialized = true;
    }

    addRoute(path, component) {
        this.routes.set(path, component);
    }

    navigate(path) {
        console.log('Navigating to:', path, 'from:', this.currentRoute);
        
        // Always allow navigation to home route, even if already on home
        // This ensures logo clicks always work
        if (this.currentRoute !== path || path === '/') {
            const fullPath = this.getFullPath(path);
            history.pushState(null, '', fullPath);
            this.handleRoute(path);
        } else if (path === '/') {
            // Force refresh home page content even if already on home
            this.handleRoute(path);
        }
    }

    handleRoute(path) {
        console.log('Handling route:', path);
        
        // Handle root path
        if (path === '/') {
            let component = this.routes.get('/');
            if (component) {
                this.currentRoute = '/';
                this.renderComponent(component, this.currentRoute);
                this.updateNavigation(this.currentRoute);
                return;
            }
        }
        
        // Check if route exists
        let component = this.routes.get(path);
        
        // If no component found, try fallback to home
        if (!component) {
            console.log('Route not found:', path, 'Available routes:', Array.from(this.routes.keys()));
            component = this.routes.get('/');
            if (component) {
                this.currentRoute = '/';
                const fullPath = this.getFullPath('/');
                history.replaceState(null, '', fullPath);
            }
        } else {
            this.currentRoute = path;
        }
        
        if (component) {
            this.renderComponent(component, this.currentRoute);
            this.updateNavigation(this.currentRoute);
        } else {
            console.error('No home route found! Available routes:', Array.from(this.routes.keys()));
        }
    }

    renderComponent(component, path) {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.innerHTML = component();
            
            // Execute component-specific scripts
            this.executeComponentScripts(path);
            
            // Update page metadata
            this.updatePageMetadata(path);
        }
    }

    updateNavigation(path) {
        // Update navigation active state
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.classList.remove('current-page');
            
            const itemPath = item.getAttribute('data-path');
            if (itemPath === path || (path === '/' && itemPath === '/')) {
                item.classList.add('current-page');
            }
        });
    }

    updatePageMetadata(path) {
        const metadata = {
            '/': {
                title: 'PreVIT - 아이디어를 서비스로',
                description: '아이디어로만 끝났던 일, 프레빗이 서비스로 만듭니다. 작고 사소하지만 꼭 필요했던 생각을 우리는 AI로 빠르게 구현합니다.',
                ogUrl: 'https://previtlab.com'
            },
            '/brand': {
                title: 'BRAND - PreVIT',
                description: 'PreVIT LAB - Prepare Your Vision with IT',
                ogUrl: 'https://previtlab.com/brand'
            },
            '/product': {
                title: 'PRODUCT - PreVIT',
                description: 'PreVIT의 제품 및 서비스',
                ogUrl: 'https://previtlab.com/product'
            },
            '/blog': {
                title: 'BLOG - PreVIT',
                description: 'PreVIT의 블로그 - 운전, 임신출산 관련 유용한 정보와 팁',
                ogUrl: 'https://previtlab.com/blog'
            }
        };

        const meta = metadata[path] || metadata['/'];
        
        // Update document title
        document.title = meta.title;
        
        // Update meta tags
        this.updateMetaTag('description', meta.description);
        this.updateMetaTag('og:title', meta.title, 'property');
        this.updateMetaTag('og:description', meta.description, 'property');
        this.updateMetaTag('og:url', meta.ogUrl, 'property');
        this.updateMetaTag('twitter:title', meta.title);
        this.updateMetaTag('twitter:description', meta.description);
    }

    updateMetaTag(name, content, attribute = 'name') {
        let meta = document.querySelector(`meta[${attribute}="${name}"]`);
        if (meta) {
            meta.setAttribute('content', content);
        }
    }

    executeComponentScripts(path) {
        // Execute specific scripts for each component
        switch (path) {
            case '/blog':
                this.initBlogScripts();
                break;
            case '/':
                this.initHomeScripts();
                break;
        }
    }

    initBlogScripts() {
        // Blog search functionality
        const searchInput = document.getElementById('blogSearch');
        const categoryBtns = document.querySelectorAll('.category-btn');
        const blogPosts = document.querySelectorAll('.blog-post');
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        
        if (!searchInput) return;
        
        let currentCategory = 'all';
        let searchTerm = '';
        
        // Search functionality
        searchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value.toLowerCase();
            this.filterPosts(blogPosts, currentCategory, searchTerm);
        });
        
        // Category filtering
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                categoryBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                currentCategory = e.target.dataset.category;
                this.filterPosts(blogPosts, currentCategory, searchTerm);
            });
        });
        
        // Load more functionality
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                alert('더 많은 글을 불러오는 기능은 추후 구현 예정입니다.');
            });
        }
    }

    filterPosts(blogPosts, currentCategory, searchTerm) {
        blogPosts.forEach(post => {
            const category = post.dataset.category;
            const title = post.querySelector('.post-title')?.textContent.toLowerCase() || '';
            const excerpt = post.querySelector('.post-excerpt')?.textContent.toLowerCase() || '';
            
            const matchesCategory = currentCategory === 'all' || category === currentCategory;
            const matchesSearch = searchTerm === '' || 
                title.includes(searchTerm) || 
                excerpt.includes(searchTerm);
            
            if (matchesCategory && matchesSearch) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    }

    initHomeScripts() {
        // Contact form functionality can be added here
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            // Contact form scripts would go here
        }
    }
}

// Handle navigation clicks
document.addEventListener('click', (e) => {
    // Handle elements with data-path attribute (logo, nav items)
    if (e.target.matches('a[data-path]') || e.target.closest('a[data-path]')) {
        e.preventDefault();
        e.stopPropagation();
        
        const targetElement = e.target.matches('a[data-path]') ? e.target : e.target.closest('a[data-path]');
        const path = targetElement.getAttribute('data-path');
        
        console.log('Click detected on element with data-path:', path);
        
        if (window.router && path) {
            window.router.navigate(path);
        }
    }
});

export default Router;