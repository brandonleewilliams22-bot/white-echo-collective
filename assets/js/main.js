// Adobe-quality smooth transitions and interactions
document.addEventListener('DOMContentLoaded', function() {
    
    // Create smooth page transition element
    const pageTransition = document.createElement('div');
    pageTransition.className = 'page-transition';
    document.body.appendChild(pageTransition);

    // Smooth page transition function
    function triggerPageTransition(callback) {
        pageTransition.classList.add('active');
        setTimeout(() => {
            if (callback) callback();
            setTimeout(() => {
                pageTransition.classList.remove('active');
            }, 600);
        }, 400);
    }

    // Enhanced scroll animation observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, index * 100);
            }
        });
    }, observerOptions);

    // Observe all animate elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Enhanced mobile navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Smooth navigation with transitions
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Apply transition for internal navigation
            if (href.startsWith('#') || href.includes('.html')) {
                e.preventDefault();
                
                triggerPageTransition(() => {
                    if (href.startsWith('#')) {
                        const target = document.querySelector(href);
                        if (target) {
                            target.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    } else {
                        window.location.href = href;
                    }
                });
            }
            
            // Close mobile menu
            if (hamburger) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Enhanced scroll effects
    let ticking = false;
    
    function updateScrollEffects() {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('.main-header');
        const backToTop = document.getElementById('back-to-top');
        
        // Header scroll effect
        if (header) {
            if (scrolled > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
        
        // Back to top button
        if (backToTop) {
            if (scrolled > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
        
        // Parallax effect for hero
        const hero = document.querySelector('.hero');
        if (hero && scrolled < window.innerHeight) {
            const rate = scrolled * 0.3;
            hero.style.transform = `translateY(${rate}px)`;
        }
        
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    });

    // Back to top functionality
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            triggerPageTransition(() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });
    }

    // Enhanced button interactions
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Card hover effects
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.card-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.card-icon');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });

    // Image container effects
    document.querySelectorAll('.image-container').forEach(container => {
        container.addEventListener('mouseenter', function() {
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1.05)';
            }
        });
        
        container.addEventListener('mouseleave', function() {
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });
    });

    // Gold texture shine effect
    document.querySelectorAll('.gold-texture').forEach(element => {
        let shineTimeout;
        
        element.addEventListener('mouseenter', function() {
            clearTimeout(shineTimeout);
            const after = window.getComputedStyle(this, '::after');
            this.style.setProperty('--shine-left', '100%');
        });
        
        element.addEventListener('mouseleave', function() {
            shineTimeout = setTimeout(() => {
                this.style.setProperty('--shine-left', '-100%');
            }, 200);
        });
    });

    // Smooth page load
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.6s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Enhanced form interactions (for contact page)
    document.querySelectorAll('input, textarea, select').forEach(field => {
        field.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        field.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });

    // Stagger animations for grids
    document.querySelectorAll('.grid-3 > *, .grid-4 > *').forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });

    // Smooth external link transitions
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        if (!link.hasAttribute('target')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                
                triggerPageTransition(() => {
                    window.open(href, '_blank');
                });
            });
        }
    });

    // Initialize lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});