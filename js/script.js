// Dumka Personal AI Journal Landing Page

document.addEventListener('DOMContentLoaded', function() {
    // App Store link configuration
    const appStoreLink = document.getElementById('appStoreLink');
    
    // Set the actual App Store URL when available
    const APP_STORE_URL = 'https://apps.apple.com/app/dumka-personal-ai-journal/id123456789';
    
    if (appStoreLink) {
        appStoreLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Uncomment when you have the actual App Store link
            // window.open(APP_STORE_URL, '_blank');
            
            // Show interest capture instead of alert
            showInterestModal();
        });
    }
    
    // Interest capture modal
    function showInterestModal() {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        `;
        
        modal.innerHTML = `
            <div style="background: white; padding: 2rem; border-radius: 16px; max-width: 400px; text-align: center;">
                <h3 style="color: #1f2937; margin-bottom: 1rem;">Dumka Coming Soon!</h3>
                <p style="color: #6b7280; margin-bottom: 1.5rem;">Your Personal AI Journal is launching soon. Be the first to know!</p>
                <input type="email" placeholder="Enter your email" style="width: 100%; padding: 12px; border: 1px solid #d1d5db; border-radius: 8px; margin-bottom: 1rem;">
                <div style="display: flex; gap: 1rem;">
                    <button onclick="this.closest('[style*=fixed]').remove()" style="flex: 1; padding: 12px; background: #f3f4f6; border: none; border-radius: 8px; cursor: pointer;">Maybe Later</button>
                    <button onclick="alert('Thanks for your interest! We\'ll notify you soon.'); this.closest('[style*=fixed]').remove()" style="flex: 1; padding: 12px; background: #fbbf24; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">Notify Me</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Mobile menu toggle (if needed in future)
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('nav-open');
        });
    }
    
    // No header scroll effects needed since header is removed
    
    // Animation on scroll with Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe feature cards for scroll-triggered animation
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        observer.observe(card);
    });
    
    // Add smooth parallax effect to hero section on scroll
    let ticking = false;
    function updateParallax() {
        const scrolled = window.scrollY;
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero .container');
        
        if (hero && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
});