// SPA Router for PreVIT
export default class Router {
    constructor() {
        this.routes = new Map();
        this.currentRoute = null;
        this.initialized = false;
        this.setupClickListener();
    }

    init() {
        if (this.initialized) return;

        window.addEventListener('popstate', () => {
            this.handleRoute(window.location.pathname);
        });

        // Handle initial page load
        this.handleRoute(window.location.pathname);
        this.initialized = true;
    }

    addRoute(path, component) {
        this.routes.set(path, component);
    }

    navigate(path) {
        if (this.currentRoute !== path) {
            history.pushState(null, '', path);
            this.handleRoute(path);
        }
    }

    handleRoute(path) {
        // Simple normalization for static hosting
        let normalizedPath = path.replace(/\/index\.html$/, '/') || '/';
        if (normalizedPath !== '/' && normalizedPath.endsWith('/')) {
            normalizedPath = normalizedPath.slice(0, -1);
        }

        // Support sub-directory hosting (GitHub Pages)
        if (normalizedPath.includes('/landing')) {
            normalizedPath = normalizedPath.replace('/landing', '') || '/';
        }

        const component = this.routes.get(normalizedPath) || this.routes.get('/');

        if (component) {
            this.currentRoute = normalizedPath;
            this.renderComponent(component);
            this.updateNavigation(normalizedPath);
        }
    }

    renderComponent(component) {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.innerHTML = component();
            window.scrollTo(0, 0);
        } else {
            // If on a page without #main-content (e.g., direct brand.html load), 
            // but navigating back to home or other, we might need a fallback.
            // But for true SPA, every page should have the same structure.
            // Logic for hybrid MPA/SPA:
            console.warn('Main content container not found. This page might not support SPA rendering.');
        }
    }

    updateNavigation(path) {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.classList.remove('current-page');
            const itemPath = item.getAttribute('data-path');
            if (itemPath === path || (path === '/' && itemPath === '/')) {
                item.classList.add('current-page');
            }
        });
    }

    setupClickListener() {
        document.addEventListener('click', (e) => {
            let currentElement = e.target;

            // Walk up to find element with data-path
            while (currentElement && currentElement !== document) {
                if (currentElement.hasAttribute && currentElement.hasAttribute('data-path')) {
                    e.preventDefault();
                    const path = currentElement.getAttribute('data-path');
                    this.navigate(path);
                    return;
                }
                currentElement = currentElement.parentElement;
            }
        });
    }
}