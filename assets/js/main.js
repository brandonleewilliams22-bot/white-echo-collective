document.addEventListener('DOMContentLoaded', function () {

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // --- SCROLL-BASED FUNCTIONALITY ---
    const header = document.querySelector('.main-header');
    const scrollElements = document.querySelectorAll('.animate-on-scroll');
    const backToTopButton = document.getElementById('back-to-top');

    // Header scroll logic
    const handleHeaderScroll = () => {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    // Animation on scroll logic
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                el.classList.add('is-visible');
            }
        });
    };

    // Back to top button logic
    const handleBackToTop = () => {
        if (window.scrollY > 300) { // Show after 300px of scroll
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    };

    // Combined scroll handler for performance
    const handleScroll = () => {
        handleHeaderScroll();
        handleScrollAnimation();
        if (backToTopButton) {
            handleBackToTop();
        }
    };

    // Attach the single listener and run on load
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Click event for back-to-top button
    if (backToTopButton) {
        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});