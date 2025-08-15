import { initNavigation } from './components/navigation.js';
import { initAnimations } from './components/animations.js';
import { initContactForm } from './components/contact-form.js';
import { initHeroSection } from './components/hero.js';

// Main application initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
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
});