// Import existing components for compatibility
import { initNavigation } from './components/navigation.js';
import { initAnimations } from './components/animations.js';
import { initContactForm } from './components/contact-form.js';
import { initHeroSection } from './components/hero.js';

// Import page components
import { HomeComponent } from './components/home.js';
import { BrandComponent } from './components/brand.js';
import { ProductComponent } from './components/product.js';

// Router will be initialized after DOM is ready
let router;

// Main application initialization
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded, initializing SPA');

    // Import and initialize router after DOM is ready
    import('./router.js').then(({ default: Router }) => {
        router = new Router();

        // Register routes
        router.addRoute('/', HomeComponent);
        router.addRoute('/brand', BrandComponent);
        router.addRoute('/product', ProductComponent);

        console.log('Routes registered:', Array.from(router.routes.keys()));

        // Now initialize the router after routes are registered
        router.init();

        // Make router globally accessible
        window.router = router;
    });

    // Initialize existing components
    initNavigation();
    initAnimations();
    initContactForm();
    initHeroSection();

    // Page load animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    console.log('PreVIT SPA loaded successfully');
});