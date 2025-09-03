// Enhanced smooth scrolling and urban transitions
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll animation observer
    const observerOptions = {
        threshold: 0.1,
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

    // Enhanced mobile navigation with smooth transitions
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Add stagger animation to nav items
        if (navMenu.classList.contains('active')) {
            navLinks.forEach((link, index) => {
                link.style.animationDelay = `${index * 0.1}s`;
            });
        }
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Enhanced back to top button with smooth scroll
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
        
        // Add scrolled class to header for enhanced styling
        const header = document.querySelector('.main-header');
        if (window.pageYOffset > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
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
            placeholder.className = 'urban-art-container urban-art-placeholder animate-on-scroll';
            placeholder.innerHTML = `
                <div class="urban-art-overlay">${title}</div>
                <div style="padding: 2rem; text-align: center;">
                    <p>Urban Art Space</p>
                    <small>${title}</small>
                </div>
            `;
            gallery.appendChild(placeholder);
            observer.observe(placeholder);
        });
    }

    // Enhanced button hover effects
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Service card enhanced interactions
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            
            // Add subtle rotation to icon
            const icon = this.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(10deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            
            const icon = this.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Enhanced text glow animation
    function addTextGlowEffect() {
        const titles = document.querySelectorAll('h1, h2');
        titles.forEach(title => {
            title.addEventListener('mouseenter', function() {
                this.style.textShadow = '0 0 50px rgba(255, 107, 53, 0.8), 0 0 70px rgba(0, 212, 255, 0.3)';
            });
            
            title.addEventListener('mouseleave', function() {
                this.style.textShadow = '0 0 30px rgba(255, 107, 53, 0.5)';
            });
        });
    }

    // Initialize urban art gallery
    createUrbanArtPlaceholders();
    
    // Initialize text glow effects
    addTextGlowEffect();

    // Smooth page transitions
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Enhanced cursor effects for interactive elements
    document.querySelectorAll('.btn, .service-card, .feature-item, .nav-link').forEach(element => {
        element.addEventListener('mouseenter', function() {
            document.body.style.cursor = 'pointer';
        });
        
        element.addEventListener('mouseleave', function() {
            document.body.style.cursor = 'default';
        });
    });
});