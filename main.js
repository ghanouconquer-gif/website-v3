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

    // --- GA4 Conversion Event Tracking ---

    // EVENT 1: CTA button clicks
    document.querySelectorAll('a[href="/contact/"]').forEach(btn => {
        btn.addEventListener('click', function () {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'cta_click',
                cta_text: this.innerText.trim(),
                cta_location: document.title
            });
        });
    });

    // EVENT 3: Scroll depth on homepage
    if (window.location.pathname === '/') {
        let depths = [25, 50, 75, 90];
        let fired = {};
        window.addEventListener('scroll', function () {
            let scrollPct = Math.round(
                (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
            );
            depths.forEach(function (d) {
                if (scrollPct >= d && !fired[d]) {
                    fired[d] = true;
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                        event: 'scroll_depth',
                        depth: d + '%',
                        page: 'homepage'
                    });
                }
            });
        });
    }
});
