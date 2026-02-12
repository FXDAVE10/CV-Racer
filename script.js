/**
 * Racing CV Animated - JavaScript
 * Handles scroll animations, interactive effects, and dynamic interactions
 */

// ============================================
// SCROLL ANIMATION OBSERVER
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all scroll-animate elements
document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// PARALLAX EFFECT FOR HERO SECTION
// ============================================

const heroSection = document.querySelector('.hero-section');
const heroGlows = document.querySelectorAll('.hero-glow');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    if (scrollY < window.innerHeight) {
        heroGlows.forEach((glow, index) => {
            const speed = 0.5 + (index * 0.1);
            glow.style.transform = `translateY(${scrollY * speed}px)`;
        });
    }
});

// ============================================
// MOUSE TRACKING FOR HERO IMAGE
// ============================================
/*
const heroImageFrame = document.querySelector('.hero-image-frame');

if (heroImageFrame) {
    document.addEventListener('mousemove', (e) => {
        const rect = heroImageFrame.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const angleX = (e.clientY - centerY) * 0.05;
        const angleY = (e.clientX - centerX) * 0.05;
        
        heroImageFrame.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
    
    document.addEventListener('mouseleave', () => {
        heroImageFrame.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
}
*/
// ============================================
// SKILL BARS ANIMATION ON SCROLL
// ============================================

const skillBars = document.querySelectorAll('.skill-fill');
let skillsAnimated = false;

const skillsSection = document.querySelector('.skills-section');

if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !skillsAnimated) {
                skillBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });
                skillsAnimated = true;
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    skillsObserver.observe(skillsSection);
}

// ============================================
// ACHIEVEMENT CARDS STAGGER ANIMATION
// ============================================

const achievementCards = document.querySelectorAll('.achievement-card');

achievementCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    card.style.transition = 'all 0.6s ease-out';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    cardObserver.observe(card);
});

// ============================================
// EXPERIENCE ITEMS ANIMATION
// ============================================

const experienceItems = document.querySelectorAll('.experience-item');

experienceItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    
    const itemObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    item.style.transition = 'all 0.6s ease-out';
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, index * 150);
                itemObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    itemObserver.observe(item);
});

// ============================================
// CONTACT ITEM HOVER EFFECT
// ============================================

const contactItems = document.querySelectorAll('.contact-item');

contactItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(8px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// ============================================
// SOCIAL LINK RIPPLE EFFECT
// ============================================

const socialLinks = document.querySelectorAll('.social-link');

socialLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// ============================================
// ACTIVE SECTION TRACKING
// ============================================

const sections = document.querySelectorAll('section');
let currentSection = 0;

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY + window.innerHeight / 2;
    
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = index;
        }
    });
});

// ============================================
// LAZY LOAD IMAGES
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Debounce scroll events
let ticking = false;

function updateOnScroll() {
    // Update animations based on scroll position
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateOnScroll);
        ticking = true;
    }
});

// ============================================
// MOBILE MENU TOGGLE (if needed)
// ============================================

// Add mobile-specific optimizations
if (window.innerWidth <= 768) {
    // Reduce animation complexity on mobile
    document.documentElement.style.setProperty('--animation-duration', '0.3s');
}

// ============================================
// ACCESSIBILITY IMPROVEMENTS
// ============================================

// Respect prefers-reduced-motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    document.querySelectorAll('[style*="animation"]').forEach(el => {
        el.style.animation = 'none';
    });
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Racing CV Animated - Initialized');
    
    // Add scroll-animate class to elements that should animate
    const elementsToAnimate = document.querySelectorAll(
        '.experience-item, .achievement-card, .skill-item'
    );
    
    elementsToAnimate.forEach(el => {
        if (!el.classList.contains('scroll-animate')) {
            el.classList.add('scroll-animate');
        }
    });
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Throttle function for performance-critical operations
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Debounce function for delayed operations
 */
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// ============================================
// EXPORT FOR EXTERNAL USE
// ============================================

window.RacingCV = {
    isInViewport,
    throttle,
    debounce
};
