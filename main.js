import './style.css'
import { headerHTML } from './src/components/header.js'
import { footerHTML } from './src/components/footer.js'

document.addEventListener('DOMContentLoaded', () => {
    // Inject Header
    const headerContainer = document.getElementById('global-nav');
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
    }

    // Inject Footer
    const footerContainer = document.getElementById('global-footer');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }

    // Highlight Active Link
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        // Exact match or active sub-route
        if (link.getAttribute('href') === currentPath ||
            (currentPath !== '/' && link.getAttribute('href').startsWith(currentPath))) {
            link.classList.add('text-brand-blue');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && closeMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('flex');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });

        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
            document.body.style.overflow = '';
        });
    }
});
