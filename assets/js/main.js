// Enhanced smooth scrolling with stripe transitions
document.addEventListener('DOMContentLoaded', function() {
    
    // Create stripe transition element
    const stripeTransition = document.createElement('div');
    stripeTransition.className = 'stripe-transition';
    document.body.appendChild(stripeTransition);

    // Stripe transition function
    function triggerStripeTransition(callback) {
        stripeTransition.classList.add('active');
        setTimeout(() => {
            if (callback) callback();
            setTimeout(() => {
                stripeTransition.classList.remove('active');
            }, 400);
        }, 400);
    }

    // Smooth scroll animation observer
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Observe all animate-on-scroll elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Enhanced mobile navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Navigation with stripe transitions
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Only apply stripe transition for internal links
            if (href.startsWith('#') || href.includes('.html')) {
                e.preventDefault();
                
                triggerStripeTransition(() => {
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
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Enhanced back to top button
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
        
        // Add scrolled class to header
        const header = document.querySelector('.main-header');
        if (window.pageYOffset > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        triggerStripeTransition(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

    // Urban art gallery functionality
    function createUrbanArtPlaceholders() {
        const gallery = document.querySelector('.urban-gallery');
        if (!gallery) return;

        const placeholders = [
            'Street Art Mural',
            'Graffiti Design', 
            'Urban Photography',
            'City Landscape',
            'Industrial Art',
            'Modern Street Scene'
        ];

        placeholders.forEach(title => {
            const placeholder = document.createElement('div');
            placeholder.className = 'urban-art-placeholder animate-on-scroll gold-shine';
            placeholder.innerHTML = `
                <div style="text-align: center;">
                    <p style="margin: 0; font-size: 0.9rem;">${title}</p>
                </div>
            `;
            gallery.appendChild(placeholder);
            observer.observe(placeholder);
        });
    }

    // Enhanced button interactions
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Service card enhanced interactions
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });

    // Gold shine effect for elements
    document.querySelectorAll('.gold-shine').forEach(element => {
        element.addEventListener('mouseenter', function() {
            const shine = this.querySelector('::before');
            if (shine) {
                shine.style.left = '100%';
            }
        });
    });

    // Initialize urban art gallery
    createUrbanArtPlaceholders();

    // Smooth page load animation
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.3s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 50);
    });

    // Enhanced scroll animations with stagger
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((element, index) => {
        element.style.transitionDelay = `${index * 0.1}s`;
    });

    // Page transition for external links
    document.querySelectorAll('a[href$=".html"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            
            triggerStripeTransition(() => {
                window.location.href = href;
            });
        });
    });
});